import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, it } from 'vitest';
import GoogleAnalytics from '../../src/components/GoogleAnalytics.astro';
import { GA_MEASUREMENT_ID, isAnalyticsEnabled } from '../../src/lib/analytics';

describe('isAnalyticsEnabled', () => {
  it('is on only for Vercel production deployments', () => {
    expect(isAnalyticsEnabled({ VERCEL_ENV: 'production' })).toBe(true);
    expect(isAnalyticsEnabled({ VERCEL_ENV: 'preview' })).toBe(false);
    expect(isAnalyticsEnabled({ VERCEL_ENV: 'development' })).toBe(false);
    expect(isAnalyticsEnabled({})).toBe(false);
  });
});

describe('GoogleAnalytics', () => {
  it("renders Google's tag for the site's measurement ID", async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(GoogleAnalytics);

    expect(GA_MEASUREMENT_ID).toMatch(/^G-[A-Z0-9]+$/);
    expect(html).toContain(
      `<script async src="https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}">`,
    );
    expect(html).toContain('function gtag(){dataLayer.push(arguments);}');
    expect(html).toContain(`gtag('config', '${GA_MEASUREMENT_ID}');`);
    expect(html.match(/<script/g)).toHaveLength(2);
  });
});
