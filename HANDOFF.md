# Session Handoff — Portfolio Audit & Full Standardization

**Date:** November 12, 2026  
**Active Branch:** `dev/FeaturesUpdateAndAddNewFilterStudio`  
**Last Commit:** `98eb71d`  
**Current Status:** ✅ All 7 sub-sites fully standardized. Full audit complete.

---

## 1. Completed This Session

### Core Sites (FilterStudio / CentSweep / Nightwell)
- **FilterStudio** = golden master (night navy `#070A12`, iOS blue `#4C8DFF`, amber `#F6D743`)
- **CentSweep** = emerald palette — hamburger standardized to `setMenu()` ✅
- **Nightwell** = ocean navy — header normalized, `html { font-size: 15px }` ✅

### Hamburger Standard — All 7 sites unified
- `id="navBurger"` / `id="navClose"`, `role="dialog"`, `aria-modal="true"`
- `setMenu(open)` with `body.menu-open`, `aria-expanded`, Escape key, resize handler
- Zero inline `onclick=` attributes anywhere

### Banner / QR Section — All 3 main sites
- QR: 72px with `min-width:72px`; V-stack on mobile (≤640px), left-aligned
- FilterStudio: Coming Soon → QR is placeholder (no App Store yet) ✅ intentional

### Nightwell CSS Font Variables — FIXED (commit `98eb71d`)
- `--font-serif` corrected: `'Instrument Serif'` → `'Playfair Display'`
- `--font-mono` corrected: `'JetBrains Mono'` → `'DM Mono'`
- All ~15 hardcoded `font-family` occurrences replaced with `var(--font-serif/mono/sans)`

### Project-Template / Project-4 / 5 / 6 — FIXED (commit `98eb71d`)
- `setMenu()` block added to `assets/main.js` (was missing, only had raw `classList.remove`)
- Inline `onclick=` removed from burger/close buttons in all 4 HTML files
- `og:description` fixed (was FilterStudio copy → generic template text)
- `main.js` synced: Template → 4, 5, 6 (always keep in sync via `cp`)

---

## 2. Architecture Rules (Do Not Change)

| Rule | Value |
|------|-------|
| Font stack | `Playfair Display` (serif) · `Instrument Sans` (sans) · `DM Mono` (mono) |
| `html { font-size }` | `15px` on all sites |
| `.site-brand` | `800` weight / `1.15rem` |
| `.site-nav-tabs a` | `500` weight / `0.76rem` |
| Hamburger JS | `setMenu()` with `body.menu-open` and `aria-expanded` |
| Template sync | Edit `Project-Template/` → `cp` to 4, 5, 6 |
| Palette | Never alter FilterStudio navy, CentSweep emerald, Nightwell indigo |

---

## 3. Known Issues / Not Yet Done

| Priority | Issue | File(s) |
|----------|-------|---------|
| LOW | Root `index.html` has no link to `Project-Template/` (intentional? internal only) | `index.html` |
| LOW | `og:image` on templates is relative `images/cover.jpg` (needs absolute URL for OG sharing) | Project-Template/4/5/6 `index.html` |
| INFO | FilterStudio QR code = placeholder (Coming Soon, no App Store URL yet) | `FilterStudio/assets/…/qr-code-white.png` |
| INFO | 10 copies of `app-store-badge.svg` across sites (working fine, no refactor needed) | various |

---

## 4. Next Session Start

```
git -C "$REPO" log --oneline -5
# Branch: dev/FeaturesUpdateAndAddNewFilterStudio
# Last: 98eb71d fix: standardize font vars in Nightwell CSS; add setMenu()…
```

When FilterStudio is published to App Store:
1. Update `FilterStudio/index.html` App Store URL (currently `#features` placeholder)
2. Download real QR: `curl "https://api.qrserver.com/v1/create-qr-code/?size=400x400&color=FFFFFF&bgcolor=070A12&data=<APPSTORE_URL>&margin=10" -o "FilterStudio/assets/FilterStudio - marketingtools/qr-code-white.png"`
3. Remove "Coming Soon" badge text, switch to "Download on the App Store"
