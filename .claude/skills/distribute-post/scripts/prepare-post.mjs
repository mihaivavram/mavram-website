// Gets a live blog post ready for cross-posting:
//   node .claude/skills/distribute-post/scripts/prepare-post.mjs <slug>
// It checks that the post is published and live, then writes two files to .distribution/<slug>/:
// post.json (the facts every platform step needs) and body.md (the post body with absolute image
// and link URLs, so it renders anywhere). Astro renames images at build time
// (/_astro/<name>.<hash>.webp), so each image's live URL comes from the live page.
// Exit codes: 0 ready, 1 not ready (missing, draft or not live), 2 some images couldn't be matched.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { basename, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFrontmatter } from '../../../../scripts/frontmatter.mjs';

// The same value as SITE_URL in src/lib/site.ts, which Node can't import from here.
const SITE_URL = 'https://mihaisplace.com';
const root = fileURLToPath(new URL('../../../../', import.meta.url));

/**
 * @param {string} message
 * @returns {never}
 */
function fail(message) {
  console.error(message);
  process.exit(1);
}

/** @param {string} path The image's name in the post folder, without its extension. */
const sourceName = (path) => basename(path).replace(/\.[^.]+$/, '');
/** @param {string} path The image's original name, from Astro's /_astro/<name>.<hash>.<ext>. */
const builtName = (path) => basename(path).replace(/\.[^.]+\.[^.]+$/, '');

const slug = process.argv[2];
if (!slug) fail('Usage: node .claude/skills/distribute-post/scripts/prepare-post.mjs <slug>');

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
const cover = /<meta property="og:image" content="([^"]+)"/.exec(html)?.[1]?.replace(/&amp;/g, '&');

/** @type {Map<string, string>} original image name -> its live URL */
const liveImages = new Map();
for (const [tag] of html.matchAll(/<img\b[^>]*>/g)) {
  const src = /\ssrc="([^"]+)"/.exec(tag)?.[1];
  if (src?.startsWith('/_astro/') && !liveImages.has(builtName(src))) {
    liveImages.set(builtName(src), new URL(src, SITE_URL).href);
  }
}

/** @type {{ alt: string, file: string, url: string }[]} */
const images = [];
/** @type {string[]} */
const unmatched = [];
let inFence = false;
const body = markdown
  .replace(/^---\r?\n[\s\S]*?\r?\n---[ \t]*(?:\r?\n|$)/, '')
  .trimStart()
  .split('\n')
  .map((line) => {
    if (/^\s*(```|~~~)/.test(line)) inFence = !inFence;
    if (inFence || /^\s*(```|~~~)/.test(line)) return line;
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
