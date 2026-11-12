# Session Handoff

## Current Status
- **Filter Studio Production Showcase (`FilterStudio/`):**
  - **Coming Soon Theme Accent:**
    - Top header and bottom footer buttons converted from green to brand blue (`rgba(76, 141, 255, 0.14)` border `rgba(76, 141, 255, 0.45)`, hover `#4C8DFF`).
  - **Centered QR-Code & "Filter Studio for iOS":**
    - Centered `.live-qr`, QR placeholder (84×84px), and its caption "Filter Studio for iOS" relative to each other and their card column.
  - **Features Section Expanded (8 Items):**
    - Updated from 6 to 8 items matching all 8 App Store screenshots:
      1. Filters with Live Preview (`feat-1` / `p1`)
      2. Crop, Rotate & Mirror (`feat-2` / `p2`)
      3. Your Watermark, Your Colour (`feat-3` / `p3`)
      4. Every Edit is a Version (`feat-4` / `p4`)
      5. Photos & Collections (`feat-5` / `p5`)
      6. Full Photo View & EXIF (`feat-6` / `p6`)
      7. Dark & Light Theme (`feat-7` / `p7`)
      8. Interactive Widgets (`feat-8` / `p8`)
    - All 8 items fully localized across all 6 languages (`en`, `ru`, `fr`, `de`, `es`, `it`).
    - Added dedicated canvas slides for `feat-7` and `feat-8`, updated `feat-5` and `feat-6`.
  - **Screens Section Fixes:**
    - Corrected item 08 across Duo, iPhone, iPad (`duo-8`, `iphone-8`, `pad-8`) to "Interactive Widgets" (`Duo · Widgets`, `iPhone · Widgets`, `iPad · Widgets`).
    - Updated canvas slide captions for all 3 device tiers to "Interactive Widgets / Desktop & Lock Screen widgets".
  - **Privacy Policy Verbatim Alignment:**
    - Cleaned up 13 accordion sections in `#panel-privacy` of `index.html` to strictly match `Marketing/Website-Privacy-Support.md`.
    - Removed non-applicable StoreKit 2 references (no in-app purchases).
  - **Support Form:**
    - Form is fully active with Web3Forms key `fd738668-d5b4-41fa-b85c-35eb8d8c4a18`, spam honeypot (`botcheck`), background AJAX submission, and bilingual inline status feedback.
  - **Overview Guide & Videos:**
    - 20 steps match `Marketing/Onboarding.md`. Direct `<video>` playback with natural aspect ratios and zero distortion.

## Working Branch & Git State
- Working Tree: `/Users/hakobghlijyan/Library/Mobile Documents/com~apple~CloudDocs/Developer/GitHub/HakobGhlijyan.github.io`
- Branch: `dev/FeaturesUpdateAndAddNewFilterStudio`
