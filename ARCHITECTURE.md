# Maykott Holdings — Website Architecture Documentation

## Project Overview

This is the production-ready corporate website for **Maykott Holdings**, a global B2B industrial holding company. Built on **Next.js 15** (App Router) with **TypeScript**, **Tailwind CSS**, and a data-layer architecture for easy CMS integration.

---

## Technology Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Fonts | Inter (Google Fonts) |
| Icons | Material Symbols Outlined |
| Images | Next.js Image (optimized) |
| Deployment Target | Node.js server / Static export |

---

## Folder Structure

```
website/
├── src/
│   ├── app/                        # Next.js App Router pages
│   │   ├── layout.tsx              # Root layout (SEO, fonts, schema)
│   │   ├── globals.css             # Global design system styles
│   │   ├── page.tsx                # Homepage
│   │   ├── not-found.tsx           # 404 page
│   │   ├── about/
│   │   │   └── page.tsx            # About page
│   │   ├── portfolio/
│   │   │   └── page.tsx            # Portfolio Holdings (interactive)
│   │   ├── investment/
│   │   │   └── page.tsx            # Investment Strategy
│   │   ├── insights/
│   │   │   └── page.tsx            # Insights & Intelligence
│   │   └── contact/
│   │       └── page.tsx            # Strategic Inquiry Portal
│   ├── components/                  # Reusable UI components
│   │   ├── Navigation.tsx           # Sticky nav with mobile menu
│   │   ├── Footer.tsx               # Consistent footer
│   │   └── SiteLayout.tsx           # Page wrapper (Nav + Footer)
│   └── data/                        # CMS-like data layer
│       ├── subsidiaries.ts          # Portfolio company data
│       ├── leadership.ts            # Executive team data
│       └── insights.ts              # Articles/research data
├── public/                          # Static assets
├── next.config.ts                   # Next.js configuration
├── tailwind.config.ts               # Brand design tokens
└── tsconfig.json                    # TypeScript config
```

---

## Design System

### Brand Colors
```css
primary:          #121212  (Near-black)
accent-gold:      #C5A859  (Brand gold)
accent-gold-light: #E2C990 (Gold highlight)
accent-gold-dark:  #9A8039 (Gold shadow)
background-light: #F7F7F7  (Off-white)
background-dark:  #191919  (Deep dark)
off-white:        #FDFDFD  (Pure off-white)
```

### Typography
- Font: **Inter** (Variable, weights 100–900)
- Display style: uppercase tracking-tight for headings
- Body: relaxed leading, light weight

### Key Utilities
- `.gold-gradient` — decorative gold fill
- `.text-gold-gradient` — gradient text effect
- `.titan-shadow` — subtle card shadow
- `.titan-grid` — fine grid background pattern
- `.dot-grid` — dot grid background pattern

---

## Data Architecture (CMS Layer)

The site uses a **data-as-CMS** pattern. All content is centralized in `/src/data/` files.

### Adding a New Subsidiary (Portfolio Company)

Open `src/data/subsidiaries.ts` and append a new object to the `subsidiaries` array:

```typescript
{
  id: "company-slug",                // URL-safe identifier
  name: "Company Name",
  sector: "technology",              // infrastructure | technology | energy | logistics | finance | environmental
  sectorLabel: "Enterprise Tech",   // Display label
  description: "One paragraph description.",
  assetsUnderManagement: "$500M",
  annualGrowth: "+15.2%",
  badge: "New Acquisition",          // Optional: "Top Performer" | "New Acquisition"
  badgeVariant: "dark",              // Optional: "gold" | "dark"
  icon: "terminal",                  // Material Symbols icon name
  imageUrl: "https://...",           // High-res unsplash image
  imageAlt: "Descriptive alt text",
  trend: [1, 2, 3, 4, 4],           // 5 values (1-4) for sparkline chart
  featured: false,                   // Show on homepage (max 3 featured)
  yearAcquired: 2024,
  headquarters: "London",
  employees: "1,200+",
}
```

The portfolio page filter, grid, and homepage showcase all automatically update.

### Editing Leadership Profiles

Open `src/data/leadership.ts` and modify the `leadershipTeam` array.

Set `featured: true` for up to 4 profiles to appear on the homepage.

### Adding Insights Articles

Open `src/data/insights.ts` and append to the `insights` array.

Set `featured: true` for the hero whitepaper article on the Insights page.

---

## SEO Architecture

- **Root metadata** configured in `src/app/layout.tsx`
- **Per-page metadata** exported from each `page.tsx`
- **Organization Schema** (JSON-LD) in root layout
- **Open Graph** and **Twitter Card** tags
- **Semantic HTML**: proper `h1`, `h2` hierarchy; `article`, `section`, `nav` elements
- **Accessibility**: ARIA labels, roles, skip-to-content anchors

---

## Performance Optimization

- Next.js `Image` component with automatic WebP conversion and lazy loading
- Inter font loaded via `next/font/google` (no FOUT, inline CSS)
- Material Symbols loaded via `<link>` in `<head>` for icon availability
- `priority` prop on above-the-fold images
- `compress: true` in `next.config.ts`
- Minimal JavaScript — client components only where needed (Portfolio filter, Contact form)

---

## Accessibility (WCAG AA)

- Colour contrast checked: gold-on-dark ≥ 4.5:1
- All images have descriptive `alt` attributes
- Form fields have explicit `<label>` elements linked by `htmlFor`
- Interactive elements have `aria-label`, `aria-expanded`, `role` attributes
- Keyboard-navigable mobile menu
- Skip-to-content anchor: `<main id="main-content" tabIndex={-1}>`

---

## Future Expansion

### Adding a Blog/Press Module
1. Create `src/data/press.ts` with a `PressRelease[]` array
2. Create `src/app/press/page.tsx`
3. Add "Press" to `navLinks` in `Navigation.tsx`

### Adding an Investor Page
1. Create `src/app/investor-relations/page.tsx`
2. Add financial disclosures as structured data in `src/data/financials.ts`
3. Protect with middleware if needed

### Connecting a Real CMS
Replace `src/data/*.ts` imports with API calls to:
- **Contentful**: `getEntries({ content_type: 'subsidiary' })`
- **Sanity**: GROQ queries
- **Strapi**: REST API
- **Notion**: Notion API

The function signatures stay identical — only the data source changes.

---

## Deployment Guide

See `DEPLOYMENT.md` for detailed GoDaddy deployment instructions.
