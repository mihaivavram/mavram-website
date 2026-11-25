// Gets a live blog post ready for cross-posting:
//   node .claude/skills/distribute-post/scripts/prepare-post.mjs <slug>
// It checks that the post is published and live, then writes two files to .distribution/<slug>/:
// post.json (the facts every platform step needs) and body.md (the post body with absolute image
// and link URLs, so it renders anywhere). Astro renames images at build time
// (/_astro/<name>.<hash>.webp), so each image's live URL comes from the live page.
// Exit codes: 0 ready, 1 not ready (missing, draft or not live), 2 some images couldn't be matched.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { basename, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { readFrontmatter } from '../../../../scripts/frontmatter.mjs';

// The same value as SITE_URL in src/lib/site.ts, which Node can't import from here.
const SITE_URL = 'https://mihaisplace.com';
const FRONTMATTER = /^---\r?\n[\s\S]*?\r?\n---[ \t]*(?:\r?\n|$)/;

/** @param {string} path The image's name in the post folder, without its extension. */
const sourceName = (path) => basename(path).replace(/\.[^.]+$/, '');
/** @param {string} path The image's original name, from Astro's /_astro/<name>.<hash>.<ext>. */
const builtName = (path) => basename(path).replace(/\.[^.]+\.[^.]+$/, '');

/**
 * Maps each image's original name to its live URL, from the live post page's HTML.
 * @param {string} html
 * @returns {Map<string, string>}
 */
export function liveImageUrls(html) {
  /** @type {Map<string, string>} */
  const urls = new Map();
  for (const [tag] of html.matchAll(/<img\b[^>]*>/g)) {
    const src = /\ssrc="([^"]+)"/.exec(tag)?.[1];
    if (src?.startsWith('/_astro/') && !urls.has(builtName(src))) {
      urls.set(builtName(src), new URL(src, SITE_URL).href);
    }
  }
  return urls;
}

/**
 * Turns a post's index.md into a body that renders anywhere: the frontmatter goes, and images and
 * links to the site become absolute URLs. Code blocks stay exactly as written.
 * @param {string} markdown The whole index.md.
 * @param {Map<string, string>} liveImages From liveImageUrls.
 * @param {string} postDir The post's folder, relative to the repo root.
 */
export function rewriteBody(markdown, liveImages, postDir) {
  /** @type {{ alt: string, file: string, url: string }[]} */
  const images = [];
  /** @type {string[]} */
  const unmatched = [];
  /** @type {{ char: string, length: number } | null} The open code block's fence, if any. */
  let fence = null;
  const body = markdown
    .replace(FRONTMATTER, '')
    .trimStart()
    .split('\n')
    .map((line) => {
      const marker = /^\s*(`{3,}|~{3,})(.*)$/.exec(line);
      const run = marker?.[1] ?? '';
      if (fence) {
        // Only the same character, at least as long, with nothing after it closes the block.
        const closes = run.charAt(0) === fence.char && run.length >= fence.length;
        if (closes && !marker?.[2]?.trim()) fence = null;
        return line;
      }
      if (run) {
        fence = { char: run.charAt(0), length: run.length };
        return line;
      }
      return (
        line
          // Images: ![alt](./images/x.png) -> the live /_astro/ URL; files in public/ keep their path.
          .replace(/(!\[([^\]]*)\]\()(?!https?:)([^)\s]+)/g, (match, prefix, alt, path) => {
            const live = path.startsWith('/') ? SITE_URL + path : liveImages.get(sourceName(path));
            if (!live) {
              unmatched.push(path);
              return match;
            }
            images.push({ alt, file: join(postDir, path), url: live });
            return prefix + live;
          })
          // Links to other pages on the site: ](/blog/x) and [ref]: /blog/x -> absolute URLs.
          .replace(/\]\(\/(?!\/)/g, `](${SITE_URL}/`)
          .replace(/^(\s*\[[^\]]+\]:\s*)\/(?!\/)/, `$1${SITE_URL}/`)
      );
    })
    .join('\n');
  return { body, images, unmatched };
}

/**
 * @param {string} message
 * @returns {never}
 */
function fail(message) {
  console.error(message);
  process.exit(1);
}

/** @param {string | undefined} slug */
async function prepare(slug) {
  if (!slug) fail('Usage: node .claude/skills/distribute-post/scripts/prepare-post.mjs <slug>');
  const root = fileURLToPath(new URL('../../../../', import.meta.url));
  const postDir = join('src/content/blog', slug);
  let markdown = '';
  try {
    markdown = readFileSync(join(root, postDir, 'index.md'), 'utf8');
  } catch {
    fail(`No post at ${postDir}/index.md.`);
  }
  const data = readFrontmatter(markdown);
  if (data.draft) fail(`${slug} is still a draft (draft: true), so it isn't live.`);

  const url = `${SITE_URL}/blog/${slug}`;
  const response = await fetch(url).catch((error) => fail(`Couldn't reach ${url}: ${error}`));
  if (!response.ok) fail(`${url} returned ${response.status}. Is the post merged and deployed?`);
  const html = await response.text();

  const canonical = /<link rel="canonical" href="([^"]+)"/.exec(html)?.[1];
  if (canonical !== url) fail(`The live canonical URL is ${canonical ?? 'missing'}, not ${url}.`);
  const cover = /<meta property="og:image" content="([^"]+)"/
    .exec(html)?.[1]
    ?.replace(/&amp;/g, '&');

  const { body, images, unmatched } = rewriteBody(markdown, liveImageUrls(html), postDir);
  const pubDate =
    data.pubDate instanceof Date ? data.pubDate.toISOString().slice(0, 10) : String(data.pubDate);
  const post = {
    slug,
    url,
    title: data.title,
    description: data.description,
    tags: data.tags ?? [],
    pubDate,
    cover: cover ?? null,
    coverAlt: data.coverAlt ?? null,
    coverFile: data.cover ? join(postDir, data.cover) : null,
    images,
  };

  const outDir = join(root, '.distribution', slug);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'post.json'), `${JSON.stringify(post, null, 2)}\n`);
  writeFileSync(join(outDir, 'body.md'), body);

  console.log(`Live: ${url}`);
  console.log(`Images rewritten: ${images.length}. Cover: ${cover ?? 'none'}`);
  console.log(`Wrote .distribution/${slug}/post.json and body.md`);
  if (unmatched.length) {
    console.error(`No live URL found for: ${unmatched.join(', ')}`);
    process.exit(2);
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await prepare(process.argv[2]);
}
