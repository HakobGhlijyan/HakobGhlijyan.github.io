# Session Handoff

## Current Status
- Репозиторий переведен на базу эталонного шаблона **StackCraft** (`2162_stackcraft`).
- Старые неиспользуемые страницы Bootstrap (`contact.html`, `resume.html`, `projects.html`, старые CSS/JS и assets) удалены.
- Все персональные данные и опыт обновлены на основе актуального резюме Акоба Клиджяна (5+ лет в iOS, CDEK, FinKeeper, SmartHome Keys).
- Фотографии профиля (`assets/avatar-mini.png` и `assets/profile.png`) бережно сохранены и внедрены в навигацию и секцию About.
- Hero-секция оформлена под iOS: блок кода переписан на Swift (`Developer.swift` со Swift Concurrency).
- Добавлена активная контактная форма и прямые ссылки на Telegram, LinkedIn, GitHub и Email.
- Структурированы и документированы файлы `index.html`, `css/style.css`, `js/main.js` в стиле Apple (`// MARK: -`).

## Working Branch
`dev/FeaturesNewSiteDevelop`

## Decisions Made
1. **Дизайн-система**: Использована цветовая гамма и шрифты StackCraft (`Cormorant Garamond` + `Outfit` + `#c9a96e` акцент).
2. **Шапка / Хедер**: Включен круглый аватар профиля, имя `Hakob Ghlijyan` и подзаголовок `Clean Code · iOS`.
3. **Секция Projects**: Оставлена сетка из 4 проектов в качестве базы; готова к расширению/замене на секцию из других примеров по указанию пользователя.
4. **Секция Experience**: Заполнена тремя коммерческими ролями (CDEK, FinKeeper, SmartHome Keys).
5. **Секция Skills**: Адаптирована под стек iOS (Swift, SwiftUI, UIKit, Combine, Concurrency, Core Data, Clean Architecture, Instruments).

## Next Steps
1. Получить обратную связь пользователя по отображению сайта и секций.
2. По указанию пользователя внедрить дополнительную секцию из выбранного шаблона (`Reference Examples Site/`).
3. При необходимости настроить кастомную отправку формы через бэкенд / Formspree / EmailJS.
