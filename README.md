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

### What the blog is about

- **Positioning** (the approved sentence, already on the home page and in the author box): "Through Wholesome Future Labs, I help companies get AI out of the demo stage and into their actual product."
- **Blog description** (`BLOG_DESCRIPTION` in `src/lib/site.ts`): "Hands-on notes on building agentic AI. Agents, tools, memory, and orchestration, from prototype to production."
- **Pillars:** keep about 80% of posts inside one of these:
  1. Agent harnesses and coding agents in practice
  2. Getting agents into production: evals, reliability, cost
  3. Agentic workflows for founders and small teams

### Steps

1. **Create a draft:** `npm run new-post "Post title"` creates `src/content/blog/<slug>/index.md` with `draft: true`. The folder name is the URL (`/blog/<slug>`), so never rename it once published.
2. **Fill in the frontmatter:** `description` (50 to 200 characters) and `tags`. Check which pillar the post belongs to. Optional cover: `cover: ./cover.png` plus `coverAlt`.
3. **Write in Markdown:** put images in the post's folder as `![Describe the image](./image.png)`. Code blocks that name a language (` ```ts `) get syntax highlighting.
4. **Preview:** `npm run dev`, then open `http://localhost:4321/blog/<slug>`. Drafts only show locally.
5. **Publish:** set `draft: false` and make sure `pubDate` is the publish date.
6. **Check:** `npm run verify` catches missing alt text, missing images, short descriptions and typos. If it flags a real name as a typo, add it to `words` in `cspell.json`.
7. **Go live:** commit and merge into `main`, and Vercel deploys it. The blog list, the home page's latest posts, the sitemap, the RSS feed (`/rss.xml`) and `/llms.txt` update on their own. Pushing a branch first gives you a Vercel preview link.
8. **Cross-post (optional):** on Hashnode, Dev.to or Medium, set the original (canonical) URL to `https://mihaisplace.com/blog/<slug>`. It tells search engines which copy is the original, but it's a hint: they can still show or rank the cross-post instead.

### Writing for search and AI

Search results and AI answers tend to quote posts that are clear and specific:

- **Title:** name the topic in the plain words people search for or ask about.
- **Description:** answer "what will I get from this?" in a sentence or two. It's the snippet in search results and link previews.
- **Opening:** start with the answer or the key takeaways, then go into detail.
- **Structure:** one idea per `##` heading, with numbered lists for steps.
- **Specifics:** name the tools, numbers and examples, and link to related posts.

### Distribute

After the post is live:

1. **Newsletter:** write the issue of Context Overflow in [Buttondown](https://buttondown.com) and link to the post. The RSS feed has the full post if you want to quote from it.
2. **Share with UTM tags** so Google Analytics shows where readers came from, e.g. `https://mihaisplace.com/blog/<slug>?utm_source=linkedin&utm_medium=social&utm_campaign=<slug>`. Change `utm_source` per place (`linkedin`, `x`, `hackernews`, `newsletter`).
3. **Scorecard:** once a month, note subscribers, inbound conversations, top referrers and notable comments. Leads and subscribers matter more than pageviews.

## Analytics

Google Analytics (`G-YPXJCELYNW`, set in `src/lib/analytics.ts`) loads only on Vercel production deployments (`VERCEL_ENV=production`). Local builds, test runs and preview deployments never send data.

## Project layout

- `src/pages/`: one file per route
- `src/content/`: site content (projects, publications, press, blog posts)
- `src/layouts/`, `src/components/`: shared layout and navigation
- `src/assets/`: images, optimised at build time
- `public/`: files served as-is (PDFs, favicons)
- `tests/unit/`, `tests/e2e/`: Vitest and Playwright tests
