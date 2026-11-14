import { describe, expect, it } from 'vitest';
import {
  BOOKING_URL,
  RESCUE_THANKS_URL,
  WEB3FORMS_ACCESS_KEY,
  bookingUrl,
} from '../../src/lib/rescue';
import { PERSON_ID, WEBSITE_ID, servicePageJsonLd } from '../../src/lib/structured-data';

// The offer page ships with placeholders until Mihai creates the booking link and the Web3Forms
// key. These fail on purpose until both are real, so a placeholder can't reach production.
describe('AI app rescue settings', () => {
  it('has a real booking link', () => {
    expect(BOOKING_URL).not.toMatch(/REPLACE/i);
    expect(new URL(BOOKING_URL).protocol).toBe('https:');
  });

  it('has a real Web3Forms access key', () => {
    expect(WEB3FORMS_ACCESS_KEY).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
    );
  });

  it('sends visitors back to the same site after the form, as Web3Forms requires', () => {
    expect(RESCUE_THANKS_URL).toBe('https://mihaisplace.com/ai-app-rescue/thanks');
  });

  it('tags each booking link with where it was clicked', () => {
    const url = new URL(bookingUrl('contact'));
    expect(url.searchParams.get('utm_content')).toBe('contact');
    expect(url.searchParams.get('utm_source')).toBe('mihaisplace');
  });
});

describe('servicePageJsonLd', () => {
  const url = 'https://mihaisplace.com/ai-app-rescue';
  const [webPage, service] = servicePageJsonLd({
    name: 'AI App Rescue',
    title: 'AI App Rescue - Mihai Avram',
    description: 'Help for AI-built apps.',
    url,
  })['@graph'];

  it('makes the service the main subject of the page', () => {
    expect(webPage['@type']).toBe('WebPage');
    expect(webPage.isPartOf).toEqual({ '@id': WEBSITE_ID });
    expect(webPage.mainEntity).toEqual({ '@id': `${url}#service` });
    expect(service['@id']).toBe(`${url}#service`);
  });

  it('credits the service to the same Person as the home page, without prices or ratings', () => {
    expect(service['@type']).toBe('Service');
    expect(service.provider['@id']).toBe(PERSON_ID);
    expect(service).not.toHaveProperty('offers');
    expect(service).not.toHaveProperty('aggregateRating');
  });
});
