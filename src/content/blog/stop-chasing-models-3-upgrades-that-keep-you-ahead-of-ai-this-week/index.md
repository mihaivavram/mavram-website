---
title: 'Stop Chasing Models: 3 Upgrades That Keep You Ahead of AI This Week'
description: 'New models drop every few weeks. What you can do is upgrade the stuff you actually control: your environment, your workflows, and how fast you get thoughts out of your head.'
pubDate: 2026-07-01
tags: [Agentic AI, AI engineering, Developer productivity]
cover: ./cover.png
coverAlt: 'Illustration of a person sprinting down a winding road toward a glowing sign that reads "Next best AI model", beside the words "Stop Chasing Models"'
---

New models drop every few weeks, and there's nothing you can do about how good they are. What you _can_ do is upgrade the stuff you actually control: your environment, your workflows, and even how fast you get thoughts out of your head. This week I'm thinking about three ways to do exactly that:

1. **Owning your harness** (and the software best practices that power it)
2. **Running async research agents** that work while you don't
3. **Ditching the keyboard** with automatic dictation

Let's begin:

## Own the Harness, Not the Latest Model

> Before we begin, a quick clarification: when I say _harness_, I don't just mean Claude Code, Cursor, or whatever shiny agent dropped this week. Those are the off-the-shelf starting point — the chassis, not the car. The harness I'm talking about is everything you build in and around them: your rules files, your custom commands, your tests and CI, and above all your codebase itself. The tool you download is the same one everyone else has. The harness you build on top of it is yours, and that's where the edge comes from.

Every few weeks a new model drops, the timeline melts down over one-shotted demos, and everyone quietly wonders if their entire setup just went obsolete. I get it, I've been there too.

But here's the reframe that changed how I work: you have basically zero control over how good the next model is. None. You can't make Anthropic train faster. What you _do_ control is how good you are as an engineer, and how good the environment is that the model runs in.

That environment is the **harness**: the system prompt, the tools, the context, the skills, and above all the codebase itself. An agent is just a model plus a harness. The model you rent by the token; the harness you build and own forever. So build it.

### Know your tools like a mechanic, not a passenger

Whether you drive Cursor, Claude Code, or something else, most people learn the happy path — type a prompt, accept the diff — and stop there. Go deeper: learn how your harness builds context, invokes tools, and what it's allowed to do without asking. Then configure it — rules files like `CLAUDE.md` or `.cursorrules`, custom commands, hooks that auto-run your linter and tests. That's how best practices stop being something you nag the agent about and become something the harness enforces on its own.

A passenger prompts and prays; a mechanic knows which knob to turn. Spend an afternoon in your tool's docs — it'll pay for itself the first time something goes sideways.

### Don't let your harness own you

It's shockingly easy to bolt on fifty skills, a dozen MCP servers, and a bloated CLAUDE.md, then wonder why your agent suddenly acts like it took a blow to the head. Every piece of your setup should be a choice you can actually defend.

Owning your harness means understanding what each part does — and grounding it in software patterns that have been working for thirty-plus years, way before LLMs were a thing:

- **Deep modules / information hiding** — small, simple interfaces hiding complex internals. The agent only needs to understand the door, not the whole house behind it.
- **Separation of concerns** — each module does one job, so a change stays local instead of rippling across everything.
- **DRY** — one source of truth per piece of logic. The agent edits it once, not in five copy-pasted places it might miss.
- **Strong typed interfaces** — explicit contracts between modules. The types tell the agent what's allowed and catch mistakes before anything runs.
- **Refactoring** — agents write code fast, which means they pile up mess fast too. Tidy continuously or drown eventually.

None of this is new. That's exactly the point. The stuff that kept human teams sane is the same stuff that keeps agents effective.

### Tests and CI/CD: your harness's immune system

This is the part most people skip, and it's the part that'll save you.

Good architecture is step one. Step two is a real testing pyramid: solid unit tests, proper integration tests, and eventually end-to-end tests that click through your app like an actual user. Plus an automated CI/CD pipeline running all of it on every single change.

"But that takes forever to set up." It used to! Here's the beautiful irony: AI can now scaffold your test suites and CI pipelines absurdly fast. The thing writing most of your code can also build the safety net that catches its own mistakes. Use that.

And you _need_ that safety net, because here's what happens without it. AI is writing more and more of your code, your codebase balloons, and one day something breaks. Now picture manually combing through thousands of lines of AI-generated code trying to find what snapped. That's not engineering, that's archaeology. With e2e tests in place, the pipeline goes red the moment something breaks, points at the exact spot, and the agent can often fix it before you've finished your coffee.

Fast, honest feedback is the speed limit on everything your agent does. Types, tests, linters, a real browser check — these turn a guessing agent into a self-correcting one. This is harness protocol 101, and it's non-negotiable.

### A clean codebase is literally cheaper

A well-architected codebase doesn't just mean fewer bugs. It burns fewer tokens, because the model understands it faster. Clear structure and tight modules mean less context wasted figuring out where things live, less time banging its head against the wall.

Flip it around: a messy codebase forces you onto the biggest, priciest model just to get the same work done, while a clean one lets a cheaper, dumber model crush it. Bad code has genuinely never been more expensive in the agentic era.

### Stay the driver

Delegate the tactical stuff — the typing, the syntax, the plumbing. Keep the strategic thinking. Your judgment and taste are the ceiling on what AI can produce; a low ceiling caps even the best model.

If your setup feels bloated, strip it back to a blank slate, watch what the agent does naked, then layer back only the things you understand and chose. That's ownership.

Start with truly owning software architecture. Read [A Philosophy of Software Design](https://www.amazon.com/dp/1732102201) if you are just starting out, or heck, ask your vibe coding workflow to summarize this whole repo for you ([https://github.com/mhadidg/software-architecture-books](https://github.com/mhadidg/software-architecture-books)) 🤯

### Steal from people who already figured this out

Don't build your harness from scratch. Two setups worth studying end-to-end:

[**gstack**](https://github.com/garrytan/gstack) by Garry Tan turns Claude Code into a virtual engineering team with explicit "gears": `/office-hours` grills your idea before any code exists, `/review` hunts complexity and stray edits, `/ship` runs test-first, `/freeze` protects modules you don't want touched, `/retro` closes the loop. His core insight: planning is not review, review is not shipping — blur them together and you get a mediocre blend of all three.

[**Matt Pocock's skills**](https://github.com/mattpocock/skills) take the composable, human-driven route: small, model-agnostic procedures built on fundamentals. `/grill-me` interviews you until the design is truly shared, `/tdd` enforces red-green-refactor, `/improve-codebase-architecture` finds the refactors that make code easier for agents to change. Matt deliberately keeps the thinking in the human — you drive, the skills execute.

The contrast is the lesson: Garry automates more of the sequence, Matt keeps you at the wheel. Study both, use them extensively, and adopt their patterns into your own harness. Oh and keep in the loop - I am sure there are more skills, frameworks, and harnesses to come.

If you want to learn more, here are some great resources:

- [Matt Pocock's Agentic Engineering Workflow (just copy him)](https://www.youtube.com/watch?v=nQwJVHCtDDY) — David Ondrej and Matt Pocock
- [How to Make Claude Code Your AI Engineering Team](https://www.youtube.com/watch?v=wkv2ifxPpF8) — Y Combinator
- [Conductor CEO Charlie Holtz Walks Us Through His AI Coding Setup](https://www.youtube.com/watch?v=fQmlML9Lay4) — Y Combinator
- [My Real AI Coding Workflow (build anything)](https://www.youtube.com/watch?v=gpOfsGW1xRk) — Tech with Tim

---

## Deep Research Reports, Emailed to You While You Do Literally Anything Else

If you want a powerful research assistant that can deeply search the web in various focused places (i.e. Reddit, YouTube, Hacker News, GitHub, arXiv, PubMed, SEC filings, and 30+ others) and only uses your Claude quota limits, try the [/deep-research-agent repo](https://github.com/mihaivavram/deep-research-agent).

It reads your question, picks which of those sources actually matter, and searches them all in parallel — then scores every page it pulls for relevance, authority, and recency, drops the weak ones, re-searches any gaps, and hands you one report where every finding is cited and confidence-rated. The installation instructions are in the `README.md`.

I've used it for the past few weeks on everything from fridge debugging problems, to what my options are for email newsletter readers, best frameworks for e2e iOS app tests, to how to rehab a particular tendon injury — and it gives incredibly thorough responses. Oh, and did I mention that it **emails you the report** and is completely free outside of your Claude subscription?

Here's the link if you want to try it: 👉 [github.com/mihaivavram/deep-research-agent](https://github.com/mihaivavram/deep-research-agent)

---

## Your Fingers Are the Bottleneck: Try Dictation

If you find yourself typing to LLMs and AI agents all day long, grab [Wispr Flow](https://wisprflow.ai) — it'll unlock some serious productivity gains.

I'm not sponsored by them (promise), but I finally bit the bullet after the gazillionth YouTube video swearing it was life-changing. Turns out the hype is real. Wispr Flow is basically voice-to-text done right: instead of writing everything out, you just talk and it writes for you. And it's shockingly good, seamlessly multilingual, blazingly fast, works pretty much anywhere (phone, laptop, your grandma's pager — okay, don't quote me on that one), with near-perfect fidelity.

Here's what sold me. When I'm planning out a feature for one of my projects, I might need a few paragraphs of organized thoughts and context. Typing that out could easily eat several minutes. With Wispr, I'm done in about one. Now picture doing that dozens of times a day; the thing basically pays for itself before lunch. Give it a shot, your fingers will thank you.

**Warning:** If you are a heavy "think as you type" person, maybe this tool is not for you. You can probably deduce why :D

Check it out here: 👉 [wisprflow.ai](https://wisprflow.ai)
