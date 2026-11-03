/**
 * Generates 1200x630 editorial cover images for blog posts.
 * Run: node scripts/generate-blog-covers.mjs
 *
 * The covers follow the site's "Case File" design language: warm paper,
 * ink serif titles, steel labels, clay rules. No neon, no terminal chrome.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "images", "blog");

const W = 1200;
const H = 630;

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
    file: "hire-penetration-tester-brasov.png",
    label: "HIRING",
    lines: ["Hire a penetration", "tester in Brașov"],
  },
  {
    file: "pentesting-costs-romania-2026.png",
    label: "BUDGET",
    lines: ["What a pentest", "costs in Romania"],
  },
  {
    file: "web-app-pentest-checklist-romania-nis2.png",
    label: "CHECKLIST",
    lines: ["Web application", "pentest checklist"],
  },
  {
    file: "pentest-engagement-romania-sanitized-lessons.png",
    label: "FIELD NOTES",
    lines: ["Real pentest", "lessons"],
  },
  {
    file: "pentester-brasov-vs-company.png",
    label: "COMPARISON",
    lines: ["Freelancer or", "pentest company?"],
  },
  {
    file: "cum-alegi-pentester-brasov.png",
    label: "GHID · RO",
    lines: ["Cum alegi un", "pentester în Brașov"],
  },
  {
    file: "cat-costa-un-pentest-in-romania.png",
    label: "GHID · RO",
    lines: ["Cât costă un", "pentest în România"],
  },
  {
    file: "reparare-vulnerabilitati-idor-xss.png",
    label: "REMEDIERE · RO",
    lines: ["Repararea IDOR", "și XSS"],
  },
  {
    file: "ghid-securitate-aws-azure.png",
    label: "CLOUD · RO",
    lines: ["Securitate AWS", "și Azure"],
  },
  {
    file: "ai-security-testing-llms.png",
    label: "AI SECURITY",
    lines: ["Testing the security", "of LLMs"],
  },
  {
    file: "cloud-misconfigurations-pentesters-love.png",
    label: "CLOUD",
    lines: ["Cloud", "misconfigurations"],
  },
  {
    file: "from-web-app-to-domain-admin.png",
    label: "RED TEAM",
    lines: ["From web app", "to domain admin"],
  },
];

// Rough advance widths (em) for Georgia, used to pick a font size that fits.
function emWidth(text) {
  let total = 0;
  for (const char of text) {
    if (char === " ") total += 0.26;
    else if ("iljtfrI.,'".includes(char)) total += 0.31;
    else if ("mwMW".includes(char)) total += 0.86;
    else if (char >= "A" && char <= "Z") total += 0.64;
    else if (char >= "0" && char <= "9") total += 0.5;
    else if ("ăâîșțĂÂÎȘȚ".includes(char)) total += 0.52;
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

function buildSvg({ label, lines }) {
  const maxWidth = 900;
  const widest = Math.max(...lines.map(emWidth));
  const fontSize = Math.max(52, Math.min(84, Math.floor(maxWidth / widest)));
  const lineHeight = Math.round(fontSize * 1.06);
  const blockHeight = lineHeight * (lines.length - 1) + fontSize;
  const firstBaseline = Math.round((H - blockHeight) / 2 + fontSize * 0.76 + 12);

  const title = lines
    .map(
      (line, i) =>
        `<text x="${W / 2}" y="${firstBaseline + i * lineHeight}" text-anchor="middle" font-family="${SERIF}" font-size="${fontSize}" fill="${
          COLORS.ink
        }">${escapeXml(line)}</text>`
    )
    .join("\n  ");

  const ruleY = firstBaseline + (lines.length - 1) * lineHeight + Math.round(fontSize * 0.42);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${COLORS.paper}"/>
  <rect x="34.5" y="34.5" width="${W - 69}" height="${H - 69}" fill="none" stroke="${COLORS.line}" stroke-width="1"/>

  <text x="${W / 2}" y="98" text-anchor="middle" font-family="${SANS}" font-size="12" letter-spacing="6" fill="${
    COLORS.steel
  }">${escapeXml(label)}</text>
  <rect x="${W / 2 - 20}" y="118" width="40" height="1" fill="${COLORS.lineStrong}"/>

  ${title}
  <rect x="${W / 2 - 28}" y="${ruleY}" width="56" height="2" fill="${COLORS.clay}"/>

  <rect x="80" y="532" width="${W - 160}" height="1" fill="${COLORS.line}"/>
  <text x="${W / 2}" y="574" text-anchor="middle" font-family="${SANS}" font-size="11" letter-spacing="5" fill="${
    COLORS.muted
  }">PETRERADUCATALIN.COM</text>
</svg>`;
}

fs.mkdirSync(outDir, { recursive: true });

for (const cover of COVERS) {
  const outFile = path.join(outDir, cover.file);
  await sharp(Buffer.from(buildSvg(cover)))
    .png({ compressionLevel: 9, palette: true })
    .toFile(outFile);
  console.log("wrote", cover.file);
}
