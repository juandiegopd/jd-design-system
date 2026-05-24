---
name: jd-design
description: Use this skill to generate well-branded interfaces and assets for JD Peñaherrera's personal website (juandiego.work) — homepage, blog posts, project lists, and per-company landing pages. Editorial, cream + ink, DM Serif Display + DM Sans + DM Mono, blue used sparingly. Contains design guidelines, colors, type tokens, fonts, assets, and a UI kit for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files (colors_and_type.css, ui_kits/personal-site/, assets/, preview/).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. The primary tokens live in `colors_and_type.css` — drop that file alongside any HTML you write and you'll inherit the full system.

If working on production code, you can copy assets and read the rules in `README.md` to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build — a blog post, a project entry, a company-specific landing page, a CV section — ask some questions, and act as an expert designer who outputs HTML artifacts *or* production code, depending on the need.

Always honor:
- Cream paper, ink text, blue used sparingly (links + accents only).
- DM Serif Display for display + headings (italic for emphasis, never bold).
- DM Sans for body, DM Mono for nav/labels/dates (always uppercased + tracked).
- Hairline borders, almost no shadows, 6px card radius.
- No emoji. No gradients. No stock photography. The portrait is the only branded image.
- Sentence case for prose; first-person ("I") for reflection, second-person ("you") for playbooks. Never "we".
