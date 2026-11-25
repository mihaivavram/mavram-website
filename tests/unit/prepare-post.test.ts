import { describe, expect, it } from 'vitest';
import {
  liveImageUrls,
  rewriteBody,
} from '../../.claude/skills/distribute-post/scripts/prepare-post.mjs';

const postDir = 'src/content/blog/my-post';
const diagramUrl = 'https://mihaisplace.com/_astro/diagram.AbC123_xYz.webp';
const live = new Map([['diagram', diagramUrl]]);
const post = (...lines: string[]) => `---\ntitle: 'My Post'\n---\n\n${lines.join('\n')}`;

describe('distribute-post prepare script', () => {
  it("finds each built image's live URL by its original file name", () => {
    const html =
      '<img alt="A diagram" loading="lazy" src="/_astro/diagram.AbC123_xYz.webp">' +
      '<img src="/avatar.png" alt="Avatar">';

    expect(liveImageUrls(html)).toEqual(live);
  });

  it('drops the frontmatter and makes images and links to the site absolute', () => {
    const { body, images, unmatched } = rewriteBody(
      post('![A diagram](./images/diagram.png)', '', 'See [the other post](/blog/other).'),
      live,
      postDir,
    );

    expect(body).toBe(
      `![A diagram](${diagramUrl})\n\nSee [the other post](https://mihaisplace.com/blog/other).`,
    );
    expect(images).toEqual([
      { alt: 'A diagram', file: 'src/content/blog/my-post/images/diagram.png', url: diagramUrl },
    ]);
    expect(unmatched).toEqual([]);
  });

  it('reports images that have no live URL', () => {
    expect(rewriteBody(post('![Missing](./missing.png)'), live, postDir).unmatched).toEqual([
      './missing.png',
    ]);
  });

  it('leaves code blocks as written, including shorter fences shown inside a longer one', () => {
    const { body, unmatched } = rewriteBody(
      post(
        '````markdown',
        '```ts',
        '![Example](./example.png)',
        '```',
        '~~~',
        '[A link](/blog/x)',
        '````',
        '',
        '![A diagram](./diagram.png)',
      ),
      live,
      postDir,
    );

    expect(body).toContain('![Example](./example.png)');
    expect(body).toContain('[A link](/blog/x)');
    expect(body).toContain(`![A diagram](${diagramUrl})`);
    expect(unmatched).toEqual([]);
  });
});
