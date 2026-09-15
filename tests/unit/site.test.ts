import { describe, expect, it } from 'vitest';
import { canonicalUrl, pageTitle } from '../../src/lib/site';
import { personJsonLd, serializeJsonLd } from '../../src/lib/structured-data';

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
