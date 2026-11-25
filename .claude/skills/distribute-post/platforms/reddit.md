# Step 6: Reddit

One or two subreddits per post, each with a text post written for that community. Reddit punishes link drops and copy-pasted promotion, so the post has to be useful without the click. Rules differ between subreddits and change often, so check them live every time.

UTM tags: `utm_source=reddit&utm_medium=social&utm_content=<subreddit>`.

## Part A: the shortlist (stop for Mihai's pick)

1. Pick 3 to 5 candidates from the list below that fit the post's pillar and topic.
2. For each one, read the current rules: fetch `https://www.reddit.com/r/<sub>/about/rules.json` and `https://www.reddit.com/r/<sub>/about.json` (the sidebar). If Reddit blocks the fetch, ask Mihai to open `https://www.reddit.com/r/<sub>/about/rules` and paste them.
3. Show a table with these columns: subreddit, why it fits, link posts allowed, self-promotion rule, required flair or tags, any rule on AI-generated content, and any weekly thread for sharing.
4. Recommend one or two subreddits, then stop until Mihai picks.

Where a subreddit restricts self-promotion, Mihai's own Reddit advice is to ask the moderators first by modmail. For those picks, also write a short, honest modmail (humanized): what the post is, why it helps that subreddit's readers, and that it's free to read.

## Starting list (unverified until checked)

- **Agent harnesses and coding agents:** r/ClaudeAI, r/ChatGPTCoding, r/cursor
- **Getting agents into production:** r/AI_Agents (reported: text posts with flair, links in the comments, about 10% self-promotion), r/LLMDevs (reported: strict about promotion), r/LocalLLaMA (only if the post covers local models)
- **Founders and small teams:** r/SaaS, r/indiehackers, r/startups (reported: self-promotion only in designated threads)
- **By topic:** r/cybersecurity and r/netsec (technical, high bar) for security posts; r/programming for general software topics (check its current rules on AI content)

When a candidate turns out to be a good fit or a bad one, update this list.

## Part B: one post per subreddit Mihai picks

Write each post for that subreddit's readers:

- **Title:** specific and plain, often the core finding or a real question. No clickbait, no emoji. Add any flair or tag the subreddit requires.
- **Body:** the problem, what Mihai found, and the key points in full, so it's worth reading without clicking. Say plainly that it's Mihai's own write-up ("I wrote up the details on my blog"). Put the link at the end, or in a comment if the subreddit requires that.
- **Tone:** a practitioner talking to practitioners, genuine and transparent, there to help the community rather than to drop a link. No marketing language, and no mention of Mihai's services.
- Don't post the same text to more than one subreddit. Reddit's spam filters look for it.
- Run the title and body through the humanizer.

## Output: `.distribution/<slug>/reddit.md`

```markdown
## r/<subreddit>

Rules: <link> (checked <date>): <the rules that apply, in one line>
Flair: <flair, or none>

### Title

<title>

### Body

<body>

### Link placement

<in the body, or in the first comment>: <url with UTM tags>
```

## Checks to show Mihai before posting

1. Read it and make it your own before posting. Some subreddits remove posts that read as AI-generated.
2. Accounts that only post their own links get filtered or banned. Taking part in the subreddit between posts matters.
3. Stay around for the first couple of hours to answer comments.
