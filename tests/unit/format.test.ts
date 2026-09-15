import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import { parse } from 'yaml';
import { formatDate, publicationLinkLabel, toIsoDate } from '../../src/lib/format';

describe('formatDate', () => {
  it('formats month/day/year dates', () => {
    expect(formatDate('04/25/2022')).toBe('Apr 25, 2022');
    expect(formatDate('5/17/2020')).toBe('May 17, 2020');
  });

  it('keeps year-only dates', () => {
    expect(formatDate('2019')).toBe('2019');
  });

  it('rejects dates in other formats', () => {
    expect(() => formatDate('2020-01-30')).toThrow();
    expect(() => formatDate('13/01/2020')).toThrow();
  });
});

describe('toIsoDate', () => {
  it('produces machine-readable dates', () => {
    expect(toIsoDate('2/16/2020')).toBe('2020-02-16');
    expect(toIsoDate('2019')).toBe('2019');
  });
});

describe('publicationLinkLabel', () => {
  it.each([
    ['https://dl.acm.org/doi/pdf/10.1145/3449080', 'PDF'],
    ['https://arxiv.org/pdf/2005.04682.pdf', 'PDF'],
    ['https://www.rti.org/sites/default/files/resources/file.pdf#page=34', 'PDF'],
    ['/papers/MDPI-InformationPublication.pdf', 'PDF'],
    ['https://doi.org/10.1109/TMSCS.2017.2768426', 'DOI'],
    ['https://docs.lib.purdue.edu/jpur/vol3/iss1/2/', 'Paper'],
  ])('labels %s as %s', (url, label) => {
    expect(publicationLinkLabel(url)).toBe(label);
  });
});

describe('content dates', () => {
  it.each(['posts.yaml', 'press.yaml'])('every date in %s can be displayed', (file) => {
    const path = fileURLToPath(new URL(`../../src/content/${file}`, import.meta.url));
    const entries = parse(readFileSync(path, 'utf8')) as { date: string }[];

    for (const { date } of entries) {
      expect(() => formatDate(date), date).not.toThrow();
    }
  });
});
