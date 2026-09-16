import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { render } from 'astro:content';
import { getPosts } from '../lib/blog';
import { BLOG_DESCRIPTION, SITE_NAME, SITE_URL, absoluteUrls } from '../lib/site';

// The feed that syndication services (Dev.to, Medium, feed readers) import from. Each item
// carries the full post, so readers don't have to click through.
export async function GET(context: APIContext) {
  const posts = await getPosts();
  const container = await AstroContainer.create();
  const items = await Promise.all(
    posts.map(async (post) => {
      const { Content } = await render(post);
      return {
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.pubDate,
        link: `/blog/${post.id}`,
        categories: post.data.tags,
        content: absoluteUrls(await container.renderToString(Content)),
      };
    }),
  );
  return rss({
    title: `${SITE_NAME} - Blog`,
    description: BLOG_DESCRIPTION,
    site: context.site ?? SITE_URL,
    trailingSlash: false,
    items,
    xmlns: { atom: 'http://www.w3.org/2005/Atom' },
    // The feed's own address, which feed validators and readers expect.
    customData: `<language>en-us</language><atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>`,
  });
}
