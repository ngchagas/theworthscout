# TheWorthScout

**Independent Guides & Product Reviews.** TheWorthScout is a U.S.-focused editorial and affiliate website built with Astro and deployed as a static site on Cloudflare Pages.

The brand is designed to support multiple consumer categories over time. Its first editorial vertical is pets, beginning with online puppy-training programs available to customers in the United States. Future categories should only be introduced after the initial vertical has substantial, credible content.

## Current state

- The public site is English-first and uses U.S. English.
- Spanish and Brazilian Portuguese content is preserved in the code but is hidden from navigation and marked `noindex,nofollow`.
- The puppy-training comparison is an internal editorial template and remains `noindex,nofollow` until its placeholders are replaced with verified research.
- The Pets landing page, Contact page, and Privacy Policy are also temporarily `noindex,nofollow` during pre-launch.
- Empty future-category cards have been removed from the homepage.
- The header remains sticky; the footer follows the normal document flow.
- A static sitemap is available at `/sitemap.xml` and currently lists only launch-ready, indexable pages.
- No affiliate links, analytics, advertising pixels, or fabricated reviews are installed.

## Editorial principles

- Do not claim firsthand testing unless it actually occurred.
- Separate verified facts from editorial judgment.
- Explain important limitations and trade-offs.
- Clearly label affiliate links and sponsored placements.
- Payment must not guarantee a positive recommendation, rating, or ranking.
- Safety-sensitive pet guidance should be reviewed by an appropriately qualified professional.

## Project structure

```text
src/
├── i18n/content.js                 Localized UI and page copy
├── layouts/Base.astro              Shared metadata, header, and footer
├── pages/index.astro               Homepage
├── pages/pets/index.astro          Pets vertical landing page
├── pages/pets/puppy-training.astro Puppy-training comparison template
├── pages/[locale]/[...path].astro  Preserved ES-US and PT-BR routes
└── styles/global.css               Global layout and responsive styles

public/
├── robots.txt
└── sitemap.xml
```

## Local development

Requirements: a current Node.js release and npm.

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

Astro writes the static output to `dist/`.

## Deployment

Cloudflare Pages is connected to the GitHub repository `ngchagas/theworthscout`.

```text
Framework preset: Astro
Build command:     npm run build
Output directory:  dist
Production branch: main
Custom domain:     theworthscout.com
```

A push to `main` triggers the Cloudflare Pages CI/CD pipeline. The expected public-domain behavior is:

```text
https://www.theworthscout.com/*  → 301 → https://theworthscout.com/*
https://theworthscout.com/       → 200
```

The `www` redirect is implemented with a Cloudflare Redirect Rule. DNS records must remain proxied through Cloudflare.

## Before affiliate applications

- Research an initial set of U.S.-market puppy-training programs.
- Confirm that each merchant serves U.S. customers and accepts the intended affiliate traffic.
- Verify current pricing, renewals, cancellation, refund, support, and course-access terms.
- Replace every template placeholder with sourced, documented information.
- Publish original informational content supporting the commercial comparison.
- Add real author biographies and document the research methodology.
- Verify and publish the monitored contact address.
- Replace the pre-launch privacy notice with a policy covering the services actually enabled.
- Update `public/sitemap.xml` when additional pages become indexable.
- Configure analytics, conversion measurement, and search tools only after updating the privacy disclosures.
- Review affiliate-program rules for brand usage, paid search, claims, and comparison content.

## Expansion guidance

TheWorthScout may later cover technology, cybersecurity, home, or other consumer categories. New verticals should have their own subject-matter expertise, research criteria, authorship, and sufficient content depth before being added to the public navigation.
