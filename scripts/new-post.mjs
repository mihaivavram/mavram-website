// Creates a draft blog post: npm run new-post "Post title"
// The post goes in src/content/blog/<slug>/index.md; put its images in the same folder.
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

/** @param {string} title */
export function slugify(title) {
  return title
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * @param {string} title
 * @param {Date} [date]
 */
export function postTemplate(title, date = new Date()) {
  return `---
title: ${JSON.stringify(title)}
description: ''
pubDate: ${date.toISOString().slice(0, 10)}
tags: []
draft: true
---

Write the post here in Markdown. Put images in this folder and reference them like this:

![Describe what the image shows](./image.png)
`;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const title = process.argv.slice(2).join(' ').trim();
  if (!title) {
    console.error('Usage: npm run new-post "Post title"');
    process.exit(1);
  }
  const slug = slugify(title);
  const dir = fileURLToPath(new URL(`../src/content/blog/${slug}/`, import.meta.url));
  if (existsSync(dir)) {
    console.error(`src/content/blog/${slug} already exists.`);
    process.exit(1);
  }
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.md'), postTemplate(title));
  console.log(`Created src/content/blog/${slug}/index.md as a draft.`);
  console.log('Preview it with npm run dev, then set draft: false to publish.');
}
