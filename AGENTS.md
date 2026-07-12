# Evelina Bao — personal website

Astro 6 + Tailwind v4 static site, deployed to GitHub Pages at
https://evelinabao.github.io via GitHub Actions (.github/workflows/deploy.yml,
withastro/action). Repo name: evelinabao.github.io.

## Design system
Defined in src/styles/global.css via Tailwind v4 @theme block.
Tokens: paper (bg #FAF7F1), card, ink (text), muted, line (borders),
lavender / lavender-deep / lavender-soft (accent #996C96 family),
peach, periwinkle, blue-deep, slate.
Fonts: font-display = Fraunces (headings), font-body = IBM Plex Sans.
Typography plugin loaded via @plugin; prose styling customized with
prose-* modifiers in the project detail template.

## Structure
- src/layouts/Layout.astro — shared frame: global.css import, Google Fonts,
  title prop (default "Evelina Bao"), <Nav />, <slot />, footer.
- src/components/Nav.astro — nav: Home, Projects, Publications (#publications),
  Contact (#contact), Resume (/resume.pdf), CV (/cv.pdf).
- src/components/ProjectCard.astro — props: title, description, stat, methods,
  figure, image, href. Shows image if present, else SVG via ProjectFigure;
  shows stat if present, else methods.
- src/components/ProjectFigure.astro — named SVG figures:
  timeseries | bars | twoline | network | alignment.
- src/pages/index.astro — hero (name first, then research question, headshot
  right), Selected work grid (loops projects collection), About, Publications
  (loops publications collection, statusStyle() colors pills), footer/contact.
- src/pages/projects/index.astro — all projects grid.
- src/pages/projects/[id].astro — detail template: getStaticPaths from
  projects collection, title, stat, meta box (scale/methods/where/advisor),
  prose-wrapped <Content />.

## Content (the part I edit most)
- src/content.config.ts — two collections:
  - projects: glob loader, src/content/projects/*.md. Frontmatter schema:
    title, description, stat?, figure?, image?, scale?, methods?, location?,
    advisor?, order. Markdown body = case study
    (## The question / approach / findings / impact).
  - publications: file loader, src/data/publications.json
    (id, citation, status, order).
- Images/PDFs live in public/ (figures in public/figures/), referenced
  by root path like /figures/x.png.
- After schema changes: npx astro sync.

## Conventions
- Add a project: create src/content/projects/<slug>.md — card and detail
  page appear automatically; slug becomes /projects/<slug>.
- Owner is learning web dev: explain new concepts, ask before large
  changes, don't rewrite whole files when a small edit works.