# Step 1: Buttondown (Context Overflow)

The email is the whole post with a short note from Mihai at the top. Buttondown also publishes every email on a public archive page, so the email's canonical URL points that page back to the blog.

UTM tags: `utm_source=newsletter&utm_medium=email`.

## Output: `.distribution/<slug>/buttondown.md`

```markdown
## Subject

<post title>

## Description (metadata: used for the archive page and search)

<post description>

## Slug (metadata)

<post slug>

## Canonical URL (metadata, when you finalize the email)

https://mihaisplace.com/blog/<slug>

## Body (paste into Markdown mode)

<the note>

Prefer the web version? [Read it on mihaisplace.com](<url with UTM tags>).

---

<body.md, verbatim>

---

<the footer>
```

## Writing it

- **Subject:** the post title. If it's longer than 60 characters, also offer one shorter alternative, run through the humanizer.
- **The note (2 to 4 sentences):** why Mihai wrote this post and who it's for, in first person. Name one specific thing in it worth the reader's time. Don't open with "In this issue" or a greeting formula.
- **The footer (1 or 2 sentences):** invite readers to reply with their own experience of the topic, since replies go straight to Mihai.
- Humanize the note, the footer and any alternative subject. Leave the body alone.

## Checks to show Mihai before sending

1. The editor is in **Markdown mode**, not Fancy mode, so tables and code blocks survive the paste.
2. The canonical URL is set in the metadata section.
3. Send a test email to yourself, and check the images, tables and code blocks. The post's images are `.webp` files, which Outlook's desktop app doesn't display. If the test shows missing images, tell Claude. This is a known gap that needs a separate fix.
4. The email will appear in the public archive, so the canonical URL matters.

## Not used: RSS-to-email

Buttondown can send each new RSS item automatically and set the canonical URL itself. Mihai prefers to add a personal note and review each issue before it sends.
