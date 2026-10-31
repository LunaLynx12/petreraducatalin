/**
 * Generates the smaller image variants used by the responsive `srcset`
 * markup. Run after changing profile or project artwork:
 *
 *   npm run generate:images
 */
import fs from "fs";
import path from "path";
import sharp from "sharp";

const jobs = [
  // Hero portrait: max displayed size is 420 CSS px, so 840 px covers 2x.
  {
    src: "public/images/Profile.webp",
    out: "public/images/Profile.webp",
    width: 840,
    height: 1050,
  },
];

const projectDir = "public/images/projects";
if (fs.existsSync(projectDir)) {
  for (const entry of fs.readdirSync(projectDir)) {
    if (!entry.endsWith(".webp")) continue;
    // Leave existing mobile variants alone when re-running.
    if (/-\d+\.webp$/.test(entry)) continue;
    jobs.push({
      src: path.join(projectDir, entry),
      out: path.join(projectDir, entry.replace(/\.webp$/, "-800.webp")),
      width: 800,
      height: 500,
    });
  }
}

for (const { src, out, width, height } of jobs) {
  const before = fs.statSync(src).size;
  // Read into memory first: libvips keeps the source handle open on Windows,
  // which blocks writing back to the same path.
  const input = fs.readFileSync(src);
  const buffer = await sharp(input)
    .resize(width, height, { fit: "cover", withoutEnlargement: true })
    .webp({ quality: 82 })
    .toBuffer();
  fs.writeFileSync(out, buffer);
  console.log(
    `${path.basename(out).padEnd(36)} ${(before / 1024).toFixed(1)} -> ${(
      buffer.length / 1024
    ).toFixed(1)} KiB`
  );
}
