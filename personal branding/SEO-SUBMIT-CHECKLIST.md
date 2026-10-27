# SEO submit automation

## Fully automatic
```bash
npm run seo:indexnow
```
Pings Bing/Yandex-compatible IndexNow with every sitemap URL.
Needs `public/{key}.txt` live on the site first.

## Guided browser (you log in)
```bash
npm run seo:browser
```
Opens Chromium for:
1. Google Search Console (sitemap helper)
2. Bing Webmaster (sitemap helper)

You press Enter in the terminal after each login step.

## Manual still needed sometimes
- First-time Google property verification (DNS / HTML / analytics)
- Google URL Inspection requests (quota / UI gated)
- Google Business Profile (if you want local pack)
