/**
 * Filter Studio — main.js
 * Architecture replicated directly from CentSweep split-screen system.
 * Handles: i18n (7 languages), panel switching, interactive preview hover/click,
 * model filter tabs, video player controls, and hash navigation.
 */

// =========================================================================
// i18n DICTIONARIES (7 Languages: en, ru, fr, de, es, it, hy)
// =========================================================================
const dictionaries = {
  en: {
    portfolio: 'Portfolio',
    features: 'Features',
    screens: 'Screens',
    guideLabel: 'Overview',
    about: 'About',
    support: 'Support',
    privacy: 'Privacy',
    comingSoon: 'Coming Soon',
    getOnAppStore: 'Coming Soon to App Store',
    featuresHeader: 'Filter Studio for iPhone & iPad · Core Image & SwiftData',
    liveTitle: 'Coming Soon on the App Store',
    liveDesc: 'A calm, fast photo editor for iPhone and iPad with live previews, versions, and private iCloud sync.',
    liveBadgeText: 'App Store',
    liveQr: 'Scan to download',
    hoverInspect: 'Hover module to inspect',

    feat1Title: 'Filters with Live Preview',
    feat1Tag: 'Core Image',
    feat2Title: 'Crop, Rotate & Mirror',
    feat2Tag: 'Aspect Ratios',
    feat3Title: 'Your Watermark, Your Colour',
    feat3Tag: 'Watermarks',
    feat4Title: 'Every Edit is a Version',
    feat4Tag: 'Versions',
    feat5Title: 'Photos & Collections',
    feat5Tag: 'Gallery',
    feat6Title: 'Full Photo View & EXIF',
    feat6Tag: 'Inspector',
    feat7Title: 'Sync with your iCloud',
    feat7Tag: 'iCloud Sync',
    feat8Title: 'Interactive Widgets',
    feat8Tag: 'Widgets',

    screenLabel: 'Showcase & Screens',
    screenTitle: 'Explore Filter Studio across iPhone & iPad.',

    guideTitle: 'Complete Onboarding Tour',
    guideDesc: '20 thoughtfully designed steps guiding you through capture, filtering, watermarking, and library management.',
    stepVideoTitle: 'iPhone 18 Pro Video Demo',
    stepVideoDesc: 'Watch real-time live preview filtering, cropping, and saving flow.',

    ideaLabel: 'The philosophy',
    storyTitle: 'Calm creative flow.<br>Zero compromise.',
    storyLead: 'A fast, private photo editor built for people who care about their images and their privacy.',
    storyCardTitle: 'Your photos, your creative vision.',
    storyText: 'Filter Studio gives you studio-grade Core Image filters, non-destructive versioning, and custom watermarks without accounts, ads, or tracking. Your photos remain on your device and sync privately through your personal iCloud account.',
    pillar1: 'Filter & Tune',
    pillar2: 'Watermark',
    pillar3: 'Version & Sync',
    stat1Val: '100%', stat1Lbl: 'On-Device Native',
    stat2Val: '0', stat2Lbl: 'Data Trackers',
    stat3Val: 'iCloud', stat3Lbl: 'Private SwiftData Sync',

    supportTitle: 'How can we help?',
    supportLead: 'Send a question, bug report, suggestion, or privacy request. We respond directly by email.',
    talk: 'Direct Developer Contact',
    supportContact: 'Use the form below or write directly to <a href="mailto:hakobghlijyan@gmail.com">hakobghlijyan@gmail.com</a>.',
    supportName: 'Name',
    supportEmail: 'Email',
    supportMessage: 'Message',
    supportSend: 'Send Message →',
    faqTitle: 'Frequently Asked Questions',
    faq1q: 'What is Filter Studio?',
    faq1a: 'Filter Studio is a calm, fast photo editing application for iPhone and iPad. It provides studio-quality Core Image filters, non-destructive versions, crop ratios, and custom watermarks.',
    faq2q: 'Are my photos ever uploaded to external servers?',
    faq2a: 'Never. All photo processing happens entirely on your device using Apple Core Image. Syncing occurs only through your private iCloud database managed by Apple.',
    faq3q: 'Do I need to create an account?',
    faq3a: 'No. Filter Studio requires no registration, sign-up, email, or password. You can start editing the moment you launch the app.',
    faq4q: 'How does non-destructive versioning work?',
    faq4a: 'Your original photograph is never modified or overwritten. Every time you save an edit, Filter Studio saves a new version in your gallery while preserving the pristine original.',
    faq5q: 'What watermark styles are available?',
    faq5a: 'Filter Studio includes eight watermark styles derived from the photo EXIF data, timestamp, camera model, or custom text with full color selection.',
    faq6q: 'Which devices and iOS versions are supported?',
    faq6a: 'Filter Studio supports all iPhone and iPad models running iOS 18.0+, iPadOS 18.0+, or newer, optimized for Liquid Glass and modern Super Retina displays.',
    faq7q: 'How do I request a feature or report a bug?',
    faq7a: 'You can submit feedback directly via our web support form or email hakobghlijyan@gmail.com. We review every user message.',

    privacyEyebrow: 'YOUR PRIVACY MATTERS',
    privacyTitle: 'Privacy Policy',
    privacyLead: 'Last updated: November 2026 · Native iOS 18+ Architecture',
    privacyBannerTitle: 'Zero Personal Data Collection',
    privacyBannerText: 'Filter Studio was designed from the ground up to respect your digital privacy. We do not require accounts, we do not track your activity, and we never transmit your photos to third-party servers.',
    policyTitle1: '1. Summary',
    policyBody1: 'Filter Studio has no accounts, no ads and no analytics. Your photos, edits and their metadata stay on your device. If you turn on iCloud, they sync only through your own private iCloud, which the developer cannot access.',
    policyTitle2: '2. Who We Are',
    policyBody2: 'Filter Studio is developed by Hakob Ghlijyan, an independent developer. Contact: <a href="mailto:hakobghlijyan@gmail.com">hakobghlijyan@gmail.com</a>.',
    policyTitle3: '3. What the App Stores',
    policyBody3: 'Photos you import, the edited versions you save, their metadata (date, camera, location if the photo has it), albums, favourites and your settings. All of it is stored in the app’s own storage on your device.',
    policyTitle4: '4. iCloud',
    policyBody4: 'Sync is optional. When enabled, the app uses Apple’s private CloudKit database tied to your Apple ID. Only you can access it; the developer has no access and no copy. You can switch sync off in Settings.',
    policyTitle5: '5. Photos',
    policyBody5: 'You pick photos with the system photo picker. The app asks for access to Photos once, only to read the location of the photos you picked, and, if you tap Save to Photos, to add edited images. It never scans or uploads your library.',
    policyTitle6: '6. Location',
    policyBody6: 'Location is read only from the metadata that is already inside a photo. To show a place name, the app may send those coordinates to Apple’s geocoding service. Nothing is sent to the developer.',
    policyTitle7: '7. What We Do NOT Do',
    policyBody7: 'No tracking, no advertising, no third-party analytics or SDKs, no selling or sharing of data, no account, no profiling.',
    policyTitle8: '8. Diagnostic Logs',
    policyBody8: 'The app writes no logs that leave your device. If you share crash reports with Apple through iOS settings, Apple may provide anonymous reports to developers.',
    policyTitle9: '9. Data Export and Deletion',
    policyBody9: 'Sharing and exporting keep your photo’s metadata intact — the choice of where to send it is yours. Deleted photos stay 3 days in Recently Deleted. With iCloud on, deleting a photo also deletes it on your other devices. Deleting the app removes its local data.',
    policyTitle10: '10. Children',
    policyBody10: 'The app is not directed at children and collects no personal information from anyone.',
    policyTitle11: '11. Security',
    policyBody11: 'Data stays in the app’s protected storage on your device and, optionally, in your private iCloud, both protected by iOS.',
    policyTitle12: '12. This Website',
    policyBody12: 'This site is static. It sets no tracking cookies and uses no analytics. If you write through the contact form, we use your name, email and message only to reply.',
    policyTitle13: '13. Contact Information',
    policyBody13: 'Questions about privacy: <a href="mailto:hakobghlijyan@gmail.com">hakobghlijyan@gmail.com</a>.',
    canvasPrivacyTitle: '100% On-Device Native Privacy',
    canvasPrivacySub: 'Zero data tracking · Zero telemetry · SwiftData & CloudKit',
    canvasSupportTitle: 'Support & User Inquiries',
    canvasSupportSub: 'Direct developer assistance · hakobghlijyan@gmail.com',
    canvasAboutTitle: 'Filter Studio Ecosystem',
    canvasAboutSub: 'iPhone & iPad Native Architecture · Studio-Grade Editing',
    canvasCoverTitle: 'All Devices Ecosystem',
    canvasCoverSub: 'iPhone, iPad & Duo Screens · Filter Studio',
    feat1CanvasSub: 'Core Image · Live previews · Filter Studio',
    feat2CanvasSub: 'Square, Portrait, Landscape ratios · Filter Studio',
    feat3CanvasSub: 'Eight watermark styles · Custom colour · Filter Studio',
    feat4CanvasSub: 'Non-destructive storage · Original untouched · Filter Studio',
    feat5CanvasSub: 'Favourites, albums and filters · Filter Studio',
    feat6CanvasSub: 'Detailed metadata & versions · Filter Studio',
    feat7CanvasSub: 'Storage Breakdown · Private, optional and automatic · Filter Studio',
    feat8CanvasSub: 'Desktop & Lock Screen widgets · Filter Studio',
  },
  ru: {
    portfolio: 'Портфолио',
    features: 'Функции',
    screens: 'Экраны',
    guideLabel: 'Обзор',
    about: 'О приложении',
    support: 'Поддержка',
    privacy: 'Приватность',
    comingSoon: 'Скоро в App Store',
    getOnAppStore: 'Скоро в App Store',
    featuresHeader: 'Filter Studio для iPhone и iPad · Core Image и SwiftData',
    liveTitle: 'Скоро в App Store',
    liveDesc: 'Спокойный и быстрый фоторедактор для iPhone и iPad с живым превью, версиями и приватной синхронизацией через iCloud.',
    liveBadgeText: 'App Store',
    liveQr: 'Сканируйте QR',
    hoverInspect: 'Наведите на модуль для просмотра',

    feat1Title: 'Фильтры с живым просмотром',
    feat1Tag: 'Core Image',
    feat2Title: 'Обрезка, поворот и зеркало',
    feat2Tag: 'Пропорции',
    feat3Title: 'Ваш водяной знак',
    feat3Tag: 'Водяные знаки',
    feat4Title: 'Каждая правка — версия',
    feat4Tag: 'Версии',
    feat5Title: 'Фото и коллекции',
    feat5Tag: 'Галерея',
    feat6Title: 'Просмотр фото и EXIF',
    feat6Tag: 'Детали',
    feat7Title: 'Синхронизация через iCloud',
    feat7Tag: 'iCloud Sync',
    feat8Title: 'Интерактивные виджеты',
    feat8Tag: 'Виджеты',

    screenLabel: 'Витрина и экраны',
    screenTitle: 'Познакомьтесь с Filter Studio на iPhone и iPad.',

    guideTitle: 'Полный тур онбординга',
    guideDesc: '20 продуманных шагов: выбор фото, применение фильтров, настройка водяных знаков и галерея версий.',
    stepVideoTitle: 'Видео-демонстрация iPhone 18 Pro',
    stepVideoDesc: 'Посмотрите на работу живого превью фильтров, кадрирования и сохранения.',

    ideaLabel: 'Философия',
    storyTitle: 'Творчество без шума.<br>Без компромиссов.',
    storyLead: 'Быстрый и приватный фоторедактор для тех, кто ценит свои снимки и личные данные.',
    storyCardTitle: 'Ваши снимки — ваше видение.',
    storyText: 'Filter Studio предоставляет фильтры уровня Core Image, неразрушающее сохранение версий и стильные водяные знаки без регистраций, рекламы и сторонних трекеров. Все фото остаются на устройстве и синхронизируются через личный iCloud.',
    pillar1: 'Фильтры и цвет',
    pillar2: 'Водяной знак',
    pillar3: 'Версии и iCloud',
    stat1Val: '100%', stat1Lbl: 'Нативно на устройстве',
    stat2Val: '0', stat2Lbl: 'Сторонних трекеров',
    stat3Val: 'iCloud', stat3Lbl: 'Синхронизация SwiftData',

    supportTitle: 'Как мы можем помочь?',
    supportLead: 'Отправьте вопрос, сообщение об ошибке, идею или запрос по приватности. Мы отвечаем по почте.',
    talk: 'Прямая связь с разработчиком',
    supportContact: 'Заполните форму ниже или напишите разработчику на <a href="mailto:hakobghlijyan@gmail.com">hakobghlijyan@gmail.com</a>.',
    supportName: 'Имя',
    supportEmail: 'Email',
    supportMessage: 'Сообщение',
    supportSend: 'Отправить сообщение →',
    faqTitle: 'Часто задаваемые вопросы',
    faq1q: 'Что такое Filter Studio?',
    faq1a: 'Filter Studio — это быстрый и удобный фоторедактор для iPhone и iPad с фильтрами Core Image, неразрушающими версиями, кадрированием и водяными знаками.',
    faq2q: 'Загружаются ли мои фотографии на внешние серверы?',
    faq2a: 'Никогда. Вся обработка происходит исключительно локально на вашем устройстве с помощью Apple Core Image. Синхронизация работает только через ваш личный защищённый аккаунт iCloud.',
    faq3q: 'Нужно ли создавать учётную запись?',
    faq3a: 'Нет. В Filter Studio нет регистраций, логинов и паролей. Вы начинаете редактировать сразу после открытия приложения.',
    faq4q: 'Как работает неразрушающее редактирование версиями?',
    faq4a: 'Исходный снимок никогда не перезаписывается. При каждом сохранении создаётся отдельная новая версия в галерее приложения, а оригинал остаётся нетронутым.',
    faq5q: 'Какие стили водяных знаков доступны?',
    faq5a: 'Доступно 8 стилей водяного знака, использующих данные EXIF, дату и время, модель камеры либо пользовательский текст с выбором акцентного цвета.',
    faq6q: 'Какие устройства и версии iOS поддерживаются?',
    faq6a: 'Поддерживаются все модели iPhone и iPad с iOS 18.0+, iPadOS 18.0+ и новее, с оптимизацией под Super Retina и Liquid Glass.',
    faq7q: 'Как предложить улучшение или сообщить о проблеме?',
    faq7a: 'Вы можете отправить сообщение через форму на сайте или написать напрямую разработчику на hakobghlijyan@gmail.com.',

    privacyEyebrow: 'ВАША ПРИВАТНОСТЬ ВАЖНА',
    privacyTitle: 'Политика конфиденциальности',
    privacyLead: 'Обновлено: Ноябрь 2026 · Нативная архитектура iOS 18+',
    privacyBannerTitle: 'Приложение не собирает ваши личные данные',
    privacyBannerText: 'Filter Studio создан с нуля для уважения вашей цифровой приватности. Мы не требуем аккаунтов, не отслеживаем ваши действия и никогда не передаём фото на сторонние серверы.',
    policyTitle1: '1. Кратко',
    policyBody1: 'В Filter Studio нет аккаунтов, рекламы и аналитики. Ваши фото, правки и метаданные остаются на устройстве. Если включить iCloud, они синхронизируются только через ваш личный iCloud — разработчик к нему доступа не имеет.',
    policyTitle2: '2. Кто мы',
    policyBody2: 'Filter Studio разрабатывает независимый разработчик Акоб Глиджян (Hakob Ghlijyan). Контакт: <a href="mailto:hakobghlijyan@gmail.com">hakobghlijyan@gmail.com</a>.',
    policyTitle3: '3. Что хранит приложение',
    policyBody3: 'Импортированные фото, сохранённые версии, их метаданные (дата, камера, геопозиция — если она есть в фото), альбомы, избранное и настройки. Всё хранится в собственной памяти приложения на вашем устройстве.',
    policyTitle4: '4. iCloud',
    policyBody4: 'Синхронизация необязательна. Если включить, приложение использует личную базу CloudKit Apple, привязанную к вашему Apple ID. Доступ есть только у вас; у разработчика нет ни доступа, ни копии. Синхронизацию можно выключить в Настройках.',
    policyTitle5: '5. Фото',
    policyBody5: 'Фото выбираются через системный выбор фотографий. Доступ к «Фото» запрашивается один раз — только чтобы прочитать геопозицию выбранных вами фото и, если вы нажали «Сохранить в Фото», добавить готовые изображения. Приложение не сканирует и не выгружает вашу медиатеку.',
    policyTitle6: '6. Геопозиция',
    policyBody6: 'Геопозиция берётся только из метаданных, уже содержащихся в фото. Чтобы показать название места, приложение может отправить эти координаты в службу геокодирования Apple. Разработчику ничего не отправляется.',
    policyTitle7: '7. Чего мы не делаем',
    policyBody7: 'Нет слежки, рекламы, сторонней аналитики и SDK, продажи или передачи данных, аккаунтов и профилирования.',
    policyTitle8: '8. Диагностика',
    policyBody8: 'Приложение не отправляет журналы с вашего устройства. Если вы делитесь отчётами о сбоях с Apple через настройки iOS, Apple может передавать разработчикам анонимные отчёты.',
    policyTitle9: '9. Экспорт и удаление данных',
    policyBody9: '«Поделиться» и экспорт сохраняют метаданные фото — куда отправить, решаете вы. Удалённые фото 3 дня хранятся в «Недавно удалённых». При включённом iCloud удаление фото удаляет его и на других ваших устройствах. Удаление приложения стирает его локальные данные.',
    policyTitle10: '10. Дети',
    policyBody10: 'Приложение не предназначено для детей и не собирает личную информацию ни у кого.',
    policyTitle11: '11. Безопасность',
    policyBody11: 'Данные лежат в защищённой памяти приложения на устройстве и, по желанию, в вашем личном iCloud — оба защищены iOS.',
    policyTitle12: '12. Этот сайт',
    policyBody12: 'Сайт статический. Он не ставит отслеживающие cookie и не использует аналитику. Если вы пишете через форму, имя, email и сообщение используются только для ответа.',
    policyTitle13: '13. Контакты',
    policyBody13: 'Вопросы о приватности: <a href="mailto:hakobghlijyan@gmail.com">hakobghlijyan@gmail.com</a>.',
    canvasPrivacyTitle: '100% нативная приватность на устройстве',
    canvasPrivacySub: 'Ноль трекинга · Ноль телеметрии · SwiftData и CloudKit',
    canvasSupportTitle: 'Поддержка и вопросы пользователей',
    canvasSupportSub: 'Прямая помощь разработчика · hakobghlijyan@gmail.com',
    canvasAboutTitle: 'Экосистема Filter Studio',
    canvasAboutSub: 'Нативная архитектура iPhone и iPad · Студийная обработка',
    canvasCoverTitle: 'Экосистема всех устройств',
    canvasCoverSub: 'Экраны iPhone, iPad и Duo · Filter Studio',
    feat1CanvasSub: 'Core Image · Живой предпросмотр · Filter Studio',
    feat2CanvasSub: 'Квадрат, портрет, ландшафт · Filter Studio',
    feat3CanvasSub: 'Восемь стилей водяного знака · Свой цвет · Filter Studio',
    feat4CanvasSub: 'Неразрушающее хранение · Оригинал нетронут · Filter Studio',
    feat5CanvasSub: 'Избранное, альбомы и фильтры · Filter Studio',
    feat6CanvasSub: 'Подробные метаданные и версии · Filter Studio',
    feat7CanvasSub: 'Аналитика памяти · Приватно, опционально и авто · Filter Studio',
    feat8CanvasSub: 'Виджеты экрана «Домой» и экрана блокировки · Filter Studio',
  },
  fr: {
    portfolio: 'Portfolio',
    features: 'Fonctions',
    screens: 'Captures',
    guideLabel: 'Aperçu',
    about: 'À propos',
    support: 'Support',
    privacy: 'Confidentialité',
    comingSoon: 'Bientôt disponible',
    getOnAppStore: 'Bientôt sur l’App Store',
    featuresHeader: 'Filter Studio pour iPhone et iPad · Core Image & SwiftData',
    liveTitle: 'Bientôt sur l’App Store',
    liveDesc: 'Un éditeur photo rapide et serein pour iPhone et iPad avec aperçus en direct, versions et synchronisation iCloud privée.',
    liveBadgeText: 'App Store',
    liveQr: 'Scannez le QR',
    hoverInspect: 'Survolez un module pour inspecter',

    feat1Title: 'Filtres en aperçu direct',
    feat1Tag: 'Core Image',
    feat2Title: 'Recadrer, pivoter, inverser',
    feat2Tag: 'Formats',
    feat3Title: 'Votre filigrane, votre couleur',
    feat3Tag: 'Filigranes',
    feat4Title: 'Chaque retouche, une version',
    feat4Tag: 'Versions',
    feat5Title: 'Photos et collections',
    feat5Tag: 'Galerie',
    feat6Title: 'Vue photo complète et EXIF',
    feat6Tag: 'Inspecteur',
    feat7Title: 'Synchronisé via iCloud',
    feat7Tag: 'iCloud Sync',
    feat8Title: 'Widgets interactifs',
    feat8Tag: 'Widgets',

    screenLabel: 'Galerie & Écrans',
    screenTitle: 'Découvrez Filter Studio sur iPhone et iPad.',

    guideTitle: 'Visite guidée complète',
    guideDesc: "20 étapes soigneusement conçues pour maîtriser l'édition, les filtres et vos versions.",
    stepVideoTitle: 'Démo vidéo iPhone 18 Pro',
    stepVideoDesc: "Aperçu en temps réel de l'application des filtres et de la sauvegarde.",

    ideaLabel: 'La philosophie',
    storyTitle: 'Créativité sereine.<br>Sans compromis.',
    storyLead: 'Un éditeur photo rapide et respectueux de votre vie privée.',
    storyCardTitle: 'Vos photos, votre regard.',
    storyText: 'Filter Studio propose des filtres Core Image professionnels, un historique de versions non destructif et des filigranes personnalisés sans compte, sans pub ni traçage.',
    pillar1: 'Filtres & Teinte',
    pillar2: 'Filigrane',
    pillar3: 'Versions & Sync',
    stat1Val: '100%', stat1Lbl: 'Natif sur l’appareil',
    stat2Val: '0', stat2Lbl: 'Traqueurs de données',
    stat3Val: 'iCloud', stat3Lbl: 'Sync SwiftData privée',

    supportTitle: 'Comment pouvons-nous vous aider ?',
    supportLead: 'Envoyez une question, un rapport de bug ou une suggestion.',
    talk: 'Contact développeur',
    supportContact: 'Utilisez le formulaire ou écrivez à <a href="mailto:hakobghlijyan@gmail.com">hakobghlijyan@gmail.com</a>.',
    supportName: 'Nom',
    supportEmail: 'E-mail',
    supportMessage: 'Message',
    supportSend: 'Envoyer le message →',
    faqTitle: 'Foire Aux Questions',
    faq1q: "Qu'est-ce que Filter Studio ?",
    faq1a: "Un éditeur photo conçu pour iOS avec filtres Core Image en direct et sauvegarde par versions.",
    faq2q: "Mes photos sont-elles téléchargées sur un serveur ?",
    faq2a: "Non, tout le traitement reste 100% local sur votre appareil.",
    faq3q: "Ai-je besoin d'un compte ?",
    faq3a: "Aucun compte ni inscription requis.",
    faq4q: "Comment fonctionne l'enregistrement par versions ?",
    faq4a: "L'original reste intact ; chaque modification crée une nouvelle version.",
    faq5q: 'Quels filigranes sont proposés ?',
    faq5a: 'Huit styles de filigranes générés à partir des données EXIF ou de votre propre texte.',
    faq6q: 'Quels appareils sont compatibles ?',
    faq6a: 'Tous les modèles iPhone et iPad sous iOS 18.0+ ou iPadOS 18.0+.',
    faq7q: "Comment contacter le support ?",
    faq7a: "Via le formulaire ci-dessous ou par email à hakobghlijyan@gmail.com.",

    privacyEyebrow: 'VOTRE VIE PRIVÉE COMPTE',
    privacyTitle: 'Politique de confidentialité',
    privacyLead: 'Dernière mise à jour : Novembre 2026 · Architecture native iOS 18+',
    privacyBannerTitle: 'L’app ne collecte pas vos données personnelles',
    privacyBannerText: 'Filter Studio a été conçu dès l\'origine pour respecter votre confidentialité numérique. Nous n\'exigeons aucun compte, ne suivons pas votre activité et n\'envoyons jamais vos photos à des serveurs tiers.',
    policyTitle1: '1. Résumé',
    policyBody1: 'Filter Studio n’a ni compte, ni publicité, ni outil d’analyse. Vos photos, retouches et métadonnées restent sur votre appareil. Si vous activez iCloud, elles se synchronisent uniquement via votre iCloud privé, auquel le développeur n’a pas accès.',
    policyTitle2: '2. Qui sommes-nous',
    policyBody2: 'Filter Studio est développé par Hakob Ghlijyan, développeur indépendant. Contact : <a href="mailto:hakobghlijyan@gmail.com">hakobghlijyan@gmail.com</a>.',
    policyTitle3: '3. Ce que l’app stocke',
    policyBody3: 'Les photos importées, les versions enregistrées, leurs métadonnées (date, appareil, position si la photo en contient), les albums, les favoris et vos réglages. Tout est stocké dans l’espace propre à l’app sur votre appareil.',
    policyTitle4: '4. iCloud',
    policyBody4: 'La synchronisation est facultative. Activée, l’app utilise la base CloudKit privée d’Apple liée à votre identifiant Apple. Vous seul y avez accès ; le développeur n’y a ni accès ni copie. Vous pouvez la désactiver dans Réglages.',
    policyTitle5: '5. Photos',
    policyBody5: 'Vous choisissez les photos avec le sélecteur système. L’app demande l’accès à Photos une seule fois, uniquement pour lire la position des photos choisies et, si vous touchez « Enregistrer dans Photos », pour ajouter les images retouchées. Elle n’analyse ni n’envoie jamais votre photothèque.',
    policyTitle6: '6. Position',
    policyBody6: 'La position provient uniquement des métadonnées déjà présentes dans la photo. Pour afficher un nom de lieu, l’app peut envoyer ces coordonnées au service de géocodage d’Apple. Rien n’est envoyé au développeur.',
    policyTitle7: '7. Ce que nous ne faisons pas',
    policyBody7: 'Aucun suivi, aucune publicité, aucun SDK ou outil d’analyse tiers, aucune vente ni partage de données, aucun compte, aucun profilage.',
    policyTitle8: '8. Journaux de diagnostic',
    policyBody8: 'L’app n’envoie aucun journal hors de votre appareil. Si vous partagez des rapports de plantage avec Apple dans les réglages iOS, Apple peut fournir des rapports anonymes aux développeurs.',
    policyTitle9: '9. Export et suppression des données',
    policyBody9: 'Le partage et l’export conservent les métadonnées de la photo ; vous choisissez la destination. Les photos supprimées restent 3 jours dans « Supprimés récemment ». Avec iCloud, supprimer une photo la supprime aussi sur vos autres appareils. Supprimer l’app efface ses données locales.',
    policyTitle10: '10. Enfants',
    policyBody10: 'L’app ne s’adresse pas aux enfants et ne collecte d’informations personnelles auprès de personne.',
    policyTitle11: '11. Sécurité',
    policyBody11: 'Les données restent dans l’espace protégé de l’app sur votre appareil et, en option, dans votre iCloud privé, tous deux protégés par iOS.',
    policyTitle12: '12. Ce site web',
    policyBody12: 'Ce site est statique. Il ne dépose aucun cookie de suivi et n’utilise aucun outil d’analyse. Si vous écrivez via le formulaire, votre nom, e-mail et message ne servent qu’à vous répondre.',
    policyTitle13: '13. Contact',
    policyBody13: 'Questions sur la confidentialité : <a href="mailto:hakobghlijyan@gmail.com">hakobghlijyan@gmail.com</a>.',
    canvasPrivacyTitle: "Confidentialité 100% native sur l'appareil",
    canvasPrivacySub: 'Zéro suivi · Zéro télémétrie · SwiftData et CloudKit',
    canvasSupportTitle: 'Assistance et demandes des utilisateurs',
    canvasSupportSub: 'Assistance directe du développeur · hakobghlijyan@gmail.com',
    canvasAboutTitle: 'Écosystème Filter Studio',
    canvasAboutSub: 'Architecture native iPhone et iPad · Retouche de qualité studio',
    canvasCoverTitle: 'Écosystème tous appareils',
    canvasCoverSub: 'Écrans iPhone, iPad et Duo · Filter Studio',
    feat1CanvasSub: 'Core Image · Aperçus en direct · Filter Studio',
    feat2CanvasSub: 'Formats carré, portrait et paysage · Filter Studio',
    feat3CanvasSub: 'Huit styles de filigrane · Couleur personnalisée · Filter Studio',
    feat4CanvasSub: 'Stockage non destructif · Original intact · Filter Studio',
    feat5CanvasSub: 'Favoris, albums et filtres · Filter Studio',
    feat6CanvasSub: 'Métadonnées детаillées et versions · Filter Studio',
    feat7CanvasSub: 'Détail du stockage · Privé, optionnel et automatique · Filter Studio',
    feat8CanvasSub: "Widgets pour l'écran d'accueil et de verrouillage · Filter Studio",
  },
  de: {
    portfolio: 'Portfolio',
    features: 'Funktionen',
    screens: 'Bildschirme',
    guideLabel: 'Übersicht',
    about: 'Über die App',
    support: 'Support',
    privacy: 'Datenschutz',
    comingSoon: 'Demnächst verfügbar',
    getOnAppStore: 'Demnächst im App Store',
    featuresHeader: 'Filter Studio für iPhone & iPad · Core Image & SwiftData',
    liveTitle: 'Demnächst im App Store',
    liveDesc: 'Ein ruhiger, schneller Foto-Editor für iPhone und iPad mit Live-Vorschau, Versionen und privater iCloud-Synchronisation.',
    liveBadgeText: 'App Store',
    liveQr: 'QR scannen',
    hoverInspect: 'Modul berühren zum Inspizieren',

    feat1Title: 'Filter mit Live-Vorschau',
    feat1Tag: 'Core Image',
    feat2Title: 'Zuschneiden, drehen, spiegeln',
    feat2Tag: 'Formate',
    feat3Title: 'Wasserzeichen in deiner Farbe',
    feat3Tag: 'Wasserzeichen',
    feat4Title: 'Jede Änderung ist eine Version',
    feat4Tag: 'Versionen',
    feat5Title: 'Fotos & Sammlungen',
    feat5Tag: 'Mediathek',
    feat6Title: 'Vollständige Fotoansicht & EXIF',
    feat6Tag: 'Inspektor',
    feat7Title: 'Sync über deine iCloud',
    feat7Tag: 'iCloud Sync',
    feat8Title: 'Interaktive Widgets',
    feat8Tag: 'Widgets',

    screenLabel: 'Galerie & Screens',
    screenTitle: 'Entdecke Filter Studio auf iPhone und iPad.',

    guideTitle: 'Vollständige Onboarding-Tour',
    guideDesc: '20 durchdachte Schritte von der Fotoauswahl bis zur Versionsverwaltung.',
    stepVideoTitle: 'iPhone 18 Pro Video-Demo',
    stepVideoDesc: 'Erlebe Filter in Echtzeit und das nahtlose Speichern.',

    ideaLabel: 'Die Philosophie',
    storyTitle: 'Kreativität in Ruhe.<br>Ohne Kompromisse.',
    storyLead: 'Ein schneller, privater Foto-Editor für Menschen, die Wert auf ihre Bilder legen.',
    storyCardTitle: 'Deine Fotos, deine Vision.',
    storyText: 'Filter Studio bietet professionelle Core-Image-Filter, verlustfreie Versionierung und anpassbare Wasserzeichen ohne Konten, Tracking oder Werbung.',
    pillar1: 'Filter & Feinabstimmung',
    pillar2: 'Wasserzeichen',
    pillar3: 'Versionen & iCloud',
    stat1Val: '100%', stat1Lbl: 'Lokal auf dem Gerät',
    stat2Val: '0', stat2Lbl: 'Daten-Tracker',
    stat3Val: 'iCloud', stat3Lbl: 'Private SwiftData-Sync',

    supportTitle: 'Wie können wir helfen?',
    supportLead: 'Sende eine Frage, einen Fehlerbericht oder Feedback per E-Mail.',
    talk: 'Entwicklerkontakt',
    supportContact: 'Nutze das Formular oder schreibe an <a href="mailto:hakobghlijyan@gmail.com">hakobghlijyan@gmail.com</a>.',
    supportName: 'Name',
    supportEmail: 'E-Mail',
    supportMessage: 'Nachricht',
    supportSend: 'Nachricht senden →',
    faqTitle: 'Häufig gestellte Fragen',
    faq1q: 'Was ist Filter Studio?',
    faq1a: 'Ein intuitiver Foto-Editor für iOS mit Live-Filtern und verlustfreier Speicherung.',
    faq2q: 'Werden meine Fotos hochgeladen?',
    faq2a: 'Nein, alle Bearbeitungen verbleiben vollständig lokal auf deinem Gerät.',
    faq3q: 'Wird ein Account benötigt?',
    faq3a: 'Nein, kein Account oder Login erforderlich.',
    faq4q: 'Wie funktionieren Versionen?',
    faq4a: 'Das Original bleibt unverändert; jeder Speicherstand erzeugt eine neue Version.',
    faq5q: 'Welche Wasserzeichen gibt es?',
    faq5a: 'Acht verschiedene Stile basierend auf EXIF-Daten oder individuellem Text.',
    faq6q: 'Welche Geräte werden unterstützt?',
    faq6a: 'Alle iPhone- und iPad-Modelle mit iOS 18.0+ oder iPadOS 18.0+.',
    faq7q: 'Wie erreiche ich den Support?',
    faq7a: 'Über das Formular oder direkt per E-Mail an hakobghlijyan@gmail.com.',

    privacyEyebrow: 'DEINE PRIVATSPHÄRE ZÄHLT',
    privacyTitle: 'Datenschutzerklärung',
    privacyLead: 'Zuletzt aktualisiert: November 2026 · Native iOS 18+ Architektur',
    privacyBannerTitle: 'Die App erfasst deine persönlichen Daten nicht',
    privacyBannerText: 'Filter Studio wurde von Grund auf so entwickelt, dass deine digitale Privatsphäre respektiert wird. Wir verlangen keine Konten, verfolgen deine Aktivitäten nicht und übertragen deine Fotos niemals auf Server Dritter.',
    policyTitle1: '1. Zusammenfassung',
    policyBody1: 'Filter Studio hat keine Konten, keine Werbung und keine Analyse. Deine Fotos, Bearbeitungen und Metadaten bleiben auf deinem Gerät. Wenn du iCloud aktivierst, werden sie nur über deine private iCloud synchronisiert, auf die der Entwickler keinen Zugriff hat.',
    policyTitle2: '2. Wer wir sind',
    policyBody2: 'Filter Studio wird von Hakob Ghlijyan entwickelt, einem unabhängigen Entwickler. Kontakt: <a href="mailto:hakobghlijyan@gmail.com">hakobghlijyan@gmail.com</a>.',
    policyTitle3: '3. Was die App speichert',
    policyBody3: 'Importierte Fotos, gespeicherte Versionen, deren Metadaten (Datum, Kamera, Standort, falls im Foto vorhanden), Alben, Favoriten und deine Einstellungen. Alles liegt im App-eigenen Speicher auf deinem Gerät.',
    policyTitle4: '4. iCloud',
    policyBody4: 'Die Synchronisierung ist optional. Wenn aktiviert, nutzt die App Apples private CloudKit-Datenbank, die an deine Apple-ID gebunden ist. Nur du hast Zugriff; der Entwickler hat weder Zugriff noch eine Kopie. Du kannst sie in den Einstellungen ausschalten.',
    policyTitle5: '5. Fotos',
    policyBody5: 'Du wählst Fotos mit der System-Fotoauswahl. Die App fragt einmal nach Zugriff auf Fotos, nur um den Standort der gewählten Fotos zu lesen und, wenn du „In Fotos sichern“ tippst, bearbeitete Bilder hinzuzufügen. Sie durchsucht oder lädt nie deine Mediathek hoch.',
    policyTitle6: '6. Standort',
    policyBody6: 'Der Standort wird nur aus den Metadaten gelesen, die bereits im Foto stehen. Um einen Ortsnamen anzuzeigen, kann die App diese Koordinaten an Apples Geocoding-Dienst senden. An den Entwickler wird nichts gesendet.',
    policyTitle7: '7. Was wir nicht tun',
    policyBody7: 'Kein Tracking, keine Werbung, keine Analyse- oder Drittanbieter-SDKs, kein Verkauf oder Weitergabe von Daten, kein Konto, kein Profiling.',
    policyTitle8: '8. Diagnoseprotokolle',
    policyBody8: 'Die App sendet keine Protokolle von deinem Gerät. Wenn du in den iOS-Einstellungen Absturzberichte mit Apple teilst, kann Apple Entwicklern anonyme Berichte bereitstellen.',
    policyTitle9: '9. Datenexport und Löschung',
    policyBody9: 'Teilen und Exportieren behalten die Metadaten deines Fotos bei; das Ziel wählst du. Gelöschte Fotos bleiben 3 Tage in „Zuletzt gelöscht“. Bei aktiver iCloud wird ein gelöschtes Foto auch auf deinen anderen Geräten gelöscht. Das Löschen der App entfernt ihre lokalen Daten.',
    policyTitle10: '10. Kinder',
    policyBody10: 'Die App richtet sich nicht an Kinder und erfasst von niemandem persönliche Informationen.',
    policyTitle11: '11. Sicherheit',
    policyBody11: 'Die Daten bleiben im geschützten App-Speicher auf deinem Gerät und optional in deiner privaten iCloud, beides durch iOS geschützt.',
    policyTitle12: '12. Diese Website',
    policyBody12: 'Diese Seite ist statisch. Sie setzt keine Tracking-Cookies und nutzt keine Analyse. Wenn du das Kontaktformular verwendest, nutzen wir Name, E-Mail und Nachricht nur für die Antwort.',
    policyTitle13: '13. Kontakt',
    policyBody13: 'Fragen zum Datenschutz: <a href="mailto:hakobghlijyan@gmail.com">hakobghlijyan@gmail.com</a>.',
    canvasPrivacyTitle: '100% native Privatsphäre auf dem Gerät',
    canvasPrivacySub: 'Null Tracking · Null Telemetrie · SwiftData und CloudKit',
    canvasSupportTitle: 'Support & Benutzeranfragen',
    canvasSupportSub: 'Direkte Entwicklerhilfe · hakobghlijyan@gmail.com',
    canvasAboutTitle: 'Filter Studio Ökosystem',
    canvasAboutSub: 'Native iPhone- und iPad-Architektur · Studio-Bildbearbeitung',
    canvasCoverTitle: 'Ökosystem aller Geräte',
    canvasCoverSub: 'iPhone-, iPad- und Duo-Bildschirme · Filter Studio',
    feat1CanvasSub: 'Core Image · Live-Vorschau · Filter Studio',
    feat2CanvasSub: 'Quadrat-, Porträt- und Querformat · Filter Studio',
    feat3CanvasSub: 'Acht Wasserzeichen-Stile · Eigene Farbe · Filter Studio',
    feat4CanvasSub: 'Nicht-destruktive Speicherung · Original unberührt · Filter Studio',
    feat5CanvasSub: 'Favoriten, Alben und Filter · Filter Studio',
    feat6CanvasSub: 'Detaillierte Metadaten & Versionen · Filter Studio',
    feat7CanvasSub: 'Speicherübersicht · Privat, optional und automatisch · Filter Studio',
    feat8CanvasSub: 'Widgets für Home- und Sperrbildschirm · Filter Studio',
  },
  es: {
    portfolio: 'Portafolio',
    features: 'Funciones',
    screens: 'Capturas',
    guideLabel: 'Resumen',
    about: 'Acerca de',
    support: 'Soporte',
    privacy: 'Privacidad',
    comingSoon: 'Próximamente',
    getOnAppStore: 'Próximamente en el App Store',
    featuresHeader: 'Filter Studio para iPhone y iPad · Core Image & SwiftData',
    liveTitle: 'Próximamente en el App Store',
    liveDesc: 'Un editor de fotos ágil y privado para iPhone y iPad con vista previa en vivo, versiones y sincronización en iCloud.',
    liveBadgeText: 'App Store',
    liveQr: 'Escanear QR',
    hoverInspect: 'Pasa el cursor para inspeccionar',

    feat1Title: 'Filtros con vista previa',
    feat1Tag: 'Core Image',
    feat2Title: 'Recorta, gira, voltea',
    feat2Tag: 'Formatos',
    feat3Title: 'Tu marca de agua, tu color',
    feat3Tag: 'Marcas de agua',
    feat4Title: 'Cada edición, una versión',
    feat4Tag: 'Versiones',
    feat5Title: 'Fotos y colecciones',
    feat5Tag: 'Galería',
    feat6Title: 'Vista completa de foto y EXIF',
    feat6Tag: 'Inspector',
    feat7Title: 'Sincroniza con iCloud',
    feat7Tag: 'iCloud Sync',
    feat8Title: 'Widgets interactivos',
    feat8Tag: 'Widgets',

    screenLabel: 'Galería y capturas',
    screenTitle: 'Descubre Filter Studio en iPhone y iPad.',

    guideTitle: 'Guía de inicio completa',
    guideDesc: '20 pasos detallados para dominar la edición, filtros y versiones.',
    stepVideoTitle: 'Demostración en video iPhone 18 Pro',
    stepVideoDesc: 'Comprueba el flujo de filtros en tiempo real y el guardado seguro.',

    ideaLabel: 'La filosofía',
    storyTitle: 'Creatividad serena.<br>Sin concesiones.',
    storyLead: 'Un editor fotográfico rápido y respetuoso con tu información personal.',
    storyCardTitle: 'Tus fotos, tu creatividad.',
    storyText: 'Filter Studio ofrece filtros Core Image de estudio, guardado no destructivo y marcas de agua personalizadas sin cuentas, publicidad ni rastreadores.',
    pillar1: 'Filtros y color',
    pillar2: 'Marca de agua',
    pillar3: 'Versiones y Sync',
    stat1Val: '100%', stat1Lbl: 'Nativo en el dispositivo',
    stat2Val: '0', stat2Lbl: 'Rastreadores de datos',
    stat3Val: 'iCloud', stat3Lbl: 'Sync SwiftData privada',

    supportTitle: '¿Cómo podemos ayudarte?',
    supportLead: 'Envíanos tus preguntas, errores o sugerencias por correo electrónico.',
    talk: 'Contacto con el desarrollador',
    supportContact: 'Utiliza el formulario o escribe a <a href="mailto:hakobghlijyan@gmail.com">hakobghlijyan@gmail.com</a>.',
    supportName: 'Nombre',
    supportEmail: 'Correo',
    supportMessage: 'Mensaje',
    supportSend: 'Enviar mensaje →',
    faqTitle: 'Preguntas Frecuentes',
    faq1q: '¿Qué es Filter Studio?',
    faq1a: 'Un editor de fotos para iOS con filtros Core Image y guardado por versiones.',
    faq2q: '¿Se suben mis fotos a servidores?',
    faq2a: 'No, todo el procesamiento se realiza íntegramente en tu dispositivo.',
    faq3q: '¿Necesito registrarme?',
    faq3a: 'No es necesario crear cuentas ni ingresar datos de acceso.',
    faq4q: '¿Cómo funciona el guardado por versiones?',
    faq4a: 'El archivo original se mantiene intacto; cada guardado crea una nueva versión.',
    faq5q: '¿Qué marcas de agua están disponibles?',
    faq5a: 'Ocho estilos con datos EXIF, fecha o texto personalizado.',
    faq6q: '¿Qué dispositivos son compatibles?',
    faq6a: 'Cualquier iPhone o iPad con iOS 18.0+ o iPadOS 18.0+.',
    faq7q: '¿Cómo contactar al desarrollador?',
    faq7a: 'A través del formulario web o en hakobghlijyan@gmail.com.',

    privacyEyebrow: 'TU PRIVACIDAD IMPORTA',
    privacyTitle: 'Política de privacidad',
    privacyLead: 'Última actualización: Noviembre 2026 · Arquitectura nativa iOS 18+',
    privacyBannerTitle: 'La app no recopila tus datos personales',
    privacyBannerText: 'Filter Studio se diseñó desde cero para respetar tu privacidad digital. No exigimos cuentas, no rastreamos tu actividad y nunca enviamos tus fotos a servidores de terceros.',
    policyTitle1: '1. Resumen',
    policyBody1: 'Filter Studio no tiene cuentas, anuncios ni analítica. Tus fotos, ediciones y metadatos se quedan en tu dispositivo. Si activas iCloud, se sincronizan solo a través de tu iCloud privado, al que el desarrollador no tiene acceso.',
    policyTitle2: '2. Quiénes somos',
    policyBody2: 'Filter Studio lo desarrolla Hakob Ghlijyan, desarrollador independiente. Contacto: <a href="mailto:hakobghlijyan@gmail.com">hakobghlijyan@gmail.com</a>.',
    policyTitle3: '3. Qué almacena la app',
    policyBody3: 'Las fotos que importas, las versiones que guardas, sus metadatos (fecha, cámara, ubicación si la foto la incluye), álbumes, favoritas y tus ajustes. Todo se guarda en el almacenamiento propio de la app en tu dispositivo.',
    policyTitle4: '4. iCloud',
    policyBody4: 'La sincronización es opcional. Si la activas, la app usa la base de datos privada de CloudKit de Apple vinculada a tu ID de Apple. Solo tú accedes a ella; el desarrollador no tiene acceso ni copia. Puedes desactivarla en Ajustes.',
    policyTitle5: '5. Fotos',
    policyBody5: 'Eliges las fotos con el selector del sistema. La app pide acceso a Fotos una sola vez, solo para leer la ubicación de las fotos que elegiste y, если pulsas Guardar en Fotos, para añadir las imágenes editadas. Nunca analiza ni sube tu biblioteca.',
    policyTitle6: '6. Ubicación',
    policyBody6: 'La ubicación se lee solo de los metadatos que ya contiene la foto. Para mostrar el nombre del lugar, la app puede enviar esas coordenadas al servicio de geocodificación de Apple. No se envía nada al desarrollador.',
    policyTitle7: '7. Lo que no hacemos',
    policyBody7: 'Sin rastreo, sin publicidad, sin analítica ni SDK de terceros, sin venta ni cesión de datos, sin cuenta y sin perfiles.',
    policyTitle8: '8. Registros de diagnóstico',
    policyBody8: 'La app no envía registros fuera de tu dispositivo. Si compartes informes de fallos con Apple en los ajustes de iOS, Apple puede facilitar informes anónimos a los desarrolladores.',
    policyTitle9: '9. Exportación y eliminación de datos',
    policyBody9: 'Compartir y exportar conservan los metadatos de la foto; tú eliges el destino. Las fotos eliminadas permanecen 3 días en Eliminados recientemente. Con iCloud activo, eliminar una foto también la elimina en tus otros dispositivos. Borrar la app elimina sus datos locales.',
    policyTitle10: '10. Menores',
    policyBody10: 'La app no está dirigida a menores y no recopila información personal de nadie.',
    policyTitle11: '11. Seguridad',
    policyBody11: 'Los datos permanecen en el almacenamiento protegido de la app en tu dispositivo y, opcionalmente, en tu iCloud privado; ambos protegidos por iOS.',
    policyTitle12: '12. Este sitio web',
    policyBody12: 'Este sitio es estático. No usa cookies de rastreo ni analítica. Si escribes por el formulario, usamos tu nombre, correo y mensaje solo para responderte.',
    policyTitle13: '13. Contacto',
    policyBody13: 'Preguntas sobre privacidad: <a href="mailto:hakobghlijyan@gmail.com">hakobghlijyan@gmail.com</a>.',
    canvasPrivacyTitle: 'Privacidad 100% nativa en el dispositivo',
    canvasPrivacySub: 'Cero rastreo · Cero telemetría · SwiftData y CloudKit',
    canvasSupportTitle: 'Soporte y consultas de usuarios',
    canvasSupportSub: 'Asistencia directa del desarrollador · hakobghlijyan@gmail.com',
    canvasAboutTitle: 'Ecosistema Filter Studio',
    canvasAboutSub: 'Arquitectura nativa de iPhone y iPad · Edición de nivel de estudio',
    canvasCoverTitle: 'Ecosistema de todos los dispositivos',
    canvasCoverSub: 'Pantallas iPhone, iPad y Duo · Filter Studio',
    feat1CanvasSub: 'Core Image · Vista previa en directo · Filter Studio',
    feat2CanvasSub: 'Formatos cuadrado, vertical y horizontal · Filter Studio',
    feat3CanvasSub: 'Ocho estilos de marca de agua · Color personalizado · Filter Studio',
    feat4CanvasSub: 'Almacenamiento no destructivo · Original intacto · Filter Studio',
    feat5CanvasSub: 'Favoritos, álbumes y filtros · Filter Studio',
    feat6CanvasSub: 'Metadatos detallados y versiones · Filter Studio',
    feat7CanvasSub: 'Desglose de almacenamiento · Privado, opcional y automático · Filter Studio',
    feat8CanvasSub: 'Widgets para pantalla de inicio y bloqueo · Filter Studio',
  },
  it: {
    portfolio: 'Portfolio',
    features: 'Funzioni',
    screens: 'Schermate',
    guideLabel: 'Panoramica',
    about: 'Info',
    support: 'Supporto',
    privacy: 'Privacy',
    comingSoon: 'In arrivo',
    getOnAppStore: 'In arrivo su App Store',
    featuresHeader: 'Filter Studio per iPhone e iPad · Core Image & SwiftData',
    liveTitle: 'In arrivo su App Store',
    liveDesc: 'Un editor fotografico fluido e riservato per iPhone e iPad con anteprime dal vivo, versioni e sincronizzazione iCloud.',
    liveBadgeText: 'App Store',
    liveQr: 'Scansiona QR',
    hoverInspect: 'Passa il cursore per ispezionare',

    feat1Title: 'Filtri con anteprima live',
    feat1Tag: 'Core Image',
    feat2Title: 'Ritaglia, ruota, specchia',
    feat2Tag: 'Formati',
    feat3Title: 'Filigrana del tuo colore',
    feat3Tag: 'Filigrana',
    feat4Title: 'Ogni modifica è una versione',
    feat4Tag: 'Versioni',
    feat5Title: 'Foto e raccolte',
    feat5Tag: 'Libreria',
    feat6Title: 'Vista foto completa ed EXIF',
    feat6Tag: 'Inspector',
    feat7Title: 'Sincronizza con iCloud',
    feat7Tag: 'iCloud Sync',
    feat8Title: 'Widget interattivi',
    feat8Tag: 'Widget',

    screenLabel: 'Galleria & Schermate',
    screenTitle: 'Scopri Filter Studio su iPhone e iPad.',

    guideTitle: "Tour completo dell'app",
    guideDesc: '20 passaggi dettagliati per scoprire filtri, ritaglio e gestione versioni.',
    stepVideoTitle: 'Video dimostrativo iPhone 18 Pro',
    stepVideoDesc: "Guarda in tempo reale l'anteprima dei filtri e il salvataggio.",

    ideaLabel: 'La filosofia',
    storyTitle: 'Creatività serena.<br>Senza compromessi.',
    storyLead: 'Un editor fotografico rapido e privato per chi tiene alle proprie immagini.',
    storyCardTitle: 'Le tue foto, la tua visione.',
    storyText: 'Filter Studio offre filtri Core Image professionali, storico versioni non distruttivo e filigrane senza account né tracciamenti.',
    pillar1: 'Filtri & Ritocco',
    pillar2: 'Filigrana',
    pillar3: 'Versioni & iCloud',
    stat1Val: '100%', stat1Lbl: 'Nativo su dispositivo',
    stat2Val: '0', stat2Lbl: 'Tracker di terze parti',
    stat3Val: 'iCloud', stat3Lbl: 'Sync SwiftData privata',

    supportTitle: 'Come possiamo aiutarti?',
    supportLead: 'Invia una domanda, segnalazione bug o suggerimento via email.',
    talk: 'Contatto sviluppatore',
    supportContact: 'Usa il modulo sottostante o scrivi a <a href="mailto:hakobghlijyan@gmail.com">hakobghlijyan@gmail.com</a>.',
    supportName: 'Nome',
    supportEmail: 'Email',
    supportMessage: 'Messaggio',
    supportSend: 'Invia messaggio →',
    faqTitle: 'Domande frequenti',
    faq1q: "Cos'è Filter Studio?",
    faq1a: 'Un raffinato editor di foto per iOS con filtri Core Image e salvataggio per versioni.',
    faq2q: 'Le mie foto vengono caricate online?',
    faq2a: "No, l'elaborazione avviene esclusivamente sul tuo dispositivo.",
    faq3q: 'Serve un account?',
    faq3a: 'Nessuna registrazione o login necessario.',
    faq4q: 'Come funzionano le versioni?',
    faq4a: "L'originale non viene mai sovrascritto; ogni salvataggio è una nuova versione.",
    faq5q: 'Quali filigrane sono incluse?',
    faq5a: 'Otto stili con metadati EXIF, data o testo personalizzato.',
    faq6q: 'Quali dispositivi sono supportati?',
    faq6a: 'Tutti i modelli iPhone e iPad con iOS 18.0+ o iPadOS 18.0+.',
    faq7q: 'Come contattare il supporto?',
    faq7a: "Tramite il form o all'indirizzo hakobghlijyan@gmail.com.",

    privacyEyebrow: 'LA TUA PRIVACY CONTA',
    privacyTitle: 'Informativa sulla privacy',
    privacyLead: 'Ultimo aggiornamento: Novembre 2026 · Architettura nativa iOS 18+',
    privacyBannerTitle: 'L’app non raccoglie i tuoi dati personali',
    privacyBannerText: 'Filter Studio è stato progettato fin dall\'inizio per rispettare la tua privacy digitale. Non richiediamo account, non tracciamo la tua attività e non inviamo mai le tue foto a server di terze parti.',
    policyTitle1: '1. In breve',
    policyBody1: 'Filter Studio non ha account, pubblicità né analisi. Foto, modifiche e metadati restano sul tuo dispositivo. Se attivi iCloud, si sincronizzano solo tramite il tuo iCloud privato, a cui lo sviluppatore non ha accesso.',
    policyTitle2: '2. Chi siamo',
    policyBody2: 'Filter Studio è sviluppata da Hakob Ghlijyan, sviluppatore indipendente. Contatto: <a href="mailto:hakobghlijyan@gmail.com">hakobghlijyan@gmail.com</a>.',
    policyTitle3: '3. Cosa memorizza l’app',
    policyBody3: 'Le foto importate, le versioni salvate, i loro metadati (data, fotocamera, posizione se presente nella foto), album, preferiti e impostazioni. Tutto è nella memoria dell’app sul tuo dispositivo.',
    policyTitle4: '4. iCloud',
    policyBody4: 'La sincronizzazione è facoltativa. Se attiva, l’app usa il database CloudKit privato di Apple collegato al tuo ID Apple. Solo tu puoi accedervi; lo sviluppatore non ha né accesso né copie. Puoi disattivarla in Impostazioni.',
    policyTitle5: '5. Foto',
    policyBody5: 'Scegli le foto con il selettore di sistema. L’app chiede l’accesso a Foto una sola volta, solo per leggere la posizione delle foto scelte e, se tocchi Salva in Foto, per aggiungere le immagini modificate. Non analizza né carica mai la tua libreria.',
    policyTitle6: '6. Posizione',
    policyBody6: 'La posizione viene letta solo dai metadati già presenti nella foto. Per mostrare il nome del luogo, l’app può inviare quelle coordinate al servizio di geocodifica di Apple. Allo sviluppatore non viene inviato nulla.',
    policyTitle7: '7. Cosa non facciamo',
    policyBody7: 'Nessun tracciamento, nessuna pubblicità, nessun SDK o analisi di terzi, nessuna vendita o condivisione di dati, nessun account, nessuna profilazione.',
    policyTitle8: '8. Log diagnostici',
    policyBody8: 'L’app non invia log fuori dal tuo dispositivo. Se condividi i rapporti sugli arresti anomali con Apple nelle impostazioni di iOS, Apple può fornire rapporti anonimi agli sviluppatori.',
    policyTitle9: '9. Esportazione ed eliminazione dei dati',
    policyBody9: 'Condivisione ed esportazione mantengono i metadati della foto; la destinazione la scegli tu. Le foto eliminate restano 3 giorni in Eliminati di recente. Con iCloud attivo, eliminare una foto la elimina anche sugli altri dispositivi. Eliminare l’app cancella i suoi dati locali.',
    policyTitle10: '10. Minori',
    policyBody10: 'L’app non è rivolta ai minori e non raccoglie informazioni personali da nessuno.',
    policyTitle11: '11. Sicurezza',
    policyBody11: 'I dati restano nella memoria protetta dell’app sul tuo dispositivo e, facoltativamente, nel tuo iCloud privato; entrambi protetti da iOS.',
    policyTitle12: '12. Questo sito web',
    policyBody12: 'Questo sito è statico. Non imposta cookie di tracciamento né usa analisi. Se scrivi dal modulo, usiamo nome, e-mail e messaggio solo per risponderti.',
    policyTitle13: '13. Contatti',
    policyBody13: 'Domande sulla privacy: <a href="mailto:hakobghlijyan@gmail.com">hakobghlijyan@gmail.com</a>.',
    canvasPrivacyTitle: 'Privacy nativa al 100% sul dispositivo',
    canvasPrivacySub: 'Zero tracciamento · Zero telemetria · SwiftData e CloudKit',
    canvasSupportTitle: 'Supporto e richieste degli utenti',
    canvasSupportSub: 'Assistenza diretta dello sviluppatore · hakobghlijyan@gmail.com',
    canvasAboutTitle: 'Ecosistema Filter Studio',
    canvasAboutSub: 'Architettura nativa per iPhone e iPad · Editing di livello da studio',
    canvasCoverTitle: 'Ecosistema di tutti i dispositivi',
    canvasCoverSub: 'Schermate iPhone, iPad e Duo · Filter Studio',
    feat1CanvasSub: 'Core Image · Anteprime live · Filter Studio',
    feat2CanvasSub: 'Formati quadrato, verticale e orizzontale · Filter Studio',
    feat3CanvasSub: 'Otto stili di filigrana · Colore personalizzato · Filter Studio',
    feat4CanvasSub: 'Archiviazione non distruttiva · Originale intatto · Filter Studio',
    feat5CanvasSub: 'Preferiti, album e filtri · Filter Studio',
    feat6CanvasSub: 'Dettaglio archiviazione · Privato, facoltativo e automatico · Filter Studio',
    feat7CanvasSub: 'Dettaglio archiviazione · Privato, facoltativo e automatico · Filter Studio',
    feat8CanvasSub: 'Widget per schermata iniziale e di blocco · Filter Studio',
  }
};

// =========================================================================
// APPLY LANGUAGE
// =========================================================================
function applyLanguage(code) {
  const t = dictionaries[code] || dictionaries.en;
  document.documentElement.lang = code;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = t[el.dataset.i18n];
    if (val != null) el.innerHTML = val;
  });
  localStorage.setItem('filterstudio-language', code);
  document.querySelectorAll('.lang-label').forEach(lbl => {
    lbl.textContent = code.toUpperCase();
  });
  document.querySelectorAll('.lang-menu button').forEach(btn => {
    btn.style.fontWeight = btn.dataset.val === code ? '700' : 'normal';
  });
}

const savedLang = localStorage.getItem('filterstudio-language') || 'en';
applyLanguage(savedLang);

// =========================================================================
// LANGUAGE SWITCHER DROPDOWNS
// =========================================================================
document.addEventListener('click', function(e) {
  const btn = e.target.closest('.lang-btn');
  if (btn) {
    e.stopPropagation();
    const menu = btn.closest('.custom-lang').querySelector('.lang-menu');
    const isOpen = menu.classList.contains('show');
    document.querySelectorAll('.lang-menu').forEach(m => m.classList.remove('show'));
    if (!isOpen) menu.classList.add('show');
    return;
  }

  const menuBtn = e.target.closest('.lang-menu button');
  if (menuBtn) {
    const code = menuBtn.dataset.val;
    if (code) applyLanguage(code);
    document.querySelectorAll('.lang-menu').forEach(m => m.classList.remove('show'));
    return;
  }

  document.querySelectorAll('.lang-menu').forEach(m => m.classList.remove('show'));
});

// =========================================================================
// MARK: - SPLIT SCREEN PANEL SYSTEM & CANVAS CONTROLLER
// =========================================================================
let currentPanel = 'features';
let currentSlide = null;

function switchPanel(target) {
  if (!target) return;
  currentPanel = target;
  currentSlide = null;

  // 1. Update navigation active state
  document.querySelectorAll('[data-nav]').forEach(link => {
    link.classList.toggle('nav-active', link.dataset.nav === target);
  });

  // 2. Switch left panel
  document.querySelectorAll('.panel').forEach(panel => {
    const isActive = panel.id === 'panel-' + target;
    panel.classList.toggle('panel-active', isActive);
    if (isActive) panel.scrollTop = 0;
  });

  // 3. Reset visual canvas
  const canvasImages = document.querySelectorAll('.canvas-image');
  const canvasContexts = document.querySelectorAll('.canvas-context');
  const placeholder = document.getElementById('placeholder');

  // Pause any playing videos
  document.querySelectorAll('.canvas-image video').forEach(v => {
    try { v.pause(); } catch (e) {}
  });

  canvasImages.forEach(img => img.classList.remove('visible'));
  canvasContexts.forEach(ctx => ctx.classList.remove('visible'));

  // If panel has dedicated context image, show it after smooth delay
  const contextImg = document.querySelector('.canvas-context[data-context="' + target + '"]');
  if (contextImg) {
    if (placeholder) placeholder.classList.add('hidden');
    setTimeout(() => contextImg.classList.add('visible'), 60);
  } else if (target === 'guide') {
    const firstStep = document.querySelector('#panel-guide [data-slide]');
    if (firstStep) {
      setTimeout(() => firstStep.click(), 60);
    }
  } else {
    // Show placeholder (clean blank canvas state on initial open and section return)
    if (placeholder) placeholder.classList.remove('hidden');
    document.querySelectorAll('.interactive-item').forEach(i => i.classList.remove('active'));
    currentSlide = null;
  }

  // Update URL hash without jumping
  if (history.replaceState) {
    history.replaceState(null, '', '#' + target);
  } else {
    window.location.hash = '#' + target;
  }
}

// Global Nav click listener
document.addEventListener('click', (e) => {
  const navLink = e.target.closest('[data-nav]');
  if (navLink) {
    e.preventDefault();
    const target = navLink.dataset.nav;
    switchPanel(target);
    const mobileNav = document.getElementById('mobileNav');
    if (mobileNav) mobileNav.classList.remove('open');
  }
});

// Interactive preview hover / click sync for Canvas Side
function setupInteractivePreview() {
  const interactiveItems = document.querySelectorAll('.interactive-item, .guide-step-card');
  const slides = document.querySelectorAll('.canvas-image');
  const placeholder = document.getElementById('placeholder');

  interactiveItems.forEach(item => {
    const showSlide = () => {
      const slideKey = item.dataset.slide;
      if (!slideKey || slideKey === currentSlide) return;
      currentSlide = slideKey;

      if (placeholder) placeholder.classList.add('hidden');

      // Pause non-active videos and reset state
      document.querySelectorAll('.canvas-image video').forEach(v => {
        try {
          v.pause();
        } catch (e) {}
      });

      // Hide all context and images
      document.querySelectorAll('.canvas-context').forEach(c => c.classList.remove('visible'));
      slides.forEach(s => {
        const matches = s.dataset.slide === slideKey;
        s.classList.toggle('visible', matches);
        if (matches) {
          const vid = s.querySelector('video');
          if (vid) {
            vid.currentTime = 0;
            vid.play().catch(() => {});
          }
        }
      });

      // Highlight active row in list
      interactiveItems.forEach(i => {
        if (i.dataset.slide === slideKey) {
          i.classList.add('active');
        } else if (i.closest('.panel-active')) {
          i.classList.remove('active');
        }
      });
    };

    item.addEventListener('mouseenter', showSlide);
    item.addEventListener('click', showSlide);
  });

  // RU: Возврат к чистому плейсхолдеру при уводе курсора с панели Features
  // EN: Return to clean placeholder when mouse leaves Features panel
  const panelFeatures = document.querySelector('#panel-features');
  if (panelFeatures) {
    panelFeatures.addEventListener('mouseleave', () => {
      if (currentPanel !== 'features') return;
      currentSlide = null;
      document.querySelectorAll('#panel-features .interactive-item').forEach(i => i.classList.remove('active'));
      document.querySelectorAll('.canvas-image').forEach(s => s.classList.remove('visible'));
      document.querySelectorAll('.canvas-image video').forEach(v => {
        try { v.pause(); } catch (e) {}
      });
      if (placeholder) placeholder.classList.remove('hidden');
    });
  }

  // RU: Возврат к чистому плейсхолдеру при уводе курсора со списка экранов
  // EN: Return to clean placeholder when mouse leaves screens list
  const panelScreens = document.querySelector('#panel-screens');
  if (panelScreens) {
    panelScreens.addEventListener('mouseleave', () => {
      if (currentPanel !== 'screens') return;
      currentSlide = null;
      document.querySelectorAll('#panel-screens .interactive-item').forEach(i => i.classList.remove('active'));
      document.querySelectorAll('.canvas-image').forEach(s => s.classList.remove('visible'));
      document.querySelectorAll('.canvas-image video').forEach(v => {
        try { v.pause(); } catch (e) {}
      });
      if (placeholder) placeholder.classList.remove('hidden');
    });
  }
}

// Sticky Screens Model Filter
function setupModelFilter() {
  const filterBtns = document.querySelectorAll('.filter-pill');
  const screenItems = document.querySelectorAll('#panel-screens .interactive-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const model = btn.dataset.filter;
      filterBtns.forEach(b => b.classList.toggle('active', b === btn));

      let firstVisible = null;
      screenItems.forEach(item => {
        const match = (model === 'all' || item.dataset.model === model);
        if (match) {
          item.style.display = 'block';
          if (!firstVisible) firstVisible = item;
        } else {
          item.style.display = 'none';
        }
      });

      if (firstVisible) {
        firstVisible.click();
      }
    });
  });
}

// Interactive Video Players: click to toggle playback, pause others
function setupVideoPlayers() {
  document.querySelectorAll('.canvas-image video').forEach(video => {
    video.addEventListener('click', () => {
      if (video.paused) {
        document.querySelectorAll('.canvas-image video').forEach(v => {
          if (v !== video) {
            try { v.pause(); } catch (e) {}
          }
        });
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  });
}

// Initial hash routing & DOM setup
document.addEventListener('DOMContentLoaded', () => {
  setupInteractivePreview();
  setupModelFilter();
  setupVideoPlayers();

  function routeFromHash() {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    const validPanels = ['features', 'screens', 'guide', 'about', 'support', 'privacy'];
    if (validPanels.includes(hash)) {
      switchPanel(hash);
    } else if (hash === 'work') {
      switchPanel('features');
    } else if (hash === 'story') {
      switchPanel('about');
    } else {
      switchPanel('features');
    }
  }

  routeFromHash();
  window.addEventListener('hashchange', routeFromHash);
});
