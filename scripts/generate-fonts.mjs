/**
 * Regenerates the self-hosted webfonts in app/fonts/.
 *
 * The site is a static export, so the exact character set is known. Requesting
 * Google Fonts with `text=` returns a font subsetted to those characters, which
 * cuts the font payload by roughly two thirds (the stock Inter Tight
 * latin-ext slice alone is ~88 KiB). The generated files are committed, so
 * `next build` never depends on the network.
 *
 * Run after changing copy, blog posts, or fonts:
 *   npm run generate:fonts
 */
import fs from "fs";
import path from "path";

const OUT_DIR = path.resolve("public/fonts");

// Printable ASCII covers code blocks and form text; the rest of the set is
// collected from the actual copy below. `scripts/verify-export.mjs` fails the
// build if an exported page uses a character outside this set, so a missing
// glyph can never ship silently.
const RANGES = [[0x0020, 0x007e]];

const EXTRA = [
  0x00a9, // copyright
  0x00ab, // left guillemet
  0x00b7, // middle dot
  0x00bb, // right guillemet
  0x00d7, // multiplication sign
  0x2013, // en dash
  0x2014, // em dash
  0x2018, // left single quote
  0x2019, // right single quote
  0x201c, // left double quote
  0x201d, // right double quote
  0x201e, // low double quote
  0x2022, // bullet
  0x2026, // ellipsis
  0x20ac, // euro
  0x2122, // trademark
  0x2190, // left arrow
  0x2192, // right arrow
  0x2212, // minus sign
];

const chars = new Set();
for (const [from, to] of RANGES) {
  for (let cp = from; cp <= to; cp += 1) chars.add(String.fromCodePoint(cp));
}
for (const cp of EXTRA) chars.add(String.fromCodePoint(cp));

// Also include every character that actually appears in source copy, so
// unusual punctuation in a blog post is never dropped.
function walk(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else if (/\.(md|mdx|tsx?)$/.test(entry.name)) acc.push(full);
  }
  return acc;
}

for (const file of [
  ...walk("blogs"),
  ...walk("data"),
  ...walk("app"),
  ...walk("components"),
  ...walk("lib"),
]) {
  for (const ch of fs.readFileSync(file, "utf8")) chars.add(ch);
}

const text = [...chars].join("");
const encoded = encodeURIComponent(text);

fs.mkdirSync(OUT_DIR, { recursive: true });

// Committed alongside the fonts so the export verifier can check coverage.
const codepoints = [...chars].map((c) => c.codePointAt(0)).sort((a, b) => a - b);
fs.writeFileSync(
  path.join(OUT_DIR, "charset.json"),
  JSON.stringify(codepoints) + "\n"
);

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";

const requests = [
  {
    file: "instrument-serif.woff2",
    query: `family=Instrument+Serif:ital@0`,
  },
  {
    file: "instrument-serif-italic.woff2",
    query: `family=Instrument+Serif:ital@1`,
  },
  {
    file: "inter-tight.woff2",
    query: `family=Inter+Tight:wght@100..900`,
  },
  {
    file: "plex-mono-400.woff2",
    query: `family=IBM+Plex+Mono:wght@400`,
  },
  {
    file: "plex-mono-500.woff2",
    query: `family=IBM+Plex+Mono:wght@500`,
  },
];

for (const { file, query } of requests) {
  const cssUrl = `https://fonts.googleapis.com/css2?${query}&display=swap&text=${encoded}`;
  const cssRes = await fetch(cssUrl, { headers: { "User-Agent": UA } });
  if (!cssRes.ok) throw new Error(`${file}: CSS request failed (${cssRes.status})`);

  const css = await cssRes.text();
  const match = css.match(/src:\s*url\((https:[^)]+)\)/);
  if (!match) throw new Error(`${file}: no font URL in CSS response`);

  const fontRes = await fetch(match[1], { headers: { "User-Agent": UA } });
  if (!fontRes.ok) throw new Error(`${file}: font download failed (${fontRes.status})`);

  const buffer = Buffer.from(await fontRes.arrayBuffer());
  fs.writeFileSync(path.join(OUT_DIR, file), buffer);
  console.log(`${file.padEnd(30)} ${(buffer.length / 1024).toFixed(1)} KiB`);
}

console.log(`\n${chars.size} characters requested`);
