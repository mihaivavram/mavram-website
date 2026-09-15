import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import {
  blogPostSchema,
  postSchema,
  pressSchema,
  projectSchema,
  publicationSchema,
} from './lib/content-schemas';

// Posts written on this site: src/content/blog/<slug>/index.md, with their images alongside.
// The folder name is the post's URL (/blog/<slug>).
const blog = defineCollection({
  loader: glob({
    base: './src/content/blog',
    pattern: '*/index.md',
    generateId: ({ entry }) => entry.replace(/\/index\.md$/, ''),
  }),
  schema: ({ image }) => blogPostSchema(image()),
});

// One Markdown file per project, so each logo path resolves relative to its entry.
const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '*.md' }),
  schema: ({ image }) => projectSchema(image()),
});

const publications = defineCollection({
  loader: file('src/content/publications.yaml'),
  schema: publicationSchema,
});

const press = defineCollection({
  loader: file('src/content/press.yaml'),
  schema: pressSchema,
});

// Links to posts on the previous blog (mihaisplace.blog), shown as "Earlier writing".
const posts = defineCollection({
  loader: file('src/content/posts.yaml'),
  schema: postSchema,
});

export const collections = { blog, projects, publications, press, posts };
