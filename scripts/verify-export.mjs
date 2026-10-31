/**
 * Verifies the static export before it is published.
 *
 * Guards the things that are easy to break silently: metadata coverage, one
 * <h1> per page, valid JSON-LD, OG images that actually exist, duplicate
 * titles, image alt text, sitemap/route parity and internal links.
 *
 * Run automatically by `npm run build` (postbuild). Exits non-zero on failure
 * so a broken export never reaches GitHub Pages.
 */
import fs from "fs";
import path from "path";

const OUT = path.resolve("out");

function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else acc.push(full);
  }
  return acc;
}

const errors = [];
const fail = (msg) => errors.push(msg);

const files = walk(OUT);
const htmlFiles = files.filter((f) => f.endsWith(".html"));
const rel = (f) => path.relative(OUT, f).replace(/\\/g, "/");
const is404 = (r) => r === "404.html" || r === "404/index.html";

const pages = htmlFiles.map((file) => {
  const html = fs.readFileSync(file, "utf8");
  const route = "/" + rel(file).replace(/index\.html$/, "");
  const grab = (re) => (html.match(re) || [])[1] ?? null;
  const count = (re) => (html.match(re) || []).length;
  return {
    file,
    rel: rel(file),
    route,
    html,
    title: grab(/<title>([^<]*)<\/title>/),
    description: grab(/<meta name="description" content="([^"]*)"/),
    canonical: grab(/<link rel="canonical" href="([^"]*)"/),
    lang: grab(/<html\b[^>]*\blang="([^"]*)"/),
    h1Count: count(/<h1[\s>]/g),
    ogImage: grab(/<meta property="og:image" content="([^"]*)"/),
    ldBlocks: [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]),
    imgsMissingAlt: count(/<img(?![^>]*\balt=)[^>]*>/g),
  };
});

// --- per-page checks -------------------------------------------------------
for (const p of pages) {
  if (!p.title) fail(`${p.rel}: missing <title>`);
  if (!p.description) fail(`${p.rel}: missing meta description`);
  if (!p.canonical) fail(`${p.rel}: missing canonical`);
  if (p.h1Count !== 1) fail(`${p.rel}: expected 1 <h1>, found ${p.h1Count}`);
  if (p.imgsMissingAlt > 0) fail(`${p.rel}: ${p.imgsMissingAlt} <img> without alt`);

  for (const block of p.ldBlocks) {
    try {
      JSON.parse(block);
    } catch {
      fail(`${p.rel}: invalid JSON-LD block`);
    }
  }

  if (!p.ogImage) {
    fail(`${p.rel}: missing og:image`);
  } else {
    const local = p.ogImage.replace(/^https?:\/\/[^/]+/, "").split("?")[0];
    if (!fs.existsSync(path.join(OUT, local))) {
      fail(`${p.rel}: og:image does not exist (${local})`);
    }
  }

  const expectedLang = p.route === "/ro/" || p.route.startsWith("/ro/") ? "ro" : "en";
  if (p.lang !== expectedLang) {
    fail(`${p.rel}: html lang is "${p.lang}", expected "${expectedLang}"`);
  }
}

// --- duplicate titles / descriptions --------------------------------------
for (const field of ["title", "description"]) {
  const seen = new Map();
  for (const p of pages) {
    if (is404(p.rel)) continue;
    const value = p[field];
    if (!value) continue;
    seen.set(value, [...(seen.get(value) ?? []), p.rel]);
  }
  for (const [value, list] of seen) {
    if (list.length > 1) {
      fail(`duplicate ${field}: ${JSON.stringify(value.slice(0, 70))} on ${list.join(", ")}`);
    }
  }
}

// --- sitemap parity --------------------------------------------------------
const sitemapPath = path.join(OUT, "sitemap.xml");
if (!fs.existsSync(sitemapPath)) {
  fail("missing sitemap.xml");
} else {
  const sitemap = fs.readFileSync(sitemapPath, "utf8");
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (urls.length === 0) fail("sitemap.xml has no <loc> entries");

  for (const url of urls) {
    const target = url.replace(/^https?:\/\/[^/]+/, "");
    const candidates = [
      path.join(OUT, target),
      path.join(OUT, target, "index.html"),
      path.join(OUT, target.replace(/\/$/, "") + ".html"),
    ];
    if (!candidates.some((c) => fs.existsSync(c) && fs.statSync(c).isFile())) {
      fail(`sitemap URL has no file: ${target}`);
    }
  }

  const inSitemap = new Set(
    urls.map((u) => u.replace(/^https?:\/\/[^/]+/, "").replace(/\/$/, "") || "/")
  );
  for (const p of pages) {
    if (is404(p.rel)) continue;
    const key = p.route.replace(/\/$/, "") || "/";
    if (!inSitemap.has(key)) fail(`${p.rel}: page missing from sitemap.xml`);
  }
}

// --- internal links --------------------------------------------------------
function resolves(href) {
  const clean = href.split("#")[0].split("?")[0];
  if (!clean || clean === "/") return fs.existsSync(path.join(OUT, "index.html"));
  const target = clean.replace(/^\/+/, "");
  const candidates = [
    path.join(OUT, target),
    path.join(OUT, target, "index.html"),
    path.join(OUT, target.replace(/\/$/, "") + ".html"),
  ];
  return candidates.some((c) => fs.existsSync(c) && fs.statSync(c).isFile());
}

for (const p of pages) {
  const hrefs = [...p.html.matchAll(/href="(\/[^"]*)"/g)].map((m) => m[1]);
  for (const href of new Set(hrefs)) {
    if (!resolves(href)) fail(`${p.rel}: broken internal link ${href}`);
  }
}

// --- font coverage ---------------------------------------------------------
// The webfonts are subsetted to the characters the site uses. If new copy adds
// a glyph the subset lacks, the page would silently fall back to a different
// typeface, so fail the build instead.
const charsetPath = path.resolve("public/fonts/charset.json");
if (fs.existsSync(charsetPath)) {
  const covered = new Set(JSON.parse(fs.readFileSync(charsetPath, "utf8")));
  const missing = new Map();
  for (const p of pages) {
    for (const ch of p.html) {
      const cp = ch.codePointAt(0);
      if (cp <= 0x20 || cp === 0x7f) continue;
      if (covered.has(cp) || missing.has(ch)) continue;
      missing.set(ch, p.rel);
    }
  }
  for (const [ch, rel] of missing) {
    const hex = ch.codePointAt(0).toString(16).toUpperCase().padStart(4, "0");
    fail(
      `font subset is missing U+${hex} (${JSON.stringify(ch)}) in ${rel} - run npm run generate:fonts`
    );
  }
}

// --- report ----------------------------------------------------------------
if (errors.length) {
  console.error(`\nverify-export: ${errors.length} problem(s)\n`);
  for (const e of errors) console.error("  - " + e);
  console.error("");
  process.exit(1);
}

console.log(
  `verify-export: ${pages.length} pages OK (metadata, h1, JSON-LD, og:image, lang, sitemap, links)`
);
