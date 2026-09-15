import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

const root = fileURLToPath(new URL('../../', import.meta.url));

function filesUnder(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? filesUnder(path) : [path];
  });
}

// Every file under src/, so old names and dead links can't come back through components or helpers either.
const sources = filesUnder(join(root, 'src')).map((path) => ({
  file: relative(root, path),
  text: readFileSync(path, 'utf8'),
}));

// Links confirmed dead during the 2026 site audit. Keep them from coming back.
const DEAD_LINKS = [
  /\/\/[a-z]+\.iuni\.iu\.edu/i,
  /dsc\.soic\.indiana\.edu/i,
  /welsome\.org/i,
  /helpwithcovid\.com/i,
  /play\.google\.com\/store\/apps\/details\?id=com\.cnets\.fakey/i,
  /itunes\.apple\.com\/us\/app\/fakey-news/i,
  /echo\.com\/careers/i,
  /uni-weimar\.de\/medien\/webis\/events\/wsdm-cup-17/i,
  /sites\.google\.com\/site\/ezrte13/i,
  /rti-publication-file-4295b53c/i,
];

// Names that were replaced by the current product and company names.
const OLD_NAMES = ['QuickBooks Sync', 'GamePicker', 'Wholesome Future Works'];

describe('site content', () => {
  it('has no links to pages that no longer exist', () => {
    const hits = sources.flatMap(({ file, text }) =>
      DEAD_LINKS.filter((pattern) => pattern.test(text)).map((pattern) => `${file}: ${pattern}`),
    );

    expect(hits).toEqual([]);
  });

  it('uses the current product and company names', () => {
    const hits = sources.flatMap(({ file, text }) =>
      OLD_NAMES.filter((name) => text.includes(name)).map((name) => `${file}: ${name}`),
    );

    expect(hits).toEqual([]);
  });
});
