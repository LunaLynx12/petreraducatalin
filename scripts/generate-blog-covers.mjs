/**
 * Generates simple 1200x630 PNG covers for SEO blog posts.
 * Run: node scripts/generate-blog-covers.mjs
 */
import fs from "fs";
import path from "path";
import zlib from "zlib";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "images", "blog");

const W = 1200;
const H = 630;
const SCALE = 6;
const CHAR_W = 5 * SCALE;
const CHAR_H = 7 * SCALE;
const CHAR_GAP = SCALE;

const FONT = {
  A: [0x0e, 0x11, 0x11, 0x1f, 0x11, 0x11, 0x11],
  B: [0x1e, 0x11, 0x1e, 0x11, 0x11, 0x11, 0x1e],
  C: [0x0e, 0x11, 0x10, 0x10, 0x10, 0x11, 0x0e],
  D: [0x1e, 0x11, 0x11, 0x11, 0x11, 0x11, 0x1e],
  E: [0x1f, 0x10, 0x1e, 0x10, 0x10, 0x10, 0x1f],
  F: [0x1f, 0x10, 0x1e, 0x10, 0x10, 0x10, 0x10],
  G: [0x0e, 0x11, 0x10, 0x17, 0x11, 0x11, 0x0f],
  H: [0x11, 0x11, 0x1f, 0x11, 0x11, 0x11, 0x11],
  I: [0x0e, 0x04, 0x04, 0x04, 0x04, 0x04, 0x0e],
  J: [0x07, 0x02, 0x02, 0x02, 0x12, 0x12, 0x0c],
  K: [0x11, 0x12, 0x1c, 0x18, 0x1c, 0x12, 0x11],
  L: [0x10, 0x10, 0x10, 0x10, 0x10, 0x10, 0x1f],
  M: [0x11, 0x1b, 0x15, 0x15, 0x11, 0x11, 0x11],
  N: [0x11, 0x19, 0x15, 0x13, 0x11, 0x11, 0x11],
  O: [0x0e, 0x11, 0x11, 0x11, 0x11, 0x11, 0x0e],
  P: [0x1e, 0x11, 0x11, 0x1e, 0x10, 0x10, 0x10],
  Q: [0x0e, 0x11, 0x11, 0x11, 0x15, 0x12, 0x0d],
  R: [0x1e, 0x11, 0x11, 0x1e, 0x1c, 0x12, 0x11],
  S: [0x0f, 0x10, 0x10, 0x0e, 0x01, 0x01, 0x1e],
  T: [0x1f, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04],
  U: [0x11, 0x11, 0x11, 0x11, 0x11, 0x11, 0x0e],
  V: [0x11, 0x11, 0x11, 0x11, 0x11, 0x0a, 0x04],
  W: [0x11, 0x11, 0x11, 0x15, 0x15, 0x1b, 0x11],
  X: [0x11, 0x11, 0x0a, 0x04, 0x0a, 0x11, 0x11],
  Y: [0x11, 0x11, 0x0a, 0x04, 0x04, 0x04, 0x04],
  Z: [0x1f, 0x01, 0x02, 0x04, 0x08, 0x10, 0x1f],
  "0": [0x0e, 0x11, 0x13, 0x15, 0x19, 0x11, 0x0e],
  "1": [0x04, 0x0c, 0x04, 0x04, 0x04, 0x04, 0x0e],
  "2": [0x0e, 0x11, 0x01, 0x02, 0x04, 0x08, 0x1f],
  "3": [0x1e, 0x01, 0x01, 0x0e, 0x01, 0x01, 0x1e],
  "4": [0x02, 0x06, 0x0a, 0x12, 0x1f, 0x02, 0x02],
  "5": [0x1f, 0x10, 0x1e, 0x01, 0x01, 0x01, 0x1e],
  "6": [0x0e, 0x10, 0x10, 0x1e, 0x11, 0x11, 0x0e],
  "7": [0x1f, 0x01, 0x02, 0x04, 0x08, 0x08, 0x08],
  "8": [0x0e, 0x11, 0x11, 0x0e, 0x11, 0x11, 0x0e],
  "9": [0x0e, 0x11, 0x11, 0x0f, 0x01, 0x01, 0x0e],
  "-": [0x00, 0x00, 0x00, 0x1f, 0x00, 0x00, 0x00],
  ".": [0x00, 0x00, 0x00, 0x00, 0x00, 0x0c, 0x0c],
  "/": [0x01, 0x02, 0x02, 0x04, 0x08, 0x08, 0x10],
  " ": [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],
};

const COVERS = [
  { file: "hire-penetration-tester-brasov.webp", lines: ["HIRE A", "PENTESTER", "IN BRASOV"] },
  { file: "pentesting-costs-romania-2026.webp", lines: ["PENTEST", "COSTS", "ROMANIA 2026"] },
  { file: "web-app-pentest-checklist-romania-nis2.webp", lines: ["WEB APP", "PENTEST", "CHECKLIST"] },
  { file: "pentest-engagement-romania-sanitized-lessons.webp", lines: ["REAL PENTEST", "LESSONS", "ROMANIA"] },
  { file: "pentester-brasov-vs-company.webp", lines: ["PERSON VS", "COMPANY", "PENTESTER"] },
  { file: "cum-alegi-pentester-brasov.webp", lines: ["CUM ALEGI", "PENTESTER", "IN BRASOV"] },
];

const GREEN = [0x00, 0xff, 0x88];
const CYAN = [0x00, 0xcc, 0xff];
const MUTED = [0x60, 0x70, 0x80];
const BG = [0x0a, 0x0a, 0x0f];

function crc32(buf) {
  const table = [];
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c >>> 0;
  }
  let crc = 0xffffffff;
  for (const b of buf) crc = table[(crc ^ b) & 0xff] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const typeBuf = Buffer.from(type, "ascii");
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])));
  return Buffer.concat([len, typeBuf, data, crc]);
}

function makePng(lines) {
  const pixels = new Uint8Array(W * H * 4);
  for (let i = 0; i < W * H; i++) {
    pixels[i * 4] = BG[0];
    pixels[i * 4 + 1] = BG[1];
    pixels[i * 4 + 2] = BG[2];
    pixels[i * 4 + 3] = 255;
  }

  function drawRect(x, y, w, h, color) {
    for (let py = y; py < y + h; py++) {
      for (let px = x; px < x + w; px++) {
        if (px < 0 || px >= W || py < 0 || py >= H) continue;
        const idx = (py * W + px) * 4;
        pixels[idx] = color[0];
        pixels[idx + 1] = color[1];
        pixels[idx + 2] = color[2];
        pixels[idx + 3] = 255;
      }
    }
  }

  function drawText(text, startX, startY, color) {
    let x = startX;
    for (const char of text.toUpperCase()) {
      const glyph = FONT[char] ?? FONT[" "];
      for (let row = 0; row < 7; row++) {
        const bits = glyph[row];
        for (let col = 0; col < 5; col++) {
          if (bits & (0x10 >> col)) {
            for (let sy = 0; sy < SCALE; sy++) {
              for (let sx = 0; sx < SCALE; sx++) {
                const px = x + col * SCALE + sx;
                const py = startY + row * SCALE + sy;
                if (px < 0 || px >= W || py < 0 || py >= H) continue;
                const idx = (py * W + px) * 4;
                pixels[idx] = color[0];
                pixels[idx + 1] = color[1];
                pixels[idx + 2] = color[2];
                pixels[idx + 3] = 255;
              }
            }
          }
        }
      }
      x += CHAR_W + CHAR_GAP;
    }
  }

  drawRect(0, 0, 8, H, GREEN);
  const colors = [GREEN, CYAN, GREEN];
  let y = 170;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const width = line.length * (CHAR_W + CHAR_GAP) - CHAR_GAP;
    const x = Math.round((W - width) / 2);
    drawText(line, x, y, colors[i % colors.length]);
    y += CHAR_H + 28;
  }
  drawText("PETRERADUCATALIN.COM", 60, H - 90, MUTED);

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(W, 0);
  ihdr.writeUInt32BE(H, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;

  const raw = Buffer.alloc(H * (W * 4 + 1));
  for (let row = 0; row < H; row++) {
    raw[row * (W * 4 + 1)] = 0;
    raw.set(pixels.subarray(row * W * 4, (row + 1) * W * 4), row * (W * 4 + 1) + 1);
  }

  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", zlib.deflateSync(raw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

fs.mkdirSync(outDir, { recursive: true });
for (const cover of COVERS) {
  // Store as PNG bytes with .webp filename expected by frontmatter; Next static can serve any bytes.
  // Use .png extension for correctness, and point blogs at .png paths.
  const pngName = cover.file.replace(/\.webp$/, ".png");
  const outFile = path.join(outDir, pngName);
  fs.writeFileSync(outFile, makePng(cover.lines));
  console.log("wrote", pngName);
}
