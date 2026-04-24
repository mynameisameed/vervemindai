# VerveMind AI — Main Site Redesign Spec
**Date:** 2026-04-21
**Scope:** `apps/web` — homepage + inner pages (about, pricing, blog, contact, FAQ)
**Status:** Approved by Sameed

---

## 1. Design Direction

**Option C — Stitch Dark Structured** (selected from 3 options)

Borrows structural clarity from `stitch-dashboard.html` (dark Material-inspired grid, bento stat blocks, Manrope headlines). Removes the current site's animated gradient blobs and glassmorphism entirely. Only "alive" UI indicators animate.

### Visual tokens
| Token | Value |
|-------|-------|
| Background | `#131313` |
| Surface (cards) | `#1a1a1a` |
| Border | `rgba(255,255,255,0.07)` |
| Border strong | `rgba(255,255,255,0.11)` |
| Text | `#E5E2E1` |
| Text muted | `rgba(229,226,225,0.45)` |
| Text faint | `rgba(229,226,225,0.25)` |
| Primary (teal) | `#00F5D4` |
| Primary dim | `rgba(0,245,212,0.08)` |
| Primary border | `rgba(0,245,212,0.18)` |
| Secondary (purple) | `#d2bbff` |
| Positive (green) | `#34D399` |
| Amber | `#FBBF24` |
| Border radius | `6px` (default), `10px` (lg), `14px` (xl) |

### Typography
- **Headlines:** Manrope 800/900, tight tracking (`-0.04em`)
- **Body:** Inter 400/500
- **Labels/tags:** Inter 700, `0.10–0.15em` tracking, uppercase

### Animation rules (strict)
- **Allowed:** `pulse-dot` on live status indicators only (LIVE badge, hero badge dot)
- **Not allowed:** animated gradient blobs, `backdrop-filter: blur()`, parallax, scroll-triggered translate animations
- **One static glow:** single `radial-gradient` teal glow at hero top only — no animation, no blur

---

## 2. Global Layout

- Max content width: `1160px`, centered, `32px` horizontal padding
- Sticky nav: `58px` tall, `rgba(19,19,19,0.85)` background, `1px` bottom border
- Section vertical padding: `80px` top/bottom
- Alternating section backgrounds: `#131313` → `rgba(255,255,255,0.015)` with top/bottom `1px` borders

---

## 3. Homepage Sections (in order)

### 3.1 Founder Rate Banner
- Sits between nav and hero — full-width, `rgba(0,245,212,0.06)` background
- 10 pip slots (square, `8px`): 1 filled = iVolve, 9 open = available
- Copy: *"Founder Rate: 9 spots remaining. First 10 clients lock in current pricing forever."*
- Update slot count manually as clients are added

### 3.2 Hero
- Two-column grid: left = copy, right = solid metrics panel
- Left: badge → H1 → subtitle → 2 CTAs → 3 trust bullets
- H1: "The Autonomous / **Operating System** / for Local Business" (gradient on middle line)
- Primary CTA: "Book Free Strategy Call →" (teal gradient button)
- Secondary CTA: "Watch 2-min Demo" (outline button with play icon)
- Trust bullets: "No contracts" · "Live in 48hrs" · "First month free"
- Right panel: `#1a1a1a` solid background (no blur), 3 metric rows with progress bars, live agent feed (3 rows)

### 3.3 Social Proof Bar
- 4-cell grid with `1px` dividers
- Stats: 47K+ Leads · $2.1M Revenue · 380% ROI · 99.8% Uptime
- Each stat coloured: teal / purple / green / amber

### 3.4 Problem Section
- Tag: "THE PROBLEM"
- 3-column cards, numbered 01–03
- Each card: big faint number, headline, body, amber warning stat badge
- Pain points: Missed calls ($3,200/mo) · Dormant patients (68%) · After-hours dead zones (42%)

### 3.5 How It Works (alt background)
- Tag: "HOW IT WORKS"
- 3-column step cards with teal numbered badges
- Steps: Map → Deploy → Grow

### 3.6 Niche Tiles
- Tag: "BUILT FOR YOUR INDUSTRY"
- 4-column grid: MedSpa · Dental · HVAC · Roofing
- Each links to respective niche landing page (`medspa.vervemindai.com`, etc.)
- Hover: border shifts to teal, arrow turns teal

### 3.7 Testimonial
- Full-width 2-column card: quote left, metric callout right (border-separated)
- iVolve MedSpa: "$14K recovered in first 30 days"
- Update as more client results come in

### 3.8 Pricing (alt background)
- Section title: "Lock in before we raise prices."
- Two plans side by side:

| | Starter | Growth |
|--|---------|--------|
| Monthly | **$177/mo** | **$297/mo** |
| Setup | $497 one-time | $797 one-time |
| Calls | Unlimited | Unlimited |
| Reactivation | ✗ (greyed) | ✓ |
| Weekly dashboard | ✗ (greyed) | ✓ |
| Strategy call | ✗ | Monthly |
| First month free | ✗ | ✓ |

- "Founder rate — locked in forever" badge on both plans
- Slot counter (10 pips) at bottom of section — update `taken` count as clients close
- Link: "Multiple locations? Let's talk →"

### 3.9 CTA Band
- Dark card, single static teal top glow
- Headline: "Stop losing leads while you sleep."
- Sub: free 20-min audit offer
- Single CTA button

### 3.10 Footer
- 4-column: brand description · Solutions · Company · Legal
- Bottom bar: copyright left, "Built with AI. Powered by results." right (teal)

---

## 4. Inner Pages

Apply the same design tokens and nav/footer. Each inner page gets:
- A simple hero section (single column, centred, `180px` top padding)
- Section tag + H1 + subtitle — no metrics panel
- Consistent card/surface treatment

### Pricing page (`/pricing`)
- Mirror the pricing section from homepage but expanded
- Add ROI Calculator component (already built: `ROICalculator.tsx`)
- Add comparison table (already built: `PricingComparison.tsx`)
- Replace inline styles with CSS variables

### About page (`/about`)
- Already uses `#09090B` — update to `#131313`, apply new token system
- Keep content, replace inline styles

### Blog page (`/blog`)
- Card grid for posts
- Each card: surface `#1a1a1a`, border, tag badge, title, excerpt, date
- No changes to MDX content

### Contact / FAQ
- Simple single-column layout
- FAQ uses accordion pattern (collapsible rows with `+`/`-` toggle)

---

## 5. What Changes vs Current Code

| Item | Current | New |
|------|---------|-----|
| Background | `#09090B` inline styles | `#131313` CSS variable |
| Cards | `backdrop-filter: blur()` glass | Solid `#1a1a1a` |
| Animated blobs | Yes (framer-motion) | Removed |
| Grid lines bg | Yes (CSS) | Removed |
| Pricing | $297/mo | $177/$297 founder tiers |
| Style method | Inline `style={{}}` everywhere | CSS variables + Tailwind tokens |
| Fonts loaded | Inter + Manrope (already in layout.tsx) | No change needed |

---

## 6. Out of Scope (this spec)

- Portal (`apps/portal`) — separate spec
- Kits (`apps/kits`) — separate spec
- Blog content / MDX files — no changes
- Mobile responsive breakpoints — handled during implementation, not designed separately

---

## 7. Niche Landing Pages (`apps/blitz`)

Four niche pages, each at its own subdomain (`medspa.vervemindai.com`, `dental.vervemindai.com`, `hvac.vervemindai.com`, `roofing.vervemindai.com`). All share the same `#131313` base, `#1a1a1a` surface cards, and layout structure from this spec. Each niche gets one accent color applied to: badge, logo tint, LIVE dot, notification cards, CTA button gradient, and stat values.

### Accent color system

| Niche | Accent | Text contrast |
|-------|--------|---------------|
| MedSpa | `#F0ABFC` | `#3b0764` |
| Dental | `#7DD3FC` | `#0c4a6e` |
| HVAC | `#FB923C` | `#431407` |
| Roofing | `#86EFAC` | `#14532d` |

### Page structure (each niche)

1. **Nav** — `← vervemindai.com` back link · `VerveMind [Niche]` logo (niche-colored word) · `Book Free Audit` CTA (niche gradient button)
2. **Hero** — two-column: left copy + right booking notification panel (see below)
3. **Problem Section** — 3-column cards with amber stat badges, niche-specific pain points
4. **CTA Strip** — dark strip, niche-colored headline, single audit CTA

### Booking notification panel (right column)

Solid `#1a1a1a` panel with `1px` niche-accent border. Contains:
- Panel header: "Live [Niche] Activity" + LIVE badge (pulse-dot, niche-accented)
- 2 notification cards: one showing a new inbound lead/emergency, one showing a confirmed booking/response
- Stats row: 3 mini stats (niche-colored values)

### Per-niche copy anchor

| Niche | H1 gradient phrase | Core pain | Panel activity |
|-------|--------------------|-----------|----------------|
| MedSpa | "Turn Missed Calls / Into Booked Appointments" | Missed calls $3,200/mo · Dormant leads 68% | New booking request + reactivation response |
| Dental | "Full Chair. / Zero No-Shows." | Emergency after-hours 44% · Recall drift 40% · No-show cost $3,800/mo | Emergency new patient + recall confirmed |
| HVAC | "Never Miss an / Emergency Call." | Peak-season overflow · After-hours revenue loss | AC emergency dispatch + seasonal tune-up |
| Roofing | "Capture Every / Storm Lead." | Storm-season inquiry capture · Quote follow-up decay | Storm damage hot lead + quote response |

---

## 8. Reference Files

| File | Purpose |
|------|---------|
| `.superpowers/brainstorm/959-1776743400/content/homepage-v3.html` | Approved homepage mockup |
| `.superpowers/brainstorm/959-1776743400/content/niche-pages.html` | Approved niche pages mockup (all 4 tabs) |
| `.superpowers/brainstorm/959-1776743400/content/glass-vs-solid.html` | Animation/glass decision reference |
| `demos/wow/antigravity/sync/stitch-dashboard.html` | Stitch design inspiration source |
| `apps/portal/src/app/globals.css` | CSS variable pattern to follow |
