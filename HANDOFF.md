# Session Handoff

## Current Status
- Репозиторий полностью переведен на эталонный дизайн **StackCraft** (`2162_stackcraft`).
- Все фотографии профиля бережно сохранены в `assets/` (`profile.jpg`, `avatar-mini.png`, `Hakob_profile+smallSize.png`).
- Для проекта **Nightwell** создана индивидуальная структура каталога:
  - `projects/nightwell/index.html` (интерактивный showcase с 4 панелями: Work, About, Support, Privacy).
  - `projects/nightwell/images/` (32 оригинальных промо-скриншота приложения для iPhone, iPad и Apple Watch).
  - Все скриншоты подключены к интерактивным слайдам превью.
  - Превью-карточка Nightwell на главной странице обновлена реальным скриншотом приложения.
- Ссылка в главной странице ведет на `projects/nightwell/`.
- Подготовлен подробный ответ по интеграции Balance Cleaner прямо в этот репозиторий (`BalanceCleaner/`).

## Working Branch
`dev/FeaturesNewSiteDevelop`

## Decisions Made
1. **Структура подпроектов**: Каждый отдельный проект получает собственную изолированную директорию (`projects/nightwell/` и т.д.) со своими промо-материалами и ссылкой возврата в главное портфолио.
2. **Интеграция Balance Cleaner**: Рекомендовано перенести сайт Balance Cleaner в папку `BalanceCleaner/` внутри текущего репозитория, что позволит сохранить URL `hakobghlijyan.github.io/BalanceCleaner/` и управлять всем сайтом из единой ветки.

## Next Steps
1. Дождаться подтверждения пользователя по переносу исходников Balance Cleaner в репозиторий.
2. При согласии скопировать код Balance Cleaner в папку `BalanceCleaner/` и добавить кнопку «Back to Portfolio».
