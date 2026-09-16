// @ts-check
import { readFileSync, readdirSync } from 'node:fs';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';
import { readFrontmatter } from './scripts/frontmatter.mjs';

const SITE = 'https://mihaisplace.com';

// Published but not linked or indexed yet (see src/lib/site.ts).
const HIDDEN_PAGES = /\/(testimonials|timelapse)\/?$/;

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
    // Code blocks in blog posts, in light and dark themes (see .astro-code in global.css).
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
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
