import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

interface VercelConfig {
  cleanUrls?: boolean;
  trailingSlash?: boolean;
  redirects?: unknown[];
  headers?: { source: string; headers: { key: string; value: string }[] }[];
}

const config = JSON.parse(
  readFileSync(fileURLToPath(new URL('../../vercel.json', import.meta.url)), 'utf8'),
) as VercelConfig;

describe('vercel.json', () => {
  it('serves pages at clean URLs without trailing slashes', () => {
    // The build writes cv.html, projects.html, ... (build.format: 'file'). Without
    // cleanUrls, Vercel answers /cv and /projects with the 404 page.
    expect(config.cleanUrls).toBe(true);
    expect(config.trailingSlash).toBe(false);
  });

  it('sends the security headers on every path', () => {
    const everyPath = config.headers?.find(({ source }) => source === '/(.*)');
    const keys = everyPath?.headers.map(({ key }) => key.toLowerCase()) ?? [];

    expect(keys).toEqual(
      expect.arrayContaining(['x-content-type-options', 'referrer-policy', 'permissions-policy']),
    );
  });

  it('leaves the www and bare-domain redirect to the Vercel domain settings', () => {
    // A host redirect here could loop against the redirect set in the Vercel dashboard.
    expect(JSON.stringify(config.redirects ?? [])).not.toContain('mihaisplace.com');
  });
});
