# Portfolio Project Site — Template Guide

> **Golden Master:** `FilterStudio/` (night navy palette). All new project sites must match its structure, JS patterns, and CSS tokens.

Данное руководство описывает архитектуру и шаги развертывания нового мобильного лендинга на базе эталонного шаблона `Project-Template/`.

---

## 1. Архитектура шаблона

### Layout (`.split-layout`)
- **Левая колонка (`.content-side`, 44vw)**: навигационные панели `#panel-features`, `#panel-screens`, `#panel-guide`, `#panel-about`, `#panel-support`, `#panel-privacy`.
- **Правый холст (`.canvas-side`, 56vw)**: динамический интерактивный предпросмотр — `.canvas-image[data-slide]`, `.canvas-caption`, `.canvas-context[data-context]`.
- На планшетах (≤ 1100px): вертикальный стек, табы → бургер-меню.
- На мобильных (≤ 640px): бренд + `← Portfolio` в верхней строке, все табы — в бургер-оверлей.

### Стилизация (`assets/split-style.css`)
- `html { font-size: 15px; }` — стандарт всех трёх главных сайтов.
- CSS-токены: `--bg`, `--surface`, `--surface-card`, `--line`, `--line-strong`, `--accent`, `--soft`, `--deep`.
- Шрифты: `Playfair Display` (заголовки, `--font-serif`), `Instrument Sans` (интерфейс, `--font-sans`), `DM Mono` (теги/метки, `--font-mono`).
- Нейтральная палитра `Project-Template`: slate grey `#94A3B8`, `#CBD5E1`, dark pedestal `#0B0F17`.
- QR-код: **72px × 72px + `min-width: 72px`** — не менять без причины.

### Интерактивная логика (`assets/main.js`)
- Переключение вкладок: `switchPanel(target)` через `data-nav`.
- Синхронизация холста: `setupInteractivePreview()` (hover + click → `data-slide`).
- Фильтрация галереи: `setupModelFilter()`.
- Видеоплееры: `setupVideoPlayers()` (play/pause по клику, автостоп при смене слайда).
- Локализация: встроенный словарь (минимум `en`, `ru`) с сохранением в `localStorage`.

### Hamburger Menu (обязательный стандарт — не менять)
```html
<!-- В <header>: -->
<button id="navBurger" class="hamburger-btn" aria-label="Open menu">☰</button>

<!-- Оверлей (сразу после <header> или внутри него): -->
<nav class="mobile-nav-overlay" role="dialog" aria-modal="true">
  <button id="navClose" class="nav-close-btn" aria-label="Close menu">✕</button>
  <!-- ссылки на панели и App Store -->
</nav>
```
```js
function setMenu(open) {
  document.body.classList.toggle('menu-open', open);
}
document.getElementById('navBurger').addEventListener('click', () => setMenu(true));
document.getElementById('navClose').addEventListener('click', () => setMenu(false));
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
```
> **Важно:** `id="navBurger"` / `id="navClose"` / `setMenu()` / `body.menu-open` — единый стандарт всех сайтов экосистемы. Не переименовывать.

### Форма обратной связи (`assets/contact-form.js` или инлайн)
- Web3Forms AJAX `fetch` без перезагрузки.
- Honeypot: `<input type="checkbox" name="botcheck" style="display:none">`.
- Индивидуальный `access_key` для каждого нового проекта.

---

## 2. Разделы лендинга

| Вкладка | Panel ID | Описание |
|---|---|---|
| Features | `#panel-features` | Live card (иконка + описание + QR 72px справа) + 6–8 интерактивных модулей |
| Screens | `#panel-screens` | Фильтры по устройствам + галерея скриншотов |
| Overview / Guide | `#panel-guide` | Онбординг (карточки шагов STEP N + опционально видео-тур) |
| About | `#panel-about` | Философия, 3 столпа концепции, архитектурные метрики |
| Support | `#panel-support` | Форма Web3Forms + 4 стартовых шага + FAQ аккордеоны (закрыты по умолчанию) |
| Privacy | `#panel-privacy` | 13 разделов политики приватности в аккордеонах `<details>` (закрыты по умолчанию) |

> **Аккордеоны:** никогда не ставить атрибут `open` на `<details>` в Support/Privacy. Всё закрыто при загрузке.

---

## 3. Правый холст (Canvas)

- **Пустой при загрузке**: placeholder-иконка с пунктирной рамкой. Текст: «Hover over an item to inspect».
- **Hover → показ**: `mouseover` на `.interactive-link` активирует соответствующий `data-slide`.
- **Mouseleave → сброс**: уход мыши с панели возвращает холст в чистое состояние.
- **Плейсхолдер для новых проектов**: вместо отсутствующих скриншотов использовать:
  ```html
  <div class="canvas-demo-rect"></div>
  ```
  CSS: нейтральный серый прямоугольник, честно показывающий «здесь будет изображение». Без битых `<img>`.

---

## 4. Создание нового проекта за 10 шагов

1. **Скопировать** `Project-Template/` в новую директорию (например `AppName/` или `Project-N/`).
2. **`index.html`**: заменить название приложения, описания, `<title>`, `og:url`, `canonical` ссылку.
3. **`assets/split-style.css`**: адаптировать акцентный цвет (`--accent`, `--line-strong`). Оставить `font-size: 15px` и `--font-serif/sans/mono`.
4. **Иконка**: поместить `x1024.png` / `x1024_light.svg` в `assets/icons/`. Обновить `src` в `<header>`.
5. **App Store badge**: скопировать `app-store-badge.svg` из любого существующего сайта или из `assets/`.
6. **QR**: добавить `qr-code.png` (рекомендуется 400×400 на прозрачном фоне). Отображается в `.live-qr` как 72×72. До релиза — чёрный прямоугольник-плейсхолдер.
7. **Скриншоты**: наполнить `images/` (Duo, iPhone, iPad, Onboarding). До готовности — использовать `canvas-demo-rect`.
8. **`assets/main.js`**: настроить тексты словарей (`en`, `ru`, ...), `data-slide` для каждого скриншота, тексты FAQ и Privacy (13 разделов).
9. **Web3Forms**: вставить уникальный `access_key` в `<input type="hidden" name="access_key" value="...">`.
10. **root `index.html`**: добавить карточку нового проекта в секции `#apps`, `#projects` и `footer`.

---

## 5. Чеклист ассетов

| Файл | Обязательно | Примечание |
|---|---|---|
| `index.html` | ✅ | Основной лендинг |
| `assets/split-style.css` | ✅ | Дизайн-токены и стили |
| `assets/main.js` | ✅ | Интерактивность, локализация |
| `assets/icons/x1024.png` | ✅ | Иконка приложения (squircle) |
| `assets/icons/x1024_light.svg` | ⬜ | Монохромная версия для хедера |
| `assets/app-store-badge.svg` | ✅ | Официальный бейдж Apple |
| `assets/icons/qr-code.png` | ⬜ | QR для App Store (после релиза) |
| `images/` | ✅ | Скриншоты (или `canvas-demo-rect` до готовности) |
| `privacy/index.html` | ⬜ | Автономная страница для App Store Connect |
| `support/index.html` | ⬜ | Автономная страница для App Store Connect |

---

## 6. CSS-токены нейтрального серого шаблона (Project-Template)

```css
:root {
  --bg:            #0B0F17;
  --surface:       #111827;
  --surface-card:  #1A2233;
  --line:          rgba(148, 163, 184, 0.15);
  --line-strong:   rgba(148, 163, 184, 0.35);
  --accent:        #94A3B8;
  --accent-bright: #CBD5E1;
  --soft:          rgba(148, 163, 184, 0.08);
  --deep:          rgba(0, 0, 0, 0.5);
  --canvas-card-bg:#111827;
  --canvas-card-border: rgba(148, 163, 184, 0.3);

  --font-serif: 'Playfair Display', serif;
  --font-sans:  'Instrument Sans', sans-serif;
  --font-mono:  'DM Mono', monospace;
}
html { font-size: 15px; }
```

> Для нового продукта: переопределить `--accent` / `--line-strong` / `--canvas-card-border` под бренд-цвет приложения. Остальное — оставить.

---

## 7. Обновление этого файла

Обновляйте `TEMPLATE.md` при:
- Добавлении нового паттерна в любой из сайтов экосистемы.
- Изменении стандартного значения (QR-размер, font-size, hamburger IDs).
- Добавлении новой обязательной вкладки или секции.
- Изменении стандарта именования ассетов.
