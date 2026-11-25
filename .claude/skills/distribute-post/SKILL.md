---
name: distribute-post
description: Use when a mihaisplace.com blog post is live in production and needs distributing, cross-posting or promoting on Buttondown (the Context Overflow newsletter), Dev.to, Hashnode, LinkedIn, Hacker News or Reddit.
argument-hint: '[post-slug]'
disable-model-invocation: true
---

# Distribute a live blog post

Walk Mihai through sharing one live post, one platform at a time. You prepare everything to paste, and Mihai does all the posting. Never post, send, submit or schedule anything yourself.

## Rules for every step

- **One platform per step.** Present the step, then stop. Wait for Mihai to say it's done (with the published URL, if there is one), skip it, or ask for changes. Update the checklist, then start the next step.
- **Canonical URL** is always `https://mihaisplace.com/blog/<slug>`, exactly as in `post.json`: no UTM tags, no trailing slash.
- **Links that readers click** carry UTM tags so Google Analytics shows where readers came from: `?utm_source=<source>&utm_medium=<medium>&utm_campaign=<slug>`. Each platform file gives its source and medium.
- **Copy the post body verbatim** from `.distribution/<slug>/body.md`. Never rewrite, shorten or humanize it. The cross-post must match the original.
- **Run the humanizer on every piece of new prose** before Mihai sees it: notes, intros, footers, LinkedIn and Reddit posts, alternative subject lines. **REQUIRED SUB-SKILL:** use humanizer:humanizer. Hacker News is the exception (see its file).
- **Voice:** Mihai's, first person, plain and specific, and matching the post's own voice. The consultancy is "Wholesome Future Labs".
- **Output:** write each step to `.distribution/<slug>/<platform>.md`, with each field under its own heading so it's easy to copy. In chat, show the short fields (titles, subject, tags, URLs) and the path to the file.

## Step 0: Prepare

1. **Pick the post.** Use the slug in `$ARGUMENTS`. If there isn't one, take the newest post in `src/content/blog/` with `draft: false` and confirm it with Mihai.
2. **Run** `node .claude/skills/distribute-post/scripts/prepare-post.mjs <slug>`. It checks that the post is live and writes `post.json` and `body.md` to `.distribution/<slug>/`.
   - Exit code 1: the post isn't ready. Tell Mihai why and stop.
   - Exit code 2: some images have no live URL. Show Mihai the list and stop.
3. **Read** `post.json`, `body.md` and the original `src/content/blog/<slug>/index.md`.
4. **Checklist.** If `.distribution/<slug>/checklist.md` exists, show it and resume at the first unchecked step. Otherwise create it:

   ```markdown
   # <post title>

   - [ ] Buttondown
   - [ ] Dev.to
   - [ ] Hashnode
   - [ ] LinkedIn
   - [ ] Hacker News
   - [ ] Reddit
   ```

   When a step is done, tick it and add the date and the published URL, or "skipped".

5. **If `pubDate` is today or yesterday**, suggest requesting indexing for the post in Google Search Console before the Dev.to and Hashnode steps, so Google sees the original first. Mihai decides whether to wait.

## The steps

Read each platform's file when its step starts, not before.

| Step | Platform    | Instructions              | Mihai gets                                                                  |
| ---- | ----------- | ------------------------- | --------------------------------------------------------------------------- |
| 1    | Buttondown  | `platforms/buttondown.md` | Subject, metadata and the full post as an email, with the canonical URL set |
| 2    | Dev.to      | `platforms/devto.md`      | One paste: a front-matter header (with `canonical_url`), then the full post |
| 3    | Hashnode    | `platforms/hashnode.md`   | The Dev.to body plus Hashnode's fields, including the original URL          |
| 4    | LinkedIn    | `platforms/linkedin.md`   | One short paragraph in Mihai's voice, the tracked link, and a claim check   |
| 5    | Hacker News | `platforms/hackernews.md` | A fit check, the title and URL to submit, and notes for Mihai's own comment |
| 6    | Reddit      | `platforms/reddit.md`     | A shortlist of subreddits with their current rules, then one post per pick  |

## Finish

When every step is done or skipped, show the checklist. Remind Mihai to add the results to the monthly scorecard (README, "Distribute"). Ask what to improve in this skill, and put platform-specific changes in that platform's file.

## Adding a platform

Add `platforms/<name>.md` with the same parts as the others: what Mihai gets, the output file layout, the platform's rules, and the checks before posting. Then add a row to the table and a line to the checklist template.

## Common mistakes

- UTM tags in a canonical URL, or a canonical URL with a trailing slash.
- Editing, summarizing or humanizing the post body in a cross-post.
- Starting the next platform before Mihai has said the current one is done or skipped.
- Fixing image paths by hand instead of rerunning the prepare script.
- Writing a Hacker News comment for Mihai to paste. HN's guidelines forbid generated and AI-edited text.
- Giving LinkedIn a hook, a closing question or hashtags. Mihai has decided against them (see `platforms/linkedin.md`).
