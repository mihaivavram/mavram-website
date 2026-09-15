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

## Publish a blog post

1. **Create a draft:** `npm run new-post "Post title"` creates `src/content/blog/<slug>/index.md` with `draft: true`. The folder name is the URL (`/blog/<slug>`), so never rename it once published.
2. **Fill in the frontmatter:** `description` (50 to 200 characters) and `tags`. Optional cover: `cover: ./cover.png` plus `coverAlt`.
3. **Write in Markdown:** put images in the post's folder as `![Describe the image](./image.png)`. Code blocks that name a language (` ```ts `) get syntax highlighting.
4. **Preview:** `npm run dev`, then open `http://localhost:4321/blog/<slug>`. Drafts only show locally.
5. **Publish:** set `draft: false` and make sure `pubDate` is the publish date.
6. **Check:** `npm run verify` catches missing alt text, missing images, short descriptions and typos. If it flags a real name as a typo, add it to `words` in `cspell.json`.
7. **Go live:** commit and merge into `main`, and Vercel deploys it. The blog list, the home page's latest posts, the sitemap and the RSS feed (`/rss.xml`) update on their own. Pushing a branch first gives you a Vercel preview link.
8. **Cross-post (optional):** on Hashnode, Dev.to or Medium, set the original (canonical) URL to `https://mihaisplace.com/blog/<slug>` so search engines credit this site.

## Analytics

Google Analytics (`G-YPXJCELYNW`, set in `src/lib/analytics.ts`) loads only on Vercel production deployments (`VERCEL_ENV=production`). Local builds, test runs and preview deployments never send data.

## Project layout

- `src/pages/`: one file per route
- `src/content/`: site content (projects, publications, press, blog posts)
- `src/layouts/`, `src/components/`: shared layout and navigation
- `src/assets/`: images, optimised at build time
- `public/`: files served as-is (PDFs, favicons)
- `tests/unit/`, `tests/e2e/`: Vitest and Playwright tests
