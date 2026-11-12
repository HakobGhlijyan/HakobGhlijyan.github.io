# Шаблон веб-сайта проекта (CentSweep-Grade Split Screen Template)

Данное руководство описывает архитектуру и шаги развертывания новых мобильных лендингов на базе эталонного интерактивного шаблона `Project-Template` (архитектура CentSweep).

---

## 1. Архитектура шаблона

- **Интерактивный двухпанельный сплит (`.split-layout`)**:
  - **Левая колонка (`.content-side`)**: навигационные панели `#panel-features`, `#panel-screens`, `#panel-guide`, `#panel-about`, `#panel-support`, `#panel-privacy`.
  - **Правый холст (`.canvas-side`)**: динамический интерактивный предпросмотр (`.canvas-image[data-slide]`, `.canvas-caption`, `.canvas-context[data-context]`).
- **Стилизация (`assets/split-style.css`)**:
  - Токены `--bg`, `--surface`, `--surface-card`, `--line`, `--line-strong`, `--green` (акцент), `--soft`, `--deep`.
  - Типографика: `Playfair Display` (заголовки), `Instrument Sans` (основной интерфейс), `DM Mono` (теги, номера шагов и метки).
  - Теплый песочный постамент под карточки мокапов (`--canvas-card-bg`).
- **Интерактивная логика (`assets/main.js`)**:
  - Бесшовное переключение вкладок через `data-nav` (`switchPanel(target)`).
  - Мгновенная синхронизация холста при наведении и клике (`setupInteractivePreview()`).
  - Фильтрация галереи скриншотов по устройствам через пилюли (`setupModelFilter()`).
  - Интерактивные видеоплееры в мокапах iPhone / iPad (`setupVideoPlayers()`).
  - Встроенный 7-язычный словарь (`en`, `ru`, `fr`, `de`, `es`, `it`, `hy`) с сохранением в `localStorage`.
- **Форма обратной связи (`assets/contact-form.js`)**:
  - Отправка через Web3Forms без перезагрузки страницы (AJAX `fetch`).
  - Защита от спама через скрытый honeypot `botcheck`.
  - Прямая привязка индивидуального `access_key` в разметке `<form>`.

---

## 2. Разделы лендинга

1. **Header**: монохромная иконка, ссылка `← Portfolio`, навигация (Features, Screens, Overview, About, Support, Privacy), кнопка App Store / Coming Soon, переключатель языков, мобильное гамбургер-меню.
2. **Features (`#panel-features`)**: карточка статуса релиза / Live card + 6 интерактивных модулей возможностей с отображением на холсте.
3. **Screens (`#panel-screens`)**: фильтры `All`, `Cover`, `Duo`, `iPhone`, `iPad`, `Videos` + галерея экранов.
4. **Guide / Overview (`#panel-guide`)**: интерактивный онбординг (карточки шагов с бейджами `STEP N` и видео-туром).
5. **About (`#panel-about`)**: философия, 3 столпа концепции, архитектурные плашки и метрики (100% On-Device, 0 Trackers).
6. **Support (`#panel-support`)**: карточка связи, форма Web3Forms, 4 стартовых шага и 7 FAQ аккордеонов.
7. **Privacy (`#panel-privacy`)**: подробная политика приватности из 13 структурированных разделов.
8. **Footer**: копирайты разработчика и ссылки на приватность и поддержку.

---

## 3. Создание нового проекта за 8 шагов

1. Скопируйте папку `Project-Template/` в новую директорию (например, `Project-N/` или `AppName/`).
2. В `index.html` замените название приложения, описания и путь в канонической ссылке.
3. В `assets/split-style.css` при необходимости адаптируйте акцентные цвета (`--green`, `--bg`, `--line-strong`).
4. Поместите иконку приложения (`assets/icons/`) и бейдж (`assets/app-store-badge.svg`).
5. Заполните папку `images/` скриншотами (Duo, iPhone, iPad, Onboarding).
6. В `assets/main.js` настройте тексты словарей для нужных языков.
7. Вставьте ваш персональный ключ Web3Forms в `<input type="hidden" name="access_key" value="...">`.
8. Добавьте карточку нового проекта в корневой `index.html` в секции `#apps`, `#projects` и футер.
