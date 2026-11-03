/**
 * Generates 1200x750 editorial covers for the project case studies.
 * Run: node scripts/generate-project-covers.mjs
 *
 * Matches the "Case File" design language: warm paper, ink serif titles,
 * steel labels, clay rule. Replaces the old terminal-style placeholders.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "images", "projects");

const W = 1200;
const H = 750;

const COLORS = {
  paper: "#F4F1EB",
  ink: "#16181B",
  body: "#4B4F54",
  line: "#DCD6CA",
  lineStrong: "#C6BFAF",
  steel: "#4A5D6E",
  clay: "#9A6B4F",
  muted: "#66686B",
};

const SERIF = "Georgia, 'Times New Roman', 'DejaVu Serif', serif";
const SANS = "'Inter Tight', Arial, Helvetica, sans-serif";

const COVERS = [
  {
    file: "malwarepeek.webp",
    index: "01",
    lines: ["MalwarePeek"],
    subtitle: "PE file analyzer for static malware analysis",
    tags: "PYTHON · MALWARE ANALYSIS · REVERSE ENGINEERING",
  },
  {
    file: "signature-stealer.webp",
    index: "02",
    lines: ["Signature", "Stealer"],
    subtitle: "Authenticode signature extraction",
    tags: "PYTHON · DIGITAL FORENSICS · REVERSE ENGINEERING",
  },
  {
    file: "pentest-automation-toolkit.webp",
    index: "03",
    lines: ["Custom Pentest", "Automation Toolkit"],
    subtitle: "Recon and vulnerability-scanning automation",
    tags: "PYTHON · BASH · AUTOMATION · OFFENSIVE SECURITY",
  },
];

function emWidth(text) {
  let total = 0;
  for (const char of text) {
    if (char === " ") total += 0.26;
    else if ("iljtfrI.,'".includes(char)) total += 0.31;
    else if ("mwMW".includes(char)) total += 0.86;
    else if (char >= "A" && char <= "Z") total += 0.64;
    else if (char >= "0" && char <= "9") total += 0.5;
    else total += 0.5;
  }
  return total;
}

function escapeXml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildSvg({ index, lines, subtitle, tags }) {
  const widest = Math.max(...lines.map(emWidth));
  const fontSize = Math.max(56, Math.min(94, Math.floor(860 / widest)));
  const lineHeight = Math.round(fontSize * 1.05);
  const blockHeight = (lines.length - 1) * lineHeight + fontSize + 56;
  const top = 380 - blockHeight / 2;
  const firstBaseline = Math.round(top + fontSize * 0.78);
  const subtitleBaseline =
    firstBaseline + (lines.length - 1) * lineHeight + 54;

  const title = lines
    .map(
      (line, i) =>
        `<text x="80" y="${firstBaseline + i * lineHeight}" font-family="${SERIF}" font-size="${fontSize}" fill="${
          COLORS.ink
        }">${escapeXml(line)}</text>`
    )
    .join("\n  ");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${COLORS.paper}"/>
  <rect x="34.5" y="34.5" width="${W - 69}" height="${H - 69}" fill="none" stroke="${COLORS.line}" stroke-width="1"/>

  <text x="80" y="96" font-family="${SANS}" font-size="12" letter-spacing="5" fill="${
    COLORS.steel
  }">CASE FILE</text>
  <text x="${W - 80}" y="96" text-anchor="end" font-family="${SANS}" font-size="12" letter-spacing="5" fill="${
    COLORS.muted
  }">${escapeXml(index)} / 03</text>
  <rect x="80" y="118" width="48" height="2" fill="${COLORS.clay}"/>

  ${title}
  <text x="80" y="${subtitleBaseline}" font-family="${SANS}" font-size="22" fill="${
    COLORS.body
  }">${escapeXml(subtitle)}</text>

  <rect x="80" y="666" width="${W - 160}" height="1" fill="${COLORS.line}"/>
  <text x="80" y="702" font-family="${SANS}" font-size="11" letter-spacing="4" fill="${
    COLORS.muted
  }">${escapeXml(tags)}</text>
  <text x="${W - 80}" y="702" text-anchor="end" font-family="${SANS}" font-size="11" letter-spacing="4" fill="${
    COLORS.muted
  }">PETRERADUCATALIN.COM</text>
</svg>`;
}

fs.mkdirSync(outDir, { recursive: true });

for (const cover of COVERS) {
  const outFile = path.join(outDir, cover.file);
  await sharp(Buffer.from(buildSvg(cover)))
    .webp({ quality: 90 })
    .toFile(outFile);
  console.log("wrote", cover.file);
}
