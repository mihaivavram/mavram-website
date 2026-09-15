import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts } from '../lib/blog';
import { BLOG_DESCRIPTION, SITE_NAME, SITE_URL } from '../lib/site';

// The feed that syndication services (Dev.to, Medium, feed readers) import from.
export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: `${SITE_NAME} - Blog`,
    description: BLOG_DESCRIPTION,
    site: context.site ?? SITE_URL,
    trailingSlash: false,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}`,
      categories: post.data.tags,
    })),
    customData: '<language>en-us</language>',
  });
}
