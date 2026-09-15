export interface NavItem {
  href: string;
  label: string;
}

export const NAV_ITEMS: readonly NavItem[] = [
  { href: '/', label: 'About' },
  { href: '/cv', label: 'CV' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/publications', label: 'Publications' },
  { href: '/press', label: 'Press' },
];

// Every page of the old React site, which linked to them as hash routes (/#/projects).
export const LEGACY_ROUTES = [...NAV_ITEMS.map(({ href }) => href), '/testimonials', '/timelapse'];

// With build.format 'file', Astro.url.pathname ends in .html during the static build
// (/index.html, /projects.html), while visitors use /, /projects or /projects/.
export function normalizePath(pathname: string): string {
  const trimmed = pathname
    .replace(/\/index\.html$/, '/')
    .replace(/\.html$/, '')
    .replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
}

// A nav item is active on its own page and on the pages inside it (Blog on /blog/a-post).
export function isActive(href: string, pathname: string): boolean {
  const current = normalizePath(pathname);
  const target = normalizePath(href);
  return current === target || (target !== '/' && current.startsWith(`${target}/`));
}
