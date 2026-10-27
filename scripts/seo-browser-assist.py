#!/usr/bin/env python3
"""Guided SEO browser assist: you log in, script helps submit sitemaps."""

from playwright.sync_api import sync_playwright

SITE = "https://petreraducatalin.com"
SITEMAP = f"{SITE}/sitemap.xml"


def pause(msg: str) -> None:
    input(f"\n>>> {msg}\n>>> Press ENTER to continue... ")


def main() -> None:
    print(
        f"""
============================================================
SEO browser assist for {SITE}
============================================================
A browser window will open. Log in when asked.
Come back to this terminal and press ENTER at each step.
============================================================
"""
    )

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False, slow_mo=100)
        page = browser.new_page(viewport={"width": 1400, "height": 900})

        print("\n[Google] Opening Search Console...")
        page.goto("https://search.google.com/search-console", wait_until="domcontentloaded")
        pause(
            "Log into Google Search Console.\n"
            "Add property URL prefix https://petreraducatalin.com if needed and verify.\n"
            "Then open Sitemaps for the property."
        )

        page.goto(
            "https://search.google.com/search-console/sitemaps?resource_id="
            + SITE.replace(":", "%3A").replace("/", "%2F"),
            wait_until="domcontentloaded",
        )
        try:
            inp = page.locator("input[type='text']").first
            if inp.count():
                inp.fill("sitemap.xml")
                btn = page.get_by_role("button", name="Submit")
                if btn.count():
                    btn.first.click()
                    print("[Google] Clicked Submit (confirm in UI).")
                else:
                    print("[Google] Click Submit manually for sitemap.xml")
            else:
                print("[Google] Submit sitemap.xml manually in the UI.")
        except Exception as exc:
            print(f"[Google] Auto-submit skipped: {exc}")

        pause("Optional: use URL Inspection on priority pages, then continue to Bing.")

        print("\n[Bing] Opening Webmaster Tools...")
        page.goto("https://www.bing.com/webmasters", wait_until="domcontentloaded")
        pause(
            "Log into Bing Webmaster (Import from Google is fastest).\n"
            "Open your site dashboard / Sitemaps page."
        )

        try:
            page.goto("https://www.bing.com/webmasters/sitemaps", wait_until="domcontentloaded")
        except Exception:
            pass

        print(f"[Bing] Target sitemap: {SITEMAP}")
        try:
            inp = page.locator("input[type='text'], input[type='url']").first
            if inp.count():
                inp.fill(SITEMAP)
                btn = page.get_by_role("button", name="Submit")
                if btn.count():
                    btn.first.click()
                    print("[Bing] Clicked Submit (confirm in UI).")
                else:
                    print("[Bing] Submit manually if needed.")
            else:
                print("[Bing] Submit sitemap manually.")
        except Exception as exc:
            print(f"[Bing] Auto-submit skipped: {exc}")

        pause("Finish any Bing URL Submission clicks, then close.")
        page.wait_for_timeout(5000)
        browser.close()
        print("\nDone.")


if __name__ == "__main__":
    main()
