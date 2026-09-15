# Mihai Avram's Website

Source for [mihaisplace.com](https://mihaisplace.com), built with [Astro](https://astro.build).

## Requirements

- Node.js 22.18 or newer (required by the spell checker). The repo pins Node 24 in `.nvmrc`, so run `nvm use`.

## Develop

```sh
npm install
npm run dev   # http://localhost:4321
```

## Format, lint and test

The first time only, install the browser used by the end-to-end tests:

```sh
npx playwright install chromium
```

One command per task:

```sh
npm run format      # fix formatting with Prettier (npm run format:check only reports)
npm run lint        # type and Astro errors (astro check), then spelling (cspell)
npm run test:unit   # unit tests (Vitest)
npm run test:e2e    # build the site, then run the end-to-end tests (Playwright)
```

All together, before every commit. This runs the same four in order, checks formatting without changing files, and stops at the first failure:

```sh
npm run verify
```

To run one end-to-end test file, pass its path: `npm run test:e2e -- tests/e2e/blog.spec.ts`.

After a build, check external links with [lychee](https://lychee.cli.rs) (`brew install lychee`):

```sh
npm run links
```

## Blog

Posts live in `src/content/blog/<slug>/index.md`. The folder name is the post's URL (`/blog/<slug>`), so don't rename a folder once the post is published.

1. Run `npm run new-post "Post title"` to create a draft with the frontmatter to fill in.
2. Write in Markdown. Put images in the post's folder and reference them as `![Describe the image](./image.png)`. Fenced code blocks get syntax highlighting.
3. Preview with `npm run dev`. Drafts show there but never on the live site. Set `draft: false` to publish.

When republishing a post elsewhere (Hashnode, Dev.to, Medium), set its original or canonical URL to `https://mihaisplace.com/blog/<slug>`. The RSS feed is at `/rss.xml`.

## Analytics

Google Analytics (`G-YPXJCELYNW`, set in `src/lib/analytics.ts`) loads only on Vercel production deployments (`VERCEL_ENV=production`). Local builds, test runs and preview deployments never send data.

## Project layout

- `src/pages/`: one file per route
- `src/content/`: site content (projects, publications, press, blog posts)
- `src/layouts/`, `src/components/`: shared layout and navigation
- `src/assets/`: images, optimised at build time
- `public/`: files served as-is (PDFs, favicons)
- `tests/unit/`, `tests/e2e/`: Vitest and Playwright tests
