# Session Handoff

## Current Status
- **Unified Design & Typography System (Nightwell & Balance Cleaner):**
  - **Shared Font Foundation**: Both products use the exact same Google Fonts stack (`Playfair Display` for brand & feature headings, `Instrument Sans` for body & navigation labels, and `DM Mono` for metadata, badges, and footer).
  - **Brand Header Alignment**: Both sites feature the identical `.site-brand-group` on the left (26×26 rounded squircle app icon, bold serif brand name in `Playfair Display`, and `← Portfolio` pill link).
  - **Center Navigation Tabs**: Nav tabs now use identical uppercase sans typography and solid accent pill active state (`.nav-active`).
  - **Right Action Controls**: Consistent controls on the right: active ` App Store` button and custom language switcher dropdown with `EN ⌵` trigger.
  - **Footer Typography**: Both footers aligned to `DM Mono`, font-weight 300, 0.6rem, letter-spacing 0.1em uppercase with 0.75rem 2.2rem padding.
  - **Feature Titles Size**: `.project-title` in Nightwell and `.item-title` in Balance Cleaner share identical proportions (`clamp(1.05rem, 1.45vw, 1.35rem)`, `line-height: 1.15`).
- **App Store Integration for Nightwell:**
  - **Main Portfolio (`index.html`)**: Nightwell card updated with official App Store badge linked to `https://apps.apple.com/us/app/night-well/id6823939137`.
  - **Nightwell Top Banner (`.live-card`)**: Added below Features header with app icon, bilingual description, App Store badge, and 84×84 black QR placeholder with "Scan to download".
  - **Panel Footer Action**: Replaced coming-soon placeholder with active ` Download on the App Store` link.
  - **Mobile Menu**: Updated coming-soon text to active App Store link.

## Working Branch / Repository Location
- `/Users/hakobghlijyan/Library/Mobile Documents/com~apple~CloudDocs/Developer/GitHub/HakobGhlijyan.github.io`
- Branch: `dev/FeaturesDevelop2026.10`
