# Personal site — UI kit

A hi-fi clickable recreation of **juandiego.work**. Built from the seed `index.html` + the design system tokens.

## Screens
1. **Home** — portrait + "Operator. *Builder.*" + section dots (matches the seeded page).
2. **Writing** — list of blog posts (mono meta + serif titles + italic taglines).
3. **Post** — single article view, 65ch column, mono pull-quotes.
4. **Projects** — chronological list with year, role, place.
5. **Company landing** — example sub-landing page JD might build for a hiring manager (uses the system + introduces the blue accent at scale).

Click through the dot-nav at the top to switch screens. All copy is placeholder in JD's voice.

## Components
- `Nav.jsx` — fixed top nav with dot indicators.
- `HomeHero.jsx` — portrait + name + tagline + section list.
- `PostList.jsx` — vertical stack of post entries.
- `PostView.jsx` — single article reader.
- `ProjectList.jsx` — work history table.
- `CompanyLanding.jsx` — bespoke landing page template.
- `Footer.jsx` — quiet mono footer.

Files are inline-JSX. The whole kit ships as a single `index.html` you can open or drop into the design system review pane.
