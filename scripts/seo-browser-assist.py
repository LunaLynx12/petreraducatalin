#!/usr/bin/env python3
"""
Open SEO consoles in the SYSTEM browser (Firefox/Chrome).

Google blocks Playwright/Chromium automation with:
"This browser or app may not be secure."
So this helper uses xdg-open / webbrowser instead.
"""

import subprocess
import time
import webbrowser

SITE = "https://petreraducatalin.com"
SITEMAP = f"{SITE}/sitemap.xml"

URLS = [
    ("Google Search Console", "https://search.google.com/search-console"),
    (
        "GSC Sitemaps",
        "https://search.google.com/search-console/sitemaps?resource_id=https%3A%2F%2Fpetreraducatalin.com%2F",
    ),
    (
        "GSC URL Inspection hint",
        "https://search.google.com/search-console/inspect?resource_id=https%3A%2F%2Fpetreraducatalin.com%2F&id=https%3A%2F%2Fpetreraducatalin.com%2Fpentester-brasov%2F",
    ),
    ("Bing Webmaster", "https://www.bing.com/webmasters"),
    ("Bing Sitemaps", "https://www.bing.com/webmasters/sitemaps"),
]


def open_url(url: str) -> None:
    try:
        subprocess.Popen(
            ["xdg-open", url],
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
        )
    except Exception:
        webbrowser.open(url)


def main() -> None:
    print(
        f"""
============================================================
SEO submit helper (system browser only)
Site: {SITE}
Sitemap: {SITEMAP}
============================================================
Google blocks automated Chromium. Use the Firefox/Chrome
windows that open now and complete these steps:

GOOGLE SEARCH CONSOLE
1) Log in
2) Add property if needed: {SITE}
3) Verify ownership
4) Sitemaps -> submit: sitemap.xml
5) URL Inspection -> request indexing for priority pages

BING WEBMASTER
1) Log in (or Import from Google)
2) Add site if needed
3) Submit sitemap: {SITEMAP}
4) URL Submission for top pages

IndexNow was already submitted automatically for all sitemap URLs.
============================================================
"""
    )

    for name, url in URLS:
        print(f"Opening: {name}")
        open_url(url)
        time.sleep(1.2)

    print("\nBrowser tabs opened. Finish login + submits there.")


if __name__ == "__main__":
    main()
