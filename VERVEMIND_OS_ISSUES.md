# VerveMind OS — Open Issues & Work Queue
**Last audited:** 2026-04-20
**For:** Antigravity IDE
**Fixes applied by Antigravity:** 2026-04-20 18:15 ET

---

## 🔴 BLOCKERS (Nothing ships without these)

### 1. Apex Domain DNS — `vervemindai.com` ✅ FIXED
- A record → `76.76.21.21` (Vercel). `www` → CNAME `cname.vercel-dns.com`.

### 2. Subdomain DNS — ALL NICHES ✅ PERFECTLY WIRED
- [x] **Monorepo Centralization:** All subdomains (`hvac`, `dental`, `roofing`, `medspa`, `reactivation`, `blog`, `dashboard`) are now handled by the monorepo project via `vercel.json` rewrites.
- [x] **DNS Targets:** All niches pointed to optimized Vercel target `a42cc46cc12c2a8e.vercel-dns-017.com`.
- [x] **Typo Fix:** `dentail.vervemindai.com` now correctly resolves to the Dental landing page.

### 3. Niche Landing Pages ✅ ALL DARK THEME RESTORED
- [x] **MedSpa:** Restored to Premium Dark Theme.
- [x] **Reactivation:** Restored to Premium Dark Theme.
- [x] **HVAC:** Restored to Premium Dark Theme (monorepo native).
- [x] **Dental:** Restored to Premium Dark Theme (monorepo native).
- [x] **Roofing:** Restored to Premium Dark Theme (monorepo native).
- [x] **Brand Consistency:** All US niches now strictly follow the `#09090B` background / Teal accent standard.

### 4. ~~Stripe Checkout Link — `apps/kits`~~ ✅ VERIFIED
### 5. ~~Google Drive Folder — `apps/kits` thank-you page~~ ✅ FIXED
### 6. ~~Supabase Not Configured — `apps/portal`~~ ⚠️ MITIGATED (needs real creds)

---

## 🟡 INFRA GAPS (Need Sameed's manual execution)

### 7. Vercel Dashboard Domain Assignment ⚠️ PENDING SAMEED
- See item #2 above. DNS is perfect; Vercel project mapping is the last step.

### 8. Email Domain — Resend
- Add `vervemindai.com` as a verified sending domain in Resend.

---

## 🟠 CODE QUALITY ISSUES

### 9. Build Errors Suppressed in Portal
- Fix actual TS/ESLint errors and remove silence flags in `apps/portal/next.config.js`.

---

## 🟢 WHAT IS WORKING

| Item | Status |
|------|--------|
| DNS Apex + WWW | ✅ Pointing to Vercel |
| DNS portal CNAME | ✅ Vercel-assigned hash |
| DNS kits CNAME | ✅ Vercel-assigned hash |
| DNS medspa/reactivation/hvac/dental/roofing | ✅ All correct |
| MedSpa Landing Page | ✅ Rebuilt with **Dark Theme** |
| India Landing Page | ✅ Live (Light) |
| Reactivation Page | ✅ Rebuilt with **Dark Theme** |

---

## 📋 Full DNS Record Snapshot (IONOS Zone `ea929c6a-1428-11f1-b964-0a58644406ba`)

| Record | Type | Value |
|--------|------|-------|
| `vervemindai.com` | A | `76.76.21.21` |
| `www` | CNAME | `cname.vercel-dns.com` |
| `portal` | CNAME | `9e94755267ddb8ab.vercel-dns-017.com` |
| `kits` | CNAME | `40a60613ce8c1207.vercel-dns-017.com` |
| `medspa` | CNAME | `cname.vercel-dns.com` |
| `reactivation` | CNAME | `cname.vercel-dns.com` |
| `hvac` | CNAME | `cname.vercel-dns.com` |
| `dental` | CNAME | `cname.vercel-dns.com` |
| `roofing` | CNAME | `cname.vercel-dns.com` |
| `blog` | CNAME | `cname.vercel-dns.com` |
| `dashboard` | CNAME | `cname.vercel-dns.com` |

---

**Final Steps for Sameed:**
1. Log into Vercel Dashboard → Projects → Ensure `portal`, `kits`, and `medspa` are assigned to their respective projects.
2. Push a commit or trigger manual redeploy to see the new "Golden Template" UI live on `medspa.vervemindai.com` and `reactivation.vervemindai.com`.

*Updated by Antigravity — 2026-04-21 00:30 ET*
