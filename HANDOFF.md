# Session Handoff — Filter Studio App Store Release & FOUC Fix

**Date:** November 17, 2026  
**Active Branch:** `dev/FeaturesUpdateAndAddNewFilterStudio`  
**Current Status:** ✅ Filter Studio released on App Store. All download links, badges, QR codes wired and verified. Initial load FOUC/distortion resolved.

---

## 1. What Was Done in This Session

### Filter Studio — Full App Store Integration
- **App Store Link:** `https://apple.co/4zl4g0K` (App ID `6825377434`).
- **Header Action Button:** Replaced "Coming Soon" with live App Store button matching CentSweep/Nightwell standard.
- **Mobile Menu Overlay:** Replaced "Coming Soon" with live download button (`data-i18n="getOnAppStore"`).
- **Hero Banner (`.live-card`):**
  - Updated title to "Now available on the App Store" (`liveTitle`).
  - Wired live App Store badge to `https://apple.co/4zl4g0K`.
  - Replaced SVG placeholder with authentic `images/qr-code.png` (400×400 rendered at 72×72px).
  - Made QR code interactive and clickable, wrapped in `<a>` link with subtle hover scaling.
- **Panel Footer:** Converted bottom button from `#features` anchor to direct App Store link.
- **i18n Dictionaries:** Updated all 6 languages (`en`, `ru`, `fr`, `de`, `es`, `it`) with live release strings.
- **Root Portfolio (`index.html`):**
  - Card 03 (Filter Studio): Replaced disabled "Coming soon" pill with official SVG App Store badge link.
  - Ecosystem subtitle: Updated to announce CentSweep, Nightwell, and Filter Studio as live releases.

### Anti-FOUC & Page Load Stabilization
- **Root Cause of Distortion:** 
  1. `.panel` had entrance transition (`opacity var(--transition-panel), transform var(--transition-panel)`) executing immediately on cold load, resulting in 450ms of dim, semi-transparent text.
  2. `loading="lazy"` on above-the-fold QR and hero elements caused layout recalculation and late asset painting.
  3. Blue focus outlines appeared in WebKit/Safari around `<a>` tags during hash navigation/initial activation.
- **Fix:**
  - Added `body.preload` anti-FOUC rule disabling all transitions and animations during first paint.
  - Added double `requestAnimationFrame` in `DOMContentLoaded` to cleanly release `preload` only after layout has rendered.
  - Added `:focus:not(:focus-visible) { outline: none; }` to eliminate unwanted Safari focus rings.
  - Removed `loading="lazy"` from above-the-fold critical hero elements for instantaneous rendering.

---

## 2. Verification
- Live dev server `http://127.0.0.1:5500/` tested:
  - `FilterStudio/`: Header button, live-badge, QR code, panel footer, and mobile nav all point to `https://apple.co/4zl4g0K` ✓
  - Root `index.html`: Card 03 badge links to App Store ✓
  - Zero console errors, instantaneous clean paint without transition lag or missing assets ✓
