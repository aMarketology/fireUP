# Fire Up Hibachi — SEO Strategy for San Diego Market Expansion

> Internal reference document for Fire Up Hibachi (fireuphibachi.com).
> Last updated: February 26, 2026

---

## Overview

Fire Up Hibachi is a premium mobile hibachi catering service led by **Chef Hernan Loredo** with 14 years of teppanyaki experience. The site is built on **Next.js** (previously served on Duda). This document captures the SEO systems we need to build and maintain — specifically focused on expanding into the **San Diego market** with targeted location and keyword pages.

---

## Part 1: Why the Old Duda Site Had Strong SEO Out of the Box

Duda handled SEO **automatically at the infrastructure level**:

### 1. Server-Side Rendering by Default

Duda served fully rendered HTML to crawlers. Google received complete page content on the first request — no JavaScript execution needed. Next.js does the same via SSR/SSG, so this is covered.

### 2. Automatic Structured Data

Duda auto-injected `JSON-LD` schema for:

- `LocalBusiness` on every page (critical for local service businesses like hibachi catering)
- `BreadcrumbList` on every page
- `WebSite` with `SearchAction` for sitelinks
- `Service` schemas for each offering

None required manual work. In Next.js we must build this ourselves.

### 3. Automatic Sitemap + Robots.txt

Every published page triggered a sitemap refresh with the correct `<lastmod>` timestamp. We need to replicate this — especially as we add San Diego location pages.

### 4. Canonical URLs on Every Page

Auto-generated `<link rel="canonical">` prevented duplicate content. Critical for location pages that share similar copy (e.g., "hibachi catering La Jolla" vs "hibachi catering Del Mar").

### 5. Meta Tags with Fallbacks

If a meta description was missing, Duda auto-generated one from the first ~160 characters of content. Unregistered pages on the Next.js site render nothing — a gap we must close.

### 6. Page Speed Optimization

- Automatic image compression and WebP conversion
- Lazy loading on images
- CSS/JS minification
- CDN delivery globally
- Core Web Vitals optimized out of the box

---

## Part 2: What We Need to Build in Next.js

### ✅ DONE — Core Site Pages

`app/page.tsx`, `app/services/page.tsx`, `app/about/page.tsx`, `app/contact/page.tsx`, `app/get-started/page.tsx`, `app/gallery/page.tsx` are live.

### ✅ DONE — Schema on Root Layout

`app/layout.tsx` imports `organizationSchema`, `servicesSchema`, and `reviewSchema` from `lib/schema.ts` — these fire on every page.

### ❌ MISSING — San Diego Location Pages

We have **zero dedicated San Diego pages**. These are the highest-ROI SEO opportunity: people searching "hibachi catering San Diego" or "private hibachi chef Chula Vista" find nothing pointing to us. **Build these pages first.**

See Part 3 for the full list.

### ❌ MISSING — Sitemap Covering Location Pages

`app/sitemap.ts` does not exist yet. Once we create San Diego location pages, every one of them needs to be in the sitemap with a real date.

### ❌ MISSING — LocalBusiness + Service Schema on Location Pages

Each San Diego neighborhood page needs its own `LocalBusiness` JSON-LD with the city/area name, address service area, and relevant keywords — this is how Google Maps and local pack results are driven.

### ❌ MISSING — Meta Description Fallbacks

If a location page `metadata` export has no `description`, Next.js renders a blank tag. Every page must have an explicit, keyword-rich description.

### ❌ MISSING — Internal Linking Between Location Pages

Location pages should link to each other (e.g., "Also serving La Jolla, Coronado, and Encinitas") for crawl depth and topical authority.

---

## Part 3: San Diego Target Keywords & Location Pages to Build

### Primary Target Keywords

These are the commercial-intent searches we want to own in San Diego:

| Keyword | Monthly Intent | Priority |
|---------|---------------|----------|
| hibachi catering San Diego | Highest | 🔴 Build now |
| private hibachi chef San Diego | High | 🔴 Build now |
| teppanyaki catering San Diego | High | 🔴 Build now |
| mobile hibachi San Diego | High | 🔴 Build now |
| hibachi party San Diego | High | 🔴 Build now |
| backyard hibachi San Diego | Medium | 🟡 Next sprint |
| hibachi birthday party San Diego | Medium | 🟡 Next sprint |
| hibachi wedding catering San Diego | Medium | 🟡 Next sprint |
| hibachi chef for hire San Diego | Medium | 🟡 Next sprint |
| hibachi catering near me San Diego | High | 🔴 Build now |

### San Diego Neighborhood / Service Area Pages to Create

Each entry below = one dedicated `page.tsx` at the given slug:

```
/san-diego                          ← Primary SD hub page (most important)
/san-diego/la-jolla                 ← High-income area, high catering demand
/san-diego/chula-vista              ← Largest SD suburb, high event volume
/san-diego/coronado                 ← Premium weddings + private events
/san-diego/encinitas                ← Beach weddings, backyard events
/san-diego/carlsbad                 ← Corporate events, LEGOLAND area
/san-diego/oceanside                ← Military community, large family events
/san-diego/escondido                ← Inland SD, large backyard events
/san-diego/el-cajon                 ← East county, growing market
/san-diego/national-city            ← Dense residential, family events
/san-diego/del-mar                  ← Luxury events, horse-racing crowd
/san-diego/solana-beach             ← Affluent coastal, private parties
/san-diego/poway                    ← Family suburbs, birthdays + quinceañeras
/san-diego/santee                   ← East county suburbs
/san-diego/mission-valley           ← Central San Diego, corporate catering
/san-diego/north-park               ← Trendy neighborhood, private dining events
/san-diego/point-loma               ← Military, upscale residential
/san-diego/rancho-bernardo          ← Wealthy planned community, HOA events
```

### Keyword Formula Per Location Page

Every location page title, H1, and meta description should follow this pattern:

- **Title:** `Hibachi Catering [City] | Private Teppanyaki Chef | Fire Up Hibachi`
- **Meta description:** `Fire Up Hibachi brings San Diego's best private hibachi experience to [City]. Chef Hernan's 14 years of teppanyaki expertise — perfect for birthdays, weddings & corporate events. Get a free quote.`
- **H1:** `Hibachi Catering in [City], CA`
- **H2s:** `Private Hibachi Chef for [City] Events`, `Why [City] Chooses Fire Up Hibachi`, `Book Your [City] Hibachi Experience`

---

## Part 4: Technical SEO Implementation in Next.js

### System 1: Content Registry for Location Pages

```typescript
// lib/content-registry.ts

export interface ContentEntry {
  slug: string;              // URL path like "/san-diego/la-jolla"
  title: string;             // Page <title> tag
  description: string;       // Meta description (max 160 chars)
  publishDate: string;       // ISO date: "2026-02-26"
  modifiedDate: string;      // ISO date: last edit
  city: string;              // City name for LocalBusiness schema
  county: string;            // e.g. "San Diego County"
  serviceArea: string;       // Neighborhood/area display name
  tags: string[];            // Keyword tags
  priority: number;          // Sitemap priority 0.0–1.0
  changeFrequency: 'daily' | 'weekly' | 'monthly';
}

export const contentRegistry: ContentEntry[] = [
  {
    slug: '/san-diego',
    title: 'Hibachi Catering San Diego | Private Teppanyaki Chef | Fire Up Hibachi',
    description: 'Fire Up Hibachi brings premium private hibachi catering to San Diego. Chef Hernan — 14 years of teppanyaki experience — serves birthdays, weddings & corporate events. Free quote.',
    publishDate: '2026-02-26',
    modifiedDate: '2026-02-26',
    city: 'San Diego',
    county: 'San Diego County',
    serviceArea: 'San Diego',
    tags: ['hibachi catering San Diego', 'private hibachi chef San Diego', 'teppanyaki catering San Diego', 'mobile hibachi San Diego'],
    priority: 1.0,
    changeFrequency: 'weekly',
  },
  {
    slug: '/san-diego/la-jolla',
    title: 'Hibachi Catering La Jolla | Private Chef | Fire Up Hibachi',
    description: 'Luxury private hibachi catering in La Jolla, CA. Chef Hernan brings the full teppanyaki experience to your home, beach, or venue. Perfect for upscale parties & weddings.',
    publishDate: '2026-02-26',
    modifiedDate: '2026-02-26',
    city: 'La Jolla',
    county: 'San Diego County',
    serviceArea: 'La Jolla',
    tags: ['hibachi catering La Jolla', 'private hibachi chef La Jolla', 'teppanyaki La Jolla', 'hibachi party La Jolla'],
    priority: 0.9,
    changeFrequency: 'weekly',
  },
  {
    slug: '/san-diego/chula-vista',
    title: 'Hibachi Catering Chula Vista | Private Teppanyaki | Fire Up Hibachi',
    description: 'Fire Up Hibachi serves Chula Vista with premium mobile hibachi catering. Birthdays, quinceañeras, corporate events & more. Book Chef Hernan for your next Chula Vista event.',
    publishDate: '2026-02-26',
    modifiedDate: '2026-02-26',
    city: 'Chula Vista',
    county: 'San Diego County',
    serviceArea: 'Chula Vista',
    tags: ['hibachi catering Chula Vista', 'private hibachi Chula Vista', 'teppanyaki Chula Vista', 'hibachi birthday party Chula Vista'],
    priority: 0.9,
    changeFrequency: 'weekly',
  },
  {
    slug: '/san-diego/coronado',
    title: 'Hibachi Catering Coronado | Luxury Private Chef | Fire Up Hibachi',
    description: 'Premium private hibachi catering on Coronado Island. Fire Up Hibachi specializes in luxury events — weddings, private dining & corporate affairs on Coronado, CA.',
    publishDate: '2026-02-26',
    modifiedDate: '2026-02-26',
    city: 'Coronado',
    county: 'San Diego County',
    serviceArea: 'Coronado',
    tags: ['hibachi catering Coronado', 'private hibachi chef Coronado', 'teppanyaki Coronado', 'hibachi wedding Coronado'],
    priority: 0.85,
    changeFrequency: 'weekly',
  },
  // ... add remaining SD neighborhoods following same pattern
];
```

### System 2: Sitemap Generation (Include All Location Pages)

```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next';
import { contentRegistry } from '@/lib/content-registry';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fireuphibachi.com';

  // Core site pages
  const corePages = [
    { url: baseUrl,                      lastModified: new Date('2026-02-26'), priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/services`,        lastModified: new Date('2026-02-26'), priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/about`,           lastModified: new Date('2026-02-26'), priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/gallery`,         lastModified: new Date('2026-02-26'), priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/get-started`,     lastModified: new Date('2026-02-26'), priority: 0.95, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/contact`,         lastModified: new Date('2026-02-26'), priority: 0.9, changeFrequency: 'monthly' as const },
  ];

  // Location pages from registry
  const locationPages = contentRegistry.map((entry) => ({
    url: `${baseUrl}${entry.slug}`,
    lastModified: new Date(entry.modifiedDate),
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));

  return [...corePages, ...locationPages];
}
```

### System 3: LocalBusiness Schema for Each Location Page

```typescript
// components/LocationSEO.tsx
// Drop this into every San Diego location page

interface LocationSEOProps {
  city: string;
  slug: string;
  title: string;
  description: string;
}

export function LocationSEO({ city, slug, title, description }: LocationSEOProps) {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'FoodEstablishment',
    '@id': `https://fireuphibachi.com${slug}`,
    name: 'Fire Up Hibachi',
    description: description,
    url: `https://fireuphibachi.com${slug}`,
    telephone: '+1-YOUR-NUMBER',
    priceRange: '$$$',
    servesCuisine: 'Japanese, Teppanyaki, Hibachi',
    areaServed: {
      '@type': 'City',
      name: city,
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    founder: {
      '@type': 'Person',
      name: 'Chef Hernan Loredo',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Hibachi Catering Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: `Private Hibachi Catering ${city}` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: `Teppanyaki Chef for Events in ${city}` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: `Hibachi Birthday Party ${city}` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: `Wedding Hibachi Catering ${city}` } },
      ],
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fireuphibachi.com' },
      { '@type': 'ListItem', position: 2, name: 'San Diego', item: 'https://fireuphibachi.com/san-diego' },
      { '@type': 'ListItem', position: 3, name: city, item: `https://fireuphibachi.com${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
```

### System 4: Metadata Export for Each Location Page

```typescript
// app/san-diego/la-jolla/metadata.ts
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hibachi Catering La Jolla | Private Teppanyaki Chef | Fire Up Hibachi',
  description: 'Luxury private hibachi catering in La Jolla, CA. Chef Hernan brings the full teppanyaki experience to your home, beach, or venue. Perfect for upscale parties & weddings.',
  keywords: 'hibachi catering La Jolla, private hibachi chef La Jolla, teppanyaki La Jolla, mobile hibachi La Jolla, hibachi party La Jolla CA',
  alternates: {
    canonical: 'https://fireuphibachi.com/san-diego/la-jolla',
  },
  openGraph: {
    type: 'website',
    url: 'https://fireuphibachi.com/san-diego/la-jolla',
    title: 'Hibachi Catering La Jolla | Fire Up Hibachi',
    description: 'Luxury private hibachi catering in La Jolla. Book Chef Hernan for your next event.',
    siteName: 'Fire Up Hibachi',
  },
};
```

### System 5: Internal Linking Component (Connect All SD Locations)

```typescript
// components/SanDiegoLocations.tsx
import Link from 'next/link';

const sdLocations = [
  { city: 'San Diego', slug: '/san-diego' },
  { city: 'La Jolla', slug: '/san-diego/la-jolla' },
  { city: 'Chula Vista', slug: '/san-diego/chula-vista' },
  { city: 'Coronado', slug: '/san-diego/coronado' },
  { city: 'Encinitas', slug: '/san-diego/encinitas' },
  { city: 'Carlsbad', slug: '/san-diego/carlsbad' },
  { city: 'Oceanside', slug: '/san-diego/oceanside' },
  { city: 'Escondido', slug: '/san-diego/escondido' },
  { city: 'Del Mar', slug: '/san-diego/del-mar' },
  { city: 'Solana Beach', slug: '/san-diego/solana-beach' },
  { city: 'Poway', slug: '/san-diego/poway' },
  { city: 'El Cajon', slug: '/san-diego/el-cajon' },
  { city: 'National City', slug: '/san-diego/national-city' },
  { city: 'Rancho Bernardo', slug: '/san-diego/rancho-bernardo' },
];

export function SanDiegoLocations({ currentSlug }: { currentSlug: string }) {
  const others = sdLocations.filter(l => l.slug !== currentSlug);
  return (
    <nav aria-label="San Diego service areas">
      <h3>Also Serving These San Diego Areas</h3>
      <ul>
        {others.map(loc => (
          <li key={loc.slug}>
            <Link href={loc.slug}>Hibachi Catering {loc.city}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
```

### System 6: Google Ping on Deploy

```typescript
// scripts/ping-google.ts
// Wire to Vercel post-deploy hook

async function pingGoogle() {
  await fetch('https://www.google.com/ping?sitemap=https://fireuphibachi.com/sitemap.xml');
  console.log('Pinged Google sitemap.');
}

pingGoogle();
```

---

## Part 5: SEO Architecture Status (Feb 26 2026)

| System | Needed | Current Status |
|--------|--------|---------------|
| Core pages live | ✅ | ✅ Home, Services, About, Gallery, Contact, Get Started |
| Organization + Service schema | ✅ | ✅ `lib/schema.ts` fires on every page via layout |
| Sitemap | ✅ | ❌ Does not exist — needs to be created |
| San Diego hub page `/san-diego` | ✅ | ❌ Not built |
| San Diego neighborhood pages (18) | ✅ | ❌ None built |
| LocalBusiness schema per location | ✅ | ❌ Not built |
| Canonical URLs on location pages | ✅ | ❌ Not set |
| Internal linking between SD pages | ✅ | ❌ Not built |
| Meta descriptions on all pages | ✅ | ⚠️ Core pages done, location pages missing |
| Google ping on deploy | ✅ | ❌ Not wired |
| Google Business Profile linked | ✅ | ❓ Verify in GSC |

---

## Part 6: Priority Implementation Order

| # | Task | Status | Impact |
|---|------|--------|--------|
| **1** | **Build `/san-diego` hub page** | **❌ Not built** | **Highest** |
| **2** | **Build top 5 SD neighborhood pages** (La Jolla, Chula Vista, Coronado, Encinitas, Carlsbad) | **❌ Not built** | **Highest** |
| **3** | **Create `app/sitemap.ts`** covering all pages | **❌ Missing** | **High** |
| 4 | Add `LocalBusiness` JSON-LD to all location pages | ❌ Not built | High |
| 5 | Add canonical URLs to all location pages | ❌ Not set | High |
| 6 | Add `SanDiegoLocations` internal link component | ❌ Not built | Medium |
| 7 | Wire ping-google script to Vercel post-deploy | ❌ Not wired | Medium |
| 8 | Build remaining 13 SD neighborhood pages | ❌ Not built | Medium |
| 9 | Add FAQ schema to location pages ("Do you serve La Jolla?") | ❌ Not built | Medium |
| 10 | Google Search Console — submit sitemap + verify coverage | ❌ Pending | High |

### San Diego Hub Page Content Outline (`/san-diego`)

This is the single most important page to build first. It should contain:

1. **H1:** `Hibachi Catering San Diego, CA`
2. **Hero copy** mentioning: San Diego, teppanyaki, Chef Hernan, 14 years experience
3. **Service area section** — list all SD neighborhoods with links
4. **Menu/offering section** — what's included in a San Diego hibachi event
5. **Pricing section** — range for SD events
6. **Testimonials** from SD customers (or generic 5-star reviews)
7. **FAQ** — targeting "hibachi catering near me" and other question-based searches
8. **CTA** → `/get-started` booking form

### Location Page Template (Copy-Adapt for Each Neighborhood)

```typescript
// app/san-diego/[city]/page.tsx pattern

export default function CityPage() {
  return (
    <>
      <LocationSEO city="La Jolla" slug="/san-diego/la-jolla" ... />
      <h1>Hibachi Catering in La Jolla, CA</h1>
      <p>
        Fire Up Hibachi brings San Diego's finest private hibachi experience
        to La Jolla. Chef Hernan Loredo — with 14 years of professional
        teppanyaki training — sets up the full hibachi show at your home,
        estate, or venue in La Jolla.
      </p>
      <h2>Private Hibachi Chef for La Jolla Events</h2>
      {/* ... event types, menu, pricing */}
      <SanDiegoLocations currentSlug="/san-diego/la-jolla" />
      <EventInquiryForm />
    </>
  );
}
```

---

## Key Takeaway

> **Ranking for "hibachi catering San Diego" requires dedicated location pages with
> hyper-local copy, proper LocalBusiness schema, and strong internal linking between
> all San Diego neighborhood pages.** Generic city-wide mentions buried in the homepage
> footer do not move rankings. Each neighborhood that searches for its own hibachi chef
> needs its own page — that's how local service SEO works.

---

*Document for Fire Up Hibachi (fireuphibachi.com) — February 2026.*
