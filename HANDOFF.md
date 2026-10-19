# Session Handoff

## Current Status
- Все промо-материалы проекта **Nightwell** переведены на прозрачные **PNG**:
  - Всего зарегистрировано и подключено **32 скриншота**:
    - **Duo (10 штук)**: D01–D10 (`duo1..10ai-store-black.png`)
    - **iPhone (9 штук)**: M01–M09 (`p1..9ai-store-black.png`)
    - **iPad (8 штук)**: P01–P08 (`pad1..8ai-store-black.png`)
    - **Apple Watch (5 штук)**: W01–W05 (`w1..5.png`)
  - Во вкладке **Screenshots** теперь выводятся все скриншоты по фильтрам (All, Duo, iPhone, Watch, iPad), а не один watch, как было ранее.
  - В интерактивном холсте канвы (Canvas) фон переведен на чистый белый `#FFFFFF`, устранен конфликт с синим фоном, а подписи настроены на контрастный темный текст с градиентной подложкой.
  - Устранены все плейсхолдеры:
    - Заголовок и бренд: `Nightwell` (вместо `{{APP_NAME}}`)
    - Домен: `hakobghlijyan.github.io`
    - Email для Support и Privacy: `hakobghlijyan@gmail.com`
    - Год и дата обновления: `2026`, `October 2026`
- Проект **Balance Cleaner** полностью интегрирован в `BalanceCleaner/` и его превью-изображение в портфолио обновлено пользователем.
- Ветка `dev/FeaturesNewSiteDevelop` находится в актуальном, чистом состоянии со всеми закоммиченными изменениями.

## Working Branch
`dev/FeaturesNewSiteDevelop`

## Decisions Made
1. **White Canvas Aesthetic for Nightwell**: Вся цветовая схема Nightwell адаптирована под чистый белый фон (`#FFFFFF`), что делает прозрачные PNG-изображения устройств (iPhone, iPad, Apple Watch) безупречно интегрированными без цветных рамок или артефактов.
2. **Dynamic Slide Key Mapping**: В `Nightwell/js/split-script.js` внедрена поддержка строковых ключей слайдов (`data-slide="watch-3"`, `data-slide="duo-1"`), что гарантирует надежное связывание любого количества экранов в галерее.

## Next Steps
1. Пользователь проверяет обновленную галерею Nightwell через локальный предпросмотр.
2. Создание новой ветки («Модуль 3») для следующего этапа задач после слияния текущей ветки.
