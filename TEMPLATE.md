# Шаблон веб-сайта проекта (Project Template Guide)

Данное руководство описывает архитектуру и шаги развертывания новых мобильных лендингов на базе эталонного унифицированного шаблона `Project-Template`.

---

## 1. Архитектура шаблона

- **Zero-framework**: чистый статический HTML5, CSS3 и Vanilla JavaScript. Никаких сборщиков (Webpack/Vite) или внешних зависимостей.
- **Дизайн-токены (`css/tokens.css`)**:
  - `--bg`, `--surface`, `--surface-2`, `--line`
  - `--accent`, `--accent-2`, `--glow`
  - Шрифт: `Playfair Display` (заголовки), `Instrument Sans` (интерфейс), `DM Mono` (технические плашки и метки).
- **Конфигурация (`js/config.js`)**:
  - Единый файл параметров: название, Bundle ID, App Store ID, ссылки, email разработчика, статус релиза.
- **Интернационализация (`i18n/`)**:
  - Поддержка 6 языков: `en.json`, `ru.json`, `fr.json`, `es.json`, `it.json`, `de.json`.
- **Секции страницы**:
  1. Header / Navigation (с переключателем 6 языков и ссылкой `← Portfolio`).
  2. Hero (Live card с QR-кодом и бейджем App Store).
  3. Features (`#work` / `#features`) — 6 модулей возможностей.
  4. Screens (`#screens`) — галерея устройств с фильтрами All / Duo / iPhone / iPad и полноэкранным просмотром.
  5. Guide / Overview (`#guide`) — пошаговый обзор приложения с навигацией и счетчиком шагов.
  6. About (`#about`) — история продукта, архитектурные принципы и 3 ключевые метрики.
  7. Support (`#support`) — прямая форма Web3Forms (с honeypot botcheck), 4 стартовых шага и 7 FAQ аккордеонов.
  8. Privacy (`#privacy`) — политика приватности из 13 структурированных пунктов.
  9. Footer — копирайты и товарные знаки Apple Inc.

---

## 2. Создание нового проекта за 10 шагов

1. Скопируйте папку `Project-Template/` в новую папку (например, `Project-N/` или `MyCoolApp/`).
2. Откройте `Project-N/js/config.js` и заполните метаданные (`appName`, `tagline`, `bundleId`, `appStoreUrl`, `isLive`).
3. Настройте акцентные цвета в `Project-N/css/tokens.css` (`--accent`, `--accent-2`, `--bg`).
4. Поместите иконки приложения в `assets/icons/`:
   - `x512_light.svg` (монохромная для хедера)
   - `x512_squircle.svg` (для Live card баннера)
5. Поместите скриншоты в `images/`:
   - Стор-скриншоты: `images/iphone/`, `images/pad/`, `images/duo/`
   - Онбординг/руководство: `images/onboarding/`
6. Заполните переводы в `i18n/{en,ru,fr,es,it,de}.json`.
7. Если проект опубликован в App Store, переключите в `config.js` флаг `isLive: true` и укажите `appStoreId`.
8. Проверьте отправку формы обратной связи (укажите ваш Web3Forms `access_key`).
9. Запустите локальный сервер (`python3 -m http.server 8000`) и проверьте адаптивность и консоль браузера на отсутствие ошибок.
10. Добавьте карточку нового приложения в корень портфолио (`index.html`) в секции `#apps` и `#projects`.
