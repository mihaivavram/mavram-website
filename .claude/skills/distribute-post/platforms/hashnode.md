# Step 3: Hashnode

The same cross-post as Dev.to, without the front-matter header: Hashnode takes its settings in the publish panel. Its "original URL" setting is the canonical URL.

UTM tags: `utm_source=hashnode&utm_medium=referral`.

## Output: two files

`.distribution/<slug>/hashnode-body.md`, the post body and nothing else:

```markdown
_Originally published on [mihaisplace.com](<url with UTM tags>)._

<body.md, verbatim>

---

<the footer>
```

`.distribution/<slug>/hashnode.md`, the fields:

```markdown
## Title

<post title>

## Subtitle (optional)

<post description>

## Cover image

Upload <post.json coverFile> (the local file in the repo).

## Body

Paste all of hashnode-body.md into the editor.

## Publish panel

- Tags (up to 5): <tags>
- Slug: <post slug>
- Are you republishing? → Add Original URL: https://mihaisplace.com/blog/<slug>
- SEO title: <post title>
- SEO description: <post description>
```

## Writing it

- **Footer:** the Dev.to footer, with the newsletter link tagged `utm_source=hashnode` instead.
- **Tags:** pick existing Hashnode tags that match the post's own tags. Hashnode tags can contain spaces, so they're closer to the post's tags than Dev.to's.

## Checks to show Mihai before publishing

1. The original URL is set under "Are you republishing?". Without it, Hashnode makes its own copy canonical.
2. Preview: the images load, and the tables, task lists and code blocks render.
