// Reads a Markdown file's frontmatter: the YAML between its opening and closing `---` lines.
// Only whole `---` lines count as delimiters, so a value such as 'Before---after' stays intact.
import { parse } from 'yaml';

/**
 * @param {string} markdown
 * @returns {Record<string, any>}
 */
export function readFrontmatter(markdown) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/.exec(markdown);
  return (match && parse(match[1] ?? '')) ?? {};
}
