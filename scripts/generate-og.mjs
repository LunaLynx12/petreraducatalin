/**
 * Generates public/images/og.png - the 1200x630 social card.
 *
 * Follows the site's "Case File" design language: warm paper, ink serif
 * wordmark, steel labels, clay accent. Run with: npm run generate:og
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outFile = path.join(__dirname, "..", "public", "images", "og.png");

const W = 1200;
const H = 630;

const COLORS = {
  paper: "#F4F1EB",
  ink: "#16181B",
  body: "#4B4F54",
  line: "#DCD6CA",
  steel: "#4A5D6E",
  clay: "#9A6B4F",
  muted: "#66686B",
};

const SERIF = "Georgia, 'Times New Roman', 'DejaVu Serif', serif";
const SANS = "'Inter Tight', Arial, Helvetica, sans-serif";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${COLORS.paper}"/>
  <rect x="34.5" y="34.5" width="${W - 69}" height="${H - 69}" fill="none" stroke="${COLORS.line}" stroke-width="1"/>

  <text x="80" y="108" font-family="${SANS}" font-size="13" letter-spacing="5" fill="${COLORS.steel}">PENETRATION TESTER · BRAȘOV, ROMANIA</text>
  <rect x="80" y="132" width="48" height="2" fill="${COLORS.clay}"/>

  <text x="80" y="300" font-family="${SERIF}" font-size="116" fill="${COLORS.ink}">Petre Radu</text>
  <text x="80" y="424" font-family="${SERIF}" font-size="116" font-style="italic" fill="${COLORS.clay}">Cătălin</text>

  <text x="80" y="492" font-family="${SANS}" font-size="21" fill="${COLORS.body}">Web, API, cloud and identity-focused offensive security</text>

  <rect x="80" y="540" width="${W - 160}" height="1" fill="${COLORS.line}"/>
  <text x="80" y="580" font-family="${SANS}" font-size="12" letter-spacing="4" fill="${COLORS.muted}">OFFENSIVE SECURITY · EU ENGAGEMENTS</text>
  <text x="${W - 80}" y="580" text-anchor="end" font-family="${SANS}" font-size="12" letter-spacing="4" fill="${COLORS.muted}">PETRERADUCATALIN.COM</text>
</svg>`;

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(outFile);
console.log(`Generated ${outFile} (${(fs.statSync(outFile).size / 1024).toFixed(1)} KB)`);
