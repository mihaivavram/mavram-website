const WORDS_PER_MINUTE = 230;

export function readingTimeMinutes(markdown: string): number {
  const text = markdown
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1');
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

interface Dated {
  data: { pubDate: Date; draft: boolean };
}

// Newest first. Drafts are left out unless includeDrafts is set (local preview only).
export function sortPosts<T extends Dated>(posts: T[], includeDrafts = false): T[] {
  return posts
    .filter((post) => includeDrafts || !post.data.draft)
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

// Post dates are calendar days, so format them in UTC to avoid shifting by a day.
export function formatPostDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}
