/**
 * Submit all sitemap URLs to IndexNow (Bing / Yandex / compatible engines).
 * Requires public/{KEY}.txt deployed on the live site.
 *
 * Usage: node scripts/seo-indexnow.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const HOST = "petreraducatalin.com";
const KEY = fs
  .readFileSync(path.join(root, "public", "indexnow-key.txt"), "utf8")
  .trim();
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

async function fetchSitemapUrls() {
  const res = await fetch(`https://${HOST}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap HTTP ${res.status}`);
  const xml = await res.text();
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
  // also ping AI endpoints
  urls.push(`https://${HOST}/llms.txt`);
  return [...new Set(urls)];
}

async function submitBatch(urlList) {
  const body = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });
  const text = await res.text();
  return { status: res.status, text };
}

async function main() {
  // verify key is live
  const keyCheck = await fetch(KEY_LOCATION);
  if (!keyCheck.ok) {
    console.error(
      `Key file not live yet (${keyCheck.status}): ${KEY_LOCATION}\nDeploy first, then re-run.`
    );
    process.exit(1);
  }

  const urls = await fetchSitemapUrls();
  console.log(`Submitting ${urls.length} URLs via IndexNow...`);

  // IndexNow allows up to 10k URLs; we are well under. Still chunk for safety.
  const chunkSize = 100;
  for (let i = 0; i < urls.length; i += chunkSize) {
    const chunk = urls.slice(i, i + chunkSize);
    const result = await submitBatch(chunk);
    console.log(
      `batch ${i / chunkSize + 1}: HTTP ${result.status} ${result.text || "(empty OK)"}`
    );
    // 200/202 = accepted
    if (![200, 202].includes(result.status)) {
      console.error("IndexNow rejected batch", result);
      process.exit(1);
    }
  }
  console.log("IndexNow done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
