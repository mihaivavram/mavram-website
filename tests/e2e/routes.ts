import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

export const PUBLIC_ROUTES = ['/', '/cv', '/projects', '/blog', '/publications', '/press'];
export const HIDDEN_ROUTES = ['/testimonials', '/timelapse'];

// Published blog posts, read from src/content/blog (drafts never reach a build).
const blogDir = fileURLToPath(new URL('../../src/content/blog/', import.meta.url));
export const POST_ROUTES = (existsSync(blogDir) ? readdirSync(blogDir) : [])
  .filter((slug) => {
    const file = `${blogDir}${slug}/index.md`;
    if (!existsSync(file)) return false;
    const frontmatter = readFileSync(file, 'utf8').split('---')[1] ?? '';
    return !/^draft:\s*true\s*$/m.test(frontmatter);
  })
  .map((slug) => `/blog/${slug}`);

export const ALL_ROUTES = [...PUBLIC_ROUTES, ...POST_ROUTES, ...HIDDEN_ROUTES];
