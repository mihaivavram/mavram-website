import { z } from 'astro/zod';
import { describe, expect, it } from 'vitest';
import { parse } from 'yaml';
import { postTemplate, slugify } from '../../scripts/new-post.mjs';
import { blogPostSchema } from '../../src/lib/content-schemas';

describe('new-post script', () => {
  it('turns titles into URL slugs', () => {
    expect(slugify('Stop Chasing Models: 3 Upgrades That Keep You Ahead of AI This Week')).toBe(
      'stop-chasing-models-3-upgrades-that-keep-you-ahead-of-ai-this-week',
    );
    expect(slugify('  Agents & Tools — Déjà vu?  ')).toBe('agents-tools-deja-vu');
  });

  it('creates a draft whose frontmatter matches the blog schema', () => {
    const markdown = postTemplate('My Post', new Date('2026-09-15'));
    const frontmatter = /^---\n([\s\S]*?)\n---/.exec(markdown)?.[1] ?? '';
    const result = blogPostSchema(z.string()).safeParse(parse(frontmatter));

    expect(result.success, JSON.stringify(result.error?.issues)).toBe(true);
    expect(result.data?.draft).toBe(true);
    expect(result.data?.pubDate.toISOString()).toBe('2026-09-15T00:00:00.000Z');
  });
});
