import { describe, expect, it } from 'vitest';
import { canonicalUrl, pageTitle } from '../../src/lib/site';
import { blogPostingJsonLd, personJsonLd, serializeJsonLd } from '../../src/lib/structured-data';

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

describe('personJsonLd', () => {
  const person = personJsonLd('https://mihaisplace.com/_astro/headshot.webp');

  it('describes Mihai as a schema.org Person', () => {
    expect(person['@context']).toBe('https://schema.org');
    expect(person['@type']).toBe('Person');
    expect(person.name).toBe('Mihai Avram');
    expect(person.jobTitle).toBe('Founder & AI Engineer');
    expect(person.url).toBe('https://mihaisplace.com/');
    expect(person.worksFor.name).toBe('Wholesome Future Labs');
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

  it('describes a post by Mihai with its dates', () => {
    const posting = blogPostingJsonLd(base);

    expect(posting['@type']).toBe('BlogPosting');
    expect(posting.headline).toBe('A post');
    expect(posting.mainEntityOfPage).toBe(base.url);
    expect(posting.datePublished).toBe('2026-07-01T00:00:00.000Z');
    expect(posting.dateModified).toBe(posting.datePublished);
    expect(posting.author).toEqual({
      '@type': 'Person',
      name: 'Mihai Avram',
      url: 'https://mihaisplace.com/',
    });
    expect(posting).not.toHaveProperty('image');
  });

  it('includes the updated date and cover image when a post has them', () => {
    const posting = blogPostingJsonLd({
      ...base,
      dateModified: new Date('2026-08-01'),
      imageUrl: 'https://mihaisplace.com/_astro/cover.jpg',
    });

    expect(posting.dateModified).toBe('2026-08-01T00:00:00.000Z');
    expect(posting.image).toBe('https://mihaisplace.com/_astro/cover.jpg');
  });
});
