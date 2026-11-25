# Step 2: Dev.to

Dev.to's Markdown editor reads a front-matter header, so the whole cross-post is one paste. `canonical_url` tells search engines the blog has the original.

UTM tags: `utm_source=devto&utm_medium=referral`.

## Output: `.distribution/<slug>/devto.md`

The whole file is the paste, with nothing before or after it, so Mihai can select all and copy it into the editor. Show the checks below in chat.

```markdown
---
title: '<post title>'
published: false
description: '<post description>'
tags: <up to 4, comma-separated>
canonical_url: https://mihaisplace.com/blog/<slug>
cover_image: <post.json cover>
---

_Originally published on [mihaisplace.com](<url with UTM tags>)._

<body.md, verbatim>

---

<the footer>
```

Quote `title` and `description` in single quotes, and double any single quote inside them (`''`), so a colon or apostrophe doesn't break the YAML.

## Writing it

- **Tags:** at most 4. Dev.to tags are lowercase letters and numbers only, with no spaces or hyphens. Map the post's tags to existing, popular Dev.to tags (for example `ai`, `security`, `programming`, `webdev`, `devops`, `llm`, `productivity`). Check that each one exists at `https://dev.to/t/<tag>`.
- **The footer (1 or 2 sentences):** where Mihai writes about this, with a link to the newsletter at `https://buttondown.com/marvram`. Humanize it.
- `published: false` saves a draft, so Mihai can preview it before publishing.

## Checks to show Mihai before publishing

1. In the default (rich text and Markdown) editor, the header may not be read. If the preview shows the `---` block as text, move the values into the editor's fields. The canonical URL sits behind the gear icon next to "Save draft".
2. Preview: the images load, and the tables, task-list checkboxes and code blocks render.
3. The cover image may be cropped (Dev.to suggests 1000×420). Check how it looks.
4. After publishing, the published URL goes in the checklist.
