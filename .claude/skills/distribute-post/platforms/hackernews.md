# Step 5: Hacker News

A link submission: the post's own title and its clean URL. This step writes no text for Mihai to post, and the humanizer doesn't apply. The [HN guidelines](https://news.ycombinator.com/newsguidelines.html) say "Please don't put generated text in HN posts" and, for comments, "Don't post generated text or AI-edited text." Breaking them can get the account or the domain penalized.

No UTM tags: submit the canonical URL exactly.

## The rules that matter for submitting your own post

Quoted from the guidelines (checked on 2026-11-25):

- "It's ok to post your own stuff part of the time, but the primary use of the site should be for curiosity." And: "Please don't use HN primarily for promotion."
- Off topic: anything you'd see on TV news, and most stories about politics, crime, sports or celebrities. On topic: "Anything that good hackers would find interesting."
- Titles: "use the original title, unless it is misleading or linkbait; don't editorialize." No uppercase or exclamation points for emphasis. Take the site name out of the title, and crop a "gratuitous number or number + adjective" unless the number is meaningful.
- "Don't solicit upvotes, comments, or submissions."
- "Please don't delete and repost."

## Output: `.distribution/<slug>/hackernews.md`

```markdown
## Fit check

<go or no-go, and why, in 2 or 3 sentences: is it technical, original and grounded in Mihai's own experience, or is it closer to marketing?>

## Title (max 80 characters)

<the original title, cleaned up only as the guidelines require; say what changed and why>

## URL

https://mihaisplace.com/blog/<slug>

## Submit

https://news.ycombinator.com/submit (leave the text field empty)

## Notes for your own first comment (optional)

<3 to 5 bullet facts from the post: what prompted it, what surprised Mihai, what's still unsettled. Raw notes, not sentences to paste.>
```

## Checks to show Mihai before submitting

1. Ask when Mihai last submitted a post from mihaisplace.com. If it was recently, suggest holding this one.
2. Mihai writes any first comment personally, without AI editing.
3. Timing: weekday mornings, US Eastern time, are the usual advice. It's folklore, not anything HN documents.
4. Don't ask anyone to upvote it. HN detects voting rings and penalizes them.
