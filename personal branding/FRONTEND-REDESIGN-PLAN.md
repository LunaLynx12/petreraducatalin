# Frontend Redesign Plan — petreraducatalin.com

Status: direction approved, not implemented
Scope: visual system + layout + motion for the whole site
First pass: shell + home page (see section 9)
Constraint: reuse existing photography, keep all SEO copy, metadata, routes, and structured data intact

---

## 1. What the project is today

**Stack**

- Next.js 15 App Router, React 19, TypeScript, static export (`output: "export"`, `trailingSlash: true`)
- Tailwind CSS 3.4 + `tailwindcss-animate` + `@tailwindcss/typography`
- Framer Motion 11, lucide-react, Radix primitives, react-hook-form + zod
- Content: markdown blog (`blogs/`), typed data files (`data/`), ~60+ programmatic SEO landing pages

**Current design language**

| Element | Current |
| --- | --- |
| Background | near-black `#0a0a0f` with green/cyan radial glows |
| Primary | neon green `#00ff88` |
| Secondary / accent | cyan `#00ccff` / pink `#ff3366` |
| Type | Inter body, JetBrains Mono for nearly every heading |
| Decoration | particle canvas, scanline overlay, neon borders, glow shadows, fake terminal window, blinking cursor |
| Layout | centered `container` + eyebrow / title / description block, then card grids |
| Motion | fade-up reveals, marquees, blinking cursor, glow pulses |

**What works and should survive**

- Strong, specific content and excellent SEO structure (metadata, JSON-LD, hreflang, sitemap, robots, RSS, llms.txt).
- A clear personal brand: named expert, real clients, real locations, real projects.
- Good photography: `Profile.webp`, `Stage.webp`, `Marius.webp`, 3 project covers, 12 blog covers.
- Shared components (`ServiceLanding`, `SectionHeading`, `Reveal`, UI primitives) mean one redesign can cascade to every page.

**What dates the design**

- Neon-on-black "hacker terminal" is a 2018–2021 trope and competes with the content.
- Everything is a bordered card on the same dark plane, so sections blur together.
- Mono type on every heading reduces hierarchy and readability.
- Fake terminal chrome, scanlines, particles, and glow are decoration without meaning.
- Green + cyan + pink is high-saturation and reads "gaming", not "trusted security advisor".

---

## 2. New direction — "Case File"

An editorial, evidence-first portfolio. The site should feel like a well-designed security dossier: warm paper, ink, hairline rules, index numbers, a serif voice, and one restrained steel-blue accent.

**Principles**

1. **Quiet confidence.** No neon, no glow, no terminal cosplay. The work is the signal.
2. **Editorial hierarchy.** Big serif statements, small mono metadata, generous whitespace, strong asymmetry.
3. **Structure over decoration.** Numbered sections, a left rail, hairline dividers, and a real grid replace cards and glows.
4. **Warm, not sterile.** Bone paper instead of pure white or pure black; graphite feature bands for contrast.
5. **Motion with intent.** Reveals, image wipes, underline draws, one slow ticker. Nothing loops in the corner of the eye.

**Why this fits the brand**

- Security buyers want judgment, clarity, and evidence — the visual language of a report, not a hacking demo.
- Editorial serif + neutral palette differentiates from the dozens of dark-neon pentester sites.
- It scales cleanly to 60+ SEO pages without needing per-page art direction.

---

## 3. Design tokens

### 3.1 Color

Light canvas is the default; dark graphite is reserved for the contact band and footer (and optionally the hero portrait frame).

```css
/* Canvas */
--canvas:        #F4F1EB;  /* warm bone */
--surface:       #FBF9F5;  /* raised paper */
--surface-2:     #EDE8DF;  /* subtle fill / hover */
--line:          #DCD6CA;  /* hairline */
--line-strong:   #C6BFAF;

/* Ink */
--ink:           #16181B;  /* headings */
--ink-soft:      #2C3034;
--body:          #4B4F54;  /* body copy */
--muted:         #66686B;  /* metadata, passes 4.5:1 on canvas */

/* Accent — low-saturation steel blue, no green */
--accent:        #4A5D6E;
--accent-strong: #37485A;
--accent-soft:   #E3E8EC;

/* Dark band */
--night:         #111417;
--night-surface: #181C20;
--night-text:    #ECE9E2;
--night-muted:   #A2A29D;
--night-line:    rgba(236, 233, 226, 0.14);

/* Optional micro-warm accent, used sparingly (dot, italic word, tag) */
--clay:          #9A6B4F;
```

Rules:

- Accent is for links, focus, one CTA, the availability dot, and small rules. Never large fills.
- No green anywhere. No gradients except a 2% paper grain and image duotone.
- Dark band uses `night-text` on `night` (≈14:1) and `night-muted` for secondary (≈7:1).
- Body text on canvas is `#4B4F54` (≈8:1); `--muted` only for small labels at ≥12px.

### 3.2 Typography

Replace Inter / JetBrains Mono everywhere.

| Role | Font | Usage |
| --- | --- | --- |
| Display | **Instrument Serif** (400, italic) | H1, H2, pull quotes, oversized footer wordmark |
| Body / UI | **Inter Tight** (400/500/600) | paragraphs, nav, buttons, forms |
| Mono | **IBM Plex Mono** (400/500) | section indices, labels, dates, tags, code |

Scale (fluid, `clamp`):

```css
--text-display: clamp(3rem, 7.2vw, 6.25rem);   /* line-height .94, tracking -.03em */
--text-h2:      clamp(2.25rem, 4.4vw, 3.75rem); /* line-height 1.02, tracking -.02em */
--text-h3:      1.5rem;                          /* line-height 1.2 */
--text-lead:    clamp(1.125rem, 1.6vw, 1.375rem);/* line-height 1.55 */
--text-body:    1.0625rem;                       /* line-height 1.7 */
--text-small:   0.875rem;
--text-label:   0.75rem;                         /* uppercase, tracking .18em, mono */
```

Rules:

- Headings are serif; emphasis uses italic, not color or glow.
- Mono is only for metadata and labels — never for long headings.
- Max measure: 62ch for body, 18ch per display line.
- Load via `next/font/google` with `display: "swap"`, `latin` + `latin-ext` (Romanian diacritics).

### 3.3 Space, grid, shape

```css
--container: 1280px;
--gutter: clamp(20px, 4vw, 40px);
--section-y: clamp(88px, 11vw, 160px);
--radius-panel: 2px;   /* sharp, editorial */
--radius-pill: 999px;  /* pills only */
```

- 12-column grid; content often spans 7/5 or 6/6, never a uniform 3-up card row.
- Hairline `1px` borders and rules carry structure. Shadows are almost absent.
- One soft shadow allowed for the hero portrait: `0 32px 80px -40px rgba(22,24,27,.35)`.
- Optional static grain overlay at 2–3% opacity (SVG noise), no scanlines.

### 3.4 Motion

```css
--ease-out: cubic-bezier(0.22, 1, 0.36, 1);
--dur-fast: 200ms;
--dur-base: 450ms;
--dur-slow: 750ms;
```

| Interaction | Spec |
| --- | --- |
| Section reveal | opacity 0→1, y 16→0, 500ms, stagger 60ms |
| Hero lines | masked line reveal, y 100%→0, 700ms, stagger 80ms |
| Images | clip-path `inset(0 0 100% 0)`→`inset(0)`, image scale 1.06→1, 900ms |
| Links / nav | underline `scaleX` 0→1, 250ms |
| Buttons | background wipe + arrow translate 4px, 250ms |
| Accordion | `grid-template-rows: 0fr → 1fr`, 350ms |
| Ticker | 80s linear, pause on hover/focus, duplicate `aria-hidden` |
| Stats | count-up once in view, 1.2s, disabled under reduced motion |
| Page enter | `app/template.tsx` fade + 8px rise, 300ms |

Remove entirely: particle canvas, scanline overlay, glow shadows, blinking cursor, neon border pseudo-element, glow-pulse.

All motion must no-op under `prefers-reduced-motion: reduce`.

---

## 4. Layout architecture

### 4.1 Signature: numbered section rail

Every major section uses a two-column shell instead of a centered heading block:

```
┌─────────────────────────────────────────────────────────────┐
│ 01            PROFILE                                       │
│ ─────         ┌───────────────────────────┐  ┌───────────┐  │
│ (sticky)      │ Large serif H2            │  │ lead copy │  │
│               └───────────────────────────┘  └───────────┘  │
│               content spans 8–9 of 12 cols                  │
└─────────────────────────────────────────────────────────────┘
```

- Left rail: 1px vertical rule, mono index (`01`), uppercase label, sticky on desktop.
- Mobile: rail collapses to an inline index + label above the heading.
- Section headings sit in a 7-col measure; supporting copy is offset into the right 4 cols.

### 4.2 Navigation

- 72px tall, transparent over the hero, then paper + hairline on scroll.
- Left: serif wordmark `Petre Radu` with mono subline `OFFENSIVE SECURITY / BRAȘOV`.
- Center: About, Work, Expertise, Writing, Services.
- Right: `Start a project` pill (accent border, fills on hover) + availability dot.
- Active section underline via IntersectionObserver.
- Mobile: full-screen paper overlay, huge serif links with mono indices, 40ms stagger, ESC/close, focus trap via Radix Dialog.

### 4.3 Home page order (new)

1. **Hero** — editorial split, portrait, credentials, location ticker.
2. **Proof strip** — slow ticker: Brașov · București · Cluj · Timișoara · Amsterdam · Rotterdam · Vienna · Helsinki.
3. **Selected work** — projects promoted above the fold-adjacent; three editorial spreads.
4. **Profile** — Stage photo, pull quote, bio as short editorial blocks, stats as a hairline ledger.
5. **Capabilities** — interactive index list (4 disciplines) replacing the 2×2 card grid.
6. **Experience** — ledger rows with year, company, role; education as a side column.
7. **Credentials & stack** — certifications ticker + two-column list, tools as a mono tag grid (no terminal chrome).
8. **Clients & locations** — quiet quote grid + country/city directory (keeps existing SEO links).
9. **Writing** — one featured post with cover + two compact rows.
10. **Service directory** — local SEO links as an editorial index, not cards.
11. **Contact** — dark full-bleed band with oversized serif CTA and underline-style form.
12. **Footer** — dark, oversized wordmark, 4 link columns, social row, back to top.

### 4.4 Hero detail

- Paper background with a faint 12-column hairline grid (3–4% opacity).
- Left 7 cols: mono kicker, three-line display headline with one italic word, lead paragraph, two CTAs, credential row separated by thin rules.
- Right 5 cols: portrait in a 4:5 frame, warm duotone (`grayscale(1) sepia(.12) contrast(1.02)`), offset outline frame, small overlapping "case card" with eCPPT / NTT DATA / MSc.
- Vertical mono text on the far right edge (coordinates or `EST. 2025`).
- Bottom: location ticker and a thin animated scroll line.
- No particles, no grid glow, no blinking cursor.

### 4.5 Inner pages

- Shared `PageHero`: mono breadcrumb, serif H1, lead, hairline, optional meta row.
- Projects: full-width alternating spreads, not a 3-up grid.
- Blog index: featured cover + list rows; post page uses serif headings, 62ch measure, styled blockquotes and code with paper tones.
- Services / locations / keyword landings: `ServiceLanding` restyled once — paper hero, numbered methodology rows, FAQ as an accordion, quiet CTA band. All 60+ pages inherit.
- About: Stage photo as a wide editorial band, bio as numbered sections, mission as a pull quote.
- 404: oversized serif "404", one line, one link.

---

## 5. Component mapping

| Current | New |
| --- | --- |
| `components/hero.tsx` | Rewrite: editorial split hero + masked text reveal |
| `components/particles.tsx` | Delete (remove import) |
| `components/navbar.tsx` | Rewrite: slim nav, paper-on-scroll, full-screen mobile menu |
| `components/footer.tsx` | Rewrite: dark footer, oversized wordmark |
| `components/section-heading.tsx` | Replace with `section-header.tsx` (rail + index + serif title); keep a thin alias during migration |
| `components/reveal.tsx` | Extend with `variant="up" \| "mask" \| "image"` and stagger support |
| `components/about-section.tsx` | Editorial profile: Stage photo, pull quote, ledger stats |
| `components/expertise-section.tsx` | Accordion index list |
| `components/experience-section.tsx` | Ledger rows + education column |
| `components/projects-section.tsx` | Alternating editorial spreads |
| `components/certifications-section.tsx` | Credential ticker + list |
| `components/tools-section.tsx` | Mono tag grid, no terminal chrome |
| `components/blog-section.tsx` | Featured + compact rows |
| `components/clients-locations-section.tsx` | Quote grid + directory |
| `components/local-seo-band.tsx` | Service index rows |
| `components/trusted-collaborators.tsx` | Portrait row with hairline dividers |
| `components/contact-section.tsx` | Dark band, underline inputs, oversized email link |
| `components/service-landing.tsx` | Restyle only; preserve copy and JSON-LD |
| `components/breadcrumbs.tsx` | Mono breadcrumb with `/` separators |
| `components/ui/*` | Restyle button, badge, card, input, textarea, label, dialog |
| `app/globals.css` | New tokens, base, grain, utilities; remove scanline/glow/neon |
| `tailwind.config.ts` | New colors, fonts, radii, keyframes, container |
| `app/layout.tsx` | New fonts, remove `scanline` class, keep metadata/JSON-LD |
| `app/page.tsx` | New section order |
| `app/about`, `projects`, `blog`, `services`, `locations`, `for-ai`, `not-found` | Apply `PageHero` + shared primitives |
| New | `components/section-header.tsx`, `components/marquee.tsx`, `components/accordion.tsx`, `components/page-hero.tsx`, `components/stat.tsx`, `app/template.tsx` |

---

## 6. Implementation phases

### Phase 0 — Baseline (0.5 day)

- Branch `redesign/case-file`.
- Capture desktop + mobile screenshots of home, projects, about, blog, one service landing.
- Run `npm run build` and record route count / bundle output.
- Snapshot metadata and JSON-LD output for one EN and one RO page for later diffing.

### Phase 1 — Tokens and type (0.5 day)

- Rewrite `tailwind.config.ts` (colors, fonts, radii, shadows, keyframes).
- Rewrite `app/globals.css` base layer and utilities; delete glow/neon/scanline.
- Swap fonts in `app/layout.tsx`; remove `scanline` body class.
- Verify Romanian diacritics render in all three fonts.

### Phase 2 — Primitives (1 day)

- Restyle `button`, `badge`, `card`, `input`, `textarea`, `label`, `dialog`.
- Add `section-header`, `marquee`, `accordion`, `page-hero`, `stat`.
- Extend `Reveal` variants; add reduced-motion fallbacks.
- Build a hidden `/styleguide` route (dev only) to preview tokens and components.

### Phase 3 — Shell (1 day)

- Rewrite navbar (scroll state, active section, mobile overlay).
- Rewrite footer (dark, oversized wordmark, link columns).
- Add `app/template.tsx` page transition. **Dropped in pass one** — the client wrapper hid content in throttled tabs.
- Add skip link, focus styles, scroll padding.

### Phase 4 — Home page (2–3 days)

- Hero + ticker.
- Sections in the new order, one at a time, reusing existing data imports.
- Image treatment and reveal choreography.
- Responsive pass at 375 / 768 / 1024 / 1440 / 1920.

### Phase 5 — Inner pages (2–3 days)

- `PageHero` applied to about, projects, blog, services, locations, for-ai, 404.
- Restyle `ServiceLanding` (cascades to all keyword/service pages).
- Restyle `breadcrumbs`, post typography, FAQ accordion.
- Keep every string, heading level, link, and JSON-LD payload unchanged.

### Phase 6 — QA and launch (1–2 days)

- `npm run build`, `npm run lint`, TypeScript check.
- Lighthouse mobile + desktop: target ≥95 performance, 100 accessibility, 100 best practices, 100 SEO.
- Keyboard-only pass, screen-reader spot check, contrast audit.
- Diff metadata / JSON-LD / sitemap against baseline.
- Check all images, 404s, trailing-slash links, RO/EN hreflang.
- Visual regression screenshots for key templates.

Total: roughly 8–10 working days for the full site; home + shell alone is ~4–5 days.

---

## 7. Guardrails

**SEO (non-negotiable)**

- Do not change page copy, H1/H2/H3 text, metadata, canonical URLs, hreflang, JSON-LD, sitemap, robots, or RSS.
- Only class names and DOM wrappers change. If a heading must move, keep its level and exact text.
- Keep `output: "export"`, `trailingSlash: true`, and `images.unoptimized: true`.
- Restyle shared components rather than individual pages so the 60+ landings stay consistent.

**Accessibility**

- Body contrast ≥4.5:1, large text ≥3:1; accent `#4A5D6E` on `#F4F1EB` passes.
- Visible focus ring: 2px accent, 2px offset, on every interactive element.
- Accordion uses a real button with `aria-expanded` / `aria-controls`.
- Mobile menu keeps Radix Dialog focus trap and ESC handling.
- Marquees duplicate content with `aria-hidden` and pause on hover/focus.
- All animation respects `prefers-reduced-motion`.

**Performance**

- Three font families max, `display: swap`, subset `latin` + `latin-ext`.
- No new animation libraries; Framer Motion only where orchestration is needed.
- Prefer CSS transitions for hover states.
- Keep hero portrait `priority`; lazy-load below-fold images.
- Avoid full-screen fixed overlays and canvas effects.

**Content**

- Preserve the "named expert" positioning and existing location/service language.
- Keep `FORBIDDEN_SEO_TERMS` rules; do not introduce "audit" as a service claim.
- Reuse all photos: Profile, Stage, Marius, 3 project covers, 12 blog covers.

---

## 8. Alternatives considered

**A. Dark graphite editorial** — `#0E1013` canvas, `#EDEDEB` text, muted slate accent, serif display. Strong and premium, but harder to keep 60+ content pages readable and more likely to feel like the current dark theme. *Fallback if a light site is not acceptable.*

**B. Warm monochrome, no accent** — bone paper, ink, one clay micro-accent. Extremely refined, but links and CTAs lose affordance. *Use if the brand should feel more like a studio than a security practice.*

**C. Cool Swiss technical** — white, graphite, grid, grotesque type, no serif. Clean but generic; weaker differentiation from agency sites.

Recommended: **Case File** (warm paper + steel blue + serif display).

---

## 9. Decisions locked

| Decision | Choice |
| --- | --- |
| Default theme | Warm paper canvas `#F4F1EB` + dark graphite bands `#111417` |
| Accent | Steel blue `#4A5D6E`, used sparingly |
| Typography | Instrument Serif + Inter Tight + IBM Plex Mono |
| Terminal motif | Dropped; mono reserved for labels and metadata |
| First pass | Shell + home page only |

### First-pass deliverables

1. `tailwind.config.ts` and `app/globals.css` rewritten with the tokens in section 3.
2. Fonts swapped in `app/layout.tsx`; `scanline` body class removed.
3. `components/ui/*` primitives restyled (button, badge, card, input, textarea, label, dialog).
4. New `section-header`, `marquee`, `accordion`, `page-hero`, `stat` components; `Reveal` variants extended.
5. Navbar and footer rewritten.
6. Hero and all home sections rebuilt in the new order (section 4.3), reusing existing data and photos.
7. Reduced-motion fallbacks; page transition intentionally left out (a client-side wrapper hid content in throttled tabs).
8. Responsive QA at 375 / 768 / 1024 / 1440 / 1920, plus build/lint/type checks.

Inner pages keep the current layout until pass two. Because `ServiceLanding`, `PageHero`, and the UI primitives will already be restyled, the inner-page pass should mostly be wrapper and composition work.

### Acceptance criteria for pass one

- No green, no glow, no particles, no scanline, no blinking cursor anywhere on the home page or shell.
- Three font families only, loaded with `next/font/google` and `display: swap`.
- Home page passes Lighthouse mobile ≥95 performance, 100 accessibility, 100 best practices, 100 SEO.
- All home-page headings, links, metadata, and JSON-LD remain unchanged.
- Motion is disabled under `prefers-reduced-motion: reduce`.
- Photos reused: `Profile.webp`, `Stage.webp`, `Marius.webp`.
- Generated artwork (`public/images/blog/*`, `public/images/projects/*`, `public/images/og.png`) regenerated in the Case File palette via `npm run generate:blog-covers`, `npm run generate:project-covers`, and `npm run generate:og`.

---

## 10. Pass one - status

Branch: `redesign/case-file`.

### Design and shell

- Tokens, fonts, base styles, and legacy utility remaps.
- UI primitives, `section-header`, `marquee`, `accordion`, `page-hero`, `stat`, extended `Reveal`.
- Navbar (slim paper nav + full-screen mobile overlay) and footer (dark band, oversized wordmark).
- Hero and every home section rebuilt in the new order.
- Blog covers, project covers, and the OG card regenerated with `sharp` in the paper palette; the three `.webp` cover paths in `blogs/*.md` now point at the new `.png` files.

### Performance

- `Reveal` rewritten from framer-motion to CSS transitions plus a single IntersectionObserver. It only hides elements that start below the fold, so nothing is ever stuck invisible without JS or in a throttled tab; `framer-motion` is no longer a dependency.
- Every `Reveal` is now a server component that emits `data-reveal`; one `<RevealObserver>` in the layout does the observing, and it batches its geometry reads before writing classes.
- `Accordion` is native `<details>/<summary>` (exclusive via `name`), so the expertise section is server-rendered and no longer the largest client component on the page.
- Mobile menu and contact form no longer use Radix Dialog or react-hook-form/zod. The form is native validation plus a `mailto:` handoff, and still works without JS.
- Fonts are self-hosted, Google-`text=`-subsetted woff2 in `public/fonts/` (`npm run generate:fonts`), declared in `globals.css` with metric-matched fallbacks and preloaded explicitly. Payload went from ~208 KiB to ~95 KiB; Next's local-font preload manifest is unreliable on Windows, which is why the preload tags are hand-written.
- `Profile.webp` and the project covers have smaller variants generated by `npm run generate:images`; project covers use a manual `srcset`.
- Removed paint traps: fixed `background-attachment`, `mix-blend-mode` on the grain overlay, and `will-change` on every reveal block.
- `content-visibility: auto` on the sections was tried and reverted. It did not help once the accordion stopped hydrating, and its intrinsic-size placeholders made `#expertise` / `#blog` anchor jumps land hundreds of pixels off.
- `font-display: swap` kept for all families. With preloaded subsetted fonts and metric-matched fallbacks the CLS is 0, and `optional` only bought ~2 Lighthouse points on a noisy local run.

Result (mobile Lighthouse, production export, median of three runs): **Performance 84-87, Accessibility 100, Best Practices 100, SEO 100**, FCP ~1.2 s, CLS 0, TBT 220-330 ms, first-load JS 103 kB. Observed LCP equals observed FCP (~1.2 s); the simulated 3.2 s LCP is the lantern model extrapolating the remaining React hydration cost. Further gains would need dropping React hydration (e.g. Astro), which is out of scope for this codebase.

### SEO and build hardening

- `scripts/verify-export.mjs` runs on `postbuild` and fails the build on: missing/duplicate description, missing canonical, more than one `h1`, unparseable JSON-LD, missing `og:image` file, wrong `lang`, duplicate titles, sitemap/route parity, broken internal links, and any character outside the font subset.
- `scripts/postbuild-html.mjs` sets `lang="ro"` on the 11 Romanian documents at export time.
- `og:image` wired into every metadata source through `lib/metadata.ts` (45 pages were missing it).
- `/penetration-tester-brasov/` title no longer duplicates the home page.
- `public/.nojekyll` added so GitHub Pages serves `_next/`.

### QA

- `npm run build` (66 pages), `npm run lint`, `npx tsc --noEmit` clean; `verify-export` reports 66 pages OK.
- No console errors, no horizontal overflow, and no reveal left hidden in view on 13 sampled routes (home, about, projects, services, a service page, blog index, a post, a location page, a Romanian page, a keyword landing page, 404).
- Verified in a real browser: accordion open/close by click and keyboard, exclusive open, mobile menu focus trap + Escape + scroll lock, contact-form native validation, font loading (all three families, no duplicate requests), anchor navigation to every nav target.

Open for pass two:
- Inner pages still use the old compositions (they inherit the new tokens, nav, footer, and primitives).
- `/contact/` and `/privacy/` do not exist as routes; the contact block lives at `/#contact`.

---

## 11. Pass two - status

Branch: `redesign/case-file`.

### Shared composition

- `PageHero` gained a `breadcrumbs` slot and is now used by every inner page, so each route opens with the same paper band: mono breadcrumb, mono eyebrow, serif H1 with a clay italic accent, lead paragraph, hairline meta row.
- `FaqList` (new) renders native `<details>` rows with a rotating plus, a serif question and a 68ch answer. It replaces the four hand-rolled FAQ blocks in `ServiceLanding`, the country page, the city page and the services hub.
- All inner pages now share one rhythm: hero band, then a `container` with `pb-20 md:pb-28`, sections separated by hairlines rather than cards.

### Pages

- **About** - wide Stage photo band with caption, bio as numbered two-column sections, mission as a pull quote plus skill badges, closing CTA row.
- **Blog index** - editorial list rows with a cover thumbnail, mono date/read-time, serif title, tags and a quiet "read article" link. RSS lives in the hero meta row.
- **Blog post** - serif H1 at a 62ch measure, mono meta line, paper-toned `prose` (no `prose-invert`, which was forcing light text on the paper canvas), serif `prose-headings`, dark code blocks, author note under a rule.
- **Projects** - alternating full-width spreads with `-800.webp` srcsets, mono index/lock labels, serif titles, two-column highlight lists and outline buttons.
- **Services hub** - 29 rows separated by hairlines. Duplicate hrefs now resolve to the keyword-landing description instead of the old "Service landing optimized for local hiring intent" placeholder, so every row has reader-facing copy.
- **Locations hub / country / city** - country spreads with city chips, quote panels, `FaqList`, a dark `night` CTA band and cross-links.
- **Service landings** - the whole `ServiceLanding` template: bordered angle note, what/who/process sections, numbered process rows, clay-ruled local note, `FaqList`, dark CTA band, related-page chips. All copy, heading levels, JSON-LD and breadcrumb payloads unchanged.
- **Collaborator** - portrait with hairline frame, serif name, accent headline, specialty panel and outline link button.
- **For AI** - fact list as a two-column definition list, citations as labelled links, FAQ as a definition list.
- **404** - serif "Recon failed on this route." with a mono error label and a primary home button.

### Cleanup

- Removed the now-unused `.neon-border`, `.text-gradient-green` and `.glow-text` utilities from `globals.css`.
- No `font-mono` headings, `rounded-2xl`/`rounded-xl` cards, `bg-primary/5` panels or `shadow-glow` hovers remain in `app/` or `components/`.

### QA

- `npx tsc --noEmit`, `npm run lint` and `npm run build` clean; `verify-export` reports 66 pages OK.
- No console errors, one `h1` per route and no horizontal overflow at 390, 768 and 1440 px across 15 inner routes.
- Visual review at 390 and 1440 px for about, blog index, a post, projects, services, locations hub, country, city, a service landing, collaborator and 404.
