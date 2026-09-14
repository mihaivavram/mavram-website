import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, it } from 'vitest';
import Nav from '../../src/components/Nav.astro';
import { NAV_ITEMS, isActive, normalizePath } from '../../src/lib/nav';

describe('normalizePath', () => {
  it('drops trailing slashes but keeps the root', () => {
    expect(normalizePath('/projects/')).toBe('/projects');
    expect(normalizePath('/')).toBe('/');
    expect(normalizePath('')).toBe('/');
  });
});

describe('isActive', () => {
  it('matches the same page with or without a trailing slash', () => {
    expect(isActive('/projects', '/projects/')).toBe(true);
    expect(isActive('/', '/')).toBe(true);
  });

  it('does not treat the home page as a prefix of other pages', () => {
    expect(isActive('/', '/projects')).toBe(false);
  });
});

describe('Nav', () => {
  it.each([...NAV_ITEMS])('marks only $label as current on $href', async ({ href }) => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Nav, {
      request: new Request(`https://mihaisplace.com${href}`),
    });

    const currentLinks = html.match(/<a\b[^>]*aria-current="page"[^>]*>/g) ?? [];
    expect(currentLinks).toHaveLength(1);
    expect(currentLinks[0]).toContain(`href="${href}"`);
  });

  it('does not link the hidden pages', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Nav);

    expect(html).not.toContain('href="/testimonials"');
    expect(html).not.toContain('href="/timelapse"');
  });
});
