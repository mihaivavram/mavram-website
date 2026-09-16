import { HOME_DESCRIPTION, HOME_TITLE, SITE_NAME, SITE_URL } from './site';

// Stable identifiers that tie the website, the home page and every blog post to one Person,
// so search engines and AI assistants can tell this Mihai Avram apart from others with the same name.
export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
const HOME_URL = `${SITE_URL}/`;

export const PROFILE_LINKS = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mihai-avram-15493182/' },
  { name: 'GitHub', url: 'https://github.com/mihaivavram' },
  { name: 'Google Scholar', url: 'https://scholar.google.com/citations?user=Yb8DVskAAAAJ' },
  { name: 'Twitter', url: 'https://twitter.com/mihaivavram' },
  { name: 'Facebook', url: 'https://www.facebook.com/mihai.v.avram' },
  { name: 'Hashnode', url: 'https://hashnode.com/@mavram' },
];

// The topics search engines and AI assistants should associate with Mihai.
const KNOWS_ABOUT = [
  'Agentic AI',
  'Generative AI',
  'Machine learning',
  'Software engineering',
  'Misinformation research',
  'Full-stack development',
  'Mobile development',
];

// schema.org data for the home page as one graph: the website, this profile page and the Person it is about.
export function homeJsonLd(imageUrl: string) {
  const website = {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: HOME_URL,
    name: SITE_NAME,
    inLanguage: 'en',
    publisher: { '@id': PERSON_ID },
  };
  const profilePage = {
    '@type': 'ProfilePage',
    '@id': HOME_URL,
    url: HOME_URL,
    name: HOME_TITLE,
    isPartOf: { '@id': WEBSITE_ID },
    mainEntity: { '@id': PERSON_ID },
  };
  const person = {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: SITE_NAME,
    jobTitle: 'Founder & AI Engineer',
    description: HOME_DESCRIPTION,
    url: HOME_URL,
    image: imageUrl,
    sameAs: PROFILE_LINKS.map(({ url }) => url),
    knowsAbout: KNOWS_ABOUT,
    worksFor: { '@type': 'Organization', name: 'Wholesome Future Labs' },
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'Indiana University' },
      { '@type': 'CollegeOrUniversity', name: 'Purdue University' },
    ],
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [website, profilePage, person] as const,
  };
}

interface BlogPostingInput {
  title: string;
  description: string;
  url: string;
  datePublished: Date;
  dateModified?: Date;
  imageUrl?: string;
  tags?: string[];
}

// schema.org BlogPosting for a post page, credited by @id to the same Person and website as the home page.
export function blogPostingJsonLd({
  title,
  description,
  url,
  datePublished,
  dateModified,
  imageUrl,
  tags = [],
}: BlogPostingInput) {
  const author = { '@type': 'Person', '@id': PERSON_ID, name: SITE_NAME, url: HOME_URL };
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
    ...(tags.length > 0 ? { keywords: tags } : {}),
    inLanguage: 'en',
    author,
    publisher: author,
    isPartOf: { '@type': 'WebSite', '@id': WEBSITE_ID, url: HOME_URL },
  };
}

// Escaping "<" keeps the JSON from closing its <script> tag early.
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
