# PLAN — FilterStudio, Module12 → Module16 (+ журнал выполненного 09 → 12.0)

> Структура: **Часть A — план вперёд** (Module12 → 16), **Часть B — выполнено** (журнал модулей 09 → 12.0, без дублирования с A). Статус: рабочий. Основан на `AUDIT.md` (2026-10-22).
> Правила работы: каждый модуль = отдельная ветка `ModuleNN…` от предыдущей; внутри модуля задачи разбиты на **части (NN.k)**; **каждая часть заканчивается коммитом** с текстом из этого плана (финальный текст выдаётся при завершении части). После каждой части обновляются `HANDOFF.md` (перезапись) и `Journal.md` (дозапись), при смене стабильных фактов — Section 0 в `AGENTS.md`.
> Проверка: сборка и визуальная проверка — у вас в Xcode (у меня их нет). Я не пишу «собирается/работает», пока вы не подтвердили или я не запускал.

## 0. Решения (закрыто 2026-10-22)

| # | Решение |
|---|---|
| Q1 | Минимальная iOS = **18.0** (target и project ставите вы в Xcode). Одна ветка `TabView` с `Tab`, без ролей и `#available`. iOS 26 — только внутри `#available` с запасным вариантом. |
| Q2 | **Миграции нет**: приложение удаляется и ставится заново. 14.3-Б (мигратор) **отменён**. |
| Q3 | Просмотр: тап по фото → zoom-переход в просмотрщик; свайп влево/вправо листает; возврат по ID. 4-я кнопка = отдельный экран «Версии и параметры»; существующая кнопка редактирования открывает редактор с текущими настройками, а сохранение создаёт **новую версию, которая появляется в галерее как новое фото**. |
| Q4 | Info в Editor: минимальный popover по вашему примеру (`matchedTransitionSource` + `.navigationTransition(.zoom)`, `glassContainer`, capsule/circle, iOS 26 glass + запасной вариант). Делаем в 13.2. |
| Q5 | Границы Clean — только для нового кода (11–14), конкретные типы без протоколов. |
| Q6 | Swift 6 mode — в 10.3 отдельным коммитом. |
| Q7 | Коммиты сделаны, тестовый таргет добавлен. |
| Новое | Третья вкладка Settings vs две вкладки — **подтвердить** (вы писали про Settings раньше, в последнем сообщении «две вкладки»). Дизайн нижнего бара — позже, от вас. |
| 2026-10-29 | **Про iOS 18 на будущее:** сейчас держим iOS 18 (target < 26), но дизайн 18 и 26+ сильно различается, а каждый год добавляется новая версия. Как только минимальная iOS поднимется до 26 — удалить ветки `#available(iOS 26, *)` / `else` (первой — `InfoMenuButton`: ветка `else` с popover-«облачком»; затем запасные варианты в `PlaceNameResolver`, `WatermarkControlPanel` и др.) и перейти на API 26+ напрямую. Правило: новый код пишем с запасным вариантом для 18 только если он дешёвый; иначе — доступность с 26. |
| Новое | **Удаление**: у каждой версии свой файл; оригинал общий для корня и версий → удаляем файл оригинала, только когда удалена последняя строка, ссылающаяся на него (счётчик ссылок). |
| Новое | Поставка: каждый модуль выдаётся целиком, части подряд — все коммиты одним сообщением; перед модулем — «что и как». |

---

## Зависимости модулей

```
Module09 UI Stabilization ──┐
Module10 Pipeline/Concurrency ─┤→ Module11 Selection/Delete → Module12 Photos-style Viewer → Module13 Tabs/Settings
                             └──────────────────────────→ Module14 SwiftData & Storage Rework → Module15 Export/Photos → Module16 Release Hygiene
```
Чтобы не писать UI дважды (модули 11–12 идут **до** переработки модели), View работают через тонкий фасад `PhotoLibraryStore` (@MainActor @Observable): `delete(ids)`, `toggleFavorite(id)`, `versions(of:)`, `selection`. В модуле 14 меняется внутренность фасада, а View не трогаются.

---


## Дорожная карта после Module14 (уточнено 2026-10-29)
1. **Module14W — виджеты** (данные для виджетов, Counters / Recent / Trend, ссылки). В комплекте: цвет онбординга (акцент приложения вместо системного синего: ассет `AccentColor` + тема внутри `fullScreenCover`) и живой статус iCloud в Настройках (синхронизация перезапускается по изменению числа «ждущих» кадров, сохранение по одному элементу — счётчик меняется плавно).
2. **Module15 — экспорт**: «В Фото» (add-only, в т.ч. пакетно), Share файлом через `ShareLink` (ничего не теряется), проверка privacy manifest. _(Опция «убрать геолокацию» не делается — решение 2026-10-31: экспорт и шаринг сохраняют все данные.)_
3. **Module16 — гигиена релиза**: переводы новых строк на 6 языков, плюрали, Dynamic Type/VoiceOver, SwiftLint, логи, настройки проекта.
4. **Module16C — CloudKit углублённо**: статусы/ошибки, пауза = «На устройстве», тест на двух устройствах, Production-схема, TestFlight.
5. **Module17 — контент и релиз**: скриншоты, **онбординг (6+ шагов, подробные тексты на 6 языках, замена заглушек `OnboardingsScreen` реальными скриншотами)**, политика/Support/описание App Store, сверка приватности.

---

# ЧАСТЬ A — ПЛАН ВПЕРЁД

## Module12 — Photos-style Viewer  ✅ выдан 2026-10-25 → см. Часть B

---

## Module13 — Tabs, Settings, Collections & Accents  _(ветка `Module13TabsSettings`)_
Порядок вкладок: **Editor · Photos · Collections · Settings**. Сначала Settings (13.1), затем Collections встаёт перед ним (13.2).

### 13.1 Вкладка «Settings»
- Разделы: **Настройки** (размер сетки по умолчанию, сортировка, качество экспорта — `@AppStorage`), **Информация** (версия/билд, о приложении, обратная связь), **Политика конфиденциальности** (экран с текстом/ссылкой), **Приватность** (что хранится только на устройстве, доступ к фото/геолокации в EXIF, очистка кеша, удаление данных).
- Манифест приватности уже покрывает `UserDefaults` (`CA92.1`); перед выходом сверить с фактическим использованием API (15.3).
- В `MainTabView` новый `Tab`, `MainAppTab.settings`. Все тексты — `AS`, иконки — `AI`, 6 языков.
- Коммит: `[NEW] Module13.1 — Settings tab: preferences, about, privacy policy, privacy`

### 13.2 Вкладка «Collections» (по образцу Apple Photos → Collections)
Что есть у Apple (iOS 26): *Pinned Collections*, *Recent Days*, *Albums* (свои), *Media Types*, *Utilities* (Imports, Recently Viewed/Saved/Edited, **Recently Deleted**), *Favorites*, *Memories*, *People & Pets*, *Trips/Map*. Нам подходят и делаем:
- **Pinned / Utilities**: Favorites, Edited (с эффектами), Recently Saved, Imports (оригиналы), **Recently Deleted** (30 дней: восстановить / удалить навсегда; авто-очистка при запуске).
- **Recent Days**: карточки по дням сохранения (обложка, счётчик) → сетка дня.
- **By Filter** (аналог Media Types): карточка на каждый использованный фильтр (Noir, Sepia…), на стиль водяного знака и на пропорции; «Без обработки».
- **Insights**: «сколько и каких фильтров по датам» — Swift Charts (столбцы по дням/месяцам, топ-фильтр, любимые фильтры); без сторонних библиотек.
- **Albums** (свои) и закрепление коллекций — **Module14.7** (нужна новая модель данных).
- Технически: умные коллекции — вычисляемые (`#Predicate` + счётчики), без хранения. **Мягкое удаление**: поле `deletedAt: Date?` в модели (миграции нет — переустановка), `PhotoLibraryStore.delete` → «в корзину», окончательное удаление из Recently Deleted (счётчик ссылок на файлы сохраняется); `@Query` сетки и просмотрщика берут только `deletedAt == nil`. Переиспользуем сетку/просмотрщик Module11–12 (выделить общий `PhotoGrid`).
- Части: **13.2.1** мягкое удаление (модель, store, тесты); **13.2.2** `CollectionsView` + карточки + модель коллекций; **13.2.3** экран коллекции (общая сетка) ; **13.2.4** Recently Deleted; **13.2.5** Insights (Charts); строки на 6 языках.
- Коммиты: `[NEW] Module13.2.1 — soft delete (Recently Deleted model, store, tests)`, `[NEW] Module13.2.2 — Collections tab: smart collections, recent days, by filter`, `[NEW] Module13.2.3 — collection detail screen (shared photo grid)`, `[NEW] Module13.2.4 — Recently Deleted: restore / delete forever / auto purge`, `[NEW] Module13.2.5 — Insights: filter usage by date (Swift Charts)`

### 13.3 Акцентные цвета (настройки)
- Сейчас акцент зависит только от темы (светлая — синий, тёмная — жёлтый). Нужно: **акцент приложения** и **акцент редактора** выбираются отдельно в Settings (палитра, по умолчанию как сейчас), хранятся в `@AppStorage`, подаются через `.tint` (приложение) и отдельный `.tint` на полноэкранном редакторе; `AppColor.main` постепенно заменяется на смысловые цвета/`.tint`. «Избранное» — всегда `AppColor.favorite`.
- Иконка приложения: альтернативные иконки (`setAlternateIconName`) под выбранную палитру, чтобы цвета в интерфейсе и на иконке совпадали (нужны PNG иконок от вас).
- Коммит: `[NEW] Module13.3 — accent colors for app and editor, settings picker, matching app icons`

### 13.4 Кнопка info на вкладке Editor _(ждёт Q4)_
- Подключить после получения вашего кода (меню или навигация).
- Коммит: `[NEW] Module13.4 — Editor info action`

### 13.5 Новый нижний бар _(ждёт ваш дизайн)_
- Вы пришлёте/сделаете сами; тогда оформим.

---

## Module14 — SwiftData & Storage Rework  _(ветка `Module14Storage`)_
Главная часть. Берём из `ContentView4-2.swift` архитектуру (SwiftData = индекс, файлы = каталог на фото, actor-репозиторий, ImageIO), но вместо двух версий — **N версий-рецептов**.

### 14.1 Спецификация модели (документ, без кода приложения)  ✅ черновик выдан 2026-10-26 → `Module14-Spec.md` (ждёт ответов на 4 вопроса)
Рабочие имена (уточняем в этой части):
```
PhotoAsset (корень)                         PhotoVersion (N штук, cascade)
 id, importedAt, captureDate                 id, number (1…N), createdAt
 isFavorite                                  renderedPath, thumbnailPath
 originalFileName, originalPath              recipe: фильтр, водяной знак, пропорции,
 originalThumbnailPath, metadataJSONPath            яркость, насыщенность, контраст
 pixelWidth/Height, fileSize                 asset ⇄ inverse
 GPS (lat, lon, alt), locationName
 cameraMake/Model, lens, exposure*, ISO…
 currentVersionID?
 deletedAt?  (мягкое удаление, см. 13.2.1)
 versions: [PhotoVersion]?  (@Relationship(deleteRule: .cascade, inverse:))
```
- «Оригинал» = сам `PhotoAsset` (виртуальная версия №0), отдельной строки нет → подпись «Оригинал» наконец достижима.
- Правила: без `@Attribute(.unique)`, значения по умолчанию/опционалы, опциональные связи (совместимо с CloudKit, даже если `.localOnly`); `#Index` на `importedAt`, если iOS 18+; `VersionedSchema` с первого дня.
- Раскладка диска: `Application Support/FilterStudio/Photos/<UUID>/{original, versions, thumbnails, metadata}`.
- Решение: рецепт — `Codable` struct или плоские колонки (выберем по удобству `#Predicate`/сортировки).
- Коммит: `[NEW] Module14.1 — storage spec: PhotoAsset/PhotoVersion schema, disk layout, migration notes`

### 14.2 Метаданные и репозиторий
- `PhotoMetadataReader` (ImageIO из `Data`) — **с исправлением знака GPS по `GPSLatitudeRef/LongitudeRef`**; `Date(_, strategy:)` вместо `DateFormatter`; `FormatStyle` вместо `String(format:)`.
- `actor PhotoRepository`: импорт (байты оригинала как есть), запись версии через ImageIO с переносом метаданных, миниатюры, удаление каталога целиком, `PhotoStorage.resolve` с защитой от `..`. Диагностика → `Logger` (без `print` и без файловых меток времени).
- Reverse-geocoding `locationName`: проверить актуальный API по документации Apple (`CLGeocoder` может быть помечен устаревшим в новых SDK) — не угадываю.
- Тесты: фикстуры JPEG/HEIC с EXIF и без; знак GPS; защита пути; удаление.
- Коммит: `[NEW] Module14.2 — PhotoMetadataReader + actor PhotoRepository (ImageIO, thumbnails, safe paths) with tests`

### 14.3 Схема и контейнер (миграции нет)
- **14.3-iCloud (готово, дельта 14.3):** выбор «На устройстве / iCloud» в Настройках (`StorageChoice`, перезапуск для применения), статус аккаунта (`ICloudStatusProvider`), откат на локальное при сбое CloudKit, сущность соответствует правилам CloudKit. iCloud за флагом `CloudSyncConfiguration.isEnabledInBuild = false` до добавления capability и переноса данных фото в модель (`externalStorage`) в 14.3b/14.4. Синхронизация: «Выкл / Авто» (Wi‑Fi/сотовая — в настройках iOS).
- А) Новые модели в `Schema`, `SwiftDataManager` (+ `VersionedSchema`), удалить неиспользуемый `makeInMemoryContainer` или подключить к превью.
- Б) _(только если Q2 = «да»)_ одноразовый мигратор: старые `NoirStudioMediaItem` → группировка по корню → `PhotoAsset + PhotoVersion`, перенос файлов `Documents/NoirStudioMedia` → новая раскладка, идемпотентность, отчёт об ошибках. _Нельзя класть перенос файлов внутрь migration stage SwiftData — только отдельным шагом._
- Коммит: `[NEW] Module14.3 — new SwiftData schema (VersionedSchema), container update, legacy migrator`

### 14.4 Подключение импорта и сохранения
- **Готово вместе с 14.3 (дельта 14.3+14.4):** новый файловый слой подключён: оригинал — байты «как есть» + реальные EXIF/GPS в `PhotoAsset`, версии — JPEG через ImageIO с метаданными, пути относительные `<asset>/original.<ext>`, `<asset>/versions/<id>.jpg` (Application Support). Кадр остаётся `NoirStudioMediaItem` (не переименован — ~40 файлов; в Spec «PhotoVersion» = этот кадр) + связь `asset`. Режим iCloud: `PhotoDataSynchronizer` встраивает данные в модель (`externalStorage`) и восстанавливает недостающие файлы; `CloudSyncConfiguration.isEnabledInBuild = true`.
- Импорт: `PhotosPicker.loadTransferable(type: Data.self)` → репозиторий; в редактор уходит уменьшенное превью, оригинал на диске нетронут.
- Сохранение версии: рендер → файл → строка `PhotoVersion` → `currentVersionID`. Один источник избранного (корень).
- Drag&Drop: `Image → ImageRenderer` теряет метаданные; заменить на `Transferable` с `Data`.
- Коммит: `[REFACTOR] Module14.4 — editor import/save through PhotoRepository; versions as recipes`

### 14.5 UI на новой модели  ✅ часть выдана 2026-10-27 (дельта 14.5)
- **Выдано:** миграция/`VersionedSchema` убраны (обычный `Schema`); акцент приложения один — `AppColor.automaticAccent` (синий/жёлтый по теме), выбор акцента из Настроек удалён; **цвет водяного знака** (`WatermarkTint`, кнопка справа от ленты стилей, хранится в кадре `watermarkTintRaw`); водяные знаки берут **реальные EXIF** через `WatermarkInfo` (нет данных — нет строки, без заглушек; работают и до первого сохранения); **Info на полном наборе**: размеры/МП/размер файла/формат/ориентация, камера/объектив/фокусное/диафрагма/выдержка/ISO/экспокоррекция/вспышка/ПО, даты съёмки/импорта/сохранения, координаты/высота, название места (обратное геокодирование один раз и в запись); **«Сохранить в Фото»** в верхнем меню просмотрщика (add-only).
- **Остаётся в Module14:** 14.7 альбомы и закрепление; график хранилища «iPhone Storage» в Настройках (оригиналы/версии/миниатюры/корзина); миниатюры на диске в `Caches` (D5); сортировка/группировка по дате съёмки (D6) с вариантом «дата сохранения»; замена `CLGeocoder` на `MKReverseGeocodingRequest`; 14.6 — добивка тестов.
- Фасад `PhotoLibraryStore` получает новую реализацию; сетка — миниатюры текущей версии, значок «изменено» только если версий > 0; просмотр/инфо читают реальный EXIF; **водяные знаки берут реальные камеру/дату/место** вместо «SHOT ON LEICA Q3».
- Коммит: `[REFACTOR] Module14.5 — UI bound to new model: real EXIF in info and watermarks, version-aware grid`

### 14.7 Albums (свои коллекции) и закрепление  ✅ выдано 2026-10-27 (дельта Module14-final)
- Модель `Album` (id, name, createdAt, isPinned; many-to-many с кадрами `NoirStudioMediaItem.albums`, правила CloudKit), `AlbumStore` (создать/переименовать/закрепить/удалить/добавить/убрать; удаление альбома не удаляет кадры), секция **«Альбомы»** в Collections (карточка «Новый альбом», долгое нажатие: закрепить/переименовать/удалить), закреплённые альбомы идут в «Закреплённые», «Добавить в альбом» из меню просмотрщика и из режима выбора в сетке, «Убрать из альбома» в экране альбома.
- Сортировка/группировка по **дате съёмки** (EXIF, иначе дата сохранения) с переключателем «Дата: съёмки / сохранения» в меню сетки (D6).
- Фикс: цвет водяного знака — слева, круг на `ultraThinMaterial`, лента проезжает под ним; «Сохранить в Фото» показывает ту же анимацию, что сохранение в редакторе; секция iCloud в Настройках вынесена в отдельный `View` (без пустого блока).
- **Остаётся (осознанно перенесено):** график хранилища «iPhone Storage» и все графики — в модуль графиков (см. ниже); `CLGeocoder` заменён на `MKReverseGeocodingRequest` (API сверен с документацией Apple); миниатюры уже в `Caches`.
- **Module14 закрыт 2026-10-27** (14.6: тесты починены — вложенный `#require` убран).
- Коммит: `[NEW] Module14.7 — user albums, pinned albums, capture-date sorting`

### 14.6 Тесты модуля
- Фасад, репозиторий, мигратор, VM сохранения (Swift Testing, in-memory контейнер, временный каталог).
- Коммит: `[NEW] Module14.6 — test suite for storage, facade and migration`

---

## Module14 — закрыт 2026-10-29 (после проверки на симуляторе и устройстве)
Добавлено при закрытии: акцент графиков = тема (синий / жёлтый); кнопка-инфо редактора (`InfoMenuButton`: iOS 26 — интерактивное меню, ниже — popover) + `EditorInfoView`; кнопка-профиль в «Коллекциях» (`ProfileStatsView`); **восстановление из iCloud без второго перезапуска** (синхронизация файлов запускается при каждом получении данных, экраны подгружают фото по `PhotoFilesRevision`, прогресс «Восстановление из iCloud» в Настройках).

## Module14 — спецификация и как она реализована (архив решений)
### Спецификация Module14 (из `Module14-Spec.md`) — что решено и что получилось «как построено»
**Решения спецификации (D1–D8):** D1 оригинал = кадр с `editVersion == 0` (а не «виртуальная версия»); D2 избранное и корзина — **на кадр**; D3 рецепт — **плоские колонки** (`filterRaw`, `watermarkRaw`, `selectedAspectRatioRaw`, коррекции) для `#Predicate`/коллекций; D4 каталог на `PhotoAsset` (`Photos/<assetUUID>/original.<ext>`, `versions/<versionUUID>.jpg`, `metadata.json`), удаление кадра убирает его рендер, а оригинал и каталог — когда кадров не осталось (вместо `referenceCount`); D5 миниатюры в `Caches` (пересоздаваемые); D6 сортировка/группировка по дате съёмки с запасом «дата импорта» (`LibraryDateBasis`); D7 **миграции со старой модели нет** (переустановка); D8 raw-значения `filterRaw/watermarkRaw/aspectRatioRaw` не меняются (лежат в базе).
**Правила хранения:** только относительные пути в базе; `PhotoStorage.resolve` отвергает пустые, абсолютные, `..`; «Удалить все данные» = `Photos/` + `Thumbnails/` + записи; CloudKit-совместимость (без `.unique`, дефолты/опционалы, опциональные связи).

| Пункт спецификации | Как построено | Статус |
|---|---|---|
| Модель `PhotoVersion` | Осталось имя **`NoirStudioMediaItem`** (кадр); поля: `number→editVersion`, `createdAt→creationDate`, `aspectRatioRaw→selectedAspectRatioRaw`; добавлены `watermarkTintRaw`, `renderedData`/`isDataEmbedded` (iCloud), `albums`, `parentItemID` | Переименование не нужно; при желании — отдельным коммитом (SwiftData/CloudKit: смена имени = новая схема → до релиза) |
| `PhotoAsset` | Как в спеке + `orientation`, `exposureBias`, `flashFired`, `software`, `originalData`/`isDataEmbedded`, связь `items` (cascade) | ✅ |
| `Album` (14.7) | Отдельная модель, связь многие-ко-многим с кадрами, закрепление | ✅ |
| `VersionedSchema` + `SchemaMigrationPlan` | **Не сделано** (контейнер собирается из `Schema([…])`) | 📌 **Этап после релиза (решение 2026-10-31):** `VersionedSchema`/`SchemaMigrationPlan` вводятся **только когда модель меняется в обновлении**. Сейчас ничего делать не нужно. Условия: (1) перед релизом поставить git-тег на коммит с моделью; (2) при первом изменении модели `SchemaV1` = **точный снимок** выпущенных моделей (взять из тега), `SchemaV2` = новая версия, `MigrationPlan` (lightweight или custom); (3) для CloudKit добавлять поля только опциональные/с дефолтом и задеплоить схему в Production до выхода обновления |
| `#Index` | **Не сделано** | ⏳ Module16 — по замерам (при >5k кадров) |
| Миниатюры на диске (D5) | Путь определён (`PhotoStorage.thumbnailPath`, `Thumbnails/`), реально кэш в памяти (`NSCache`); в Настройках «Миниатюры» = 0 КБ | ⏳ опционально (Module16) |
| `actor PhotoRepository` | ✅ единственная точка записи файлов; откат при ошибке сохранения | ✅ |
| `PhotoMetadataReader` | ✅ знак GPS по `GPSLatitudeRef/LongitudeRef`, даты `DateTimeOriginal`; `PhotoMetadataWriter` переносит метаданные в версию | ✅ |
| Геокодирование (§8) | `PlaceNameResolver`: **`MKReverseGeocodingRequest` на iOS 26+, ниже `CLGeocoder`** | ✅ (пункт «CLGeocoder → MK…» в 16C закрыт) |
| Водяные знаки без EXIF (Q4) | Поле скрывается, заглушки «SHOT ON LEICA Q3» нет (`WatermarkInfo`) | ✅ |
| Тесты | Swift Testing, зеркало папок; фикстуры, сценарии `LibraryLifecycle`/`ICloudSync` | ✅ |

## Module14C — Charts  _(✅ сделано 2026-10-28; компоненты пользователя из `CustomChartComponent`)_
Портировано и подключено к **реальным данным** библиотеки (не к демо-данным):
- **Ядро** (`Components/Charts/`): `ChartPoint`, `ChartRange` (1D=24 часа, 7D=7 дней, 1M=30 дней, 1Y=12 месяцев, All=по месяцам), `TrendMetric` (добавлено / всего), `TrendBuilder` (ряды, сводка «к прошлому периоду», карточки), `TrendChart` (порт `TransactionHistoryChart`: линия + градиент, цвет по направлению, выбор точки с «леденцом»; `.minimal` — спарклайн), `ChartRangePicker`, `TrendSquareCard` (стиль BTC-виджета), `TrendDeltaLabel`, `TrendSummaryCard` (Portfolio Return + BitcoinView), `StorageBreakdownCard`.
- **Collections → Инсайты → «Тренды»**: большая карточка (добавлено/всего × 1D…All) + квадратные карточки: Все фото, Избранное, Обработанные, топ-3 фильтра; нажатие открывает коллекцию. Заменила «Рост библиотеки» (`GrowthCard`/`GrowthBuilder` удалены).
- **Settings → Хранилище**: график «Состав хранилища» (оригиналы / версии / миниатюры / недавно удалённые) по реальным файлам (`StorageFileScanner`).
- **Settings → iCloud (только в режиме iCloud)**: «Подготовлено для iCloud N / M, осталось K» (честный счётчик по `isDataEmbedded` — публичного % прогресса у CloudKit нет), время и результат последней отправки/получения и последняя ошибка (`CloudSyncMonitor` по `NSPersistentCloudKitContainer.eventChangedNotification`, запускается при старте приложения).
- Для виджетов (Module14W) переиспользуются без изменений: `ChartPoint`, `ChartRange`, `TrendBuilder`, `TrendChart`, `TrendSquareCard`, `TrendDeltaLabel`, `ChartDisplay`, `LibrarySnapshot` + зависимости (`InsightsBuilder`, `LibraryScope`, `AppStrings`, `AppColor`, `AppIcons`) — добавить в Target Membership цели `FilterStudioWidgets`.
- Не делали: Y-подписи в валюте (заменены на компактные числа); демо-данные `ChartData` не переносились.
- Проверить на устройстве: событие CloudKit приходит в режиме iCloud (строки «Последняя отправка / получение» появятся после первой синхронизации).

## Module14W — Widgets  _(ветка `Module14WWidgets`)_  ← 14W.1 выдан 2026-10-29
Идея данных: **приложение собирает готовый снимок** (`WidgetSnapshot`: JSON + миниатюры ≤ 480 px) в общий контейнер App Group; **виджет только читает** файл — без SwiftData/CloudKit в расширении (надёжнее, быстрее, нет конфликтов схемы). Снимок обновляется при запуске и при уходе приложения в фон (`WidgetSnapshotWriter.refresh` → `WidgetCenter.reloadAllTimelines()`).
- **14W.1 ✅ данные + 3 виджета**: `Service/Widgets/` (`WidgetSnapshot`, `WidgetSnapshotBuilder`, `WidgetSnapshotWriter`), цель `FilterStudioWidgets`: **Counters** (Small/Medium: всего / избранные / обработанные), **Recent photos** (Medium/Large/Extra Large, настраивается: Все / Избранное / Обработанные / конкретный фильтр, нажатие на фото открывает приложение), **Trend** (Small/Medium, как BTC-виджет: число, прирост за 30 дней, график накопления выбранной подборки/фильтра). Схема ссылок `filterstudio://photo/<id>` и `filterstudio://collection/<ключ>` (пока открывают вкладки «Фото» / «Коллекции»).
- **14W.2 ✅ выдан 2026-10-29**: точное открытие — конкретное фото во вьювере и конкретная подборка в сетке; выбор **альбома** в настройке виджета; виджет «Недавно сохранённые»; обновление снимка сразу после сохранения/удаления (не только при уходе в фон); локализация названий виджетов на 6 языков; квадратный виджет «Редактор» (открывает вкладку «Редактор»). Сделано: `DeepLink`/`DeepLinkRouter`, ключи подборок `recent`, `album:<id>`, обновление снимка после любого сохранения (`ModelContext.didSave`, пауза 1.5 с), `FilterStudioWidgets/Localizable.xcstrings` (6 языков), `EditorWidget`.
- **14W.3 (по желанию)**: Lock Screen (`accessoryRectangular/Circular`), Control Center control «Открыть редактор», StandBy.
- Для расширения общий только `WidgetSnapshot.swift` (Target Membership: приложение + виджет). Графики 14C в виджете не подключаются — спарклайн нарисован напрямую (Swift Charts), чтобы не тянуть зависимости.
- Коммиты: `[NEW] Module14W.1 — widget snapshot (App Group) + Counters/Recent/Trend widgets`, `[NEW] Module14W.2 — precise deep links, album picker, instant refresh`, `[NEW] Module14W.3 — lock screen & control`.
- Ограничение: в режиме iCloud миниатюра появится, когда файл фото скачан на устройство.

## Module15 — Export & Photos Library  _(ветка `Module15Export`)_  ← выдан 2026-10-31

**Решение (2026-10-31):** при сохранении и шаринге **ничего не удаляем** — ни геолокацию, ни EXIF. Опция «Удалять геолокацию» из первоначального плана **отменена**. Делимся **файлом** (JPEG с метаданными), поэтому в системном меню есть и «Сохранить изображение» (в Фото), и «Сохранить в Файлы».

### 15.1 Сохранение в Фотоплёнку — как сделано
- Было: `PhotoLibrarySaver.save(fileURL:)` (`.addOnly`, `NSPhotoLibraryAddUsageDescription`, алерт `saveToPhotosAlert`) — только в меню просмотрщика.
- Стало: пакетный `save(fileURLs:)` (один запрос доступа, одна транзакция `performChanges`, пустой список — без системного запроса); кнопка **«Сохранить в Фото»** в нижней панели режима выбора сетки (`PhotosGridViewPagingCarousel`) с алертом результата; файлы добавляются «как есть» → EXIF/GPS/дата в Фото сохраняются.
- Тексты разрешений (`NSPhotoLibraryAddUsageDescription`, `NSPhotoLibraryUsageDescription`) локализованы на 6 языков: `Resources/InfoPlist.xcstrings`.
- Не меняли: названия кнопки «Сохранить на диск» на экране результата (это сохранение версии в приложение). Переименование — по желанию отдельной правкой со строками на 6 языков.
- Коммит: `[NEW] Module15.1 — batch Save to Photos, localized permission strings`

### 15.2 Share — как сделано
- Везде `ShareLink` с **файлом**: просмотрщик (уже было), выбор в сетке (уже было), экран «Версии» (был `UIActivityViewController`), **экран результата редактора** (делился `UIImage` → терял EXIF/GPS и перекодировался).
- Новое: `ExportShareFile` (временный JPEG результата с теми же метаданными и качеством, что получит сохранённая версия; одна папка во временном каталоге, чистится перед новым результатом), `CircleShareLink` (круглая кнопка в стиле `CircleIconButton`). `CanvasEditorViewModel.shareFileURL`. Обёртка `ShareSheet` (UIKit) удалена.
- Коммит: `[REFACTOR] Module15.2 — share files via ShareLink everywhere (no UIActivityViewController)`

### 15.3 Приватность — результат проверки
- `PrivacyInfo.xcprivacy`: только `UserDefaults` (CA92.1). Новые API с «причинами использования» не появились: чтение размера файлов (`fileSizeKey`) в категории не входит; даты файлов, место на диске, `systemUptime` не используются (проверено поиском по коду).
- Данные не собираются и не уходят разработчику (`NSPrivacyCollectedDataTypes` пусто): фото, EXIF и координаты остаются на устройстве/в iCloud пользователя. Обратное геокодирование (`CLGeocoder`) отправляет координаты Apple — это системный сервис, не «сбор данных» разработчиком.
- Для App Store Connect (App Privacy): «Data Not Collected». Пересмотреть, если появится аналитика, краш-репортинг или собственный сервер.
- Виджет: не использует API с причинами; отдельный манифест не нужен.
- Коммит: `[DOCS] Module15.3 — privacy manifest review`

### Что проверить вручную
1. Просмотрщик → Поделиться → «Сохранить изображение»: фото в «Фото» с датой и местом (если были в оригинале).
2. Просмотрщик → Поделиться → «Сохранить в Файлы»: файл `.jpg`; в «Файлах» ▸ Свойства — размер; открыть в «Фото»/Preview ▸ Инспектор — EXIF/GPS на месте.
3. Режим выбора в сетке → выбрать 3 кадра → «Сохранить в Фото» → системный запрос (первый раз) → алерт «Сохранено», режим выбора закрылся; в «Фото» 3 новых снимка.
4. Запретить доступ в Настройках iOS → «Сохранить в Фото» → алерт с кнопкой «Открыть настройки».
5. Экран результата редактора: кнопка «Поделиться» неактивна, пока идёт рендер, затем активна; «Сохранить изображение» → в Фото есть метаданные исходника.
6. Экран «Версии» → Поделиться → то же системное меню.
7. Язык устройства ≠ английский → запрос доступа к «Фото» на этом языке.
8. Cmd+U: `ExportShareFileTests` (4), `PhotoLibrarySaverTests` (+1) зелёные.

### Вручную в Xcode
- `Resources/InfoPlist.xcstrings` должен попасть в цель приложения (папка синхронизированная — обычно автоматически; проверить Target Membership).
- Удалить файл `FilterStudio/Components/Share Sheet/ShareSheetPagingCarousel.swift` (и пустую папку).

---

## Module16 — Release Hygiene  _(ветка `Module16Hygiene`)_
- 16.1 Строки ✅ _as-built_: каталог 6 языков (en, ru, fr, es, it, de) уже полный (347 ключей, проверено генератором). Плюрали: en-ключи со словом «days» (`photos.delete_message`, `collections.trash_empty_text`, `collections.trash_footer`) получили `plural` one/other; `charts.card_accessibility` теперь `%@, %@, %@` и собирается из plural-aware `AS.Picker.photosCount` («1 photo», а не «1 photos»). В ru/fr/es/it/de «дн./j./d./g./T.» — сокращения, не склоняются.
- 16.2 Доступность и Dynamic Type ✅ _as-built_: все `.font(.system(size:))` вне водяных знаков → text styles (`caption2/caption/callout/headline/title2/title`, моно/rounded через `.monospaced()`/`.fontDesign`); водяные знаки оставлены фиксированными (это контент экспорта). Тесные места (миниатюра сохранённого кадра, панель инструментов) ограничены `.dynamicTypeSize(...xxxLarge)`. Подписи VoiceOver: Back/Skip онбординга, меню «ещё» (Коллекции, Недавно удалённые), меню вида сетки, состояние секции (развёрнуто/свёрнуто), ячейка сетки = дата + «избранное»/«изменено». Новые ключи: `onboarding.skip`, `collections.section_expanded/collapsed`. `.onTapGesture {}` в `PhotoViewerBottomBar` оставлен сознательно (глушит тапы по панели, координаты не нужны).
- 16.3 Настройки проекта ✅ _as-built_: `AppLog` уже целиком под `#if DEBUG` (в Release вызовы пустые, `print/NSLog` в коде нет) — решение: **оставляем Debug-only** для Release и Profile; добавлен `.swiftlint.yml` (минимальный). Display names: «Filter Studio» (приложение), «FilterStudioWidgets» (виджет — перед релизом переименовать в Xcode на пользовательское имя). Версия/сборка 1.0 (1).
- 16.4 ✅ _as-built_: `SWIFT_VERSION = 6.0` у виджета и тестов (`SWIFT_STRICT_CONCURRENCY = complete` уже без предупреждений). Откат — по цели.
- 16.4 ступень 1 ✅ (`SWIFT_STRICT_CONCURRENCY = complete` у виджета и тестов, язык 5.0). Дальше: собрать → пришлить предупреждения → 6.0.
- 16.4 **Swift 6 для всех целей** _(решение 2026-10-31: да, переводим; порядок — «строгость в 5, язык 6 в конце»)_. Сейчас: приложение 6.0, виджет 5.0, тесты 5.0. По шагам, **каждая цель — отдельный коммит**:
  1. **Тесты** (`FilterStudioTests`): `SWIFT_STRICT_CONCURRENCY = complete` (язык 5) → 0 предупреждений → `SWIFT_VERSION = 6.0`. Настройки как у приложения (`SWIFT_DEFAULT_ACTOR_ISOLATION = MainActor`, `SWIFT_APPROACHABLE_CONCURRENCY = YES`): тесты `@MainActor`-типов работают без `await`-шума; тесты чистой логики вызывают `nonisolated`-типы без проблем. Если тест `nonisolated`-типа ругается — пометить suite `nonisolated`.
  2. **Виджет** (`FilterStudioWidgetsExtension`): та же лестница (complete в 5 → 6.0). Default isolation решить отдельно: стартовать с `nonisolated` (профиль C в `Concurrency.xcconfig` из agent-kit) — провайдеры таймлайна и `AppIntent` вызываются системой не с главного актора; `View` остаются на главном акторе по протоколу. `WidgetSnapshot` компилируется в обоих модулях и уже `nonisolated`. Если выберем MainActor по умолчанию — проверить провайдеры и `nonisolated`-методы протоколов WidgetKit.
  3. TSan + Main Thread Checker на устройстве; `Task {}` без хэндла во View → `.task`/хэндл.
  - Критерий выхода: 0 предупреждений при `complete`, сборка всех целей, тесты зелёные, виджет показывает данные (App Group) — проверить на устройстве. См. `SWIFT6_CONCURRENCY.md` §8 и «Swift Concurrency.zip» (часть 6).
- Коммиты: `[REFACTOR] Module16.1 — strings cleanup & localization keys`, `[FIX] Module16.2 — accessibility & Dynamic Type`, `[REFACTOR] Module16.3 — logging, previews, project settings`

---

## Module16C — CloudKit: углублённая проверка и управление синхронизацией  _(перед первой сборкой в TestFlight; после 16)_  ← добавлено 2026-10-27
Цель: довести iCloud до продакшн-качества и проверить на реальных устройствах (iPhone + Mac через TestFlight, один Apple ID).
- **Реальный статус синхронизации в Настройках:** _(базовая версия уже в 14C: счётчик «подготовлено/осталось» + последние события отправки/получения + ошибка)_ — здесь остаётся углубить: секция по `NSPersistentCloudKitContainer.eventChangedNotification` (SwiftData использует его внутри): «настройка / импорт / экспорт», время последней успешной синхронизации, ошибки (нет сети, квота iCloud, аккаунт). Публичного **процента** прогресса у CloudKit нет — показываем состояние и счётчик «ждёт выгрузки» по `isDataEmbedded == false`, не выдуманный процент.
- **Пауза / принудительная синхронизация:** у SwiftData **нет публичного API** паузы и «синхронизировать сейчас». Реалистично: «Пауза» = переключить на «На устройстве» (данные в iCloud остаются; снова включили — досинхронизируются); «Синхронизировать сейчас» = выгрузка `PhotoDataSynchronizer.sync` + подсказка про системные настройки. Проверить в TestFlight, что именно возможно, и не обещать лишнего в UI.
- **Удаление между устройствами:** удалили на одном — исчезает на другом (и корзина `deletedAt` синхронизируется как поле); проверить конфликты (одно и то же фото правят два устройства), «Удалить все данные» при включённом iCloud (стирает и облако — текст предупреждения уже есть).
- **Переход «локально → iCloud»:** локальная база при включении переезжает в облако, `PhotoDataSynchronizer` встраивает данные и файлов; проверить большие библиотеки, фон, квоту, повторный запуск после прерывания; обратный переход «iCloud → локально» (что остаётся на устройстве).
- **Схема CloudKit:** перед релизом **Deploy Schema Changes → Production** в CloudKit Dashboard (иначе в App Store синхронизация не заработает), проверка индексов; тестовые сборки TestFlight работают с Production-средой.
- **Тест-план на двух устройствах:** импорт → появился на втором; правка/версия; избранное; удаление/восстановление из корзины; отключение сети; выход из iCloud; смена аккаунта.
- Заодно: _(выполнено в 14: `PlaceNameResolver`)_. _(`VersionedSchema` не нужен до первого релиза — см. «Этап после релиза» в таблице спецификации Module14.)_ Перед релизом: git-тег на модели.
- **Статус 16C (2026-11-01):** ✅ 16C.1 — причина сбоя по коду `CKError` (нет сети / нет места / не вошли / временно недоступен / другое) с понятным текстом на 6 языках, строка «Последняя успешная синхронизация», тесты. ✅ 16C.2 — тест-план на двух устройствах: `CloudKit-TestPlan.md` (15 сценариев). ⏳ 16C.3 — **ручная проверка на устройствах** + **Deploy Schema Changes → Production** (в Dashboard, только вручную). Пауза «Синхронизировать сейчас» — по результатам сценария 11.
- Коммит: `[NEW] Module16C — CloudKit sync status, pause/force-sync options, two-device verification`

---

## Module17 — Переключатель темы  ✅ _as-built 2026-11-01_
- Настройки → «Оформление»: Система / Светлая / Тёмная (segmented), независимо от настройки устройства. `AppAppearance` (`Manager/Settings`), `AppSettings.appearance` (UserDefaults `settings.appearance`), `.preferredColorScheme(settings.appearance.colorScheme)` на корне, в онбординге первого запуска и в повторе тура из Настроек. 6 языков, тесты (`AppSettingsTests`).
- Онбординг (скриншоты, zoom/anchor, тексты) пользователь делает сам; тексты магазина и TestFlight — по его готовности. Lock Screen / Control — Module19 (код есть у пользователя).
- Коммит: `[NEW] Module17 — appearance switch (System / Light / Dark)`

## Module18 — Кроп: зеркало по горизонтали и вертикали  ✅ _as-built 2026-11-01_
- Панель Crop: две круглые кнопки-переключателя слева (по горизонтали / по вертикали), лента пропорций начинается с отступа и проезжает под ними — как кнопка цвета у водяного знака. VoiceOver: «Отразить по горизонтали/вертикали», состояние — `.isSelected`.
- `CropFlip` (`Core/Tabs/Editor/Model`): `nonisolated struct` (горизонталь, вертикаль) + `View.cropFlipped(_:)` (`scaleEffect(x:y:)`). Отражается **только фото**, водяной знак читаем.
- Видно везде: карточки-фильтры, канвас других вкладок, **Preview result** и итоговый файл (`HighResRenderCanvasView` → `ImageExporter.generateExportImage(flip:)`).
- Сохранение: `NoirStudioMediaItem.isFlippedHorizontally/isFlippedVertically` (по умолчанию `false` — правило CloudKit), входят в `isEdited`, восстанавливаются при «Редактировать» (`applyParameters`), «убрать кроп»/«сбросить» обнуляют зеркало.
- Показ: теги Preview («Отражено по горизонтали/вертикали»), Info (строка «Зеркало: По горизонтали, По вертикали»), меню «…» → Подробности. 6 языков (7 новых ключей, 399 всего).
- Тесты: `CropFlipTests`, `NoirStudioMediaItemTests` (флаги/isEdited), `CanvasEditorViewModelTests` (reset, сохранение+восстановление, пиксельная проверка зеркала в экспорте).
- Коммит: `[NEW] Module18 — crop mirror (horizontal / vertical), saved with the version`

## Module20.1 — CloudKit: дисциплина схемы  ✅ _as-built 2026-11-11_
- **Причина сбоя в TestFlight 1.0 (1)** (найдена пользователем, подтверждена скриншотами схемы): схема Development создаётся по реально отправленным записям; поля `nil` (геотеги, камера, `deletedAt`, `parentItemID`, `albums`) и новые поля зеркала там не появлялись, значит их не было и в Production (замок). В Development у `CD_NoirStudioMediaItem` было 17 полей модели, после прогона — 26.
- `CloudSchemaSeeder` (**только `#if DEBUG`**) + `CloudSchemaSeedViewModel` + `CloudSchemaDebugSection`: в Настройках сразу после секции iCloud секция «DEBUG · CloudKit schema» с кнопкой «Seed CloudKit schema». Создаёт одно фото + версию + альбом со всеми заполненными полями (данные 256 КБ, пути пустые — файлы на диск не пишутся), ждёт выгрузку (`CloudSyncMonitor`), удаляет записи. В Release секции и кода нет.
- Тест-сторож `CloudKitSchemaSnapshotTests`: снимок полей моделей на момент Deploy в Production; изменение модели → тест падает и печатает `+/-` по полям и порядок действий.
- Диагностика iCloud: `CloudSyncEvent.detail` — тексты ошибок по записям (`CKPartialErrorsByItemIDKey`), строка под красным сообщением в Настройках, в логе.
- Порядок после каждого изменения модели — `CloudKit-TestPlan.md` §0a.
- Тесты: `CloudSchemaSeederTests` (8), `CloudSchemaSeedViewModelTests` (4), `CloudKitSchemaSnapshotTests` (2), `CloudSyncDiagnosticsTests` (+4).
- Коммит: `[NEW] Module20.1 — CloudKit schema discipline: Debug seed, schema guard test, per-record failure detail`

### Вопросы пользователя 2026-11-11 и ответы (решение за пользователем)
0. **Сообщение пользователю vs. разработчику (решение 2026-11-11):** сырая причина («поле не найдено в схеме») пишется в `AppLog` (`.storage`, warning) всегда и показывается в Настройках только в `#if DEBUG`. В Release в разделе iCloud — мягкий локализованный текст `AS.Sync.failRecords` (`CloudSyncFailureReason.recordsRejected`, `CKErrorDomain` 2), 6 языков.
1. **«В продакшене пропускать запись, которой нет в схеме?»** Публичного API чтения схемы CloudKit в приложении нет, а зеркало SwiftData (`NSPersistentCloudKitContainer`) не даёт ни отфильтровать запись, ни отменить отправку одной записи. Поэтому: (а) **профилактика** — Module20.1; (б) **диагностика** — причина по записи в Настройках (сделано). Управлять каждой записью (пропустить, отложить, показать статус) можно только на собственном движке синхронизации поверх `CKSyncEngine` (iOS 17+) — это отдельный большой модуль (маппинг моделей в `CKRecord`, конфликты, миграции); сейчас не рекомендуется.
2. **«Иконка синхронизации на каждом фото в сетке».** У SwiftData нет статуса синхронизации на объект. Точно можно показать **общий** индикатор (в панели Photos: облако — всё хорошо / стрелка — идёт / «!» — сбой, по `CloudSyncMonitor`). Приблизительный значок «ещё не отправлено» по дате (`creationDate` позже последней успешной выгрузки) обманывает при правке избранного/альбомов. Точный значок по фото — только с `CKSyncEngine`. Предложение: общий индикатор в Photos — отдельным небольшим модулем, если нужно.

## Что остаётся (после Module20.1)
1. **Готово 2026-11-10:** 16C.3 — синхронизация iPhone ⇄ Mac проверена на TestFlight (избранное, удаление/восстановление, альбомы); Deploy Schema → Production выполнен повторно после seed.
2. **Чистка строк** (Xcode-литералы: `Date/Kind/Min/Value/Size`, `Open`, `%@ · %@`, `%@ / %@`) → в `AS`.
3. **Lock Screen (PIN / Face ID, Keychain)** — решено выпустить обновлением после 1.0; код делается в отдельном проекте, будет прислан.
4. Онбординг-скриншоты/zoom/anchor — пользователь. Тексты магазина. Ответ на вопрос 2 выше (общий индикатор) — по решению.
5. Control (Control Center) — вместе с Lock Screen или отдельно, по решению.

## Решения по удалению (2026-11-01)
Подтверждение: **alert по центру** — долгий тап (меню Edit/Favorite/Delete) в «Фото» и в альбоме, «Удалить все данные» (Настройки), «Удалить все» (корзина), удаление альбома. **Поповер/confirmationDialog** у кнопки — просмотрщик фото (меню ⋯ → Удалить) и нижняя панель режима «Выбрать». Режим задаёт `PhotoLibraryStore.requestDeletion(of:centred:)`.

## Что остаётся после Module16
**16 закрывается** (16.1–16.4 + UI-правки) → **16C** CloudKit углублённо (статусы, пауза, два устройства, Deploy Schema to Production) → **17** онбординг/тема/магазин → **18** зеркало в кропе → первый TestFlight → опционально 14W.3. Чистка строк идёт до первой сборки (ключи, которые Xcode сам добавил: `Date/Kind/Min/Value` в графиках, `Open`, `%@ · %@`, `%@ / %@`). Документация: прогон Product ▸ Build Documentation (37 предупреждений) — ждём список от пользователя; вероятная причина — одинаковые `- Parameter` в RU- и EN-блоках.

### Module20.1 — закрытие (2026-11-11)
- ✅ Проверено на устройстве: Debug-seed отправил 3 записи, очистка синхронизирована; схема Development не изменилась (CD_NoirStudioMediaItem 32, CD_PhotoAsset 33, CD_Album 11) — все поля уже были в схеме, seed это подтвердил. TestFlight 1.0 (1) работает.
- 🐞 6 упавших тестов (`.invalidPath`) — не из-за seed: `PhotoStorage.resolve` сравнивал `standardizedFileURL`, а он по-разному трактует `/private/var` у существующего файла и у несозданной папки. Исправлено через `resolvingSymlinksInPath()` с обеих сторон + регрессионный тест `resolvesPathOfExistingFileInTemporaryDirectory`. Реальная проблема была и в приложении (путь к существующему файлу мог отвергаться).
- ✅ Тексты для стора: `AppStore-Listing.md` (6 языков, лимиты проверены).
- 📌 Lock Screen/Control — крупное обновление 1.1 (после 1.0). Скриншоты онбординга готовы (его работа).
- 📄 Для сайта: `Website-Texts.md` (из каталога строк, 6 языков); листинг стора: `AppStore-Listing.md` (+чек-лист полей). Осталось: URL поддержки/политики (сайт), возрастная анкета, скриншоты, Review Notes.

### Module21 — маркетинг-пакет (2026-11-12)
- 📦 `Marketing/`: `AppStore-Screenshots-Plan.md` (7 кадров стора + подписи 6 языков, наборы iPhone/iPad/Duo), `Website-Privacy-Support.md` (Privacy 13 разделов, Support: 4 шага + 7 FAQ, 6 языков), `Website-Build-Plan-for-AI.md` (план для Gemini/Antigravity: Часть A — шаблон Project-3…6 на базе Nightwell + Guide из CentSweep; Часть B — Filter Studio в Project-3, палитра жёлтый+синий), копии `AppStore-Listing.md` и `Website-Texts.md`.
- ⬜ За владельцем: скриншоты (20 Guide + 7×3 стор), e-mail поддержки, App Store ID, финальные URL Support/Privacy, возрастная анкета, цена.
