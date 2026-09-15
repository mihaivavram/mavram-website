import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, it } from 'vitest';
import CookieConsent from '../../src/components/CookieConsent.astro';
import { GA_MEASUREMENT_ID, isAnalyticsEnabled } from '../../src/lib/analytics';

describe('isAnalyticsEnabled', () => {
  it('is on only for Vercel production deployments', () => {
    expect(isAnalyticsEnabled({ VERCEL_ENV: 'production' })).toBe(true);
    expect(isAnalyticsEnabled({ VERCEL_ENV: 'preview' })).toBe(false);
    expect(isAnalyticsEnabled({ VERCEL_ENV: 'development' })).toBe(false);
    expect(isAnalyticsEnabled({})).toBe(false);
  });
});

describe('CookieConsent', () => {
  it('starts hidden and never loads Google Analytics from the markup itself', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(CookieConsent, {
      props: { measurementId: GA_MEASUREMENT_ID },
    });

    expect(GA_MEASUREMENT_ID).toMatch(/^G-[A-Z0-9]+$/);
    expect(html).toMatch(/<section(?=[^>]*id="cookie-consent")(?=[^>]*\bhidden\b)[^>]*>/);
    expect(html).not.toMatch(/<script[^>]*src="https:\/\/www\.googletagmanager\.com/);
    expect(html).toContain(`const measurementId = "${GA_MEASUREMENT_ID}"`);
  });

  it('has no measurement ID outside production', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(CookieConsent, { props: { measurementId: null } });

    expect(html).toContain('const measurementId = null');
  });
});
