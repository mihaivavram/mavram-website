import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { readFrontmatter } from '../../scripts/frontmatter.mjs';

export const PUBLIC_ROUTES = ['/', '/cv', '/projects', '/blog', '/publications', '/press'];
export const HIDDEN_ROUTES = ['/testimonials', '/timelapse'];

// Published blog posts, read from src/content/blog (drafts never reach a build).
const blogDir = fileURLToPath(new URL('../../src/content/blog/', import.meta.url));
export const POST_ROUTES = (existsSync(blogDir) ? readdirSync(blogDir) : [])
  .filter((slug) => {
    const file = `${blogDir}${slug}/index.md`;
    if (!existsSync(file)) return false;
    return readFrontmatter(readFileSync(file, 'utf8')).draft !== true;
  })
  .map((slug) => `/blog/${slug}`);

export const ALL_ROUTES = [...PUBLIC_ROUTES, ...POST_ROUTES, ...HIDDEN_ROUTES];
