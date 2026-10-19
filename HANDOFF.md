# Session Handoff

## Current Status
- Главное портфолио работает на дизайн-системе **StackCraft** (`index.html`, `css/style.css`, `js/main.js`).
- Для **Nightwell** создан выделенный корневой каталог `Nightwell/`:
  - `Nightwell/index.html` — полноценный статический маркетинговый, саппорт и юридический сайт для App Store Connect.
  - Содержит 5 вкладок: **Features (Work)**, **Screenshots** (галерея с фильтрами Duo, iPhone, iPad, Watch), **About** (автор Акоб Клиджян, Swift/SwiftUI стек), **Support** (12 FAQ-аккордеонов, чек-лист, контакты), **Privacy** (13 разделов политики с нулевым трекингом и HealthKit on-device).
  - Скриншоты в правой канве настроены на `object-fit: contain` и фон `#00112A`, исключая обрезку и гарантируя точное отображение устройств.
  - Двуязычный переключатель **EN / RU** с запоминанием выбора в `localStorage`.
  - Все 32 промо-скриншота находятся в `Nightwell/images/`.
  - Создана подробная документация `Nightwell/README.md` со всеми токенами и ссылками для App Store Connect.
- Ссылка в карточке Nightwell на главной странице теперь ведет напрямую в корневой каталог `Nightwell/` (`hakobghlijyan.github.io/Nightwell/`).
- Старый маршрут `projects/nightwell.html` снабжен редиректом на `../Nightwell/`.

## Working Branch
`dev/FeaturesNewSiteDevelop`

## Decisions Made
1. **Корневая структура проектов для GitHub Pages**: Каждый проект размещается в персональном каталоге первого уровня в корне репозитория (`/Nightwell/`, `/BalanceCleaner/`), исключая промежуточную папку `/projects/` из публичных URL. Это дает чистые ссылки: `https://hakobghlijyan.github.io/Nightwell/` и `https://hakobghlijyan.github.io/BalanceCleaner/`.
2. **App Store Connect Compliance**: Сайт Nightwell полностью автономен, не использует внешние CDN и трекеры, не требует баннеров согласия на куки и удовлетворяет строгим требованиям Apple к Marketing, Support и Privacy URL.

## Next Steps
1. Дождаться добавления файлов проекта `BalanceCleaner` от пользователя в директорию проекта.
2. При получении файлов разместить их в корневой папке `BalanceCleaner/` и добавить кнопку быстрого возврата в главное портфолио (`../index.html`).
3. При необходимости актуализировать ссылки на остальные проекты (03–06) по мере их готовности.
