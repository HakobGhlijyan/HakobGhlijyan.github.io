# App Store — план скриншотов (7 кадров) / Screenshot plan

> Что это: какие 7 кадров сделать для App Store Connect и какой текст поставить на каждом (6 языков). Те же кадры идут в раздел «Screens/Features» сайта (папка `S` в плане сайта). 20 кадров онбординга — это отдельный «Guide/Overview» на сайте, в стор они не идут.

## 1. Правила
- **Всего 7 кадров** (лимит стора — 10; 6–7 хватает). Порядок важен: первые 3 видны в результатах поиска — самые сильные вперёд.
- **Тексты на кадрах — на английском** для основного листинга; для других языков листинга — те же кадры с локализованной подписью (таблица ниже). UI в кадре можно оставить английским для 4 языков (fr, es, it, de) и снять отдельные наборы для **EN и RU**, если хочешь честную локализацию интерфейса. Это решение за тобой: сначала EN, потом RU.
- Подпись: **заголовок ≤ 30 знаков** (крупно, 1–2 строки) + **подзаголовок ≤ 40 знаков** (мельче). Одна и та же гарнитура, одно расположение на всех кадрах.
- Фон и стиль: тёмный фон (как в приложении), **акцент — жёлтый** (цвет акцента приложения) и **синий** (вторичный/градиент); заголовок белый, ключевое слово — жёлтым. Без лишних значков; не закрывай важное в UI.
- В кадрах — красивые «чистые» фото (пейзаж, портрет, еда), **без личных данных, без реальных координат/адресов** и без чужих лиц; сцена одна и та же на всех кадрах, чтобы набор выглядел цельно.
- Не показывать DEBUG-секцию, красные ошибки, отладочные тосты. Статус-бар «чистый»: `xcrun simctl status_bar booted override --time 9:41 --batteryState charged --batteryLevel 100 --cellularBars 4 --wifiBars 3`.
- **Размеры (px):** iPhone 6.9" — **1320×2868** (портрет); iPad 13" — **2064×2752** (портрет; для альбомной — 2752×2064). Остальные размеры App Store масштабирует сам.
- **Три набора:** iPhone (7), iPad (7), **Duo** (7). Duo — это композиция «два экрана в одном кадре» (как на твоих сайтах: фильтр Duo). Для стора Duo-кадр собирается тоже в 1320×2868: два экрана iPhone с лёгким наклоном/смещением и общим заголовком. На сайте Duo-кадры идут в фильтр «Duo».

## 2. Семь кадров

### Кадр 1 — Filters with live preview
- **Что снимать:** Editor — filter strip under the canvas; a bright photo with a filter applied

| Язык | Заголовок | Подзаголовок |
|---|---|---|
| en | Filters with live preview (25) | Pick a look and see it instantly (32) |
| ru | Фильтры с живым просмотром (26) | Выберите стиль — результат сразу (32) |
| fr | Filtres en aperçu direct (24) | Choisissez un style, voyez-le aussitôt (38) |
| es | Filtros con vista previa (24) | Elige un estilo y míralo al instante (36) |
| it | Filtri con anteprima live (25) | Scegli uno stile e vedilo subito (32) |
| de | Filter mit Live-Vorschau (24) | Look wählen, sofort sehen (25) |

### Кадр 2 — Crop, rotate, mirror
- **Что снимать:** Editor — Crop panel with aspect ratios and the two flip buttons visible

| Язык | Заголовок | Подзаголовок |
|---|---|---|
| en | Crop, rotate, mirror (20) | Frame it exactly the way you want (33) |
| ru | Обрезка, поворот, зеркало (25) | Кадрируйте так, как задумали (28) |
| fr | Recadrer, pivoter, inverser (27) | Cadrez exactement comme vous voulez (35) |
| es | Recorta, gira, voltea (21) | Encuadra justo como quieres (27) |
| it | Ritaglia, ruota, specchia (25) | Inquadra esattamente come vuoi (30) |
| de | Zuschneiden, drehen, spiegeln (29) | Genau der Ausschnitt, den du willst (35) |

### Кадр 3 — Your watermark, your colour
- **Что снимать:** Editor — watermark picker (eight styles) and the colour picker, one watermark visible on the photo

| Язык | Заголовок | Подзаголовок |
|---|---|---|
| en | Your watermark, your colour (27) | Eight styles, any accent colour (31) |
| ru | Ваш водяной знак (16) | Восемь стилей и свой цвет (25) |
| fr | Votre filigrane, votre couleur (30) | Huit styles, la couleur de votre choix (38) |
| es | Tu marca de agua, tu color (26) | Ocho estilos y el color que quieras (35) |
| it | Filigrana del tuo colore (24) | Otto stili e il colore che preferisci (37) |
| de | Wasserzeichen in deiner Farbe (29) | Acht Stile, Farbe frei wählbar (30) |

### Кадр 4 — Every edit is a version
- **Что снимать:** Photo viewer — version/info panel open: filter, crop, watermark, camera, place; original untouched

| Язык | Заголовок | Подзаголовок |
|---|---|---|
| en | Every edit is a version (23) | Your original is never touched (30) |
| ru | Каждая правка — версия (22) | Оригинал остаётся нетронутым (28) |
| fr | Chaque retouche, une version (28) | Votre original n’est jamais modifié (35) |
| es | Cada edición, una versión (25) | Tu original nunca se toca (25) |
| it | Ogni modifica è una versione (28) | L’originale non viene mai toccato (33) |
| de | Jede Änderung ist eine Version (30) | Dein Original bleibt unberührt (30) |

### Кадр 5.1 + 5.2 — Photos & Collections
- **Что снимать:** Photos grid (Medium) next to Collections (Favourites, Albums, filters) — iPad shows both in landscape

| Язык | Заголовок | Подзаголовок |
|---|---|---|
| en | Photos & Collections (20) | Favourites, albums and filters you love (39) |
| ru | Фото и коллекции (16) | Избранное, альбомы и любимые фильтры (36) |
| fr | Photos et collections (21) | Favoris, albums et filtres préférés (35) |
| es | Fotos y colecciones (19) | Favoritas, álbumes y tus filtros (32) |
| it | Foto e raccolte (15) | Preferiti, album e filtri che ami (33) |
| de | Fotos & Sammlungen (18) | Favoriten, Alben und Lieblingsfilter (36) |

### Кадр 6 — Sync with your iCloud
- **Что снимать:** Settings — iCloud section with a successful ‘Last successful sync’ (take it from a Release/TestFlight build, NOT the DEBUG section)

| Язык | Заголовок | Подзаголовок |
|---|---|---|
| en | Sync with your iCloud (21) | Private, optional and automatic (31) |
| ru | Синхронизация через iCloud (26) | Личная, по желанию, автоматическая (34) |
| fr | Synchronisé via iCloud (22) | Privé, facultatif et automatique (32) |
| es | Sincroniza con iCloud (21) | Privada, opcional y automática (30) |
| it | Sincronizza con iCloud (22) | Privata, facoltativa, automatica (32) |
| de | Sync über deine iCloud (22) | Privat, optional und automatisch (32) |

### Кадр 7 — Insights & widget
- **Что снимать:** Insights charts (by day/month) + the Home Screen widget composed side by side (Duo-style)

| Язык | Заголовок | Подзаголовок |
|---|---|---|
| en | Insights & widget (17) | See how you edit, day by day (28) |
| ru | Статистика и виджет (19) | Как вы редактируете — день за днём (34) |
| fr | Statistiques et widget (22) | Vos retouches, jour après jour (30) |
| es | Estadísticas y widget (21) | Cómo editas, día a día (22) |
| it | Statistiche e widget (20) | Come modifichi, giorno dopo giorno (34) |
| de | Statistiken & Widget (20) | So bearbeitest du, Tag für Tag (30) |

## 3. Как сделать (порядок работы)
1. Подготовь демо-данные в приложении: 8–10 красивых фото, 2–3 альбома, несколько избранных, 3–4 версии одной фото, водяной знак, один Insights-график с данными за несколько дней.
2. Включи **Release-сборку** (не Debug), тёмную тему, на iPad — альбомная и портретная ориентации.
3. Сделай «сырые» скриншоты в Симуляторе (⌘S) для iPhone 17 Pro Max (6.9") и iPad Pro 13" — по 7 штук. Для Duo возьми любые два из этих кадров.
4. Собери финальные макеты в любом редакторе (Figma, Keynote, Canva): фон + заголовок + устройство-рамка; экспорт PNG точно в нужных пикселях, без альфа-канала и без скругления углов (App Store скруглит сам).
5. Загрузи в App Store Connect → версия 1.0 → Screenshots (iPhone 6.9", iPad 13"). Подписи на других языках — отдельные наборы (скопируй макет, поменяй текст).
6. Те же файлы положи в `assets/store/` сайта (см. план сайта) под именами `S01…S07` (+ суффикс `-iphone`, `-ipad`, `-duo`).

## 4. Проверка перед загрузкой
- [ ] 7 кадров в каждом из трёх наборов, порядок 1→7 как выше
- [ ] Размеры точные (1320×2868, 2064×2752), PNG/JPEG, без альфы
- [ ] Нет личных данных, DEBUG-секций, ошибок
- [ ] Заголовки не длиннее 30 знаков, нет переносов в середине слова
- [ ] Цвета: тёмный фон, жёлтый акцент, синий второстепенный
- [ ] Подписи совпадают с таблицей и описанием листинга

## 5. Короткие тексты для блоков сайта (6 языков)
| Язык | Hero | About: заголовок | Статистика 1 (0) | Статистика 2 (0) | Статистика 3 (6) |
|---|---|---|---|---|---|
| en | Filter Studio for iPhone & iPad | A calm photo editor built around your originals | Accounts required | Trackers in the app | App languages |
| ru | Filter Studio для iPhone и iPad | Спокойный фоторедактор, построенный вокруг ваших оригиналов | Аккаунтов не требуется | Трекеров в приложении | Языков приложения |
| fr | Filter Studio pour iPhone et iPad | Un éditeur photo serein, centré sur vos originaux | Compte requis | Traqueurs dans l’app | Langues de l’app |
| es | Filter Studio para iPhone y iPad | Un editor de fotos sereno, pensado en torno a tus originales | Cuentas necesarias | Rastreadores en la app | Idiomas de la app |
| it | Filter Studio per iPhone e iPad | Un editor di foto sereno, costruito attorno ai tuoi originali | Account richiesti | Tracker nell’app | Lingue dell’app |
| de | Filter Studio für iPhone & iPad | Ein ruhiger Fotoeditor rund um deine Originale | Konten erforderlich | Tracker in der App | App-Sprachen |
