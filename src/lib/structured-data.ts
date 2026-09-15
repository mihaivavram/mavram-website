import { SITE_NAME, SITE_URL } from './site';

export const PROFILE_LINKS = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mihai-avram-15493182/' },
  { name: 'GitHub', url: 'https://github.com/mihaivavram' },
  { name: 'Google Scholar', url: 'https://scholar.google.com/citations?user=Yb8DVskAAAAJ' },
  { name: 'Twitter', url: 'https://twitter.com/mihaivavram' },
  { name: 'Facebook', url: 'https://www.facebook.com/mihai.v.avram' },
];

// schema.org Person for the home page, so search engines and AI assistants can tell
// this Mihai Avram apart from others with the same name.
export function personJsonLd(imageUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE_NAME,
    jobTitle: 'Founder & AI Engineer',
    url: `${SITE_URL}/`,
    image: imageUrl,
    sameAs: PROFILE_LINKS.map(({ url }) => url),
    worksFor: { '@type': 'Organization', name: 'Wholesome Future Labs' },
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'Indiana University' },
      { '@type': 'CollegeOrUniversity', name: 'Purdue University' },
    ],
  };
}

interface BlogPostingInput {
  title: string;
  description: string;
  url: string;
  datePublished: Date;
  dateModified?: Date;
  imageUrl?: string;
}

// schema.org BlogPosting for a post page, credited to the same Person as the home page.
export function blogPostingJsonLd({
  title,
  description,
  url,
  datePublished,
  dateModified,
  imageUrl,
}: BlogPostingInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    url,
    mainEntityOfPage: url,
    datePublished: datePublished.toISOString(),
    dateModified: (dateModified ?? datePublished).toISOString(),
    ...(imageUrl ? { image: imageUrl } : {}),
    author: { '@type': 'Person', name: SITE_NAME, url: `${SITE_URL}/` },
  };
}

// Escaping "<" keeps the JSON from closing its <script> tag early.
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
