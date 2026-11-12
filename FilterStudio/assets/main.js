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
    liveQr: 'Filter Studio for iOS',
    hoverInspect: 'Hover module to inspect',

    feat1Title: 'Filters with Live Preview', feat1Tag: 'Core Image',
    feat2Title: 'Crop, Rotate & Mirror', feat2Tag: 'Aspect Ratios',
    feat3Title: 'Dynamic Watermarks & EXIF', feat3Tag: 'Watermarks',
    feat4Title: 'Every Edit is a Version', feat4Tag: 'Versions',
    feat5Title: 'Private iCloud Sync', feat5Tag: 'SwiftData',
    feat6Title: 'Native iPhone & iPad Experience', feat6Tag: 'Ecosystem',

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
    faq6a: 'Filter Studio supports all iPhone and iPad models running iOS 17.0, iPadOS 17.0, or newer, optimized for Liquid Glass and modern Super Retina displays.',
    faq7q: 'How do I request a feature or report a bug?',
    faq7a: 'You can submit feedback directly via our web support form or email hakobghlijyan@gmail.com. We review every user message.',

    privacyEyebrow: 'YOUR PRIVACY MATTERS',
    privacyTitle: 'Privacy Policy'
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
    liveQr: 'Filter Studio для iOS',
    hoverInspect: 'Наведите на модуль для просмотра',

    feat1Title: 'Фильтры с живым просмотром', feat1Tag: 'Core Image',
    feat2Title: 'Обрезка, поворот и зеркало', feat2Tag: 'Пропорции',
    feat3Title: 'Водяные знаки и EXIF', feat3Tag: 'Водяные знаки',
    feat4Title: 'Каждая правка — версия', feat4Tag: 'Версии',
    feat5Title: 'Приватный iCloud Sync', feat5Tag: 'SwiftData',
    feat6Title: 'Экосистема iPhone и iPad', feat6Tag: 'Экосистема',

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
    faq6a: 'Поддерживаются все модели iPhone и iPad с iOS 17.0, iPadOS 17.0 и новее, с оптимизацией под Super Retina и Liquid Glass.',
    faq7q: 'Как предложить улучшение или сообщить о проблеме?',
    faq7a: 'Вы можете отправить сообщение через форму на сайте или написать напрямую разработчику на hakobghlijyan@gmail.com.',

    privacyEyebrow: 'ВАША ПРИВАТНОСТЬ ВАЖНА',
    privacyTitle: 'Политика конфиденциальности'
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
    liveQr: 'Filter Studio pour iOS',
    hoverInspect: 'Survolez un module pour inspecter',

    feat1Title: 'Filtres en aperçu direct', feat1Tag: 'Core Image',
    feat2Title: 'Recadrer, pivoter, inverser', feat2Tag: 'Formats',
    feat3Title: 'Filigranes et EXIF', feat3Tag: 'Filigranes',
    feat4Title: 'Chaque retouche, une version', feat4Tag: 'Versions',
    feat5Title: 'Synchronisation iCloud privée', feat5Tag: 'SwiftData',
    feat6Title: 'Écosystème iPhone & iPad', feat6Tag: 'Écosystème',

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
    faq6a: 'Tous les modèles iPhone et iPad sous iOS 17.0+ ou iPadOS 17.0+.',
    faq7q: "Comment contacter le support ?",
    faq7a: "Via le formulaire ci-dessous ou par email à hakobghlijyan@gmail.com.",

    privacyEyebrow: 'VOTRE VIE PRIVÉE COMPTE',
    privacyTitle: 'Politique de confidentialité'
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
    liveQr: 'Filter Studio für iOS',
    hoverInspect: 'Modul berühren zum Inspizieren',

    feat1Title: 'Filter mit Live-Vorschau', feat1Tag: 'Core Image',
    feat2Title: 'Zuschneiden, drehen, spiegeln', feat2Tag: 'Formate',
    feat3Title: 'Wasserzeichen & EXIF', feat3Tag: 'Wasserzeichen',
    feat4Title: 'Jede Bearbeitung eine Version', feat4Tag: 'Versionen',
    feat5Title: 'Private iCloud-Synchronisation', feat5Tag: 'SwiftData',
    feat6Title: 'iPhone & iPad Ökosystem', feat6Tag: 'Ökosystem',

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
    faq6a: 'Alle iPhone- und iPad-Modelle mit iOS 17.0+ oder iPadOS 17.0+.',
    faq7q: 'Wie erreiche ich den Support?',
    faq7a: 'Über das Formular oder direkt per E-Mail an hakobghlijyan@gmail.com.',

    privacyEyebrow: 'DEINE PRIVATSPHÄRE ZÄHLT',
    privacyTitle: 'Datenschutzerklärung'
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
    liveQr: 'Filter Studio para iOS',
    hoverInspect: 'Pasa el cursor para inspeccionar',

    feat1Title: 'Filtros con vista previa', feat1Tag: 'Core Image',
    feat2Title: 'Recorta, gira, voltea', feat2Tag: 'Formatos',
    feat3Title: 'Marcas de agua y EXIF', feat3Tag: 'Marcas de agua',
    feat4Title: 'Cada edición es una versión', feat4Tag: 'Versiones',
    feat5Title: 'Sincronización privada en iCloud', feat5Tag: 'SwiftData',
    feat6Title: 'Ecosistema iPhone y iPad', feat6Tag: 'Ecosistema',

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
    faq6a: 'Cualquier iPhone o iPad con iOS 17.0+ o iPadOS 17.0+.',
    faq7q: '¿Cómo contactar al desarrollador?',
    faq7a: 'A través del formulario web o en hakobghlijyan@gmail.com.',

    privacyEyebrow: 'TU PRIVACIDAD IMPORTA',
    privacyTitle: 'Política de Privacidad'
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
    liveQr: 'Filter Studio per iOS',
    hoverInspect: 'Passa il cursore per ispezionare',

    feat1Title: 'Filtri con anteprima live', feat1Tag: 'Core Image',
    feat2Title: 'Ritaglia, ruota, specchia', feat2Tag: 'Formati',
    feat3Title: 'Filigrana del tuo colore', feat3Tag: 'Filigrana',
    feat4Title: 'Ogni modifica è una versione', feat4Tag: 'Versioni',
    feat5Title: 'Sincronizzazione privata iCloud', feat5Tag: 'SwiftData',
    feat6Title: 'Ecosistema iPhone e iPad', feat6Tag: 'Ecosistema',

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
    faq6a: 'Tutti i modelli iPhone e iPad con iOS 17.0+ o iPadOS 17.0+.',
    faq7q: 'Come contattare il supporto?',
    faq7a: "Tramite il form o all'indirizzo hakobghlijyan@gmail.com.",

    privacyEyebrow: 'LA TUA PRIVACY CONTA',
    privacyTitle: 'Informativa sulla privacy'
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
  } else if (target === 'screens') {
    const firstScreen = document.querySelector('#panel-screens [data-slide]');
    if (firstScreen) {
      setTimeout(() => firstScreen.click(), 60);
    }
  } else if (target === 'features') {
    const firstFeat = document.querySelector('#panel-features [data-slide]');
    if (firstFeat) {
      setTimeout(() => firstFeat.click(), 60);
    }
  } else {
    if (placeholder) placeholder.classList.remove('hidden');
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
