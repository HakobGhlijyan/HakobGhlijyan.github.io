# План для ИИ-агента: сайт Filter Studio на базе шаблона Nightwell / CentSweep
# Plan for the AI agent: build the Filter Studio site from the Nightwell / CentSweep template

> **Кому:** ИИ-агент (Gemini в Antigravity), работает в репозитории `HakobGhlijyan/HakobGhlijyan.github.io` (GitHub Pages, статический сайт: `index.html`, `css/`, `js/`, `assets/`, `images/`; папки проектов `CentSweep/`, `Nightwell/`, `Project-3/` … `Project-6/`; в корне `HANDOFF.md`, `Journal.md`).
> **Задача в двух частях, строго по порядку:** (A) сделать **общий проработанный шаблон** проекта и разложить его в `Project-3 … Project-6`; (B) только потом заполнить **`Project-3` как Filter Studio**.
> **Что нельзя:** трогать `CentSweep/`, `Nightwell/`, `Reference Examples Site/` и главную `index.html` (кроме добавления карточки Filter Studio в портфолио — см. шаг B9). Не ломать существующие ссылки. Ничего не выдумывать: тексты берутся из файлов-источников ниже; если текста нет — оставь явный плейсхолдер `{{…}}` и перечисли такие места в отчёте.

---

## 0. Источники правды (всё лежит рядом, в `Marketing/` и в корне проекта приложения)
| Файл | Что внутри |
|---|---|
| `AppStore-Listing.md` | название, подзаголовок, promo, keywords, описание — 6 языков; чек-лист полей App Store Connect |
| `Website-Texts.md` | тексты онбординга и «Как это работает» — 6 языков (источник для блока **Guide/Overview**) |
| `Website-Privacy-Support.md` | **Privacy (13 разделов)**, **Support** (контакт, 4 шага, 7 вопросов) — 6 языков |
| `AppStore-Screenshots-Plan.md` | 7 кадров стора + подписи 6 языков + тексты Hero/About/статистики |
| скриншоты `assets/…` | 20 кадров онбординга (Guide) + 7 кадров стора × 3 набора (iPhone / iPad / Duo) — их положит владелец |

Языки: **en, ru, fr, es, it, de** (6, как в приложении). У CentSweep есть ещё армянский (`hy`) — для Filter Studio **не нужен**, но структура i18n должна позволять добавить язык одним файлом.

---

## ЧАСТЬ A — Шаблон (делается первым)

### A1. Аудит эталонов (только чтение)
1. Открой `Nightwell/` и `CentSweep/` (локально и по ссылкам `https://hakobghlijyan.github.io/Nightwell/`, `…/CentSweep/`). Зафиксируй в `Journal.md`: список секций, id якорей, как устроен переключатель языков, как подключены шрифты, как строится галерея и карусель, как работает форма.
2. Основа — **структура Nightwell** (она новее и чище). Из CentSweep возьми **только** раздел **Guide/Overview** (пошаговый показ с большим набором кадров) — у Nightwell его нет, а для Filter Studio он нужен (20 кадров онбординга).
3. Построй таблицу «что общее / что специфично для приложения». Всё специфичное (названия, цвета, тексты, кадры, список функций, раздел Privacy/Support) выносится в переменные и данные.

### A2. Структура шаблона (одна на все проекты)
Секции в порядке на странице (якоря в скобках):
1. **Header/nav**: логотип проекта → `#work`; «← Portfolio»; ссылки **Features, Screens, Guide, About, Support, Privacy**; кнопка App Store; переключатель языка (6); мобильное меню с ×.
2. **Hero**: заголовок «`{{APP_NAME}}` for iPhone & iPad», строка совместимости, иконка, баннер «Now available on the App Store», бейдж App Store, **QR-код** «Scan to download».
3. **Features (`#work`)**: **6 модулей**, у каждого заголовок, короткий тег, 1–2 строки описания; hover-подсказка «Hover module to inspect» (на тач-устройствах — раскрытие по тапу).
4. **Screens (`#screens`)**: «Full Device Gallery», фильтры **All · Duo · iPhone · iPad** (+ Guide не здесь), нумерованные элементы, лайтбокс с листанием и подписью «Заголовок / подпись · `{{APP_NAME}}`».
5. **Guide / Overview (`#guide`)**: пошаговый обзор приложения — до 20 кадров с подписями (из онбординга), навигация стрелками/свайпом, счётчик «5 / 20».
6. **About (`#about`)**: заголовок, 3 цифры-статистики, подпись разработчика, метка «Customer Support».
7. **Support (`#support`)**: «How can we help?», прямой e-mail, форма (Name, Email for the reply, Message, «Send message →»), «Getting started (4 steps)», **7 FAQ** (аккордеон).
8. **Privacy (`#privacy`)**: заголовок + **13 нумерованных разделов**.
9. **Showcase carousel**: повтор лучших кадров с подписями + плашки «Private by design» и «Support».
10. **Footer**: © 2026 Hakob Ghlijyan, строка о приложении, ссылки Portfolio / Privacy / Support, уведомление о товарных знаках Apple.

### A3. Технические требования к шаблону
- **Чистый статический HTML/CSS/JS** (как в репозитории), **без сборщиков и фреймворков**, без внешних зависимостей, кроме шрифтов Google Fonts (если они уже используются; их упоминание — в разделе Privacy «This website»).
- **Данные отдельно от разметки:**
  - `Project-N/config.js` — единственный файл с переменными проекта: `APP_NAME`, `TAGLINE`, `BUNDLE_ID`, `APP_STORE_URL`, `APP_STORE_ID`, `SUPPORT_EMAIL`, `PLATFORMS`, цвета (CSS-переменные), список модулей, список кадров, цифры About.
  - `Project-N/i18n/{en,ru,fr,es,it,de}.json` — все тексты страницы (ключи одинаковы во всех языках; нет ключа — fallback на `en`).
  - Язык: из `localStorage` → `?lang=` → `navigator.language` → `en`. `<html lang>` и `hreflang`-ссылки обновляются.
- **Дизайн-токены** в `css/tokens.css` проекта: `--bg`, `--surface`, `--surface-2`, `--text`, `--text-dim`, `--accent`, `--accent-2`, `--glow`, `--radius`, `--shadow`. Смена палитры = смена токенов, больше ничего.
- **Адаптивность:** 360 px → 1920 px, без горизонтальной прокрутки; галерея — CSS grid; меню — бургер.
- **Доступность:** семантические теги, `alt` у всех картинок, видимый фокус, контраст ≥ 4.5:1, `prefers-reduced-motion` отключает анимации, лайтбокс управляется клавиатурой (←, →, Esc).
- **Производительность:** изображения в WebP/PNG с `loading="lazy"`, явные `width/height`; миниатюры для галереи, полноразмер — в лайтбоксе; Lighthouse ≥ 90 (Performance/Accessibility/SEO).
- **Маркетинг-инструменты в каждом проекте:** `<meta name="apple-itunes-app" content="app-id={{APP_STORE_ID}}">` (Smart App Banner), Open Graph + Twitter Card (картинка 1200×630), `favicon` + `apple-touch-icon`, `theme-color`, JSON-LD `SoftwareApplication`, `sitemap.xml`, `robots.txt`, QR-код (генерируется заранее в SVG и кладётся в `assets/qr.svg`), канонические ссылки и `hreflang`.
- **Форма:** повтори существующую реализацию из Nightwell (не придумывай бэкенд). Если там `mailto:` — оставь `mailto:`; если сторонний сервис — оставь тот же и пометь в отчёте.

### A4. Раскладка шаблона по проектам
1. Создай `Project-Template/` (рабочий образец с демо-данными и плейсхолдерами `{{…}}`) — он служит «золотым образцом».
2. Скопируй его в `Project-3/`, `Project-4/`, `Project-5/`, `Project-6/` (замени только `config.js` на заглушки с разными названиями `Project 3…6` и разными заглушечными акцентами). **Каждая копия должна открываться без ошибок в консоли.**
3. Добавь в корень `TEMPLATE.md`: как создать новый проект из шаблона за 10 шагов (какие файлы менять, где лежат кадры, как добавить язык, как проверить).
4. Сверься с чек-листом A5 и запиши результат в `Journal.md`. **Только после этого — Часть B.**

### A5. Приёмка шаблона
- [ ] 4 копии открываются локально (`python3 -m http.server`) без ошибок консоли
- [ ] Переключение 6 языков работает, нет «голых» ключей на экране
- [ ] Меняя `config.js` + токены, получаешь другой проект без правок HTML
- [ ] Галерея: фильтры, лайтбокс, клавиатура, свайп на мобильном
- [ ] Guide: счётчик, навигация, ленивая загрузка
- [ ] Бургер-меню, якоря, плавная прокрутка, «← Portfolio»
- [ ] Lighthouse ≥ 90; нет горизонтальной прокрутки на 360 px
- [ ] `CentSweep/` и `Nightwell/` не изменены (`git diff` по этим папкам пуст)

---

## ЧАСТЬ B — Filter Studio в `Project-3`

### B1. Идентичность
- **APP_NAME:** Filter Studio · **Платформы:** iPhone & iPad · **iOS 18+** · **Bundle ID:** `com.hakobghlijyan.FilterStudioApp`
- **Тег:** `Photo filters & editor` (подзаголовок стора) · **Разработчик:** Hakob Ghlijyan
- **Ссылки (плейсхолдеры, пока нет страницы в сторе):** `{{APP_STORE_URL}}`, `{{APP_STORE_ID}}`, `{{SUPPORT_EMAIL}}` — вынести в `config.js`.
- **Папка/URL:** оставить `Project-3/`. *Решение владельца до подачи в App Store Connect:* переименовать папку в `FilterStudio/` (красивее URL) — тогда **заранее** обновить все ссылки; адреса, которые пойдут в App Store Connect, должны быть финальными.

### B2. Палитра (жёлтый + синий)
Приложение: тёмная тема, акцент — пастельно-жёлтый. Сайт не должен выглядеть как зелёный CentSweep или синий Nightwell.
- `--bg: #070A12` (чёрно-синий), `--surface: #0F1524`, `--surface-2: #161E33`
- `--accent: #F6D743` (жёлтый), `--accent-2: #4C8DFF` (синий), `--text: #F4F6FB`, `--text-dim: #9AA6BF`
- Фон: тёмный с двумя размытыми «свечениями» — жёлтое сверху-слева и синее снизу-справа (radial-gradient, `--glow`), плюс тонкая зернистость/шум (CSS, 3–4% непрозрачности), чтобы фон не был плоским. Заголовки Hero: белый, ключевое слово — градиент жёлтый → синий.
- Кнопки: основной — жёлтая заливка, тёмный текст; вторичный — контур синий. Состояния hover/focus заметны.
- Проверь контраст пар «жёлтый на тёмном» и «белый на синем»; светлую тему не делаем (сайт всегда тёмный).

### B3. Шесть модулей Features
| # | Тег | Заголовок | Источник текста |
|---|---|---|---|
| 1 | Editor | Filters with live preview | кадр 1 + `AppStore-Listing.md` (раздел EDIT) |
| 2 | Crop | Crop, rotate, mirror | кадр 2 |
| 3 | Watermark | Your watermark, your colour | кадр 3 |
| 4 | Versions | Every edit is a version | кадр 4 |
| 5 | Library | Photos & Collections | кадр 5 |
| 6 | Ecosystem | iCloud, widget & insights | кадры 6–7 |
Заголовок + подзаголовок на 6 языках — из `AppStore-Screenshots-Plan.md` (таблицы). Описание 1–2 строки — из блоков EDIT/ORGANIZE/YOURS в `AppStore-Listing.md`. Не придумывай функции, которых нет в этих файлах.

### B4. Screens (`#screens`) и Guide (`#guide`)
- **Screens:** 7 кадров × 3 набора. Имена файлов: `assets/store/S01-iphone.png … S07-iphone.png`, `…-ipad.png`, `…-duo.png`. Фильтры: All · Duo · iPhone · iPad. Подпись в лайтбоксе — «заголовок / подзаголовок · Filter Studio» (6 языков).
- **Guide:** 20 кадров онбординга: `assets/guide/G01.png … G20.png`. Подписи — из `Website-Texts.md` (ключи `onboarding.*`, `help.*`); кадры без готовой подписи подпиши по смыслу кратко и **пометь в отчёте**. Пока файлов нет — генерируй плейсхолдеры (серый блок нужного размера с номером), чтобы шаблон был проверяем.

### B5. About / Support / Privacy
- **About:** заголовок и три цифры — из блока «Короткие тексты для блоков сайта» в `AppStore-Screenshots-Plan.md` (0 accounts · 0 trackers · 6 languages).
- **Support:** контакт, 4 шага, 7 вопросов — из `Website-Privacy-Support.md`; e-mail подставляется из `config.js`.
- **Privacy:** 13 разделов оттуда же; в разделе «This website» перечисли реально используемое сайтом (Google Fonts — если подключены; способ отправки формы). Дата редакции «Last updated: ГГГГ-ММ-ДД» — вывести автоматически из `config.js`.
- Дополнительно сделай **отдельные короткие страницы** `Project-3/privacy/index.html` и `Project-3/support/index.html` (это те же тексты, отображаются без остальной страницы) — их URL удобнее вставлять в App Store Connect (**Privacy Policy URL**, **Support URL**). Якоря `#privacy` / `#support` на главной остаются.

### B6. Мета и SEO
- `<title>`: «Filter Studio — Photo filters & editor for iPhone & iPad»; description — promo из `AppStore-Listing.md` (по языкам).
- OG-картинка 1200×630: иконка + название + кадр; JSON-LD `SoftwareApplication` (`operatingSystem: iOS 18+`, `applicationCategory: PhotographyApplication`, цена 0 — уточнить у владельца).
- Smart App Banner подключается, когда появится `{{APP_STORE_ID}}`.

### B7. Тексты, которые нельзя придумывать
Юридические формулировки Privacy, цену, App Store ID, e-mail, ссылки на соцсети. Все такие места — плейсхолдеры + список в отчёте.

### B8. Приёмка Filter Studio
- [ ] Все секции из A2 на месте и заполнены для 6 языков (нет `{{…}}`, кроме перечисленных в B7)
- [ ] 7 кадров × 3 набора в Screens (или плейсхолдеры с явной пометкой) и 20 кадров в Guide
- [ ] Палитра жёлтая + синяя, фон не плоский, контраст проверен
- [ ] Privacy: 13 разделов; Support: 4 шага + 7 FAQ; обе страницы открываются по прямым URL
- [ ] Lighthouse ≥ 90, нет ошибок консоли, mobile 360 px чисто
- [ ] `git diff` не трогает `CentSweep/`, `Nightwell/`, `Reference Examples Site/`
- [ ] В `Journal.md` и `HANDOFF.md` корня записано: что сделано, какие плейсхолдеры остались, финальные URL для App Store Connect

### B9. Портфолио
В `index.html` корня добавь **только** карточку проекта Filter Studio по образцу карточек CentSweep/Nightwell (иконка, название, тег, ссылка на `Project-3/`), не меняя остальное.

### B10. Финальные адреса для App Store Connect (заполнить в отчёте)
- Support URL: `https://hakobghlijyan.github.io/Project-3/support/`
- Privacy Policy URL: `https://hakobghlijyan.github.io/Project-3/privacy/`
- Marketing URL: `https://hakobghlijyan.github.io/Project-3/`
(если папка будет переименована — подставить новое имя и проверить, что все три адреса отвечают 200).

---

## ЧАСТЬ C — Отчёт агента (в конце)
1. Список созданных/изменённых файлов по папкам.
2. Что взято из Nightwell, что из CentSweep (Guide).
3. Список оставшихся плейсхолдеров и вопросов к владельцу.
4. Результаты чек-листов A5 и B8 (с отметками).
5. Как проверить локально: `python3 -m http.server 8000` в корне репозитория → `http://localhost:8000/Project-3/`.

## Стартовый промпт для агента
> Прочитай `Marketing/Website-Build-Plan-for-AI.md` целиком и выполняй Part A, затем Part B строго по порядку. Не меняй `CentSweep/`, `Nightwell/`, `Reference Examples Site/`. Тексты бери только из файлов-источников из раздела 0; нет текста — ставь `{{PLACEHOLDER}}` и перечисли в отчёте. После Part A остановись и покажи результат проверки A5, потом продолжай Part B. Фиксируй каждый шаг в `Journal.md`.
