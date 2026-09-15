import { normalizePath } from './nav';

export const SITE_URL = 'https://mihaisplace.com';
export const SITE_NAME = 'Mihai Avram';
export const HOME_TITLE = 'Mihai Avram - Founder & AI Engineer';
export const BLOG_DESCRIPTION =
  'Writing by Mihai Avram on agentic AI, software engineering and building products.';

export function pageTitle(page?: string): string {
  return page ? `${page} - ${SITE_NAME}` : HOME_TITLE;
}

export function canonicalUrl(pathname: string): string {
  return new URL(normalizePath(pathname), SITE_URL).href;
}
