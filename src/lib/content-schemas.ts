import { z } from 'astro/zod';

// Shared by src/content.config.ts and the unit tests, which pass a plain
// string schema in place of Astro's image() helper.

export const linkSchema = z.object({
  label: z.string().min(1),
  url: z.string().min(1),
});

export function projectSchema<Logo extends z.ZodType>(logo: Logo) {
  return z.object({
    title: z.string().min(1),
    group: z.enum(['current', 'past']),
    order: z.number().int(),
    logo,
    alt: z.string().min(1),
    links: z.array(linkSchema).default([]),
    tags: z.array(z.string()).default([]),
  });
}

export const publicationSchema = z.object({
  id: z.string().min(1),
  order: z.number().int(),
  title: z.string().min(1),
  authors: z.string().min(1),
  venue: z.string().min(1),
  url: z.string().min(1),
});

export const pressSchema = z.object({
  id: z.string().min(1),
  order: z.number().int(),
  title: z.string().min(1),
  outlet: z.string().min(1),
  date: z.string().min(1),
  url: z.string().min(1),
});

export const postSchema = z.object({
  id: z.string().min(1),
  order: z.number().int(),
  title: z.string().min(1),
  date: z.string().min(1),
  tags: z.array(z.string()),
  url: z.string().min(1),
});
