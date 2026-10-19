# Session Handoff

## Current Status
- **Portfolio Main Page (`index.html`, `css/style.css`, `js/main.js`):**
  - **Project Cards Linear Gradient & Artwork Clarity**:
    - Top 30% of each project card is 100% clear / transparent, revealing the project artwork and mockup crisp and unclouded.
    - Bottom transitions to solid white in light mode (backing dark `#191613` text) and solid dark in dark mode (backing crisp `#effff7` text).
    - `.cell-media` opacity raised to `0.76` (and `0.92` on hover, `1.0` on active) so the project artwork is immediately clear and vibrant.
  - **Comprehensive Multi-Device Responsiveness (Web, iPad, Mobile)**:
    - Desktop (1200px+): 3x2 kinetic accordion grid with smooth 2D expansion (`5fr` x `4.2fr`).
    - iPad Portrait (768px - 960px): Seamless slide-out navigation drawer, 1-column responsive kinetic stack, 2-column footer grid (`repeat(2, 1fr)`), smooth scroll-into-view upon card expansion.
    - iPad Landscape (1024px - 1180px): Spacious desktop layout with kinetic matrix and 4-column footer.
    - Mobile (iPhone, <= 640px / 480px): 1-column layout, touch-friendly min 44px tap targets, responsive typography via `clamp()`, and smooth drawer navigation.
- **Balance Cleaner Split-Screen Redesign (`BalanceCleaner/`):**
  - **Permanent Dark Theme by Default**:
    - Removed theme switcher button and forced authentic emerald dark theme (`#07110d` / `#0d1e17`).
    - Header uses smooth deep gradient without any light-mode black stripe.
    - Brand logo set to high-contrast white icon (`assets/icons/x1024_light.svg`).
  - **Nightwell Typography Alignment**:
    - Standardized on `Playfair Display` (serif display headings), `Instrument Sans` (body text), and `DM Mono` (badges, stats, technical details).
  - **Warm Sand Canvas Pedestal**:
    - `.canvas-image` and `.canvas-context` feature the warm sand pedestal gradient (`#F4EFEB` → `#E9E1D5` → `#DDD2C4`), ready for transparent PNG mockups.
  - **Original Carousel Order & Banners (S1 - S5)**:
    - 01: Smart Balance Cleaner (`Page 1ai-store-black.png`)
    - 02: Calculate & Split (`Page 2ai-store-black.png`)
    - 03: Track Every Cleared Balance (`Page 3ai-store-black.png`)
    - 04: How It Works (`Page 4ai-store-black.png`)
    - 05: Pro Features (`Page 5ai-store-black.png`)
  - **Rich Expanded About Panel**:
    - Complete product story, 3 core pillars (Understand, Choose, Balance), full Purchase Tiers breakdown (Tiers 1, 2, 3, 4, 5, 10), Smart Balance Matcher algorithm explanation, developer donation note, direct Apple Support billing link, and native StoreKit 2 stats.
  - **Structured Privacy Panel (Nightwell-Style)**:
    - 3 highlight cards + 7 detailed glass accordions covering StoreKit 2, on-device sandbox storage, optional CloudKit sync, FormSubmit support, GDPR/CCPA rights, and direct contact.
  - **7 Languages Supported**: EN, RU, FR, DE, ES, IT, HY with instant UI translation.

## Working Branch
`dev/FeaturesNewSiteDevelop`

## Decisions Made
1. **Clear-to-Solid Project Gradient**: Moving the transparency cutoff to 28-30% allows the project screenshots to be seen clearly without any haze at the top, while the solid white/dark bottom ensures 100% WCAG AAA contrast for title, tags, and buttons.
2. **Permanent Dark Mode for Balance Cleaner**: Eliminating theme toggling in Balance Cleaner anchors the brand in its emerald/mint dark aesthetic, aligning with the Nightwell companion app.
3. **Warm Sand Mockup Canvas Pedestal**: Using the `#E9E1D5` sand card in both Nightwell and Balance Cleaner gives device mockups a consistent tactile stage across both showcase websites.
4. **960px Tablet Breakpoint**: Triggering drawer navigation and 1-column kinetic stack at 960px guarantees that all portrait iPads (768px, 810px, 820px, 834px) have spacious layouts without navigation clipping or horizontal scrolling.
