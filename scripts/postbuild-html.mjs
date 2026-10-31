/**
 * Post-build HTML fixes for the static export.
 *
 * The App Router has a single root layout, so every document is exported with
 * `<html lang="en">`. Romanian pages live under /ro/ and must declare
 * `lang="ro"` for screen readers, browsers and search engines.
 *
 * Run automatically by `npm run build` (postbuild).
 */
import fs from "fs";
import path from "path";

const OUT = path.resolve("out");

function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else if (entry.name.endsWith(".html")) acc.push(full);
  }
  return acc;
}

if (!fs.existsSync(OUT)) {
  console.error("postbuild: out/ not found - did the export run?");
  process.exit(1);
}

const files = walk(OUT);
let changed = 0;
const problems = [];

for (const file of files) {
  const rel = path.relative(OUT, file).replace(/\\/g, "/");
  const route = "/" + rel.replace(/index\.html$/, "").replace(/\.html$/, "");
  const expected = route === "/ro/" || route.startsWith("/ro/") ? "ro" : "en";

  const html = fs.readFileSync(file, "utf8");
  const match = html.match(/<html\b[^>]*\blang="([^"]*)"/);

  if (!match) {
    problems.push(`${rel}: no <html lang> attribute`);
    continue;
  }

  if (match[1] === expected) continue;

  const updated = html.replace(/(<html\b[^>]*?)lang="[^"]*"/, `$1lang="${expected}"`);
  if (updated === html) {
    problems.push(`${rel}: could not rewrite lang`);
    continue;
  }

  fs.writeFileSync(file, updated);
  changed += 1;
}

if (problems.length) {
  console.error("postbuild: language problems");
  problems.forEach((p) => console.error("  " + p));
  process.exit(1);
}

console.log(`postbuild: set html lang on ${changed} of ${files.length} documents`);
