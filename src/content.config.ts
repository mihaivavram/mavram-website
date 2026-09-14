import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { postSchema, pressSchema, projectSchema, publicationSchema } from './lib/content-schemas';

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

const posts = defineCollection({
  loader: file('src/content/posts.yaml'),
  schema: postSchema,
});

export const collections = { projects, publications, press, posts };
