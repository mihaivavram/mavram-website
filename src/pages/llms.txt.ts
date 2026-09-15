import { getPosts } from '../lib/blog';
import { NAV_ITEMS } from '../lib/nav';
import { isoDate } from '../lib/posts';
import { BLOG_DESCRIPTION, SITE_NAME, canonicalUrl } from '../lib/site';
import { PROFILE_LINKS } from '../lib/structured-data';

// A plain-text guide for AI assistants (https://llmstxt.org): who Mihai is and which pages to read.
// Blog posts come from the collection, so every new post is listed on the next deploy.

// Facts from the About page and the home page's Person structured data.
const SUMMARY =
  'Mihai Avram is a founder and AI engineer. Through Wholesome Future Labs, Mihai helps companies get AI out of the demo stage and into their actual product.';
const BACKGROUND =
  "Fifteen years of building software, some of it as CTO. Creator of Fakey, a news literacy tool for Web, Android, and iOS, and winner of the IU Distinguished Master's Thesis Award for work on Fakey and Hoaxy. Studied at Indiana University and Purdue University.";
const CURRENTLY = [
  'Helping founders build and ship AI into their products, most recently Cingo Research.',
  'Growing LACRM QuickSync, a SaaS that keeps invoicing and financial data in sync between QuickBooks and Less Annoying CRM.',
  'Running GamePass Picker, a “Rotten Tomatoes for gaming” with 4,000+ users.',
];

// Each page's meta description, except About, whose description is in the first person.
const PAGE_NOTES: Record<string, string> = {
  '/': 'Background, current work and ways to get in touch.',
  '/cv': 'The resume of Mihai Avram, founder and AI engineer, available as a PDF.',
  '/projects':
    'Current and past projects by Mihai Avram, including LACRM QuickSync, Cingo Research, Elebase and Fakey.',
  '/blog': BLOG_DESCRIPTION,
  '/publications':
    'Research by Mihai Avram on misinformation, social networks and machine learning, published at CSCW, IEEE and the Harvard Kennedy School Misinformation Review.',
  '/press':
    "Press coverage of Mihai Avram's work, including Poynter and Indiana University features on Fakey.",
};

// Escaping brackets keeps a title like "[Draft" from breaking the link.
const link = (name: string, url: string, note?: string) =>
  `- [${name.replace(/[[\]]/g, '\\$&')}](${url})${note ? `: ${note}` : ''}`;

export async function GET() {
  const posts = await getPosts();
  const lines = [
    `# ${SITE_NAME}`,
    '',
    `> ${SUMMARY}`,
    '',
    BACKGROUND,
    '',
    'Currently:',
    '',
    ...CURRENTLY.map((item) => `- ${item}`),
    '',
    '## Pages',
    '',
    ...NAV_ITEMS.map(({ href, label }) => link(label, canonicalUrl(href), PAGE_NOTES[href])),
    '',
    '## Blog posts',
    '',
    ...posts.map((post) =>
      link(
        post.data.title,
        canonicalUrl(`/blog/${post.id}`),
        `${isoDate(post.data.pubDate)}. ${post.data.description}`,
      ),
    ),
    '',
    '## Optional',
    '',
    link('RSS feed', canonicalUrl('/rss.xml'), 'every blog post, newest first'),
    ...PROFILE_LINKS.map(({ name, url }) => link(name, url)),
  ];

  return new Response(`${lines.join('\n')}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
