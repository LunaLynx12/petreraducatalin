/**
 * Guided browser automation for Google Search Console + Bing Webmaster.
 * You log in manually; the script continues after you press Enter in the terminal.
 *
 * Usage: node scripts/seo-browser-assist.mjs
 */
import { chromium } from "playwright";
import readline from "readline";

const SITE = "https://petreraducatalin.com";
const SITEMAP = `${SITE}/sitemap.xml`;

function ask(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

async function main() {
  console.log(`
============================================================
SEO browser assist for ${SITE}
============================================================
1) A Chrome window will open.
2) Log in when asked.
3) Come back here and press Enter so the script continues.
============================================================
`);

  const browser = await chromium.launch({
    headless: false,
    channel: undefined,
    slowMo: 80,
  });
  const context = await browser.newContext({
    viewport: { width: 1400, height: 900 },
  });
  const page = await context.newPage();

  // ---------- Google Search Console ----------
  console.log("\n[Google] Opening Search Console...");
  await page.goto("https://search.google.com/search-console", {
    waitUntil: "domcontentloaded",
  });
  await ask(
    "\n>>> Log into Google Search Console in the browser.\n>>> If needed: Add property URL prefix = https://petreraducatalin.com and verify.\n>>> Then open the property and go to Sitemaps.\n>>> Press ENTER here when ready for sitemap submit helper... "
  );

  // Try to land on sitemaps page for the property
  await page.goto(
    `https://search.google.com/search-console/sitemaps?resource_id=${encodeURIComponent(SITE)}`,
    { waitUntil: "domcontentloaded" }
  );
  console.log(`[Google] Attempting to fill sitemap: sitemap.xml`);
  try {
    // Common UI: input + submit button. Selectors change; best-effort.
    const input = page.locator('input[type="text"], input[aria-label*="sitemap" i], input[placeholder*="sitemap" i]').first();
    if (await input.count()) {
      await input.fill("sitemap.xml");
      const submit = page.getByRole("button", { name: /submit|add|trimite/i }).first();
      if (await submit.count()) {
        await submit.click();
        console.log("[Google] Clicked submit (verify result in UI).");
      } else {
        console.log("[Google] Could not find Submit button. Submit sitemap.xml manually.");
      }
    } else {
      console.log("[Google] Could not find sitemap input. Submit manually: sitemap.xml");
    }
  } catch (err) {
    console.log("[Google] Auto-submit skipped:", err.message);
  }

  await ask(
    "\n>>> In GSC, also use URL Inspection on priority pages if you want.\n>>> Press ENTER to continue to Bing Webmaster... "
  );

  // ---------- Bing Webmaster ----------
  console.log("\n[Bing] Opening Webmaster Tools...");
  await page.goto("https://www.bing.com/webmasters", {
    waitUntil: "domcontentloaded",
  });
  await ask(
    "\n>>> Log into Bing Webmaster (Import from Google is fastest).\n>>> Add https://petreraducatalin.com if missing.\n>>> Press ENTER when the site dashboard is open... "
  );

  // Sitemaps page attempt
  try {
    await page.goto("https://www.bing.com/webmasters/sitemaps", {
      waitUntil: "domcontentloaded",
    });
  } catch {
    // stay on current
  }

  console.log(`[Bing] Target sitemap URL: ${SITEMAP}`);
  try {
    const input = page.locator('input[type="url"], input[type="text"]').first();
    if (await input.count()) {
      await input.fill(SITEMAP);
      const submit = page.getByRole("button", { name: /submit|add|upload/i }).first();
      if (await submit.count()) {
        await submit.click();
        console.log("[Bing] Clicked submit (verify in UI).");
      } else {
        console.log("[Bing] Submit manually if button not found.");
      }
    } else {
      console.log("[Bing] Submit sitemap manually:", SITEMAP);
    }
  } catch (err) {
    console.log("[Bing] Auto-submit skipped:", err.message);
  }

  await ask(
    "\n>>> Optional: Bing URL Submission / IndexNow for top pages.\n>>> Press ENTER to finish (browser stays open 10s)... "
  );

  console.log("\nDone. Keep GSC/Bing tabs for any manual verification.");
  await page.waitForTimeout(10000);
  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
