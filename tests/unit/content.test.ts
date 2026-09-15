import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { z } from 'astro/zod';
import { describe, expect, it } from 'vitest';
import { parse } from 'yaml';
import {
  postSchema,
  pressSchema,
  projectSchema,
  publicationSchema,
} from '../../src/lib/content-schemas';

const root = fileURLToPath(new URL('../../', import.meta.url));
const contentDir = join(root, 'src/content');
const publicDir = join(root, 'public');

function readYamlList(file: string): unknown[] {
  const data: unknown = parse(readFileSync(join(contentDir, file), 'utf8'));
  if (!Array.isArray(data)) throw new Error(`${file} must contain a YAML list`);
  return data;
}

const listCollections: { file: string; schema: z.ZodType }[] = [
  { file: 'publications.yaml', schema: publicationSchema },
  { file: 'press.yaml', schema: pressSchema },
  { file: 'posts.yaml', schema: postSchema },
];

// In tests the logo is validated as a relative path instead of through Astro's image().
const projectFileSchema = projectSchema(z.string());

const projects = readdirSync(join(contentDir, 'projects'))
  .filter((name) => name.endsWith('.md'))
  .map((name) => {
    const path = join(contentDir, 'projects', name);
    const match = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/.exec(readFileSync(path, 'utf8'));
    if (!match) throw new Error(`${name} is missing frontmatter`);
    const result = projectFileSchema.safeParse(parse(match[1] ?? ''));
    if (!result.success) throw new Error(`${name}: ${result.error.message}`);
    return { name, path, data: result.data, body: match[2] ?? '' };
  });

describe.each(listCollections)('$file', ({ file, schema }) => {
  const entries = readYamlList(file);

  it('matches the schema', () => {
    for (const entry of entries) {
      const result = schema.safeParse(entry);
      expect(result.success, JSON.stringify(result.error?.issues)).toBe(true);
    }
  });

  it('has unique ids', () => {
    const ids = entries.map((entry) => (entry as { id?: unknown }).id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe('projects', () => {
  it('has current and past projects with unique order values', () => {
    expect(new Set(projects.map(({ data }) => data.group))).toEqual(new Set(['current', 'past']));
    const orders = projects.map(({ data }) => data.order);
    expect(new Set(orders).size).toBe(orders.length);
  });

  it.each(projects)('$name has alt text and an existing logo', ({ path, data }) => {
    expect(data.alt.trim()).not.toBe('');
    expect(existsSync(join(dirname(path), data.logo))).toBe(true);
  });

  it('gives every logo its own alt text', () => {
    const alts = projects.map(({ data }) => data.alt.trim().toLowerCase());
    expect(alts.filter((alt, index) => alts.indexOf(alt) !== index)).toEqual([]);
  });
});

describe('content links', () => {
  const links = [
    ...listCollections.flatMap(({ file }) =>
      readYamlList(file).map((entry) => ({
        source: file,
        url: String((entry as { url?: unknown }).url),
      })),
    ),
    ...projects.flatMap(({ name, data, body }) => [
      ...data.links.map((link) => ({ source: name, url: link.url })),
      ...[...body.matchAll(/href="([^"]+)"/g)].map((match) => ({
        source: name,
        url: match[1] ?? '',
      })),
    ]),
  ];

  it('points every link at an absolute http(s) URL or an existing public file', () => {
    const invalid = links.filter(({ url }) => {
      if (url.startsWith('/')) {
        const [path = ''] = url.split('#');
        return !existsSync(join(publicDir, decodeURI(path)));
      }
      return !/^https?:\/\/[^/\s]+/.test(url) || !URL.canParse(url);
    });

    expect(links.length).toBeGreaterThan(0);
    expect(invalid).toEqual([]);
  });
});
