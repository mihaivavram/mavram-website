// Renders public/og.png (1200x630), the preview image shown when the site is shared on
// LinkedIn, Slack, X, and similar. Run after a build so the self-hosted Inter font exists:
//   npm run build && npm run og-image
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { chromium } from '@playwright/test';

function findFiles(dir, extension) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return findFiles(path, extension);
    return entry.name.endsWith(extension) ? [path] : [];
  });
}

const [fontFile] = findFiles('dist', '.woff2');
if (!fontFile) throw new Error('No .woff2 font found in dist/. Run `npm run build` first.');
const font = readFileSync(fontFile).toString('base64');
const photo = readFileSync('src/assets/mihai-headshot.jpg').toString('base64');

const html = `<!doctype html>
<html>
  <head>
    <style>
      @font-face {
        font-family: Inter;
        src: url(data:font/woff2;base64,${font}) format('woff2');
        font-weight: 100 900;
      }
      * { margin: 0; box-sizing: border-box; }
      body {
        display: flex; align-items: center; gap: 72px;
        width: 1200px; height: 630px; padding: 0 104px;
        border-bottom: 14px solid #467569;
        background: #fafaf9; color: #111111; font-family: Inter, sans-serif;
      }
      img { width: 240px; height: 240px; border-radius: 50%; object-fit: cover; }
      h1 { font-size: 80px; font-weight: 700; letter-spacing: -0.03em; line-height: 1.05; }
      p { margin-top: 18px; color: #57534e; font-size: 42px; }
      .site { margin-top: 48px; color: #467569; font-size: 30px; font-weight: 600; }
    </style>
  </head>
  <body>
    <img src="data:image/jpeg;base64,${photo}" alt="" />
    <div>
      <h1>Mihai Avram</h1>
      <p>Founder &amp; AI Engineer</p>
      <div class="site">mihaisplace.com</div>
    </div>
  </body>
</html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: 'public/og.png' });
await browser.close();
console.log(`Wrote public/og.png using ${fontFile}`);
