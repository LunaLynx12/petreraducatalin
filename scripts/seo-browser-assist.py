#!/usr/bin/env python3
"""Guided SEO browser assist: opens Google + Bing; you log in and submit."""

import argparse
import sys
import time

from playwright.sync_api import sync_playwright

SITE = "https://petreraducatalin.com"
SITEMAP = f"{SITE}/sitemap.xml"


def pause(msg: str, auto: bool, seconds: int = 0) -> None:
    print(f"\n>>> {msg}")
    if auto:
        if seconds:
            print(f">>> Waiting {seconds}s for you to finish in the browser...")
            time.sleep(seconds)
        return
    input(">>> Press ENTER to continue... ")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--auto",
        action="store_true",
        help="No terminal prompts; keep browser open with timed waits",
    )
    parser.add_argument(
        "--wait",
        type=int,
        default=180,
        help="Seconds to wait on each step in --auto mode",
    )
    args = parser.parse_args()

    print(
        f"""
============================================================
SEO browser assist for {SITE}
Sitemap: {SITEMAP}
Mode: {'auto' if args.auto else 'interactive'}
============================================================
"""
    )

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False, slow_mo=80)
        context = browser.new_context(viewport={"width": 1400, "height": 900})

        gsc = context.new_page()
        bing = context.new_page()

        print("[Google] Opening Search Console...")
        gsc.goto("https://search.google.com/search-console", wait_until="domcontentloaded")
        pause(
            "Log into Google. Add property https://petreraducatalin.com if needed.\n"
            "Verify ownership, then Sitemaps -> submit sitemap.xml\n"
            "Then URL Inspection for /pentester-brasov/ and other priority pages.",
            args.auto,
            args.wait,
        )

        try:
            gsc.goto(
                "https://search.google.com/search-console/sitemaps?resource_id="
                + SITE.replace(":", "%3A").replace("/", "%2F"),
                wait_until="domcontentloaded",
            )
        except Exception as exc:
            print(f"[Google] navigation note: {exc}")

        print("[Bing] Opening Webmaster Tools...")
        bing.goto("https://www.bing.com/webmasters", wait_until="domcontentloaded")
        pause(
            "Log into Bing (Import from Google is fastest).\n"
            f"Add site and submit sitemap: {SITEMAP}\n"
            "Use URL Submission for top pages if available.",
            args.auto,
            args.wait,
        )

        pause(
            "Finish any remaining clicks in both tabs.\n"
            "IndexNow already submitted all sitemap URLs automatically.",
            args.auto,
            max(60, args.wait // 2),
        )

        browser.close()
        print("\nDone.")


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\nStopped.", file=sys.stderr)
        sys.exit(130)
