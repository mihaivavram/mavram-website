import { describe, expect, it } from 'vitest';
import { formatPostDate, isoDate, readingTimeMinutes, sortPosts } from '../../src/lib/posts';

describe('readingTimeMinutes', () => {
  it('rounds to whole minutes and never shows less than one', () => {
    expect(readingTimeMinutes('word '.repeat(10))).toBe(1);
    expect(readingTimeMinutes('word '.repeat(460))).toBe(2);
  });

  it('ignores image paths and link URLs', () => {
    const markdown = '![alt](./a-long-image-name.png) [link text](https://example.com/a/b/c)';
    expect(readingTimeMinutes(markdown)).toBe(1);
  });
});

describe('sortPosts', () => {
  const post = (id: string, date: string, draft = false) => ({
    id,
    data: { pubDate: new Date(date), draft },
  });
  const posts = [
    post('old', '2025-01-01'),
    post('draft', '2026-09-01', true),
    post('new', '2026-07-01'),
  ];

  it('lists published posts newest first and leaves out drafts', () => {
    expect(sortPosts(posts).map(({ id }) => id)).toEqual(['new', 'old']);
  });

  it('includes drafts for local previews', () => {
    expect(sortPosts(posts, true).map(({ id }) => id)).toEqual(['draft', 'new', 'old']);
  });

  it('does not reorder the original list', () => {
    sortPosts(posts);
    expect(posts.map(({ id }) => id)).toEqual(['old', 'draft', 'new']);
  });
});

describe('post dates', () => {
  it('formats calendar days in UTC so they never shift', () => {
    expect(formatPostDate(new Date('2026-07-01'))).toBe('Jul 1, 2026');
    expect(isoDate(new Date('2026-07-01'))).toBe('2026-07-01');
  });
});
