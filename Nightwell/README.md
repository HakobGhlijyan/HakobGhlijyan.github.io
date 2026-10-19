# Nightwell — App Store Connect Web Presence / Веб-сайт приложения

Bilingual guide for the Nightwell marketing, support, and privacy static showcase.  
Двуязычная инструкция по структуре и конфигурации сайта Nightwell для App Store Connect.

---

## 1. App Store Connect URLs / Ссылки для App Store Connect

When submitting Nightwell to App Store Connect, specify these URLs:  
При отправке приложения в App Store Connect используйте следующие ссылки:

- **Marketing URL / Маркетинговый URL**:  
  `https://hakobghlijyan.github.io/Nightwell/`
- **Support URL / URL поддержки**:  
  `https://hakobghlijyan.github.io/Nightwell/#support`
- **Privacy Policy URL / URL политики конфиденциальности**:  
  `https://hakobghlijyan.github.io/Nightwell/#privacy`

---

## 2. Configuration Placeholders / Токены и плейсхолдеры для замены

In `Nightwell/index.html`, the following placeholders are strictly defined according to the App Store Connect design brief:  
В файле `Nightwell/index.html` используются следующие плейсхолдеры:

| Placeholder / Токен | Purpose / Назначение | Default / Пример |
| :--- | :--- | :--- |
| `{{APP_NAME}}` | Official application name / Название приложения | `Nightwell` |
| `{{SIRI_APP_NAME}}` | Siri voice trigger name / Название для команд Siri | `Night Well` |
| `{{DOMAIN}}` | Website domain / Домен сайта | `hakobghlijyan.github.io` |
| `{{SUPPORT_EMAIL}}` | Contact email for user inquiries / Почта поддержки | `support@nightwell.app` *(или ваша личная почта)* |
| `{{APP_STORE_URL}}` | Direct App Store download link / Ссылка на скачивание в App Store | *Оставить пустым до релиза — отображается плашка «Coming soon to the App Store»* |
| `{{PRICE_TEXT}}` | Business model & pricing / Модель монетизации | `Free to download with optional Pro features` |
| `{{YEAR}}` | Current copyright year / Текущий год | `2026` |
| `{{LAST_UPDATED}}` | Privacy policy effective date / Дата обновления политики | `October 2026` |

---

## 3. Strict Architectural Rules / Архитектурные правила

1. **Zero Tracking / Абсолютная приватность**:
   - No Google Analytics, no tracking cookies, no pixels.
   - All fonts and assets are 100% self-hosted; no external CDNs.
   - No cookie consent banner is needed because zero user data is tracked.
2. **Apple HealthKit & On-Device Storage**:
   - HealthKit sleep analysis is strictly read-only and requested on demand.
   - All soundscapes and circadian metrics are processed locally via `AVAudioEngine` and native iOS frameworks.
3. **Responsive Visual Canvas**:
   - Device screenshots (Duo, iPhone, iPad, Apple Watch) render with `object-fit: contain` on a deep navy canvas (`#00112A`), ensuring uncropped fidelity.
