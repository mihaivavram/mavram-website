# Mihai Avram's Website

Source for [mihaisplace.com](https://mihaisplace.com), built with [Astro](https://astro.build).

## Requirements

- Node.js 22.18 or newer (required by the spell checker). The repo pins Node 24 in `.nvmrc`, so run `nvm use`.

## Develop

```sh
npm install
npm run dev   # http://localhost:4321
```

## Test

The first time only, install the browser used by the end-to-end tests:

```sh
npx playwright install chromium
```

Run everything before committing:

```sh
npm run verify   # format, types, spelling, unit tests, build, end-to-end tests
```

After a build, check external links with [lychee](https://lychee.cli.rs) (`brew install lychee`):

```sh
npm run links
```

## Analytics

Google Analytics (`G-YPXJCELYNW`, set in `src/lib/analytics.ts`) loads only on Vercel production deployments (`VERCEL_ENV=production`). Local builds, test runs and preview deployments never send data.

## Project layout

- `src/pages/`: one file per route
- `src/content/`: site content (projects, publications, press, blog posts)
- `src/layouts/`, `src/components/`: shared layout and navigation
- `src/assets/`: images, optimised at build time
- `public/`: files served as-is (PDFs, favicons)
- `tests/unit/`, `tests/e2e/`: Vitest and Playwright tests
