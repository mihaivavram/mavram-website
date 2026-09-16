import { describe, expect, it } from 'vitest';
import { readFrontmatter } from '../../scripts/frontmatter.mjs';

describe('readFrontmatter', () => {
  it('keeps values that contain --- and ignores --- rules in the post body', () => {
    const markdown = [
      '---',
      "title: 'Before---after'",
      'pubDate: 2026-09-01',
      'updatedDate: 2026-09-15',
      'draft: true',
      '---',
      '',
      'Intro.',
      '',
      '---',
      '',
      'draft: false',
      '',
    ].join('\n');

    expect(readFrontmatter(markdown)).toEqual({
      title: 'Before---after',
      pubDate: '2026-09-01',
      updatedDate: '2026-09-15',
      draft: true,
    });
  });

  it('returns an empty object for a file without frontmatter', () => {
    expect(readFrontmatter('Just a body.\n')).toEqual({});
  });
});
