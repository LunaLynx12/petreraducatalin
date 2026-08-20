/**
 * Generates public/images/og.png - a 1200x630 social card PNG with the
 * Petre Radu Catalin name rendered via a tiny embedded 5x7 bitmap font.
 * No external dependencies, runs fully offline.
 *
 * Run with: npm run generate:og
 * Replace the generated file with a designed OG image before launch.
 */
import fs from "fs";
import path from "path";
import zlib from "zlib";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outFile = path.join(__dirname, "..", "public", "images", "og.png");

const W = 1200;
const H = 630;

// 5x7 bitmap font (rows of 5 bits, MSB first)
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
  ",": [0x00, 0x00, 0x00, 0x00, 0x0c, 0x04, 0x08],
  ":": [0x00, 0x0c, 0x0c, 0x00, 0x0c, 0x0c, 0x00],
  " ": [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],
};

const SCALE = 10;
const CHAR_W = 5 * SCALE;
const CHAR_H = 7 * SCALE;
const CHAR_GAP = 2 * SCALE;

const GREEN = [0x00, 0xff, 0x88];
const CYAN = [0x00, 0xcc, 0xff];
const BG = [0x0a, 0x0a, 0x0f];

const pixels = new Uint8Array(W * H * 4);
for (let i = 0; i < W * H; i++) {
  pixels[i * 4] = BG[0];
  pixels[i * 4 + 1] = BG[1];
  pixels[i * 4 + 2] = BG[2];
  pixels[i * 4 + 3] = 255;
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
  return x;
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

// Layout: two name lines, accent bar, terminal footer line
const line1 = "PETRE RADU";
const line2 = "CATALIN";
const width1 = line1.length * (CHAR_W + CHAR_GAP) - CHAR_GAP;
const width2 = line2.length * (CHAR_W + CHAR_GAP) - CHAR_GAP;
const x1 = Math.round((W - width1) / 2);
const x2 = Math.round((W - width2) / 2);
const y1 = 210;
const y2 = y1 + CHAR_H + 40;

drawText(line1, x1, y1, GREEN);
drawText(line2, x2, y2, CYAN);

// Terminal-style footer
const footer = "PETRERADUCATALIN.COM // PENTESTING - RED TEAM - CLOUD & AI SECURITY";
drawText(footer, 60, H - 110, [0x60, 0x70, 0x80]);

// Blinking-style cursor block after second line
drawRect(x2 + width2 + 20, y2 + 2 * SCALE, 3 * SCALE, CHAR_H - 4 * SCALE, GREEN);

// Accent bar on the left edge
drawRect(0, 0, 8, H, GREEN);

// --- PNG encoding ---
function crc32(buf) {
  let table = [];
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

const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(W, 0);
ihdr.writeUInt32BE(H, 4);
ihdr[8] = 8; // bit depth
ihdr[9] = 6; // color type RGBA
ihdr[10] = 0;
ihdr[11] = 0;
ihdr[12] = 0;

// raw scanlines with filter byte 0
const raw = Buffer.alloc(H * (W * 4 + 1));
for (let y = 0; y < H; y++) {
  raw[y * (W * 4 + 1)] = 0;
  pixels
    .subarray(y * W * 4, (y + 1) * W * 4)
    .forEach((v, i) => {
      raw[y * (W * 4 + 1) + 1 + i] = v;
    });
}

const png = Buffer.concat([
  Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
  chunk("IHDR", ihdr),
  chunk("IDAT", zlib.deflateSync(raw, { level: 9 })),
  chunk("IEND", Buffer.alloc(0)),
]);

fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, png);
console.log(`Generated ${outFile} (${(png.length / 1024).toFixed(1)} KB)`);