# Session Handoff

## Current Status
- Репозиторий полностью переведен на эталонный дизайн **StackCraft** (`2162_stackcraft`).
- Фотография профиля в секции About обновлена на `assets/profile.jpg`.
- В секции Projects расширен каталог до **6 проектов** (все карточки в режиме `scale-to-fill`):
  1. **Balance Cleaner**: ссылка на рабочий сайт `https://hakobghlijyan.github.io/BalanceCleaner/`.
  2. **Nightwell**: переход на `projects/nightwell.html` (шаблон Split Index с разделами Work, About, Support, Privacy).
  3. **Project 03**: переход на `projects/project-3.html`.
  4. **Project 04**: переход на `projects/project-4.html`.
  5. **Project 05**: переход на `projects/project-5.html`.
  6. **Project 06**: переход на `projects/project-6.html`.
- В хронологию достижений (Experience) добавлена актуальная позиция:
  - `June 2026 — Present`: **Independent iOS Developer & Creator** (Balance Cleaner, Nightwell).
  - `November 2023 — June 2026`: **CDEK (СДЭК)**.
- В шаблон Split Index для отдельных приложений (`projects/nightwell.html` и др.) добавлены вкладки **Support** и **Privacy** по стандартам Apple App Store и структуре сайта Balance Cleaner.
- В каталог `images/Night Welll - Screens iOS + WatchOS/` добавлены оригинальные промо-скриншоты приложения Nightwell.

## Working Branch
`dev/FeaturesNewSiteDevelop`

## Decisions Made
1. **Сетка из 6 карточек**: Карточки 5 и 6 гармонично сбалансированы в двухколончатой сетке как горизонтальные плашки (по аналогии с карточками 2 и 3) с адаптивным переходом в один столбец на мобильных экранах.
2. **Разделы Support и Privacy в Split Index**: Реализованы отдельные панели `#panel-contact` и `#panel-privacy` с контекстными фоновыми изображениями на canvas, отражающие нативную специфику (On-device processing, отсутствие трекеров, поддержка StoreKit 2).
3. **Хронология карьеры**: Выстроена логическая цепочка: от корпоративного энтерпрайз-опыта в CDEK к разработке собственных независимых приложений (Balance Cleaner, Nightwell).

## Next Steps
1. Согласовать подключение промо-скриншотов из `images/Night Welll - Screens iOS + WatchOS/` к карточкам и слайдам Nightwell.
2. По указанию пользователя доработать тексты и метаданные конкретных страниц проектов.
