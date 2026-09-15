import { SITE_NAME, SITE_URL } from './site';

export const PROFILE_LINKS = [
  'https://www.linkedin.com/in/mihai-avram-15493182/',
  'https://github.com/mihaivavram',
  'https://scholar.google.com/citations?user=Yb8DVskAAAAJ',
  'https://twitter.com/mihaivavram',
  'https://www.facebook.com/mihai.v.avram',
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
    sameAs: PROFILE_LINKS,
    worksFor: { '@type': 'Organization', name: 'Wholesome Future Labs' },
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'Indiana University' },
      { '@type': 'CollegeOrUniversity', name: 'Purdue University' },
    ],
  };
}

// Escaping "<" keeps the JSON from closing its <script> tag early.
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
