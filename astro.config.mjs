// @ts-check
import { readFileSync, readdirSync } from 'node:fs';
import { satteri } from '@astrojs/markdown-satteri';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';
import { readFrontmatter } from './scripts/frontmatter.mjs';

const SITE = 'https://mihaisplace.com';

// Published but not linked or indexed yet (see src/lib/site.ts).
const HIDDEN_PAGES = /\/(testimonials|timelapse|ai-app-rescue\/thanks)\/?$/;

// Sitemap last-modified dates: each published post's updated (or publish) date, and the newest
// of those for the blog page. Other pages have no reliable date, so they get none.
function blogLastModified() {
  const blogDir = new URL('./src/content/blog/', import.meta.url);
  const dates = new Map();
  for (const slug of readdirSync(blogDir)) {
    let markdown;
    try {
      markdown = readFileSync(new URL(`${slug}/index.md`, blogDir), 'utf8');
    } catch {
      continue;
    }
    const frontmatter = readFrontmatter(markdown);
    if (frontmatter.draft) continue;
    const date = new Date(frontmatter.updatedDate ?? frontmatter.pubDate);
    dates.set(`${SITE}/blog/${slug}`, date.toISOString());
  }
  const newest = [...dates.values()].sort().at(-1);
  if (newest) dates.set(`${SITE}/blog`, newest);
  return dates;
}

const lastModified = blogLastModified();

export default defineConfig({
  site: SITE,
  // Clean URLs without trailing slashes (/cv, not /cv/), matching the nav links,
  // canonical URLs and sitemap.
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({
      filter: (page) => !HIDDEN_PAGES.test(page),
      serialize: (item) => {
        const lastmod = lastModified.get(item.url);
        return lastmod ? { ...item, lastmod } : item;
      },
    }),
  ],
  markdown: {
    // Astro's default Markdown processor, plus two accessibility fixes for posts. Tables scroll
    // sideways on small screens (.prose table in global.css), so each one is focusable for
    // keyboard users, as Shiki does for code blocks. A task list (- [ ]) is a read-only
    // checklist, not a form, so its unticked boxes are hidden from screen readers. Ticked
    // (- [x]) boxes stay exposed, so the accessibility test fails until they get a real label
    // rather than silently losing their done state.
    processor: satteri({
      hastPlugins: [
        {
          name: 'accessible-prose',
          element: {
            filter: ['table', 'input'],
            visit(node, ctx) {
              if (node.tagName === 'table') ctx.setProperty(node, 'tabIndex', 0);
              else if (
                node.properties.type === 'checkbox' &&
                node.properties.disabled &&
                !node.properties.checked
              ) {
                ctx.setProperty(node, 'ariaHidden', 'true');
              }
            },
          },
        },
      ],
    }),
    // Code blocks in blog posts, in light and dark themes (see .astro-code in global.css).
    // github-dark-default, not github-dark, whose comments fail WCAG AA contrast (3:1).
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark-default' },
    },
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Inter',
      cssVariable: '--font-sans',
      weights: ['400 700'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
    },
  ],
});
