// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// Published but not linked or indexed yet (see src/lib/site.ts).
const HIDDEN_PAGES = /\/(testimonials|timelapse)\/?$/;

export default defineConfig({
  site: 'https://mihaisplace.com',
  // Clean URLs without trailing slashes (/cv, not /cv/), matching the nav links,
  // canonical URLs and sitemap.
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap({ filter: (page) => !HIDDEN_PAGES.test(page) })],
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Inter',
      cssVariable: '--font-sans',
      weights: ['400 700'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
    },
  ],
});
