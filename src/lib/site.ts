export const SITE_NAME = 'Mihai Avram';
export const HOME_TITLE = 'Mihai Avram - Founder & AI Engineer';

export function pageTitle(page?: string): string {
  return page ? `${page} - ${SITE_NAME}` : HOME_TITLE;
}
