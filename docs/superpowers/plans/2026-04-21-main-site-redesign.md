# Main Site Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild `apps/web` to Option C Stitch Dark Structured design and build 4 niche landing pages in `apps/blitz`, eliminating all glassmorphism and framer-motion in favour of solid dark cards with CSS variables.

**Architecture:** CSS variables defined in `globals.css` replace all inline `style={{}}` tokens. Shared `Nav` and `Footer` components serve all web pages. Each of the 4 niche pages in `apps/blitz` is its own Next.js route (`/medspa`, `/dental`, `/hvac`, `/roofing`) with a shared `NicheLayout` wrapper.

**Tech Stack:** Next.js 14 App Router, React, Tailwind CSS, Lucide React, Inter + Manrope (already loaded via `next/font` in `apps/web/src/app/layout.tsx`)

**Reference mockups:**
- Homepage: `.superpowers/brainstorm/959-1776743400/content/homepage-v3.html`
- Niche pages: `.superpowers/brainstorm/959-1776743400/content/niche-pages.html`

---

## File Map

### apps/web — Create
| File | Responsibility |
|------|---------------|
| `apps/web/src/app/globals.css` | CSS custom properties for all design tokens |
| `apps/web/src/components/Nav.tsx` | Sticky 58px nav, logo + links + CTA |
| `apps/web/src/components/Footer.tsx` | 4-column footer + bottom bar |

### apps/web — Modify
| File | Change |
|------|--------|
| `apps/web/src/app/layout.tsx` | Import globals.css, remove inline body styles |
| `apps/web/src/app/page.tsx` | Full rebuild — all 10 sections, no framer-motion |
| `apps/web/src/app/pricing/components/PricingClient.tsx` | 2-tier founder pricing, update tokens |
| `apps/web/src/components/ROICalculator.tsx` | Update `softwareCost` to 177 (Starter ref), update bg tokens |
| `apps/web/src/components/PricingComparison.tsx` | Update bg token `#09090B` → `#131313` |
| `apps/web/src/app/about/page.tsx` | Swap `#09090B` → `var(--bg)`, apply token system |
| `apps/web/src/app/blog/page.tsx` | Swap inline bg, apply token system |
| `apps/web/src/app/faq/page.tsx` | Swap inline bg, accordion pattern |
| `apps/web/src/app/contact/components/ContactClient.tsx` | Swap inline bg tokens |

### apps/blitz — Create
| File | Responsibility |
|------|---------------|
| `apps/blitz/src/components/NicheLayout.tsx` | Nav + footer wrapper for niche pages |
| `apps/blitz/src/components/BookingPanel.tsx` | Reusable notification panel (right hero column) |
| `apps/blitz/src/components/PainPoints.tsx` | Reusable 3-card problem section |
| `apps/blitz/src/app/medspa/page.tsx` | MedSpa niche landing page |
| `apps/blitz/src/app/dental/page.tsx` | Dental niche landing page |
| `apps/blitz/src/app/hvac/page.tsx` | HVAC niche landing page |
| `apps/blitz/src/app/roofing/page.tsx` | Roofing niche landing page |

### apps/blitz — Modify
| File | Change |
|------|--------|
| `apps/blitz/src/app/globals.css` | Align tokens to spec, remove glass-panel backdrop-blur |
| `apps/blitz/src/app/layout.tsx` | Switch to next/font, add font CSS vars |
| `apps/blitz/src/app/page.tsx` | Redirect to `/medspa` |

### Root — Modify
| File | Change |
|------|--------|
| `vercel.json` | Add subdomain rewrites for dental, hvac, roofing niche pages |

---

## Phase 1: apps/web — Design System Foundation

### Task 1: Create globals.css with CSS variables

**Files:**
- Create: `apps/web/src/app/globals.css`

- [ ] **Step 1: Create the CSS variables file**

```css
/* apps/web/src/app/globals.css */
*, *::before, *::after { box-sizing: border-box; }

:root {
  --bg: #131313;
  --surface: #1a1a1a;
  --border: rgba(255,255,255,0.07);
  --border-strong: rgba(255,255,255,0.11);
  --text: #E5E2E1;
  --text-muted: rgba(229,226,225,0.45);
  --text-faint: rgba(229,226,225,0.25);
  --primary: #00F5D4;
  --primary-dim: rgba(0,245,212,0.08);
  --primary-border: rgba(0,245,212,0.18);
  --secondary: #d2bbff;
  --positive: #34D399;
  --amber: #FBBF24;
  --r: 6px;
  --r-lg: 10px;
  --r-xl: 14px;
  --max-w: 1160px;
  --section-py: 80px;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.3; }
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-inter), Inter, system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

h1, h2, h3, h4 {
  font-family: var(--font-manrope), Manrope, sans-serif;
}
```

- [ ] **Step 2: Import globals.css in layout.tsx**

Open `apps/web/src/app/layout.tsx`. Add this import at the top (after the `next/font` imports):

```tsx
import './globals.css';
```

Then replace the inline `body` style prop:
```tsx
// REMOVE this:
<body style={{ 
  margin: 0, 
  padding: 0, 
  background: '#131313', 
  color: '#E5E2E1', 
  fontFamily: 'var(--font-inter), system-ui, sans-serif',
  overflowX: 'hidden'
}}>

// REPLACE with:
<body>
```

Keep the noise overlay `<div>` as-is (it's already correct).

- [ ] **Step 3: Type-check**

```bash
cd F:/Obsidian-Vault/vervemind-monorepo/apps/web
npx tsc --noEmit
```
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
cd F:/Obsidian-Vault/vervemind-monorepo
git add apps/web/src/app/globals.css apps/web/src/app/layout.tsx
git commit -m "feat(web): add CSS variable design tokens, import globals.css"
```

---

### Task 2: Build shared Nav component

**Files:**
- Create: `apps/web/src/components/Nav.tsx`

- [ ] **Step 1: Create Nav.tsx**

```tsx
// apps/web/src/components/Nav.tsx
"use client";
import Link from 'next/link';

const links = [
  { href: '/#how-it-works', label: 'How It Works' },
  { href: '/#pricing',      label: 'Pricing' },
  { href: '/about',         label: 'About' },
  { href: '/blog',          label: 'Blog' },
];

export default function Nav() {
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      height: 58,
      background: 'rgba(19,19,19,0.85)',
      borderBottom: '1px solid var(--border)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 32px',
      backdropFilter: 'blur(8px)',
    }}>
      <div style={{
        maxWidth: 'var(--max-w)',
        margin: '0 auto',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <Link href="/" style={{
          fontFamily: 'var(--font-manrope), Manrope, sans-serif',
          fontWeight: 900,
          fontSize: 17,
          letterSpacing: '-0.03em',
          color: 'var(--text)',
          textDecoration: 'none',
        }}>
          Verve<span style={{ color: 'var(--primary)' }}>Mind</span>
        </Link>

        {/* Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          {links.map(({ href, label }) => (
            <Link key={href} href={href} style={{
              fontSize: 13,
              fontWeight: 500,
              color: 'var(--text-muted)',
              textDecoration: 'none',
            }}>
              {label}
            </Link>
          ))}
          <a
            href="https://calendly.com/vervemindai/lead"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 12,
              fontWeight: 800,
              padding: '8px 18px',
              borderRadius: 'var(--r)',
              background: 'linear-gradient(135deg, #00f5d4, #00c2a8)',
              color: '#001a14',
              textDecoration: 'none',
              letterSpacing: '0.02em',
            }}
          >
            Book a Call
          </a>
        </div>
      </div>
    </nav>
  );
}
```

- [ ] **Step 2: Type-check**

```bash
cd F:/Obsidian-Vault/vervemind-monorepo/apps/web
npx tsc --noEmit
```
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
cd F:/Obsidian-Vault/vervemind-monorepo
git add apps/web/src/components/Nav.tsx
git commit -m "feat(web): add shared Nav component"
```

---

### Task 3: Build shared Footer component

**Files:**
- Create: `apps/web/src/components/Footer.tsx`

- [ ] **Step 1: Create Footer.tsx**

```tsx
// apps/web/src/components/Footer.tsx
import Link from 'next/link';

const cols = [
  {
    heading: 'Solutions',
    links: [
      { href: 'https://medspa.vervemindai.com', label: 'MedSpa AI' },
      { href: 'https://dental.vervemindai.com',  label: 'Dental AI' },
      { href: 'https://hvac.vervemindai.com',    label: 'HVAC AI' },
      { href: 'https://roofing.vervemindai.com', label: 'Roofing AI' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { href: '/about',   label: 'About' },
      { href: '/blog',    label: 'Blog' },
      { href: '/pricing', label: 'Pricing' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms',   label: 'Terms of Service' },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      background: 'var(--bg)',
      padding: '60px 32px 32px',
    }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        {/* Top row */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: 'var(--font-manrope), Manrope, sans-serif',
              fontWeight: 900,
              fontSize: 17,
              letterSpacing: '-0.03em',
              marginBottom: 12,
            }}>
              Verve<span style={{ color: 'var(--primary)' }}>Mind</span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.6, maxWidth: 260 }}>
              Autonomous AI operating system for local service businesses. Answer every call, book every appointment, recover every lead.
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.heading}>
              <div style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--text-faint)',
                marginBottom: 16,
              }}>
                {col.heading}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.links.map(({ href, label }) => (
                  <Link key={href} href={href} style={{
                    fontSize: 13,
                    color: 'var(--text-muted)',
                    textDecoration: 'none',
                  }}>
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: 24,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <span style={{ fontSize: 12, color: 'var(--text-faint)' }}>
            © {new Date().getFullYear()} VerveMind AI. All rights reserved.
          </span>
          <span style={{ fontSize: 12, color: 'var(--primary)', fontWeight: 600 }}>
            Built with AI. Powered by results.
          </span>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Type-check**

```bash
cd F:/Obsidian-Vault/vervemind-monorepo/apps/web
npx tsc --noEmit
```
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
cd F:/Obsidian-Vault/vervemind-monorepo
git add apps/web/src/components/Footer.tsx
git commit -m "feat(web): add shared Footer component"
```

---

## Phase 2: apps/web — Homepage Rebuild

### Task 4: Homepage — Founder Rate Banner + Hero

**Files:**
- Modify: `apps/web/src/app/page.tsx` (full rebuild — replace entire file)

> **Important:** The current `page.tsx` uses framer-motion heavily and has animated blobs. We are replacing the entire file. The file is `"use client"` — keep that directive.

- [ ] **Step 1: Replace page.tsx with the new homepage (Part 1 — Banner + Hero)**

Replace the entire content of `apps/web/src/app/page.tsx` with the following. This is the complete file; the remaining sections are added in Tasks 5–8.

```tsx
// apps/web/src/app/page.tsx
"use client";
import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

/* ── shared helpers ── */
const Section = ({
  children,
  alt,
  id,
}: {
  children: React.ReactNode;
  alt?: boolean;
  id?: string;
}) => (
  <section
    id={id}
    style={{
      padding: 'var(--section-py) 32px',
      background: alt ? 'rgba(255,255,255,0.015)' : 'var(--bg)',
      borderTop:    alt ? '1px solid var(--border)' : undefined,
      borderBottom: alt ? '1px solid var(--border)' : undefined,
    }}
  >
    <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>{children}</div>
  </section>
);

const Tag = ({ children, color = 'var(--primary)' }: { children: React.ReactNode; color?: string }) => (
  <div style={{
    display: 'inline-block',
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: '0.13em',
    textTransform: 'uppercase',
    padding: '4px 12px',
    borderRadius: 4,
    background: `${color}14`,
    border: `1px solid ${color}2e`,
    color,
    marginBottom: 20,
  }}>
    {children}
  </div>
);

/* ── pip slot component ── */
const Pips = ({ taken }: { taken: number }) => (
  <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
    {Array.from({ length: 10 }).map((_, i) => (
      <div
        key={i}
        style={{
          width: 8,
          height: 8,
          borderRadius: 2,
          background: i < taken ? 'var(--primary)' : 'var(--border-strong)',
        }}
      />
    ))}
  </div>
);

export default function HomePage() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      {/* ── NAV ── */}
      <Nav />

      {/* ── FOUNDER RATE BANNER ── */}
      <div style={{
        background: 'rgba(0,245,212,0.06)',
        borderBottom: '1px solid var(--primary-border)',
        padding: '10px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
        fontSize: 13,
        color: 'var(--text)',
      }}>
        <Pips taken={1} />
        <span>
          <strong style={{ color: 'var(--primary)' }}>Founder Rate:</strong>{' '}
          9 spots remaining. First 10 clients lock in current pricing forever.
        </span>
      </div>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        {/* static teal glow — hero only */}
        <div style={{
          position: 'absolute',
          top: -80,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 600,
          height: 300,
          background: 'radial-gradient(circle, rgba(0,245,212,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{
          maxWidth: 'var(--max-w)',
          margin: '0 auto',
          padding: '80px 32px 72px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 52,
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}>
          {/* Left — copy */}
          <div>
            {/* Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(0,245,212,0.08)',
              border: '1px solid rgba(0,245,212,0.18)',
              borderRadius: 4,
              padding: '5px 12px',
              marginBottom: 22,
            }}>
              <span style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: 'var(--primary)',
                animation: 'pulse-dot 1.8s ease-in-out infinite',
                display: 'block',
              }} />
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: 'var(--primary)' }}>
                AI OPERATING SYSTEM
              </span>
            </div>

            {/* H1 */}
            <h1 style={{
              fontSize: 'clamp(40px, 5vw, 58px)',
              fontWeight: 900,
              lineHeight: 1.0,
              letterSpacing: '-0.04em',
              marginBottom: 18,
              color: 'var(--text)',
            }}>
              The Autonomous<br />
              <span style={{
                background: 'linear-gradient(135deg, #00F5D4, #00c2a8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Operating System
              </span>
              <br />
              for Local Business
            </h1>

            <p style={{
              fontSize: 16,
              lineHeight: 1.65,
              color: 'var(--text-muted)',
              maxWidth: 440,
              marginBottom: 30,
            }}>
              Deploy AI agents that answer every call, book every appointment, and recover every dormant lead — 24/7, with zero payroll overhead.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: 12, marginBottom: 28 }}>
              <a
                href="https://calendly.com/vervemindai/lead"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'linear-gradient(135deg, #00f5d4, #00c2a8)',
                  color: '#001a14',
                  fontSize: 13,
                  fontWeight: 800,
                  padding: '12px 24px',
                  borderRadius: 'var(--r)',
                  textDecoration: 'none',
                }}
              >
                Book Free Strategy Call →
              </a>
              <a
                href="#demo"
                style={{
                  background: 'transparent',
                  border: '1px solid var(--border-strong)',
                  color: 'var(--text)',
                  fontSize: 13,
                  fontWeight: 600,
                  padding: '11px 20px',
                  borderRadius: 'var(--r)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 7,
                }}
              >
                ▶ Watch 2-min Demo
              </a>
            </div>

            {/* Trust bullets */}
            <div style={{ display: 'flex', gap: 20 }}>
              {['No contracts', 'Live in 48hrs', 'First month free'].map((t) => (
                <span key={t} style={{ fontSize: 12, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 5 }}>
                  <span style={{ color: 'var(--positive)', fontWeight: 700 }}>✓</span> {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right — metrics panel */}
          <div style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--r-xl)',
            padding: '24px',
          }}>
            {/* Panel header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)' }}>System Activity</span>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 6,
                background: 'rgba(0,245,212,0.08)',
                border: '1px solid rgba(0,245,212,0.18)',
                borderRadius: 4,
                padding: '3px 9px',
              }}>
                <span style={{
                  width: 5,
                  height: 5,
                  borderRadius: '50%',
                  background: 'var(--primary)',
                  animation: 'pulse-dot 1.8s ease-in-out infinite',
                  display: 'block',
                }} />
                <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', color: 'var(--primary)' }}>LIVE</span>
              </div>
            </div>

            {/* Metric rows */}
            {[
              { label: 'Leads Captured',     value: '47K+',   pct: 78, color: 'var(--primary)' },
              { label: 'Revenue Recovered',  value: '$2.1M',  pct: 62, color: 'var(--secondary)' },
              { label: 'Client ROI',         value: '380%',   pct: 90, color: 'var(--positive)' },
            ].map(({ label, value, pct, color }) => (
              <div key={label} style={{ marginBottom: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                  <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{label}</span>
                  <span style={{ fontSize: 13, fontWeight: 800, color, fontFamily: 'var(--font-manrope), Manrope, sans-serif' }}>{value}</span>
                </div>
                <div style={{ height: 3, background: 'var(--border)', borderRadius: 2 }}>
                  <div style={{ width: `${pct}%`, height: '100%', background: color, borderRadius: 2 }} />
                </div>
              </div>
            ))}

            {/* Divider */}
            <div style={{ borderTop: '1px solid var(--border)', margin: '16px 0' }} />

            {/* Live agent feed */}
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', color: 'var(--text-faint)', textTransform: 'uppercase', marginBottom: 10 }}>
              Live Agent Feed
            </div>
            {[
              { icon: '📞', text: 'Call captured — Riverside MedSpa', time: '2s ago',   color: 'var(--primary)' },
              { icon: '📅', text: 'Appointment booked — Dr Chen Dental', time: '18s ago', color: 'var(--secondary)' },
              { icon: '💬', text: 'Reactivation sent — Peak HVAC lead', time: '41s ago', color: 'var(--positive)' },
            ].map(({ icon, text, time, color }) => (
              <div key={text} style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '7px 0',
                borderBottom: '1px solid var(--border)',
              }}>
                <span style={{ fontSize: 14 }}>{icon}</span>
                <span style={{ flex: 1, fontSize: 11, color: 'var(--text-muted)' }}>{text}</span>
                <span style={{ fontSize: 10, color: 'var(--text-faint)' }}>{time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* remaining sections added below */}
      <Footer />
    </div>
  );
}
```

- [ ] **Step 2: Type-check**

```bash
cd F:/Obsidian-Vault/vervemind-monorepo/apps/web
npx tsc --noEmit
```
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
cd F:/Obsidian-Vault/vervemind-monorepo
git add apps/web/src/app/page.tsx
git commit -m "feat(web): rebuild homepage — banner + hero, remove framer-motion"
```

---

### Task 5: Homepage — Proof Bar + Problem Section + How It Works

**Files:**
- Modify: `apps/web/src/app/page.tsx`

- [ ] **Step 1: Add sections after the Hero and before `<Footer />`**

Find the comment `{/* remaining sections added below */}` in `page.tsx` and replace it (and `<Footer />`) with the following block. Then re-add `<Footer />` at the very end.

```tsx
      {/* ── SOCIAL PROOF BAR ── */}
      <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'rgba(255,255,255,0.015)' }}>
        <div style={{
          maxWidth: 'var(--max-w)',
          margin: '0 auto',
          padding: '0 32px',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
        }}>
          {[
            { value: '47K+',   label: 'Leads Captured',     color: 'var(--primary)' },
            { value: '$2.1M',  label: 'Revenue Recovered',  color: 'var(--secondary)' },
            { value: '380%',   label: 'Average ROI',        color: 'var(--positive)' },
            { value: '99.8%',  label: 'Uptime',             color: 'var(--amber)' },
          ].map(({ value, label, color }, i) => (
            <div key={label} style={{
              padding: '32px 24px',
              borderRight: i < 3 ? '1px solid var(--border)' : undefined,
              textAlign: 'center',
            }}>
              <div style={{
                fontSize: 32,
                fontWeight: 900,
                letterSpacing: '-0.03em',
                color,
                fontFamily: 'var(--font-manrope), Manrope, sans-serif',
                marginBottom: 4,
              }}>
                {value}
              </div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 600 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── PROBLEM SECTION ── */}
      <Section>
        <Tag color="var(--amber)">The Problem</Tag>
        <h2 style={{
          fontSize: 'clamp(28px, 4vw, 42px)',
          fontWeight: 900,
          letterSpacing: '-0.03em',
          marginBottom: 14,
          color: 'var(--text)',
        }}>
          You're losing revenue<br />every hour you're not online.
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: 15, marginBottom: 48, maxWidth: 540 }}>
          The average SMB loses $3,200/month to three preventable gaps. Here's where the money goes.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {[
            {
              num: '01',
              headline: 'Missed Calls After Hours',
              body: 'Every unanswered call is a lead that calls your competitor next. Most businesses miss 42% of calls that come in after 6pm.',
              stat: '⚠ $3,200/mo in missed calls',
            },
            {
              num: '02',
              headline: 'Dormant Patient Lists',
              body: 'Your existing database is your cheapest source of new revenue. 68% of past clients never hear from you again after their last appointment.',
              stat: '⚠ 68% never re-engaged',
            },
            {
              num: '03',
              headline: 'After-Hours Dead Zones',
              body: 'Emergencies and high-intent leads don't wait until Monday. 42% of your highest-value enquiries arrive when no one's available to answer.',
              stat: '⚠ 42% after-hours loss rate',
            },
          ].map(({ num, headline, body, stat }) => (
            <div key={num} style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--r-lg)',
              padding: '24px',
              position: 'relative',
            }}>
              <div style={{
                fontSize: 52,
                fontWeight: 900,
                color: 'var(--text-faint)',
                fontFamily: 'var(--font-manrope), Manrope, sans-serif',
                lineHeight: 1,
                marginBottom: 12,
              }}>
                {num}
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 8, color: 'var(--text)' }}>{headline}</h3>
              <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: 16 }}>{body}</p>
              <div style={{
                fontSize: 11,
                fontWeight: 700,
                color: 'var(--amber)',
                background: 'rgba(251,191,36,0.07)',
                border: '1px solid rgba(251,191,36,0.15)',
                borderRadius: 4,
                padding: '5px 10px',
                display: 'inline-block',
              }}>
                {stat}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── HOW IT WORKS ── */}
      <Section alt id="how-it-works">
        <Tag>How It Works</Tag>
        <h2 style={{
          fontSize: 'clamp(28px, 4vw, 42px)',
          fontWeight: 900,
          letterSpacing: '-0.03em',
          marginBottom: 48,
          color: 'var(--text)',
        }}>
          Live in 48 hours. Results in 30 days.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {[
            {
              step: '01',
              headline: 'Map',
              body: 'We audit your current call flow, calendar system, and lead database. You fill out a 10-minute onboarding form — we do the rest.',
            },
            {
              step: '02',
              headline: 'Deploy',
              body: 'Your AI agent goes live within 48 hours. We configure it to your tone, integrate with your calendar, and test the full call flow before handoff.',
            },
            {
              step: '03',
              headline: 'Grow',
              body: 'Watch the dashboard fill up. Every missed call captured, every dormant lead reactivated, every after-hours booking confirmed automatically.',
            },
          ].map(({ step, headline, body }) => (
            <div key={step} style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--r-lg)',
              padding: '24px',
            }}>
              <div style={{
                width: 28,
                height: 28,
                borderRadius: 'var(--r)',
                background: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 11,
                fontWeight: 900,
                color: '#001a14',
                marginBottom: 16,
              }}>
                {step}
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 8, color: 'var(--text)' }}>{headline}</h3>
              <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.65 }}>{body}</p>
            </div>
          ))}
        </div>
      </Section>
```

- [ ] **Step 2: Type-check**

```bash
cd F:/Obsidian-Vault/vervemind-monorepo/apps/web
npx tsc --noEmit
```

- [ ] **Step 3: Commit**

```bash
cd F:/Obsidian-Vault/vervemind-monorepo
git add apps/web/src/app/page.tsx
git commit -m "feat(web): homepage — proof bar, problem section, how it works"
```

---

### Task 6: Homepage — Niche Tiles + Testimonial + Pricing

**Files:**
- Modify: `apps/web/src/app/page.tsx`

- [ ] **Step 1: Add niche tiles, testimonial, and pricing sections before `<Footer />`**

Insert the following block immediately before `<Footer />`:

```tsx
      {/* ── NICHE TILES ── */}
      <Section>
        <Tag>Built For Your Industry</Tag>
        <h2 style={{
          fontSize: 'clamp(28px, 4vw, 38px)',
          fontWeight: 900,
          letterSpacing: '-0.03em',
          marginBottom: 32,
          color: 'var(--text)',
        }}>
          Precision-built for your niche.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {[
            { label: 'MedSpa', icon: '💆', href: 'https://medspa.vervemindai.com', desc: 'Missed calls, reactivation, booking AI' },
            { label: 'Dental', icon: '🦷', href: 'https://dental.vervemindai.com', desc: 'Recall campaigns, no-show reduction' },
            { label: 'HVAC',   icon: '❄️', href: 'https://hvac.vervemindai.com',   desc: 'Emergency dispatch, seasonal campaigns' },
            { label: 'Roofing',icon: '🏠', href: 'https://roofing.vervemindai.com',desc: 'Storm lead capture, quote follow-up' },
          ].map(({ label, icon, href, desc }) => (
            <a
              key={label}
              href={href}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--r-lg)',
                padding: '20px',
                textDecoration: 'none',
                color: 'var(--text)',
                display: 'block',
                transition: 'border-color 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--primary)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
            >
              <div style={{ fontSize: 24, marginBottom: 10 }}>{icon}</div>
              <div style={{ fontSize: 15, fontWeight: 800, marginBottom: 6 }}>{label}</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: 14 }}>{desc}</div>
              <div style={{ fontSize: 12, color: 'var(--primary)', fontWeight: 700 }}>Learn more →</div>
            </a>
          ))}
        </div>
      </Section>

      {/* ── TESTIMONIAL ── */}
      <Section alt>
        <div style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--r-xl)',
          padding: '40px',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: 40,
          alignItems: 'center',
        }}>
          <div>
            <Tag>Client Result</Tag>
            <blockquote style={{
              fontSize: 'clamp(20px, 3vw, 28px)',
              fontWeight: 800,
              lineHeight: 1.3,
              letterSpacing: '-0.02em',
              color: 'var(--text)',
              margin: '0 0 20px',
              fontStyle: 'normal',
            }}>
              "VerveMind recovered $14,000 in dormant revenue for our MedSpa in the first 30 days. The AI handles every after-hours call — we wake up to a full booking sheet."
            </blockquote>
            <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>
              <strong style={{ color: 'var(--text)' }}>iVolve MedSpa</strong> · Founder client
            </div>
          </div>
          <div style={{
            borderLeft: '1px solid var(--border)',
            paddingLeft: 40,
            textAlign: 'center',
            minWidth: 160,
          }}>
            <div style={{
              fontSize: 40,
              fontWeight: 900,
              color: 'var(--positive)',
              fontFamily: 'var(--font-manrope), Manrope, sans-serif',
              letterSpacing: '-0.03em',
            }}>
              $14K
            </div>
            <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>recovered in 30 days</div>
          </div>
        </div>
      </Section>

      {/* ── PRICING ── */}
      <Section id="pricing">
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <Tag>Pricing</Tag>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            color: 'var(--text)',
            marginBottom: 8,
          }}>
            Lock in before we raise prices.
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 15 }}>
            Founder rate locked in forever. 10 slots total — 1 taken.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, maxWidth: 800, margin: '0 auto 32px' }}>
          {[
            {
              name: 'Starter',
              monthly: '$177',
              setup: '$497',
              features: [
                { label: 'Unlimited AI Calls',          included: true },
                { label: 'Calendar Integration',        included: true },
                { label: 'After-Hours Coverage',        included: true },
                { label: 'Reactivation Engine',         included: false },
                { label: 'Weekly Performance Dashboard',included: false },
                { label: 'Monthly Strategy Call',       included: false },
                { label: 'First Month Free',            included: false },
              ],
            },
            {
              name: 'Growth',
              monthly: '$297',
              setup: '$797',
              highlight: true,
              features: [
                { label: 'Unlimited AI Calls',          included: true },
                { label: 'Calendar Integration',        included: true },
                { label: 'After-Hours Coverage',        included: true },
                { label: 'Reactivation Engine',         included: true },
                { label: 'Weekly Performance Dashboard',included: true },
                { label: 'Monthly Strategy Call',       included: true },
                { label: 'First Month Free',            included: true },
              ],
            },
          ].map(({ name, monthly, setup, highlight, features }) => (
            <div key={name} style={{
              background: highlight ? 'rgba(0,245,212,0.04)' : 'var(--surface)',
              border: `1px solid ${highlight ? 'rgba(0,245,212,0.25)' : 'var(--border)'}`,
              borderRadius: 'var(--r-xl)',
              padding: '28px',
            }}>
              <div style={{ marginBottom: 20 }}>
                <div style={{
                  display: 'inline-block',
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--primary)',
                  background: 'var(--primary-dim)',
                  border: '1px solid var(--primary-border)',
                  borderRadius: 3,
                  padding: '2px 8px',
                  marginBottom: 10,
                }}>
                  Founder rate — locked forever
                </div>
                <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--text)', marginBottom: 4 }}>{name}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                  <span style={{ fontSize: 36, fontWeight: 900, fontFamily: 'var(--font-manrope), Manrope, sans-serif', color: 'var(--text)' }}>
                    {monthly}
                  </span>
                  <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>/mo</span>
                </div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>+ {setup} one-time setup</div>
              </div>

              <div style={{ borderTop: '1px solid var(--border)', paddingTop: 16, marginBottom: 20 }}>
                {features.map(({ label, included }) => (
                  <div key={label} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '5px 0',
                    fontSize: 12,
                    color: included ? 'var(--text)' : 'var(--text-faint)',
                  }}>
                    <span style={{ color: included ? 'var(--positive)' : 'var(--text-faint)', fontWeight: 700, flexShrink: 0 }}>
                      {included ? '✓' : '✗'}
                    </span>
                    {label}
                  </div>
                ))}
              </div>

              <a
                href="https://calendly.com/vervemindai/lead"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  padding: '11px',
                  borderRadius: 'var(--r)',
                  background: highlight ? 'linear-gradient(135deg, #00f5d4, #00c2a8)' : 'transparent',
                  border: highlight ? 'none' : '1px solid var(--border-strong)',
                  color: highlight ? '#001a14' : 'var(--text)',
                  fontSize: 12,
                  fontWeight: 800,
                  textDecoration: 'none',
                }}
              >
                Get Started →
              </a>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <Pips taken={1} />
          <p style={{ fontSize: 12, color: 'var(--text-faint)', marginTop: 8 }}>1 of 10 founder slots taken</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <a href="/contact" style={{ fontSize: 13, color: 'var(--text-muted)', textDecoration: 'underline' }}>
            Multiple locations? Let's talk →
          </a>
        </div>
      </Section>

      {/* ── CTA BAND ── */}
      <section style={{ padding: 'var(--section-py) 32px' }}>
        <div style={{
          maxWidth: 'var(--max-w)',
          margin: '0 auto',
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--r-xl)',
          padding: '56px 48px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* single static teal top glow */}
          <div style={{
            position: 'absolute',
            top: -60,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 500,
            height: 200,
            background: 'radial-gradient(circle, rgba(0,245,212,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 40px)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            color: 'var(--text)',
            marginBottom: 12,
            position: 'relative',
          }}>
            Stop losing leads while you sleep.
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 15, marginBottom: 28, position: 'relative' }}>
            Book a free 20-minute audit. We'll show you exactly where your revenue is leaking and how to fix it in 48 hours.
          </p>
          <a
            href="https://calendly.com/vervemindai/lead"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #00f5d4, #00c2a8)',
              color: '#001a14',
              fontSize: 13,
              fontWeight: 800,
              padding: '13px 28px',
              borderRadius: 'var(--r)',
              textDecoration: 'none',
              position: 'relative',
            }}
          >
            Book My Free Audit →
          </a>
        </div>
      </section>
```

- [ ] **Step 2: Type-check and build**

```bash
cd F:/Obsidian-Vault/vervemind-monorepo/apps/web
npx tsc --noEmit
npm run build
```
Expected: no TypeScript errors, build succeeds.

- [ ] **Step 3: Commit**

```bash
cd F:/Obsidian-Vault/vervemind-monorepo
git add apps/web/src/app/page.tsx
git commit -m "feat(web): homepage — niche tiles, testimonial, pricing, CTA band"
```

---

## Phase 3: apps/web — Inner Pages

### Task 7: Update Pricing page to founder tiers

**Files:**
- Modify: `apps/web/src/app/pricing/components/PricingClient.tsx`
- Modify: `apps/web/src/components/ROICalculator.tsx`
- Modify: `apps/web/src/components/PricingComparison.tsx`

- [ ] **Step 1: Update PricingClient.tsx**

In `apps/web/src/app/pricing/components/PricingClient.tsx`, find and replace:

```tsx
// OLD — find this line:
  return (
    <div style={{ background: '#09090B', color: '#E5E2E1', minHeight: '100vh', fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif' }}>
      
      <div style={{ paddingTop: '160px' }}>
        <div style={{ textAlign: 'center', marginBottom: 60, padding: '0 24px' }}>
          <h1 style={{ fontSize: 'clamp(40px, 5vw, 56px)', fontWeight: 800, color: '#FFF', letterSpacing: '-0.03em', marginBottom: 16 }}>Autonomous Economics.</h1>
          <p style={{ color: MUTED, fontSize: 20, maxWidth: 600, margin: '0 auto' }}>
            Scale infinitely. Only pay for the infrastructure you consume. 
            No payroll taxes, no sick days, no training curves.
          </p>
        </div>
```

```tsx
// NEW:
  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text)', minHeight: '100vh', fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif' }}>
      
      <div style={{ paddingTop: '160px' }}>
        <div style={{ textAlign: 'center', marginBottom: 60, padding: '0 24px' }}>
          <h1 style={{ fontSize: 'clamp(40px, 5vw, 56px)', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.03em', marginBottom: 16 }}>Lock in before we raise prices.</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: 18, maxWidth: 600, margin: '0 auto' }}>
            Founder pricing locked in forever. 10 slots total — 1 taken. First month free on Growth.
          </p>
        </div>
```

- [ ] **Step 2: Update ROICalculator.tsx softwareCost reference**

In `apps/web/src/components/ROICalculator.tsx`, find:

```tsx
  // VerveMind monthly cost
  const softwareCost = 297; 
```

Replace with:

```tsx
  // VerveMind monthly cost (Starter founder rate)
  const softwareCost = 177;
```

- [ ] **Step 3: Update PricingComparison.tsx background token**

In `apps/web/src/components/PricingComparison.tsx`, find all occurrences of `'#09090B'` and `"#09090B"` and replace with `'var(--bg)'`. Also find `'#FFFFFF'` in heading styles and replace with `'var(--text)'`. Find `'#A1A1AA'` in sub-text and replace with `'var(--text-muted)'`.

- [ ] **Step 4: Type-check**

```bash
cd F:/Obsidian-Vault/vervemind-monorepo/apps/web
npx tsc --noEmit
```

- [ ] **Step 5: Commit**

```bash
cd F:/Obsidian-Vault/vervemind-monorepo
git add apps/web/src/app/pricing/components/PricingClient.tsx \
        apps/web/src/components/ROICalculator.tsx \
        apps/web/src/components/PricingComparison.tsx
git commit -m "feat(web): pricing page — founder tiers, update tokens"
```

---

### Task 8: Update About, Blog, FAQ, Contact pages

**Files:**
- Modify: `apps/web/src/app/about/page.tsx`
- Modify: `apps/web/src/app/blog/page.tsx`
- Modify: `apps/web/src/app/faq/page.tsx`
- Modify: `apps/web/src/app/contact/components/ContactClient.tsx`

- [ ] **Step 1: about/page.tsx — swap background token**

In `apps/web/src/app/about/page.tsx`:
- Replace `background: '#09090B'` → `background: 'var(--bg)'`
- Replace `background: '#121215'` → `background: 'var(--surface)'`
- Replace all `color: '#A1A1AA'` → `color: 'var(--text-muted)'`
- Replace all `color: '#FFF'` / `color: '#FFFFFF'` → `color: 'var(--text)'`
- Replace all `border: '1px solid rgba(255,255,255,0.05)'` → `border: '1px solid var(--border)'`

- [ ] **Step 2: blog/page.tsx — swap background token**

In `apps/web/src/app/blog/page.tsx`:
- Replace `background: '#09090B'` → `background: 'var(--bg)'`
- Replace `color: '#A1A1AA'` → `color: 'var(--text-muted)'`
- Replace `color: '#71717A'` → `color: 'var(--text-faint)'`

- [ ] **Step 3: faq/page.tsx — swap tokens**

In `apps/web/src/app/faq/page.tsx`:
- Replace all `'#09090B'` background references → `'var(--bg)'`
- Replace all `'#A1A1AA'` / `MUTED` color references → `'var(--text-muted)'`

- [ ] **Step 4: contact/ContactClient.tsx — swap tokens**

In `apps/web/src/app/contact/components/ContactClient.tsx`:
- Replace all `'#09090B'` / `"#09090B"` → `'var(--bg)'`
- Replace all `'#A1A1AA'` → `'var(--text-muted)'`

- [ ] **Step 5: Type-check and build**

```bash
cd F:/Obsidian-Vault/vervemind-monorepo/apps/web
npx tsc --noEmit
npm run build
```
Expected: clean build.

- [ ] **Step 6: Commit**

```bash
cd F:/Obsidian-Vault/vervemind-monorepo
git add apps/web/src/app/about/page.tsx \
        apps/web/src/app/blog/page.tsx \
        apps/web/src/app/faq/page.tsx \
        apps/web/src/app/contact/components/ContactClient.tsx
git commit -m "feat(web): inner pages — update bg/text tokens to CSS variables"
```

---

## Phase 4: apps/blitz — Niche Landing Pages

### Task 9: Update blitz globals.css and layout

**Files:**
- Modify: `apps/blitz/src/app/globals.css`
- Modify: `apps/blitz/src/app/layout.tsx`

- [ ] **Step 1: Replace blitz globals.css**

Replace the entire contents of `apps/blitz/src/app/globals.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

*, *::before, *::after { box-sizing: border-box; }

:root {
  --bg: #131313;
  --surface: #1a1a1a;
  --border: rgba(255,255,255,0.07);
  --border-strong: rgba(255,255,255,0.11);
  --text: #E5E2E1;
  --text-muted: rgba(229,226,225,0.45);
  --text-faint: rgba(229,226,225,0.25);
  --primary: #00F5D4;
  --primary-dim: rgba(0,245,212,0.08);
  --primary-border: rgba(0,245,212,0.18);
  --secondary: #d2bbff;
  --positive: #34D399;
  --amber: #FBBF24;
  --r: 6px;
  --r-lg: 10px;
  --r-xl: 14px;
  --max-w: 1160px;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.3; }
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-inter), Inter, system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4 {
  font-family: var(--font-manrope), Manrope, sans-serif;
}
```

- [ ] **Step 2: Update blitz layout.tsx to use next/font**

Replace the entire contents of `apps/blitz/src/app/layout.tsx` with:

```tsx
// apps/blitz/src/app/layout.tsx
import './globals.css';
import { Inter, Manrope } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata = {
  title: 'VerveMind AI — Niche AI Solutions',
  description: 'AI automation built for your industry.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

- [ ] **Step 3: Check if next/font is available in blitz**

```bash
cd F:/Obsidian-Vault/vervemind-monorepo/apps/blitz
cat package.json | grep next
```
Expected: `"next": "..."` version should be 13+ (next/font was added in 13). If version < 13, keep Google Fonts link approach in layout.tsx and add `--font-inter` / `--font-manrope` via CSS instead. Otherwise proceed.

- [ ] **Step 4: Type-check**

```bash
cd F:/Obsidian-Vault/vervemind-monorepo/apps/blitz
npx tsc --noEmit
```

- [ ] **Step 5: Commit**

```bash
cd F:/Obsidian-Vault/vervemind-monorepo
git add apps/blitz/src/app/globals.css apps/blitz/src/app/layout.tsx
git commit -m "feat(blitz): align CSS tokens to spec, switch to next/font"
```

---

### Task 10: Build shared NicheLayout and BookingPanel components

**Files:**
- Create: `apps/blitz/src/components/NicheLayout.tsx`
- Create: `apps/blitz/src/components/BookingPanel.tsx`

- [ ] **Step 1: Create NicheLayout.tsx**

```tsx
// apps/blitz/src/components/NicheLayout.tsx
import Link from 'next/link';

interface NicheLayoutProps {
  niche: string;       // e.g. "MedSpa"
  accent: string;      // e.g. "#F0ABFC"
  accentContrast: string; // e.g. "#3b0764" — text on accent bg
  children: React.ReactNode;
}

export default function NicheLayout({ niche, accent, accentContrast, children }: NicheLayoutProps) {
  const btnBg = `linear-gradient(135deg, ${accent}cc, ${accent})`;

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      {/* Nav */}
      <nav style={{
        background: 'rgba(19,19,19,0.9)',
        borderBottom: '1px solid var(--border)',
        padding: '0 32px',
        height: 56,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        <Link href="https://vervemindai.com" style={{
          fontSize: 12,
          color: 'var(--text-faint)',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: 5,
        }}>
          ← vervemindai.com
        </Link>
        <div style={{
          fontFamily: 'var(--font-manrope), Manrope, sans-serif',
          fontWeight: 900,
          fontSize: 16,
          letterSpacing: '-0.03em',
          color: 'var(--text)',
        }}>
          VerveMind <span style={{ color: accent }}>{niche}</span>
        </div>
        <a
          href="https://calendly.com/vervemindai/lead"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: 12,
            fontWeight: 800,
            padding: '7px 16px',
            borderRadius: 'var(--r)',
            background: btnBg,
            color: accentContrast,
            textDecoration: 'none',
          }}
        >
          Book Free Audit
        </a>
      </nav>

      {children}

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid var(--border)',
        padding: '40px 32px 32px',
        textAlign: 'center',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <span style={{ fontSize: 12, color: 'var(--text-faint)' }}>
            © {new Date().getFullYear()} VerveMind AI
          </span>
          <Link href="https://vervemindai.com" style={{ fontSize: 12, color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 }}>
            ← Back to main site
          </Link>
        </div>
      </footer>
    </div>
  );
}
```

- [ ] **Step 2: Create BookingPanel.tsx**

```tsx
// apps/blitz/src/components/BookingPanel.tsx

interface Notification {
  icon: string;
  title: string;
  sub: string;
  badge: string;
  type: 'accent' | 'positive'; // accent = niche color, positive = green
}

interface StatMini {
  value: string;
  label: string;
  color: string;
}

interface BookingPanelProps {
  header: string;           // e.g. "Live Patient Activity"
  accent: string;           // hex color
  notifications: [Notification, Notification];
  stats: [StatMini, StatMini, StatMini];
}

export default function BookingPanel({ header, accent, notifications, stats }: BookingPanelProps) {
  const accentAlpha = (a: number) => `${accent}${Math.round(a * 255).toString(16).padStart(2, '0')}`;

  return (
    <div style={{
      background: 'var(--surface)',
      border: `1px solid ${accentAlpha(0.2)}`,
      borderRadius: 'var(--r-xl)',
      padding: 24,
    }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)' }}>{header}</span>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 5,
          background: `${accent}14`,
          border: `1px solid ${accent}33`,
          borderRadius: 4,
          padding: '3px 8px',
        }}>
          <span style={{
            width: 5,
            height: 5,
            borderRadius: '50%',
            background: accent,
            animation: 'pulse-dot 1.8s ease-in-out infinite',
            display: 'block',
          }} />
          <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', color: accent }}>LIVE</span>
        </div>
      </div>

      {/* Notification cards */}
      {notifications.map((n, i) => {
        const isAccent = n.type === 'accent';
        const bg    = isAccent ? `${accent}0d` : 'rgba(52,211,153,0.06)';
        const bdr   = isAccent ? `${accent}26` : 'rgba(52,211,153,0.2)';
        const bcolor= isAccent ? accent         : '#34D399';
        return (
          <div key={i} style={{
            background: bg,
            border: `1px solid ${bdr}`,
            borderRadius: 'var(--r-lg)',
            padding: '12px',
            marginBottom: 10,
            display: 'flex',
            alignItems: 'flex-start',
            gap: 10,
          }}>
            <span style={{
              fontSize: 18,
              background: `${bcolor}1a`,
              borderRadius: 8,
              width: 32,
              height: 32,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              {n.icon}
            </span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text)', marginBottom: 2 }}>{n.title}</div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{n.sub}</div>
            </div>
            <div style={{
              fontSize: 9,
              fontWeight: 700,
              color: bcolor,
              background: `${bcolor}1a`,
              borderRadius: 3,
              padding: '2px 6px',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}>
              {n.badge}
            </div>
          </div>
        );
      })}

      {/* Stats row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 8,
        borderTop: '1px solid var(--border)',
        paddingTop: 14,
        marginTop: 4,
      }}>
        {stats.map((s) => (
          <div key={s.label} style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: 18,
              fontWeight: 900,
              fontFamily: 'var(--font-manrope), Manrope, sans-serif',
              color: s.color,
              lineHeight: 1,
            }}>
              {s.value}
            </div>
            <div style={{ fontSize: 9, color: 'var(--text-faint)', marginTop: 3, letterSpacing: '0.06em' }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Type-check**

```bash
cd F:/Obsidian-Vault/vervemind-monorepo/apps/blitz
npx tsc --noEmit
```

- [ ] **Step 4: Commit**

```bash
cd F:/Obsidian-Vault/vervemind-monorepo
git add apps/blitz/src/components/NicheLayout.tsx \
        apps/blitz/src/components/BookingPanel.tsx
git commit -m "feat(blitz): add NicheLayout and BookingPanel shared components"
```

---

### Task 11: Build MedSpa niche page

**Files:**
- Create: `apps/blitz/src/app/medspa/page.tsx`
- Modify: `apps/blitz/src/app/page.tsx` (redirect)

- [ ] **Step 1: Create medspa/page.tsx**

```tsx
// apps/blitz/src/app/medspa/page.tsx
import { Metadata } from 'next';
import NicheLayout from '../../components/NicheLayout';
import BookingPanel from '../../components/BookingPanel';

export const metadata: Metadata = {
  title: 'MedSpa AI Receptionist | VerveMind',
  description: 'Turn missed calls into booked appointments. AI receptionist for MedSpas — answers every call, reactivates dormant clients, books 24/7.',
  alternates: { canonical: 'https://medspa.vervemindai.com' },
};

const ACCENT = '#F0ABFC';
const CONTRAST = '#3b0764';

const painPoints = [
  {
    num: '01',
    headline: 'Missed Calls = Lost Revenue',
    body: 'Every unanswered call is a booking that goes to the spa across the street. Most MedSpas miss 38% of inbound calls.',
    stat: '⚠ $3,200/mo in missed calls',
  },
  {
    num: '02',
    headline: 'Dormant Client Lists',
    body: 'Your past client database is your cheapest acquisition channel. 68% of past clients never hear from you again after their last visit.',
    stat: '⚠ 68% never re-engaged',
  },
  {
    num: '03',
    headline: 'After-Hours Dead Zone',
    body: 'High-intent clients browse Instagram at 10pm and call to book. If no one answers, they move on — and don't come back.',
    stat: '⚠ 42% book attempt after hours',
  },
];

export default function MedSpaPage() {
  return (
    <NicheLayout niche="MedSpa" accent={ACCENT} accentContrast={CONTRAST}>

      {/* ── HERO ── */}
      <section style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '72px 32px 60px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 52, alignItems: 'center' }}>
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: `${ACCENT}14`, border: `1px solid ${ACCENT}33`,
            borderRadius: 4, padding: '5px 12px', marginBottom: 22,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: ACCENT, animation: 'pulse-dot 1.8s ease-in-out infinite', display: 'block' }} />
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: ACCENT }}>MEDSPA AI SYSTEM</span>
          </div>

          <h1 style={{ fontSize: 'clamp(36px, 4.5vw, 52px)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-0.04em', marginBottom: 18, color: 'var(--text)' }}>
            Turn Missed Calls<br />Into{' '}
            <span style={{ background: `linear-gradient(135deg, ${ACCENT}, #a855f7)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Booked Appointments.
            </span>
          </h1>

          <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--text-muted)', maxWidth: 420, marginBottom: 28 }}>
            Your AI receptionist answers every call, reactivates dormant clients, and books treatments 24/7 — while you focus on delivering results.
          </p>

          <div style={{ display: 'flex', gap: 10, marginBottom: 24 }}>
            <a href="https://calendly.com/vervemindai/lead" target="_blank" rel="noopener noreferrer" style={{
              background: `linear-gradient(135deg, ${ACCENT}cc, ${ACCENT})`,
              color: CONTRAST, fontSize: 13, fontWeight: 800,
              padding: '12px 22px', borderRadius: 'var(--r)', textDecoration: 'none',
            }}>
              Book Free MedSpa Audit →
            </a>
            <a href="#demo" style={{
              background: 'transparent', border: '1px solid var(--border-strong)',
              color: 'var(--text)', fontSize: 13, fontWeight: 600,
              padding: '11px 18px', borderRadius: 'var(--r)', textDecoration: 'none',
            }}>
              Watch Demo
            </a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ display: 'flex' }}>
              {['#4a1942','#6b2264','#8b3086'].map((bg, i) => (
                <div key={i} style={{
                  width: 28, height: 28, borderRadius: '50%',
                  background: bg, border: '2px solid var(--bg)',
                  marginLeft: i > 0 ? -8 : 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 10, color: ACCENT, fontWeight: 700,
                }}>
                  {['A','B','C'][i]}
                </div>
              ))}
            </div>
            <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>Trusted by MedSpas across the US</span>
          </div>
        </div>

        <BookingPanel
          header="Live MedSpa Activity"
          accent={ACCENT}
          notifications={[
            {
              icon: '💆',
              title: 'New Booking — Laser Facial',
              sub: 'Sarah K. — Thursday 3pm · Confirmed via AI',
              badge: 'Booked',
              type: 'accent',
            },
            {
              icon: '💬',
              title: 'Reactivation — Responded',
              sub: 'Maria L. — "Yes! I'd love to come back for my HydraFacial"',
              badge: 'Converted',
              type: 'positive',
            },
          ]}
          stats={[
            { value: '$14K', label: 'Recovered (30 days)', color: ACCENT },
            { value: '94%',  label: 'Call answer rate',   color: '#34D399' },
            { value: '24/7', label: 'Always on',          color: 'var(--text)' },
          ]}
        />
      </section>

      {/* ── PROBLEM ── */}
      <section style={{
        background: 'rgba(255,255,255,0.015)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding: '80px 32px',
      }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <div style={{
            display: 'inline-block', fontSize: 10, fontWeight: 700,
            letterSpacing: '0.13em', textTransform: 'uppercase',
            padding: '4px 12px', borderRadius: 4,
            background: `${ACCENT}14`, border: `1px solid ${ACCENT}2e`, color: ACCENT,
            marginBottom: 20,
          }}>
            The Problem
          </div>
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: 12, color: 'var(--text)' }}>
            Revenue walking out the door every day
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 36, maxWidth: 500 }}>
            The average MedSpa loses $3,200/month to three preventable gaps.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
            {painPoints.map(({ num, headline, body, stat }) => (
              <div key={num} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: 22 }}>
                <div style={{ fontSize: 44, fontWeight: 900, color: 'var(--text-faint)', fontFamily: 'var(--font-manrope), Manrope, sans-serif', lineHeight: 1, marginBottom: 10 }}>{num}</div>
                <h3 style={{ fontSize: 15, fontWeight: 800, marginBottom: 7, color: 'var(--text)' }}>{headline}</h3>
                <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: 14 }}>{body}</p>
                <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--amber)', background: 'rgba(251,191,36,0.07)', border: '1px solid rgba(251,191,36,0.15)', borderRadius: 4, padding: '4px 8px', display: 'inline-block' }}>{stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section style={{ padding: '72px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 900, letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: 12 }}>
            Ready to stop losing bookings?
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 24 }}>
            Book a free 20-minute audit. We'll show you exactly how many appointments your MedSpa is losing every month.
          </p>
          <a href="https://calendly.com/vervemindai/lead" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-block',
            background: `linear-gradient(135deg, ${ACCENT}cc, ${ACCENT})`,
            color: CONTRAST, fontSize: 13, fontWeight: 800,
            padding: '13px 26px', borderRadius: 'var(--r)', textDecoration: 'none',
          }}>
            Book My Free MedSpa Audit →
          </a>
        </div>
      </section>

    </NicheLayout>
  );
}
```

- [ ] **Step 2: Update apps/blitz/src/app/page.tsx to redirect**

Replace the entire content of `apps/blitz/src/app/page.tsx` with:

```tsx
// apps/blitz/src/app/page.tsx
import { redirect } from 'next/navigation';

export default function BlitzRoot() {
  redirect('/medspa');
}
```

- [ ] **Step 3: Type-check**

```bash
cd F:/Obsidian-Vault/vervemind-monorepo/apps/blitz
npx tsc --noEmit
```

- [ ] **Step 4: Commit**

```bash
cd F:/Obsidian-Vault/vervemind-monorepo
git add apps/blitz/src/app/medspa/page.tsx apps/blitz/src/app/page.tsx
git commit -m "feat(blitz): MedSpa niche landing page"
```

---

### Task 12: Build Dental, HVAC, Roofing niche pages

**Files:**
- Create: `apps/blitz/src/app/dental/page.tsx`
- Create: `apps/blitz/src/app/hvac/page.tsx`
- Create: `apps/blitz/src/app/roofing/page.tsx`

- [ ] **Step 1: Create dental/page.tsx**

```tsx
// apps/blitz/src/app/dental/page.tsx
import { Metadata } from 'next';
import NicheLayout from '../../components/NicheLayout';
import BookingPanel from '../../components/BookingPanel';

export const metadata: Metadata = {
  title: 'Dental AI Receptionist | VerveMind',
  description: 'AI receptionist for dental practices — recall campaigns, emergency call capture, no-show reduction. Full chair, zero no-shows.',
  alternates: { canonical: 'https://dental.vervemindai.com' },
};

const ACCENT = '#7DD3FC';
const CONTRAST = '#0c4a6e';

const painPoints = [
  {
    num: '01',
    headline: 'Missed Emergency Calls',
    body: 'Patients with tooth pain call after hours. If you don't answer, they book the first practice that does — and they stay there.',
    stat: '⚠ 44% of emergencies: after-hours',
  },
  {
    num: '02',
    headline: 'Recall Patients Drift Away',
    body: 'Without automated recall, up to 40% of your active patient base drifts silent between checkups and never self-reschedules.',
    stat: '⚠ 40% never self-reschedule',
  },
  {
    num: '03',
    headline: 'No-Shows Drain the Schedule',
    body: 'Each unfilled chair slot costs $150–$400. AI reminder sequences cut no-show rates by over 60% automatically.',
    stat: '⚠ $3,800/mo avg no-show cost',
  },
];

export default function DentalPage() {
  return (
    <NicheLayout niche="Dental" accent={ACCENT} accentContrast={CONTRAST}>

      <section style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '72px 32px 60px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 52, alignItems: 'center' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: `${ACCENT}14`, border: `1px solid ${ACCENT}33`, borderRadius: 4, padding: '5px 12px', marginBottom: 22 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: ACCENT, animation: 'pulse-dot 1.8s ease-in-out infinite', display: 'block' }} />
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: ACCENT }}>DENTAL AI SYSTEM</span>
          </div>

          <h1 style={{ fontSize: 'clamp(36px, 4.5vw, 52px)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-0.04em', marginBottom: 18, color: 'var(--text)' }}>
            Full Chair.<br />
            <span style={{ background: `linear-gradient(135deg, ${ACCENT}, #0284c7)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Zero No-Shows.
            </span>
          </h1>

          <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--text-muted)', maxWidth: 420, marginBottom: 28 }}>
            Your AI receptionist handles new patient intake, recall campaigns, and emergency call routing — around the clock — so your front desk focuses on the patients in the chair.
          </p>

          <div style={{ display: 'flex', gap: 10, marginBottom: 24 }}>
            <a href="https://calendly.com/vervemindai/lead" target="_blank" rel="noopener noreferrer" style={{
              background: `linear-gradient(135deg, ${ACCENT}cc, ${ACCENT})`,
              color: CONTRAST, fontSize: 13, fontWeight: 800,
              padding: '12px 22px', borderRadius: 'var(--r)', textDecoration: 'none',
            }}>
              Book Free Dental Audit →
            </a>
            <a href="#demo" style={{ background: 'transparent', border: '1px solid var(--border-strong)', color: 'var(--text)', fontSize: 13, fontWeight: 600, padding: '11px 18px', borderRadius: 'var(--r)', textDecoration: 'none' }}>
              Watch Demo
            </a>
          </div>
        </div>

        <BookingPanel
          header="Live Patient Activity"
          accent={ACCENT}
          notifications={[
            { icon: '🦷', title: 'New Patient — Emergency', sub: 'James R. — Tooth pain, after hours · Triaged & booked', badge: 'Captured', type: 'accent' },
            { icon: '📋', title: '6-Month Recall — Confirmed', sub: 'Lisa M. — "Tuesday at 10am works great!"', badge: 'Booked', type: 'positive' },
          ]}
          stats={[
            { value: '94%',  label: 'Recall success rate',  color: ACCENT },
            { value: '-62%', label: 'No-show reduction',    color: '#34D399' },
            { value: '24/7', label: 'Emergency routing',    color: 'var(--text)' },
          ]}
        />
      </section>

      <section style={{ background: 'rgba(255,255,255,0.015)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '80px 32px' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', fontSize: 10, fontWeight: 700, letterSpacing: '0.13em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: 4, background: `${ACCENT}14`, border: `1px solid ${ACCENT}2e`, color: ACCENT, marginBottom: 20 }}>The Problem</div>
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: 12, color: 'var(--text)' }}>Patients are slipping through every single day</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 36, maxWidth: 500 }}>The average dental practice loses $8,000–12,000/month to three preventable gaps.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
            {painPoints.map(({ num, headline, body, stat }) => (
              <div key={num} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: 22 }}>
                <div style={{ fontSize: 44, fontWeight: 900, color: 'var(--text-faint)', fontFamily: 'var(--font-manrope), Manrope, sans-serif', lineHeight: 1, marginBottom: 10 }}>{num}</div>
                <h3 style={{ fontSize: 15, fontWeight: 800, marginBottom: 7, color: 'var(--text)' }}>{headline}</h3>
                <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: 14 }}>{body}</p>
                <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--amber)', background: 'rgba(251,191,36,0.07)', border: '1px solid rgba(251,191,36,0.15)', borderRadius: 4, padding: '4px 8px', display: 'inline-block' }}>{stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '72px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 900, letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: 12 }}>Ready to fill your chairs?</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 24 }}>Book a free 20-minute audit and see exactly how many patients your practice is losing every month.</p>
          <a href="https://calendly.com/vervemindai/lead" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-block', background: `linear-gradient(135deg, ${ACCENT}cc, ${ACCENT})`,
            color: CONTRAST, fontSize: 13, fontWeight: 800, padding: '13px 26px', borderRadius: 'var(--r)', textDecoration: 'none',
          }}>
            Book My Free Dental Audit →
          </a>
        </div>
      </section>

    </NicheLayout>
  );
}
```

- [ ] **Step 2: Create hvac/page.tsx**

```tsx
// apps/blitz/src/app/hvac/page.tsx
import { Metadata } from 'next';
import NicheLayout from '../../components/NicheLayout';
import BookingPanel from '../../components/BookingPanel';

export const metadata: Metadata = {
  title: 'HVAC AI Dispatcher | VerveMind',
  description: 'AI dispatcher for HVAC companies — emergency call capture, seasonal tune-up campaigns, 24/7 lead qualification.',
  alternates: { canonical: 'https://hvac.vervemindai.com' },
};

const ACCENT = '#FB923C';
const CONTRAST = '#431407';

const painPoints = [
  {
    num: '01',
    headline: 'Peak-Season Overflow',
    body: 'In July and January, your phones ring off the hook. Every call you miss during peak season is $400–900 in lost service revenue.',
    stat: '⚠ $6,200/mo missed during peaks',
  },
  {
    num: '02',
    headline: 'After-Hours Emergencies',
    body: 'A family's AC goes out at 9pm on a Friday. If you don't answer, they call whoever does — and that competitor gets the repeat service contract.',
    stat: '⚠ 38% of emergency calls: evenings',
  },
  {
    num: '03',
    headline: 'Seasonal Tune-Up Drift',
    body: 'Past customers need annual tune-ups, but most HVAC companies rely on the customer to call back. Automated campaigns recover 2–3x the bookings.',
    stat: '⚠ 55% never self-schedule tune-ups',
  },
];

export default function HVACPage() {
  return (
    <NicheLayout niche="HVAC" accent={ACCENT} accentContrast={CONTRAST}>

      <section style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '72px 32px 60px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 52, alignItems: 'center' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: `${ACCENT}14`, border: `1px solid ${ACCENT}33`, borderRadius: 4, padding: '5px 12px', marginBottom: 22 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: ACCENT, animation: 'pulse-dot 1.8s ease-in-out infinite', display: 'block' }} />
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: ACCENT }}>HVAC AI SYSTEM</span>
          </div>

          <h1 style={{ fontSize: 'clamp(36px, 4.5vw, 52px)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-0.04em', marginBottom: 18, color: 'var(--text)' }}>
            Never Miss an<br />
            <span style={{ background: `linear-gradient(135deg, ${ACCENT}, #ea580c)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Emergency Call.
            </span>
          </h1>

          <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--text-muted)', maxWidth: 420, marginBottom: 28 }}>
            Your AI dispatcher answers every emergency, qualifies leads, and books tune-up campaigns automatically — even during peak summer and winter demand.
          </p>

          <div style={{ display: 'flex', gap: 10, marginBottom: 24 }}>
            <a href="https://calendly.com/vervemindai/lead" target="_blank" rel="noopener noreferrer" style={{
              background: `linear-gradient(135deg, ${ACCENT}cc, ${ACCENT})`,
              color: CONTRAST, fontSize: 13, fontWeight: 800,
              padding: '12px 22px', borderRadius: 'var(--r)', textDecoration: 'none',
            }}>
              Book Free HVAC Audit →
            </a>
            <a href="#demo" style={{ background: 'transparent', border: '1px solid var(--border-strong)', color: 'var(--text)', fontSize: 13, fontWeight: 600, padding: '11px 18px', borderRadius: 'var(--r)', textDecoration: 'none' }}>
              Watch Demo
            </a>
          </div>
        </div>

        <BookingPanel
          header="Live Dispatch Activity"
          accent={ACCENT}
          notifications={[
            { icon: '🚨', title: 'Emergency — AC Down', sub: 'Carlos M. — Residential, high priority · Dispatch scheduled', badge: 'Urgent', type: 'accent' },
            { icon: '📅', title: 'Seasonal Tune-Up — Booked', sub: 'Patel Residence — Pre-summer AC service · Friday AM', badge: 'Confirmed', type: 'positive' },
          ]}
          stats={[
            { value: '$6.2K', label: 'Recovered this week', color: ACCENT },
            { value: '100%', label: 'Calls answered',      color: '#34D399' },
            { value: '24/7', label: 'Emergency dispatch',  color: 'var(--text)' },
          ]}
        />
      </section>

      <section style={{ background: 'rgba(255,255,255,0.015)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '80px 32px' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', fontSize: 10, fontWeight: 700, letterSpacing: '0.13em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: 4, background: `${ACCENT}14`, border: `1px solid ${ACCENT}2e`, color: ACCENT, marginBottom: 20 }}>The Problem</div>
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: 12, color: 'var(--text)' }}>Service calls you're missing right now</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 36, maxWidth: 500 }}>The average HVAC company loses 35–40% of after-hours revenue to three fixable gaps.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
            {painPoints.map(({ num, headline, body, stat }) => (
              <div key={num} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: 22 }}>
                <div style={{ fontSize: 44, fontWeight: 900, color: 'var(--text-faint)', fontFamily: 'var(--font-manrope), Manrope, sans-serif', lineHeight: 1, marginBottom: 10 }}>{num}</div>
                <h3 style={{ fontSize: 15, fontWeight: 800, marginBottom: 7, color: 'var(--text)' }}>{headline}</h3>
                <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: 14 }}>{body}</p>
                <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--amber)', background: 'rgba(251,191,36,0.07)', border: '1px solid rgba(251,191,36,0.15)', borderRadius: 4, padding: '4px 8px', display: 'inline-block' }}>{stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '72px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 900, letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: 12 }}>Ready to capture every emergency call?</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 24 }}>Book a free audit and we'll show you how many service calls your HVAC business is losing after hours.</p>
          <a href="https://calendly.com/vervemindai/lead" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-block', background: `linear-gradient(135deg, ${ACCENT}cc, ${ACCENT})`,
            color: CONTRAST, fontSize: 13, fontWeight: 800, padding: '13px 26px', borderRadius: 'var(--r)', textDecoration: 'none',
          }}>
            Book My Free HVAC Audit →
          </a>
        </div>
      </section>

    </NicheLayout>
  );
}
```

- [ ] **Step 3: Create roofing/page.tsx**

```tsx
// apps/blitz/src/app/roofing/page.tsx
import { Metadata } from 'next';
import NicheLayout from '../../components/NicheLayout';
import BookingPanel from '../../components/BookingPanel';

export const metadata: Metadata = {
  title: 'Roofing AI System | VerveMind',
  description: 'AI system for roofing companies — storm lead capture, quote follow-up sequences, insurance claim automation.',
  alternates: { canonical: 'https://roofing.vervemindai.com' },
};

const ACCENT = '#86EFAC';
const CONTRAST = '#14532d';

const painPoints = [
  {
    num: '01',
    headline: 'Storm Leads Go Cold Fast',
    body: 'After a storm event, homeowners call 3–5 contractors. The first to respond gets the job. 65% of storm leads are decided within 4 hours.',
    stat: '⚠ 65% of leads: 4-hour window',
  },
  {
    num: '02',
    headline: 'Quotes Left Without Follow-Up',
    body: 'Most roofing companies send a quote and wait. AI follow-up sequences double response rates by sending 5 targeted touchpoints over 10 days.',
    stat: '⚠ 72% of quotes: never followed up',
  },
  {
    num: '03',
    headline: 'Insurance Claim Abandonment',
    body: 'Homeowners get confused navigating insurance and drop off. Automated sequences guide them step-by-step, dramatically improving close rates.',
    stat: '⚠ 48% abandon insurance claims',
  },
];

export default function RoofingPage() {
  return (
    <NicheLayout niche="Roofing" accent={ACCENT} accentContrast={CONTRAST}>

      <section style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '72px 32px 60px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 52, alignItems: 'center' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: `${ACCENT}14`, border: `1px solid ${ACCENT}33`, borderRadius: 4, padding: '5px 12px', marginBottom: 22 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: ACCENT, animation: 'pulse-dot 1.8s ease-in-out infinite', display: 'block' }} />
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: ACCENT }}>ROOFING AI SYSTEM</span>
          </div>

          <h1 style={{ fontSize: 'clamp(36px, 4.5vw, 52px)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-0.04em', marginBottom: 18, color: 'var(--text)' }}>
            Capture Every<br />
            <span style={{ background: `linear-gradient(135deg, ${ACCENT}, #16a34a)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Storm Lead.
            </span>
          </h1>

          <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--text-muted)', maxWidth: 420, marginBottom: 28 }}>
            Your AI captures every storm-season inquiry, follows up on every quote, and runs insurance claim sequences automatically — so no lead goes cold.
          </p>

          <div style={{ display: 'flex', gap: 10, marginBottom: 24 }}>
            <a href="https://calendly.com/vervemindai/lead" target="_blank" rel="noopener noreferrer" style={{
              background: `linear-gradient(135deg, ${ACCENT}cc, ${ACCENT})`,
              color: CONTRAST, fontSize: 13, fontWeight: 800,
              padding: '12px 22px', borderRadius: 'var(--r)', textDecoration: 'none',
            }}>
              Book Free Roofing Audit →
            </a>
            <a href="#demo" style={{ background: 'transparent', border: '1px solid var(--border-strong)', color: 'var(--text)', fontSize: 13, fontWeight: 600, padding: '11px 18px', borderRadius: 'var(--r)', textDecoration: 'none' }}>
              Watch Demo
            </a>
          </div>
        </div>

        <BookingPanel
          header="Live Lead Activity"
          accent={ACCENT}
          notifications={[
            { icon: '🌩️', title: 'Storm Damage — New Lead', sub: 'Thompson Residence — Hail damage, quote requested · Qualified', badge: 'Hot Lead', type: 'accent' },
            { icon: '📄', title: 'Quote Follow-Up — Responded', sub: 'Davis Property — "Let\'s move forward with the estimate"', badge: 'Closing', type: 'positive' },
          ]}
          stats={[
            { value: '$8.4K', label: 'Pipeline added',       color: ACCENT },
            { value: '81%',   label: 'Quote response rate',  color: '#34D399' },
            { value: '24/7',  label: 'Lead capture',         color: 'var(--text)' },
          ]}
        />
      </section>

      <section style={{ background: 'rgba(255,255,255,0.015)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '80px 32px' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', fontSize: 10, fontWeight: 700, letterSpacing: '0.13em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: 4, background: `${ACCENT}14`, border: `1px solid ${ACCENT}2e`, color: ACCENT, marginBottom: 20 }}>The Problem</div>
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: 12, color: 'var(--text)' }}>Storm season money left on the table</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 36, maxWidth: 500 }}>The average roofing company loses 40–50% of storm-season leads to three fixable gaps.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
            {painPoints.map(({ num, headline, body, stat }) => (
              <div key={num} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: 22 }}>
                <div style={{ fontSize: 44, fontWeight: 900, color: 'var(--text-faint)', fontFamily: 'var(--font-manrope), Manrope, sans-serif', lineHeight: 1, marginBottom: 10 }}>{num}</div>
                <h3 style={{ fontSize: 15, fontWeight: 800, marginBottom: 7, color: 'var(--text)' }}>{headline}</h3>
                <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: 14 }}>{body}</p>
                <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--amber)', background: 'rgba(251,191,36,0.07)', border: '1px solid rgba(251,191,36,0.15)', borderRadius: 4, padding: '4px 8px', display: 'inline-block' }}>{stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '72px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 900, letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: 12 }}>Ready to close more roofing jobs?</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 24 }}>Book a free audit and we'll show you exactly how many storm leads and quotes your business is losing.</p>
          <a href="https://calendly.com/vervemindai/lead" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-block', background: `linear-gradient(135deg, ${ACCENT}cc, ${ACCENT})`,
            color: CONTRAST, fontSize: 13, fontWeight: 800, padding: '13px 26px', borderRadius: 'var(--r)', textDecoration: 'none',
          }}>
            Book My Free Roofing Audit →
          </a>
        </div>
      </section>

    </NicheLayout>
  );
}
```

- [ ] **Step 4: Type-check blitz**

```bash
cd F:/Obsidian-Vault/vervemind-monorepo/apps/blitz
npx tsc --noEmit
npm run build
```
Expected: clean build.

- [ ] **Step 5: Commit**

```bash
cd F:/Obsidian-Vault/vervemind-monorepo
git add apps/blitz/src/app/dental/page.tsx \
        apps/blitz/src/app/hvac/page.tsx \
        apps/blitz/src/app/roofing/page.tsx
git commit -m "feat(blitz): Dental, HVAC, Roofing niche landing pages"
```

---

## Phase 5: Vercel Routing

### Task 13: Update vercel.json for niche subdomain routing

**Files:**
- Modify: `vercel.json` (root of monorepo)

- [ ] **Step 1: Read current vercel.json**

```bash
cat F:/Obsidian-Vault/vervemind-monorepo/vercel.json
```

- [ ] **Step 2: Add niche subdomain rewrites**

In `vercel.json`, find the `rewrites` array and add entries for the 4 niche subdomains. Each subdomain should rewrite to the blitz app's route. The exact target URL will depend on your Vercel deployment name — use the same pattern as the existing medspa rewrite.

The new rewrites should follow this pattern (adjust `blitz-vervemindaiteam.vercel.app` to match your actual Vercel deployment URL for the blitz app):

```json
{
  "source": "https://medspa.vervemindai.com/:path*",
  "destination": "https://blitz-vervemindaiteam.vercel.app/medspa/:path*"
},
{
  "source": "https://dental.vervemindai.com/:path*",
  "destination": "https://blitz-vervemindaiteam.vercel.app/dental/:path*"
},
{
  "source": "https://hvac.vervemindai.com/:path*",
  "destination": "https://blitz-vervemindaiteam.vercel.app/hvac/:path*"
},
{
  "source": "https://roofing.vervemindai.com/:path*",
  "destination": "https://blitz-vervemindaiteam.vercel.app/roofing/:path*"
}
```

> **Note:** Vercel subdomain rewrites require the domain to be added in the Vercel project dashboard under "Domains". After adding vercel.json entries, go to Vercel Dashboard → blitz project → Domains and add `medspa.vervemindai.com`, `dental.vervemindai.com`, `hvac.vervemindai.com`, `roofing.vervemindai.com`.

- [ ] **Step 3: Commit**

```bash
cd F:/Obsidian-Vault/vervemind-monorepo
git add vercel.json
git commit -m "feat: add niche subdomain rewrites for dental, hvac, roofing"
```

---

## Self-Review Checklist

### Spec coverage check

| Spec section | Covered by task |
|---|---|
| §1 Visual tokens (CSS vars) | Task 1 |
| §2 Global layout / max-width 1160px | Task 4 (Section component) |
| §3.1 Founder Rate Banner | Task 4 |
| §3.2 Hero (two-col, metrics panel, static glow) | Task 4 |
| §3.3 Social Proof Bar (4-cell) | Task 5 |
| §3.4 Problem Section (3 cards) | Task 5 |
| §3.5 How It Works | Task 5 |
| §3.6 Niche Tiles (4-col) | Task 6 |
| §3.7 Testimonial (iVolve $14K) | Task 6 |
| §3.8 Pricing (Starter $177 / Growth $297) | Task 6 |
| §3.9 CTA Band (static glow) | Task 6 |
| §3.10 Footer (4-col) | Task 3 |
| §4 Inner pages — Pricing | Task 7 |
| §4 Inner pages — About/Blog/FAQ/Contact | Task 8 |
| §5 Remove framer-motion | Task 4 (full rewrite) |
| §5 Remove backdrop-filter:blur | Task 9 (blitz globals.css) |
| §7 Niche pages — all 4 niches | Tasks 11–12 |
| §7 Niche accent system | Tasks 11–12 |
| §7 Booking panel | Task 10 |
| Vercel routing | Task 13 |

### Animation rule compliance

- No `animation:` CSS in any component except `pulse-dot` on live indicators (LIVE badge dots, hero badge dot) ✓
- No `framer-motion` imports in new page.tsx ✓
- No `backdrop-filter: blur()` — removed from blitz globals.css ✓
- Single static `radial-gradient` teal glow at hero only ✓ (also allowed in CTA band per spec §3.9)

### Type consistency

- `BookingPanel` `notifications` prop typed as `[Notification, Notification]` (tuple, always exactly 2) — consistent with all 4 niche page usages ✓
- `stats` prop typed as `[StatMini, StatMini, StatMini]` (tuple, always exactly 3) — consistent ✓
- `NicheLayout` `accentContrast` used in all pages ✓
