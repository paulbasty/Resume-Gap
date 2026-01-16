/*
Enhanced scraper:
- Fetches the target homepage
- Inlines remote CSS and JS assets (replaces <link rel="stylesheet"> and <script src=> with inline content)
- Preserves images and other media as remote URLs (can be extended to download them)
- Writes the processed HTML to `public/timex.html`
- Writes a JS module `AppAssets/timex_html.js` exporting the HTML string so the native app can embed it in a WebView

Notes:
- This is an educational demo. Verify terms of service before scraping.
*/

import fs from 'fs/promises';
import path from 'path';
import axios from 'axios';
import { load } from 'cheerio';
import crypto from 'crypto';

const OUT = './public/timex.html';
const APP_ASSETS_DIR = './AppAssets';
const APP_HTML_MODULE = `${APP_ASSETS_DIR}/timex_html.js`;
const TARGET = 'https://www.timex.com/';

async function fetchText(url) {
  console.log('Fetching', url);
  const res = await axios.get(url, { responseType: 'text', headers: { 'User-Agent': 'node.js scraper' } });
  return res.data;
}

function resolveUrl(href, base) {
  try {
    return new URL(href, base).href;
  } catch (e) {
    return href;
  }
}

async function inlineStyles($, base) {
  const links = $('link[rel="stylesheet"][href]');
  await Promise.all(links.toArray().map(async (el) => {
    const href = $(el).attr('href');
    const url = resolveUrl(href, base);
    try {
      const css = await fetchText(url);
      const style = `<style>/* inlined from ${url} */\n${css}\n</style>`;
      $(el).replaceWith(style);
      console.log('Inlined CSS', url);
    } catch (err) {
      console.warn('Failed to inline CSS', url, err.message || err);
    }
  }));
}

async function inlineScripts($, base) {
  const scripts = $('script[src]');
  await Promise.all(scripts.toArray().map(async (el) => {
    const src = $(el).attr('src');
    const url = resolveUrl(src, base);
    try {
      const js = await fetchText(url);
      const s = `<script>/* inlined from ${url} */\n${js}\n</script>`;
      $(el).replaceWith(s);
      console.log('Inlined JS', url);
    } catch (err) {
      console.warn('Failed to inline JS', url, err.message || err);
    }
  }));
}

async function downloadBinary(url, outPath) {
  try {
    const res = await axios.get(url, { responseType: 'arraybuffer', headers: { 'User-Agent': 'node.js scraper' } });
    await fs.writeFile(outPath, res.data);
    return true;
  } catch (err) {
    console.warn('Failed to download asset', url, err.message || err);
    return false;
  }
}

function sanitizeFilename(url) {
  try {
    const u = new URL(url);
    const base = path.basename(u.pathname) || 'asset';
    const ext = path.extname(base) || '';
    const name = path.basename(base, ext).replace(/[^a-z0-9\-_.]/gi, '_').slice(0, 60);
    const hash = crypto.createHash('md5').update(url).digest('hex').slice(0, 8);
    return `${name}-${hash}${ext}`;
  } catch (e) {
    const hash = crypto.createHash('md5').update(url).digest('hex').slice(0, 8);
    return `asset-${hash}`;
  }
}

async function rewriteAndDownloadAssets($, base, assetsDir, mapping) {
  // mapping: originalUrl -> localPath
  await ensureDir(assetsDir);

  // Handle <img src>
  const imgs = $('img[src]');
  await Promise.all(imgs.toArray().map(async (el) => {
    const $el = $(el);
    const src = $el.attr('src');
    if (!src) return;
    const url = resolveUrl(src, base);
    if (mapping[url]) {
      $el.attr('src', mapping[url]);
      return;
    }
    const fname = sanitizeFilename(url);
    const outRel = `/timex_assets/${fname}`;
    const outPath = path.join(assetsDir, fname);
    const ok = await downloadBinary(url, outPath);
    if (ok) {
      mapping[url] = outRel;
      $el.attr('src', outRel);
    }
  }));

  // Handle <source src> and <video poster>
  const sources = $('[src]').filter((i, el) => ['source', 'video', 'audio'].includes(el.tagName));
  await Promise.all(sources.toArray().map(async (el) => {
    const $el = $(el);
    const src = $el.attr('src');
    if (!src) return;
    const url = resolveUrl(src, base);
    if (mapping[url]) {
      $el.attr('src', mapping[url]);
      return;
    }
    const fname = sanitizeFilename(url);
    const outRel = `/timex_assets/${fname}`;
    const outPath = path.join(assetsDir, fname);
    const ok = await downloadBinary(url, outPath);
    if (ok) {
      mapping[url] = outRel;
      $el.attr('src', outRel);
    }
  }));

  // Handle srcset attributes (e.g., <img srcset="...">)
  const srcsets = $('[srcset]');
  await Promise.all(srcsets.toArray().map(async (el) => {
    const $el = $(el);
    const raw = $el.attr('srcset') || '';
    const parts = raw.split(',').map(s => s.trim()).filter(Boolean);
    const rewritten = await Promise.all(parts.map(async (part) => {
      const [urlPart, descriptor] = part.split(/\s+/);
      const url = resolveUrl(urlPart, base);
      if (mapping[url]) return `${mapping[url]}${descriptor ? ' ' + descriptor : ''}`;
      const fname = sanitizeFilename(url);
      const outRel = `/timex_assets/${fname}`;
      const outPath = path.join(assetsDir, fname);
      const ok = await downloadBinary(url, outPath);
      if (ok) {
        mapping[url] = outRel;
        return `${outRel}${descriptor ? ' ' + descriptor : ''}`;
      }
      return part; // fallback
    }));
    $el.attr('srcset', rewritten.join(', '));
  }));

  // Handle url(...) in inlined <style> tags
  const styles = $('style');
  await Promise.all(styles.toArray().map(async (el) => {
    let css = $(el).html() || '';
    const urls = [];
    const re = /url\(([^)]+)\)/g;
    let m;
    while ((m = re.exec(css)) !== null) {
      let inside = m[1].trim().replace(/^['"]|['"]$/g, '');
      if (!inside) continue;
      const full = resolveUrl(inside, base);
      urls.push({ match: m[0], url: full });
    }
    for (const u of urls) {
      if (mapping[u.url]) {
        css = css.split(u.match).join(`url(${mapping[u.url]})`);
        continue;
      }
      const fname = sanitizeFilename(u.url);
      const outRel = `/timex_assets/${fname}`;
      const outPath = path.join(assetsDir, fname);
      const ok = await downloadBinary(u.url, outPath);
      if (ok) {
        mapping[u.url] = outRel;
        css = css.split(u.match).join(`url(${outRel})`);
      }
    }
    $(el).text(css);
  }));
}

async function ensureDir(dir) {
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch (e) {
    // ignore
  }
}

async function main() {
  try {
    const html = await fetchText(TARGET);
    const $ = load(html);

    // Remove robots meta that may interfere with local viewing
    $('meta[name="robots"]').remove();

    // Ensure base so relative URLs resolve when opened from /timex.html
    if ($('base').length === 0) {
      $('head').prepend(`<base href="${TARGET}">`);
    }

    // Inline styles and scripts (best-effort)
    await inlineStyles($, TARGET);
    await inlineScripts($, TARGET);

    // Download and rewrite assets
    const assetsDir = path.join(path.dirname(OUT), 'timex_assets');
    const mapping = {};
    await rewriteAndDownloadAssets($, TARGET, assetsDir, mapping);

    const outHtml = $.html();

    await ensureDir(path.dirname(OUT));
    await fs.writeFile(OUT, outHtml, 'utf8');
    console.log('Wrote', OUT);

    // Also write a JS module that exports the HTML string for embedding into native WebView
    await ensureDir(APP_ASSETS_DIR);
    const moduleContent = `export default ${JSON.stringify(outHtml)};\n`;
    await fs.writeFile(APP_HTML_MODULE, moduleContent, 'utf8');
    console.log('Wrote', APP_HTML_MODULE);

  } catch (err) {
    console.error('Error during scrape:', err.message || err);
    process.exitCode = 2;
  }
}

main();
