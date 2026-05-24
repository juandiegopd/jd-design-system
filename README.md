# JD Peñaherrera — Design System

A small, editorial design system for **JD Peñaherrera's** personal website at **juandiego.work**. The site exists to:

1. Lay out professional **experience** and projects.
2. Host a **blog** — business essays, project retrospectives, playbooks for applying to companies, and life reflections.
3. House **per-company landing pages** — bespoke pages JD builds for hiring managers at specific companies, demonstrating how he'd approach a problem they have.

The aesthetic is **quiet, editorial, monochromatic**. Cream paper + ink type. One serif italic that does most of the emotional work. One mono that anchors metadata. One sans for the body. Blue used sparingly, mostly for links.

Desktop-first, responsive down to mobile.

---

## Index

- `README.md` — this file (context, content fundamentals, visual foundations, iconography, manifest).
- `colors_and_type.css` — design tokens. Drop into any HTML page to inherit the system.
- `SKILL.md` — entry point if this folder is loaded as an Agent Skill.
- `assets/` — profile picture, logos, icon SVGs, any reusable raster.
- `fonts/` — webfonts (none committed; system loads DM family from Google Fonts).
- `reference/` — read-only snapshot of the source `juandiego.work` site that seeded the system.
- `preview/` — Design System tab cards (swatches, type specimens, components).
- `ui_kits/personal-site/` — high-fidelity recreation of the personal site + blog + company landing template.
- `slides/` — *(none — no slide deck context was provided.)*

---

## Source materials

- **Codebase**: `juandiego.work/` — single-file HTML prototype of the under-construction homepage. Located on the user's local mount.
- **Profile photo**: `uploads/JD_PFP.jpeg` — pixelated 886×886 JPEG. Used as the homepage portrait.
- **No Figma file or slide deck was attached.** All visual decisions trace back to the seed HTML page and the brief.

---

## CONTENT FUNDAMENTALS

**Voice.** First-person, plain, confident, unhurried. JD writes as an **operator and builder** — never a guru, never a thought-leader. Sentences are short. Paragraphs are short. White space is part of the writing.

**Tone.** Editorial. Closer to a journal entry than a marketing page. Says one thing per page and means it. Honest about uncertainty when relevant. Doesn't sell.

**Pronouns.** **"I"** for personal reflection ("I noticed", "I built"). **"You"** when offering a playbook or instruction ("you should map your operator before you write"). Never "we" — there is no "we" on a personal site.

**Casing.**
- **Sentence case** for headings and titles. Never Title Case marketing-style.
- **UPPERCASE + letter-spacing** (mono font) for nav, eyebrows, dates, section labels.
- **lowercase** for the URL/logo lockup if shown ("juandiego.work").

**Emoji.** **None.** No emoji. No emoji as bullets, no emoji in headings, no emoji in body copy. The visual vocabulary is text + a single accent color.

**Punctuation & glyphs.**
- Em-dash with spaces — like this — for asides.
- Curly quotes ("…") and apostrophes (it's), not straight.
- Small bullet dots (•) or a leading mono numeral ("01 — ") instead of disc bullets.
- Italic serif (DM Serif Display italic) carries emphasis far more than bold ever does.

**Sample copy (in voice).**

> Operator. *Builder.*
>
> This space is under construction. More soon.

> I spent four years inside the messy middle of a logistics startup. Here is what I learned about hiring before product-market fit — and what I'd do differently next time.

> A playbook for applying to early-stage companies when you don't have a referral. Written from the operator side of the table. One technique per section. Skip anything that doesn't apply.

**Length.** Blog posts: 600–2,500 words, single column, max ~65ch line length. Landing pages for companies: short, one-screen-per-idea, never more than three screens before a call to action.

---

## VISUAL FOUNDATIONS

### Colors
- **Cream paper** (`#F8F7F4`) is the canonical background. Warm, not white — the page feels like good stock.
- **Ink** (`#1C1B19`) is the canonical text. Warm near-black, never pure black.
- **Cream/ink scale** (4 steps each) covers 95% of the UI: text hierarchy, borders, hover surfaces, dividers.
- **True monochrome** scale is available (`--black`, `--white`, `--gray-*`) for sub-landing pages that want a colder, more technical feel.
- **Blue** (`#1B4DD8`) is the only hue. Used **sparingly** — links, citation marks, the occasional accent dot. It should appear two or three times per page, max.
- Avoid: gradients (other than maybe one subtle paper-grain), saturated palettes, "brand" colors beyond blue.

### Typography
- **DM Serif Display** for display + headings + italic emphasis. The italic does the heaviest lifting — it's the single most recognizable type move in the system. Use italic for *one* word per heading, not whole headings.
- **DM Sans** for body, UI controls, labels longer than 3 words.
- **DM Mono** for nav, eyebrows, dates, code, file paths, and any single-word metadata. Always uppercased + tracked when used as a label.
- Headings are `font-weight: 400` — the serif's own weight is enough. Never bold the serif.
- Body line-height **1.6**, paragraph max-width **65ch**. Reading is the product.

### Backgrounds
- **Solid cream** is the rule. No hero images. No gradients. No full-bleed photography on the personal site itself.
- **One exception**: editorial photography or a minimalist illustration may accompany a blog post when it directly references the subject — e.g. a clean object photograph for a business post, a single architectural detail, a black-and-white portrait. Always **muted, b&w or low-saturation, grain optional**. Never stock-photo-coded.
- **Per-company landing pages** may break this rule to honor that company's brand colors — but should still read as JD's voice underneath.

### Layout
- Generous outer padding: **3rem desktop, 1.5rem mobile**.
- Maximum content width **780px** for editorial flow; **1200px** for the rare two-column dashboard-y layout.
- Two-column grid with a strong asymmetry (e.g. `200px 1fr` for portrait + bio, `1fr 280px` for article + footnotes) — not a perfect 50/50.
- Hairline dividers (`1px solid var(--cream-3)`) separate sections. No drop-shadows for separation.
- Fixed nav (56px) on long scroll pages; static nav on short pages.

### Borders, radii, shadows
- **Borders**: 1px hairline only. Always `--cream-3` on cream, `--gray-2` on white.
- **Radii**: very subtle. `3px` for chips/inputs, `6px` for cards and images, `10px` for the rare big container. Never fully rounded except for circular avatars.
- **Shadows**: almost never. The system has two — `--shadow-1` (1px hint) and `--shadow-2` (modal/overlay). 90% of UI has no shadow.

### Animation
- **Quiet**. 120–200ms transitions on color and opacity, `cubic-bezier(.2,.6,.2,1)`.
- Page transitions: **none** beyond a 180ms opacity fade on first paint.
- No bouncing, no spring physics, no scroll-jacking, no parallax.
- A blog post may include a single static animated callout (e.g. a subtle underline draw) — never more than one per post.

### Hover states
- Links: color shifts from `--blue` to `--blue-hover` (darker). Underline thickens to 2px or shifts offset by 1px.
- Surfaces (buttons, cards): background shifts to `--cream-2` (~one tick darker). No scale, no shadow change.
- Nav items: opacity stays at 1; the underlying dot indicator changes from cream-3 to ink. That's it.

### Press / active states
- Buttons darken one more step (`--ink-2` → `--ink`) and very slightly compress (`transform: translateY(0.5px)`). No big shrink.

### Imagery
- **Color vibe**: warm-neutral, slightly desaturated. If color is present, it's small-area and intentional. B&W is the default for blog headers.
- **Grain**: optional, very light, applied via overlay PNG only — never via filter.
- The pixelated portrait (`JD_PFP.jpeg`, rendered with `image-rendering: pixelated`) is treated as a **signature element** and should appear unchanged on the homepage and About page.

### Transparency & blur
- **Rarely used.** A fixed nav may use `backdrop-filter: blur(8px)` with `background: rgba(248, 247, 244, 0.85)` when content scrolls under it. Nowhere else.

### Cards
- Cream background, 1px hairline border, 6px radius. No shadow. Internal padding `1.5rem`. Hover: background → `--cream-2`. That's the entire card system.

### Density
- Comfortable, never cramped. Vertical rhythm in multiples of 4px. Generous space between sections (`--space-12` = 3rem) — the layout breathes.

---

## ICONOGRAPHY

JD's design language **leans heavily on type, not icons**. Icons exist, but they whisper.

**Approach**:
- **No emoji**, ever.
- **No icon font is bundled** in the source — there is room to add one.
- **Recommended icon set**: **Lucide** (https://lucide.dev) — thin, monoline, 1.5px stroke, rounded line caps. Matches the editorial tone. Load via CDN: `https://unpkg.com/lucide@latest/dist/umd/lucide.js` or as inline SVG.
  - *This is a substitution, not a verified choice from the source.* No icon library was referenced in the codebase. Flagging so JD can confirm or swap (e.g. for Phosphor, Tabler, or his own set).
- Icons should be **1.5px stroke at 16–20px display size**. Color: `--fg-3` by default, `--fg-1` on interactive states.
- **Unicode glyphs** are used as icons in a few spots:
  - `•` (bullet) and `·` (middle dot) — section separators.
  - `→` (right arrow) — "Read more" affordances.
  - `↗` (up-right arrow) — outbound links to external sites.
  - `—` (em dash) — connector in metadata strings ("Operator — Latin America").
- The leading-dot motif (small `5px` circle) used in the homepage section list is a **branded micro-pattern**. Replace it with `--cream-3` (default) / `--ink` (active). Use it instead of disc bullets in any vertical list of section names.
- **The portrait** (`assets/JD_PFP.jpeg`) is rendered pixel-art-style with `image-rendering: pixelated;` and a 6px radius. It is the closest thing to a logo the system has.
- **Wordmark**: "JD" in DM Mono, weight 500, 13px, 0.1em letter-spacing, uppercase. That's the logo.

See `assets/` for the portrait. The system intentionally ships **no other icon files** until JD picks a set.

---

## How to use

Drop `colors_and_type.css` into any HTML page:

```html
<link rel="stylesheet" href="colors_and_type.css">
```

Then write semantic HTML — `h1`, `p`, `.eyebrow`, `.tagline`, `.label-mono`, `<a>`, etc. — and most of the system applies automatically.

For component patterns (cards, nav, buttons, blog post layouts), see `ui_kits/personal-site/`.
