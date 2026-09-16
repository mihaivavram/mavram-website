import { describe, expect, it } from 'vitest';
import { HOME_DESCRIPTION, canonicalUrl, pageTitle } from '../../src/lib/site';
import {
  PERSON_ID,
  WEBSITE_ID,
  blogPostingJsonLd,
  homeJsonLd,
  serializeJsonLd,
} from '../../src/lib/structured-data';

describe('pageTitle', () => {
  it('uses the approved title on the home page', () => {
    expect(pageTitle()).toBe('Mihai Avram - Founder & AI Engineer');
  });

  it('puts the page name first on other pages', () => {
    expect(pageTitle('Projects')).toBe('Projects - Mihai Avram');
  });
});

describe('canonicalUrl', () => {
  it('builds absolute URLs without trailing slashes', () => {
    expect(canonicalUrl('/')).toBe('https://mihaisplace.com/');
    expect(canonicalUrl('/projects')).toBe('https://mihaisplace.com/projects');
    expect(canonicalUrl('/projects/')).toBe('https://mihaisplace.com/projects');
  });
});

describe('homeJsonLd', () => {
  const [website, profilePage, person] = homeJsonLd('https://mihaisplace.com/_astro/headshot.webp')[
    '@graph'
  ];

  it('connects the website, the profile page and Mihai in one graph', () => {
    expect(website['@type']).toBe('WebSite');
    expect(website['@id']).toBe(WEBSITE_ID);
    expect(website.publisher).toEqual({ '@id': PERSON_ID });

    expect(profilePage['@type']).toBe('ProfilePage');
    expect(profilePage.isPartOf).toEqual({ '@id': WEBSITE_ID });
    expect(profilePage.mainEntity).toEqual({ '@id': PERSON_ID });

    expect(person['@id']).toBe(PERSON_ID);
  });

  it('describes Mihai as a schema.org Person', () => {
    expect(person['@type']).toBe('Person');
    expect(person.name).toBe('Mihai Avram');
    expect(person.jobTitle).toBe('Founder & AI Engineer');
    expect(person.description).toBe(HOME_DESCRIPTION);
    expect(person.url).toBe('https://mihaisplace.com/');
    expect(person.worksFor.name).toBe('Wholesome Future Labs');
    expect(person.knowsAbout).toContain('Agentic AI');
  });

  it('links to profiles with absolute https URLs', () => {
    expect(person.sameAs.length).toBeGreaterThan(0);
    for (const url of person.sameAs) {
      expect(url).toMatch(/^https:\/\//);
    }
  });

  it('serialises to valid JSON that cannot close its script tag', () => {
    const json = serializeJsonLd({ ...person, name: '</script><b>' });

    expect(json).not.toContain('<');
    expect(JSON.parse(json).name).toBe('</script><b>');
  });
});

describe('blogPostingJsonLd', () => {
  const base = {
    title: 'A post',
    description: 'What the post is about.',
    url: 'https://mihaisplace.com/blog/a-post',
    datePublished: new Date('2026-07-01'),
  };

  it('describes a post with its dates', () => {
    const posting = blogPostingJsonLd(base);

    expect(posting['@type']).toBe('BlogPosting');
    expect(posting.headline).toBe('A post');
    expect(posting.mainEntityOfPage).toBe(base.url);
    expect(posting.datePublished).toBe('2026-07-01T00:00:00.000Z');
    expect(posting.dateModified).toBe(posting.datePublished);
    expect(posting).not.toHaveProperty('image');
    expect(posting).not.toHaveProperty('keywords');
  });

  it('credits the post to the same Person and website as the home page', () => {
    const posting = blogPostingJsonLd(base);

    expect(posting.author).toEqual({
      '@type': 'Person',
      '@id': PERSON_ID,
      name: 'Mihai Avram',
      url: 'https://mihaisplace.com/',
    });
    expect(posting.publisher['@id']).toBe(PERSON_ID);
    expect(posting.isPartOf['@id']).toBe(WEBSITE_ID);
  });

  it('includes the updated date, cover image and tags when a post has them', () => {
    const posting = blogPostingJsonLd({
      ...base,
      dateModified: new Date('2026-08-01'),
      imageUrl: 'https://mihaisplace.com/_astro/cover.jpg',
      tags: ['Agentic AI'],
    });

    expect(posting.dateModified).toBe('2026-08-01T00:00:00.000Z');
    expect(posting.image).toBe('https://mihaisplace.com/_astro/cover.jpg');
    expect(posting.keywords).toEqual(['Agentic AI']);
  });
});
