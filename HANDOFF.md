# Session Handoff

## Current Status
- **Nightwell UI & Gallery Fixes:**
  - Полностью устранён визуальный баг с утечкой текста `=== SCREENSHOT LIST ITEMS ===` и фоновыми наложениями. Правая канва теперь абсолютно чистая и отображает аккуратный пустой плейсхолдер при отсутствии наведения.
  - Все **32 скриншота** проанализированы через нативный Apple Vision OCR и получили точные названия, соответствующие экранам:
    - **iPhone (M01–M09):** 01 Start Sleep Session, 02 Active Night Tracking, 03 Morning Sleep Rating, 04 Sleep History & Records, 05 Sleep Analytics & Streaks, 06 Session Details & Factors, 07 Sleep Schedule & Bedtime, 08 Wake-Up Alarm & Permissions, 09 Appearance, Language & iCloud.
    - **iPad (P01–P08):** от Tonight Dashboard до Settings, iCloud Sync & Privacy.
    - **Apple Watch (W01–W05):** Bedside Night Clock, Start Sleep on Watch, Active Tracking, Sleep History, Settings & Color Customization.
    - **Duo (D01–D10):** полный цикл парных экранов iPhone + Watch.
  - Пикер фильтра устройств (`All`, `Duo`, `iPhone`, `Watch`, `iPad`) закреплён как фиксированный (`sticky`) элемент вверху панели.
  - Все полосы прокрутки во всех разделах (Галерея, О проекте, Поддержка, Приватность) скрыты (`scrollbar-width: none`), сохраняя плавную прокрутку колесом мыши и тачпадом.
  - Подключены шрифты `Instrument Sans`, `Playfair Display` и `DM Mono` — типографика разделов политики конфиденциальности и саппорта теперь полностью соответствует шапке сайта.
  - В разделе **About** установлена репрезентативная заглавная обложка `duo1ai-store-black.png`, в **Support** — экран настроек `pad8ai-store-black.png` (iCloud, HealthKit, экспорт данных), в **Privacy** — архитектура приватности `duo10ai-store-black.png`.
- **Контактная форма главного портфолио:**
  - Контактная форма в секции `#contact` на главной странице подключена к шлюзу **FormSubmit.co** (тот же боевой токен, что используется на Balance Cleaner).
  - Настроен асинхронный AJAX-обработчик: форма отправляет сообщение на почту `hakobghlijyan@gmail.com` без перезагрузки страницы, моментально показывая зеленую индикацию успешной отправки (`✓ Message Sent! Thank you.`) и очищая поля ввода.

## Working Branch
`dev/FeaturesNewSiteDevelop`

## Decisions Made
1. **Sticky Header Picker & Hidden Scrollbars**: Список скриншотов получил фиксированный верхний селектор категорий с прокруткой списка под ним и полным скрытием полосы прокрутки для премиального внешнего вида.
2. **Apple Vision OCR-Driven Metadata**: Названия всех экранов приведены в строгое соответствие с реальным интерфейсом приложения без выдуманных функций.
3. **Единый шлюз FormSubmit для сайта и портфолио**: Теперь посетители могут отправить сообщение прямо в почту разработчика как через сайт Balance Cleaner, так и через главное портфолио.
