import { getCollection } from 'astro:content';
import { sortPosts } from './posts';

// Blog posts, newest first. `npm run dev` also shows drafts so they can be previewed;
// builds for the live site never include them.
export async function getPosts() {
  return sortPosts(await getCollection('blog'), import.meta.env.DEV);
}
