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

export function normalizePath(pathname: string): string {
  const trimmed = pathname.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
}

export function isActive(href: string, pathname: string): boolean {
  return normalizePath(href) === normalizePath(pathname);
}
