/**
 * BalanceCleaner — main.js
 * Handles: i18n, theme switching (ripple), language switcher, scroll reveal, coverflow carousel.
 */

// =========================================================================
// i18n DICTIONARIES
// =========================================================================
const dictionaries = {
  en: {
    about: 'About', screens: 'Screens', video: 'Video', features: 'Features',
    support: 'Support', privacy: 'Privacy',
    subHeaderText: 'Available for iPhone', subHeaderBtn: 'Download',
    eyebrow: 'A calmer digital life',
    title: 'Zero your Apple ID balance.<br>Change region freely.',
    lead: 'BalanceCleaner lets you clear your Apple ID leftover balance using real in-app purchases — so you can switch your App Store region freely.',
    explore: 'Explore the product →',
    ideaLabel: 'The idea',
    storyTitle: 'Less noise.<br>More balance.',
    storyLead: 'A calm product story built around clarity, control and a respectful digital experience.',
    storyCardTitle: 'Your digital space, understood.',
    storyText: 'BalanceCleaner helps people see what is taking up space, make confident decisions and keep their everyday devices feeling lighter.',
    demoNotice: 'The website currently presents demo screens. Final App Store materials will be added after launch.',
    understand: 'Understand', choose: 'Choose', balance: 'Balance',
    thoughtful: 'Built thoughtfully',
    simple: 'Simple from the first tap.',
    simpleText: 'Focused tools, transparent choices and privacy at the centre of every interaction.',

    supportTitle: 'How can we help?',
    supportLead: 'Send a question, bug report, suggestion, or privacy request. We respond by email.',
    supportContact: 'Use the form or email <a href="mailto:balancecleanerapp@gmail.com">balancecleanerapp@gmail.com</a>.',
    supportNote: 'For bug reports, include your device and app version. Never send passwords or payment details.',
    supportName: 'Name',
    supportEmail: 'Email',
    supportMessage: 'Message',
    supportSend: 'Send Message →',
    talk: 'Talk to the developer →',
    getOnAppStore: "Download on the App Store",
    liveTitle: "Now available on the App Store",
    liveDesc: "Download Balance Cleaner and zero out your Apple ID balance in seconds.",
    liveQr: "Scan to download",
    screenLabel: 'Product screens',
    screenTitle: 'See the app<br>before it ships.',
    videoLabel: 'Product demo',
    videoTitle: 'See how it works.',
    videoLead: 'Demo across all supported iPhone models.',
    why: 'Why BalanceCleaner',
    featuresTitle: 'Thoughtfully simple.',
    clear: 'Clear by design', clearText: 'Focused tools that feel easy from the first tap.',
    private: 'Privacy first', privateText: 'Transparent choices and respect for your information.',
    quiet: 'Quietly powerful', quietText: 'Useful insights without unnecessary complexity.',
    improve: 'Made to improve', improveText: 'Send feedback directly to the developer.',
    listening: 'We\'re listening', idea: 'Have an idea?',
    ideaText: 'Send feedback, report a problem or ask a question through our support page.',
    openSupport: 'Open support →',
    faqTitle: 'Frequently Asked Questions',
    faq1q: 'What is BalanceCleaner?',
    faq1a: 'BalanceCleaner lets you easily select or enter the exact custom amount to zero out your Apple ID account balance — no account registration required.',
    faq2q: 'How does the balance split work?',
    faq2a: 'See the precise breakdown of your remaining balance and calculated parts before confirming any operation. Everything is shown clearly before you proceed.',
    faq3q: 'Is my data safe?',
    faq3a: 'Yes. All processing happens locally on your device via Apple\'s StoreKit framework. We do not collect, store or upload any personal data.',
    faq4q: 'Do I need an account?',
    faq4a: 'No account is required. Download and start immediately.',
    faq5q: 'What is Pro?',
    faq5a: 'Pro unlocks full transaction history, PDF export, and advanced settings. The core cleaner is free for everyone.',
    faq6q: 'What is the Region Checklist?',
    faq6a: 'A step-by-step guide to prepare your account for a region change. It checks if your Apple ID balance is zero, subscriptions are canceled, and Family Sharing is left.',
    faq7q: 'What Pro customization is available?',
    faq7a: 'Pro users can change the App background to Starfield and customize the Amount Ring Apple Glow Intent Design.',

    guideLabel: 'Overview',
    guideTitle: 'Clear Apple ID Balance',
    guideDesc: 'To change your Apple ID region, your account balance must be exactly zero.',
    step1Title: 'Check Your Remaining Balance',
    step1Desc: 'Open App Store account settings and find your exact remaining store credit.',
    step2Title: 'Calculate and Purchase',
    step2Desc: 'Buy an item or tip in the app. If price exceeds balance, Apple charges the rest from your credit card.',
    step3Title: 'Change Region Successfully',
    step3Desc: 'Once zeroed, return to Apple ID settings and freely switch to your new region.',
    donationTitle: 'Your Payment as a Donation',
    donationDesc: 'When you pay your remaining balance ($0.50, $1.00, etc.), you are donating directly to support independent iOS development.',
    donationFooter: 'Thank you for helping keep this tool alive and free of ads!',
    guideNeedHelp: 'Need Help?',
    guideSupportTitle: 'Contact Apple Support',
    guideSupportWeb: 'Apple Billing & Subscriptions',
    stepVideoTitle: 'iPhone 18 Pro Video Demo',
    stepVideoDesc: 'Watch interactive zero-balance calculation and StoreKit flow in real time.',

    privacyEyebrow: 'YOUR PRIVACY MATTERS',
    privacyTitle: 'Privacy Policy',
    privCard1Title: 'Apple StoreKit Secure',
    privCard1Desc: 'All balance clearing operations run through official Apple In-App Purchase APIs.',
    privCard2Title: 'Zero Payment Access',
    privCard2Desc: 'We never see, collect, or store your Apple ID password, credit cards, or billing info.',
    privCard3Title: 'No Data Sales',
    privCard3Desc: 'Your personal details are never sold, rented, or shared with third-party advertisers.',
    proFeaturesTitle: 'Premium Features',
    proFeaturesDesc: 'Unlock full transaction history, export records to PDF, customize the Amount Ring glow, and set a Starfield background.',
    top: 'Home',
    featuresHeader: 'BalanceCleaner for iPhone & iPad · Native StoreKit 2',
    hoverInspect: 'Hover module to inspect',
    feat1Title: 'Choose Custom Clear',
    feat1Tag: 'Dial & Input',
    feat2Title: 'Calculate & Split Preview',
    feat2Tag: 'Split Math',
    feat3Title: 'StoreKit Secure Settlement',
    feat3Tag: 'StoreKit 2',
    feat4Title: 'Clearance History & Logs',
    feat4Tag: 'History',
    feat5Title: 'Privacy & How It Works',
    feat5Tag: 'Zero Tracking',
    feat6Title: 'Premium Features & Glow',
    feat6Tag: 'Pro Glow',
    devicePreview: 'Device Preview', devicePreviewTitle: 'All screens, all models.', devicePreviewDesc: 'Scroll horizontally within each model to see all screenshots. iPhone 18 Pro shows real screenshots — others are ready for your assets.', comingSoon: 'Coming soon'
  }
};

function fill(code, overrides) {
  dictionaries[code] = Object.assign({}, dictionaries.en, overrides);
}

fill('ru', {
  about: 'О продукте', screens: 'Экраны', video: 'Видео', features: 'Возможности',
  subHeaderText: 'Доступно для iPhone', subHeaderBtn: 'Загрузить',
  eyebrow: 'Более спокойная цифровая жизнь',
  title: 'Обнулите баланс Apple ID.<br>Смените регион свободно.',
  lead: 'BalanceCleaner позволяет очистить остаток на Apple ID через реальные покупки — чтобы вы могли сменить регион App Store без ограничений.',
  explore: 'Открыть продукт →',
  featuresHeader: 'BalanceCleaner для iPhone и iPad · Нативный StoreKit 2',
  hoverInspect: 'Наведите на модуль для просмотра',
  feat1Title: 'Выбор точной суммы',
  feat1Tag: 'Ввод и шкала',
  feat2Title: 'Предпросмотр разбивки',
  feat2Tag: 'Расчет частей',
  feat3Title: 'Безопасный StoreKit',
  feat3Tag: 'StoreKit 2',
  feat4Title: 'История и журналы',
  feat4Tag: 'История',
  feat5Title: 'Приватность и принципы',
  feat5Tag: '0 трекеров',
  feat6Title: 'Премиум-возможности',
  feat6Tag: 'Pro Glow',
  ideaLabel: 'Идея',
  storyTitle: 'Меньше шума.<br>Больше баланса.',
  storyLead: 'Спокойный продукт, построенный на ясности, контроле и уважении к пользователю.',
  storyCardTitle: 'Ваше цифровое пространство — понятно.',
  storyText: 'BalanceCleaner помогает увидеть, что занимает место, и принимать уверенные решения.',
  demoNotice: 'Сайт пока показывает demo-экраны. Финальные материалы App Store будут добавлены после запуска.',
  understand: 'Понять', choose: 'Выбрать', balance: 'Сбалансировать',
  thoughtful: 'Продумано с заботой',
  simple: 'Просто с первого нажатия.',
  simpleText: 'Понятные инструменты, прозрачные решения и приватность в центре.',

  supportTitle: 'Чем мы можем помочь?',
  supportLead: 'Задайте вопрос, сообщите об ошибке или предложите идею. Мы отвечаем по email.',
  supportContact: 'Используйте форму или напишите на <a href="mailto:balancecleanerapp@gmail.com">balancecleanerapp@gmail.com</a>.',
  supportNote: 'Для отчетов об ошибках укажите устройство и версию приложения. Не отправляйте пароли и данные карт.',
  supportName: 'Имя',
  supportEmail: 'Email',
  supportMessage: 'Сообщение',
  supportSend: 'Отправить →',
  talk: 'Связаться с разработчиком →',
  getOnAppStore: "Скачать в App Store",
  liveTitle: "Уже доступно в App Store",
  liveDesc: "Скачайте Balance Cleaner и обнулите баланс Apple ID за считанные секунды.",
  liveQr: "Сканируйте, чтобы скачать",
  screenLabel: 'Экраны продукта',
  screenTitle: 'Посмотрите приложение<br>до запуска.',
  videoLabel: 'Демо продукта',
  videoTitle: 'Посмотрите, как это работает.',
  videoLead: 'Демо на всех поддерживаемых моделях iPhone.',
  why: 'Почему BalanceCleaner',
  featuresTitle: 'Продумано и просто.',
  clear: 'Понятный дизайн', clearText: 'Инструменты, которыми легко пользоваться с первого нажатия.',
  private: 'Приватность прежде всего', privateText: 'Прозрачные решения и уважение к информации.',
  quiet: 'Тихая мощь', quietText: 'Полезная аналитика без лишней сложности.',
  improve: 'Становится лучше', improveText: 'Отправляйте отзывы разработчику.',
  listening: 'Мы слушаем', idea: 'Есть идея?',
  ideaText: 'Отправьте отзыв или задайте вопрос через поддержку.',
  openSupport: 'Открыть поддержку →',
  faqTitle: 'Часто задаваемые вопросы',
  faq1q: 'Что такое BalanceCleaner?',
  faq1a: 'BalanceCleaner позволяет выбрать точную сумму для обнуления остатка Apple ID — без регистрации аккаунта.',
  faq2q: 'Как работает разбивка баланса?',
  faq2a: 'Перед подтверждением операции вы видите точную разбивку остатка и расчётных частей. Всё прозрачно.',
  faq3q: 'Безопасны ли мои данные?',
  faq3a: 'Да. Вся обработка происходит локально на устройстве через StoreKit от Apple. Мы не собираем и не загружаем данные.',
  faq4q: 'Нужен ли аккаунт?',
  faq4a: 'Аккаунт не нужен. Скачайте и начните сразу.',
  faq5q: 'Что такое Pro?',
  faq5a: 'Pro открывает полную историю транзакций, экспорт в PDF и расширенные настройки. Основной функционал бесплатен.',
  guideLabel: 'Обзор',
  guideTitle: 'Очистите баланс Apple ID',
  guideDesc: 'Для смены региона Apple ID баланс должен быть ровно нулевым.',
  step1Title: 'Проверьте остаток',
  step1Desc: 'Откройте настройки аккаунта App Store и найдите точный остаток кредита.',
  step2Title: 'Рассчитайте и купите',
  step2Desc: 'Купите товар или типовой предмет в приложении. Если цена превышает баланс — Apple спишет остаток с карты.',
  step3Title: 'Успешная смена региона',
  step3Desc: 'После обнуления вернитесь в настройки Apple ID и выберите новый регион.',
  donationTitle: 'Ваш платёж как поддержка',
  donationDesc: 'Оплачивая остаток ($0.50, $1.00 и т.д.), вы поддерживаете независимую разработку iOS-приложений.',
  donationFooter: 'Спасибо, что помогаете сохранять этот инструмент живым и без рекламы!',
  guideNeedHelp: 'Нужна помощь?',
  guideSupportTitle: 'Обратитесь в службу поддержки Apple',
  guideSupportDesc: 'Если ваш баланс меньше минимальной цены покупки — свяжитесь с Apple Support напрямую.',
  guideSupportWeb: 'Биллинг и подписки Apple',
  stepVideoTitle: 'Видеодемо iPhone 18 Pro',
  stepVideoDesc: 'Посмотрите расчёт обнуления баланса и процесс StoreKit в реальном времени.',
  privacyEyebrow: 'ВАША ПРИВАТНОСТЬ ВАЖНА',
  privacyTitle: 'Политика конфиденциальности',
  privCard1Title: 'Защита Apple StoreKit',
  privCard1Desc: 'Все операции очистки баланса проходят через официальный Apple In-App Purchase API.',
  privCard2Title: 'Нет доступа к платежам',
  privCard2Desc: 'Мы никогда не видим, не собираем и не храним ваш пароль Apple ID, данные карт или платёжную информацию.',
  privCard3Title: 'Данные не продаются',
  privCard3Desc: 'Ваши личные данные никогда не передаются третьим лицам и рекламодателям.',
  top: 'Наверх',
  devicePreview: 'Предпросмотр устройств', devicePreviewTitle: 'Все экраны, все модели.', devicePreviewDesc: 'Прокручивайте горизонтально, чтобы посмотреть все скриншоты. На iPhone 18 Pro показаны реальные снимки — остальные готовы для ваших материалов.', comingSoon: 'Скоро'
});

fill('fr', {
  about: 'À propos', screens: 'Écrans', video: 'Vidéo', features: 'Fonctions',
  support: 'Assistance', privacy: 'Confidentialité',
  subHeaderText: 'Disponible pour iPhone', subHeaderBtn: 'Télécharger',
  eyebrow: 'Une vie numérique plus calme',
  title: 'Faites de la place à l\'essentiel.',
  lead: 'BalanceCleaner apporte clarté et sérénité à votre univers numérique.',
  explore: 'Découvrir le produit →',
  ideaLabel: 'L\'idée',
  storyTitle: 'Moins de bruit.<br>Plus d\'équilibre.',

  supportTitle: 'Comment pouvons-nous aider ?',
  supportLead: 'Envoyez une question, signalez un bug ou proposez une idée. Nous répondons par email.',
  supportContact: 'Utilisez le formulaire ou écrivez à <a href="mailto:balancecleanerapp@gmail.com">balancecleanerapp@gmail.com</a>.',
  supportNote: 'Pour les rapports de bugs, incluez votre appareil et la version de l\'application.',
  supportName: 'Nom', supportEmail: 'Email', supportMessage: 'Message', supportSend: 'Envoyer →',
  talk: 'Parler au développeur →',
  getOnAppStore: "Télécharger sur l'App Store",
  liveTitle: "Disponible dès maintenant sur l'App Store",
  liveDesc: "Téléchargez Balance Cleaner et ramenez le solde de votre identifiant Apple à zéro en quelques secondes.",
  liveQr: "Scannez pour télécharger",
  openSupport: 'Ouvrir l\'assistance →',
  faqTitle: 'Questions fréquentes',
  privacyEyebrow: 'VOTRE VIE PRIVÉE COMPTE',
  privacyTitle: 'Politique de confidentialité',
  privCard1Title: 'Apple StoreKit Sécurisé',
  privCard2Title: 'Zéro accès aux paiements',
  privCard3Title: 'Aucune vente de données',
  top: 'Accueil',
  devicePreview: 'Aperçu des appareils', devicePreviewTitle: 'Tous les écrans, tous les modèles.', devicePreviewDesc: 'Faites défiler horizontalement pour voir toutes les captures d\'écran. L\'iPhone 18 Pro affiche de vraies captures.', comingSoon: 'Bientôt'
});

fill('de', {
  about: 'Über uns', screens: 'Screens', video: 'Video', features: 'Funktionen',
  support: 'Support', privacy: 'Datenschutz',
  subHeaderText: 'Verfügbar für iPhone', subHeaderBtn: 'Laden',
  eyebrow: 'Ein ruhigeres digitales Leben',
  title: 'Schaffe Raum für das Wesentliche.',
  lead: 'BalanceCleaner bringt Klarheit in deine digitale Welt.',
  explore: 'Produkt entdecken →',
  ideaLabel: 'Die Idee',
  storyTitle: 'Weniger Lärm.<br>Mehr Balance.',

  supportTitle: 'Wie können wir helfen?',
  supportLead: 'Senden Sie eine Frage, einen Fehlerbericht oder einen Vorschlag. Wir antworten per E-Mail.',
  supportContact: 'Nutzen Sie das Formular oder schreiben Sie an <a href="mailto:balancecleanerapp@gmail.com">balancecleanerapp@gmail.com</a>.',
  supportNote: 'Fügen Sie für Fehlerberichte Ihr Gerät und die App-Version hinzu.',
  supportName: 'Name', supportEmail: 'E-Mail', supportMessage: 'Nachricht', supportSend: 'Senden →',
  talk: 'Entwickler kontaktieren →',
  getOnAppStore: "Laden im App Store",
  liveTitle: "Jetzt im App Store erhältlich",
  liveDesc: "Laden Sie Balance Cleaner herunter und bringen Sie Ihr Apple-ID-Guthaben in Sekunden auf null.",
  liveQr: "Zum Laden scannen",
  openSupport: 'Support öffnen →',
  faqTitle: 'Häufige Fragen',
  privacyEyebrow: 'IHRE PRIVATSPHÄRE IST WICHTIG',
  privacyTitle: 'Datenschutzerklärung',
  privCard1Title: 'Apple StoreKit-Sicherheit',
  privCard2Title: 'Kein Zahlungszugriff',
  privCard3Title: 'Keine Datenweitergabe',
  top: 'Start',
  devicePreview: 'Geräte Vorschau', devicePreviewTitle: 'Alle Bildschirme, alle Modelle.', devicePreviewDesc: 'Scrollen Sie horizontal, um alle Screenshots zu sehen. iPhone 18 Pro zeigt echte Bilder.', comingSoon: 'Demnächst'
});

fill('es', {
  about: 'Acerca de', screens: 'Pantallas', video: 'Vídeo', features: 'Funciones',
  support: 'Soporte', privacy: 'Privacidad',
  subHeaderText: 'Disponible para iPhone', subHeaderBtn: 'Descargar',
  eyebrow: 'Una vida digital más tranquila',
  title: 'Haz espacio para lo importante.',
  lead: 'BalanceCleaner aporta claridad a tu mundo digital.',
  explore: 'Explorar el producto →',
  ideaLabel: 'La idea',
  storyTitle: 'Menos ruido.<br>Más balance.',

  supportTitle: '¿Cómo podemos ayudar?',
  supportLead: 'Envíe una pregunta, un informe de error o una sugerencia. Respondemos por correo electrónico.',
  supportContact: 'Use el formulario o escriba a <a href="mailto:balancecleanerapp@gmail.com">balancecleanerapp@gmail.com</a>.',
  supportNote: 'Para informes de errores, incluya su dispositivo y la versión de la aplicación.',
  supportName: 'Nombre', supportEmail: 'Correo', supportMessage: 'Mensaje', supportSend: 'Enviar →',
  talk: 'Hablar con el desarrollador →',
  getOnAppStore: "Descargar en App Store",
  liveTitle: "Ya disponible en App Store",
  liveDesc: "Descarga Balance Cleaner y deja el saldo de tu ID de Apple a cero en segundos.",
  liveQr: "Escanea para descargar",
  openSupport: 'Abrir soporte →',
  faqTitle: 'Preguntas frecuentes',
  privacyEyebrow: 'TU PRIVACIDAD IMPORTA',
  privacyTitle: 'Política de privacidad',
  privCard1Title: 'Apple StoreKit seguro',
  privCard2Title: 'Sin acceso a pagos',
  privCard3Title: 'Sin venta de datos',
  top: 'Inicio',
  devicePreview: 'Vista previa de dispositivos', devicePreviewTitle: 'Todas las pantallas, todos los modelos.', devicePreviewDesc: 'Desplácese horizontalmente para ver las capturas. El iPhone 18 Pro muestra capturas reales.', comingSoon: 'Próximamente'
});

fill('it', {
  about: 'Info', screens: 'Schermate', video: 'Video', features: 'Funzioni',
  support: 'Supporto', privacy: 'Privacy',
  subHeaderText: 'Disponibile per iPhone', subHeaderBtn: 'Scarica',
  eyebrow: 'Una vita digitale più serena',
  title: 'Fai spazio a ciò che conta.',
  lead: 'BalanceCleaner porta chiarezza nel tuo mondo digitale.',
  explore: 'Scopri il prodotto →',
  ideaLabel: 'L\'idea',
  storyTitle: 'Meno rumore.<br>Più equilibrio.',

  supportTitle: 'Come possiamo aiutare?',
  supportLead: 'Invia una domanda, un rapporto su un bug o un suggerimento. Rispondiamo via email.',
  supportContact: 'Usa il modulo o scrivi a <a href="mailto:balancecleanerapp@gmail.com">balancecleanerapp@gmail.com</a>.',
  supportNote: 'Per i bug, includi il tuo dispositivo e la versione dell\'app.',
  supportName: 'Nome', supportEmail: 'Email', supportMessage: 'Messaggio', supportSend: 'Invia →',
  talk: 'Parla con lo sviluppatore →',
  getOnAppStore: "Scarica su App Store",
  liveTitle: "Ora disponibile su App Store",
  liveDesc: "Scarica Balance Cleaner e azzera il saldo del tuo ID Apple in pochi secondi.",
  liveQr: "Scansiona per scaricare",
  openSupport: 'Apri supporto →',
  faqTitle: 'Domande frequenti',
  privacyEyebrow: 'LA TUA PRIVACY CONTA',
  privacyTitle: 'Informativa sulla privacy',
  privCard1Title: 'Apple StoreKit sicuro',
  privCard2Title: 'Nessun accesso ai pagamenti',
  privCard3Title: 'Nessuna vendita di dati',
  top: 'Inizio',
  devicePreview: 'Anteprima dispositivi', devicePreviewTitle: 'Tutti gli schermi, tutti i modelli.', devicePreviewDesc: 'Scorri orizzontalmente per vedere tutti gli screenshot. iPhone 18 Pro mostra veri screenshot.', comingSoon: 'In arrivo'
});

fill('hy', {
    about: 'Մասին', screens: 'Էկրաններ', video: 'Վիդեո', features: 'Հնարավորություններ',
    support: 'Աջակցություն', privacy: 'Գաղտնիություն',
    subHeaderText: 'Հասանելի է iPhone-ի համար', subHeaderBtn: 'Ներբեռնել',
    eyebrow: 'Ավելի հանգիստ թվային կյանք',
    title: 'Զրոյացրեք Apple ID-ի մնացորդը:<br>Փոխեք տարածաշրջանը:',
    lead: 'BalanceCleaner-ը թույլ է տալիս զրոյացնել մնացորդը իրական գնումների միջոցով՝ որպեսզի առանց խոչընդոտների փոխեք App Store-ի տարածաշրջանը:',
    explore: 'Բացահայտել →',
    ideaLabel: 'Գաղափարը',
    storyTitle: 'Ավելի քիչ աղմուկ:<br>Ավելի շատ բալանս:',
    storyLead: 'Հանգիստ պրոդուկտ՝ ստեղծված պարզության, վերահսկողության և հարգանքի հիման վրա:',
    storyCardTitle: 'Ձեր թվային տարածքը՝ պարզ:',
    storyText: 'BalanceCleaner-ը օգնում է տեսնել, թե ինչն է զբաղեցնում տարածքը, և վստահ որոշումներ կայացնել:',
    understand: 'Հասկանալ', choose: 'Ընտրել', balance: 'Բալանսավորել',
    thoughtful: 'Մտածված մանրամասներ',
    simple: 'Պարզ առաջին իսկ հպումից:',
    simpleText: 'Պարզ գործիքներ, թափանցիկ ընտրություն և գաղտնիություն:',

    supportTitle: 'Ինչպե՞ս կարող ենք օգնել:',
    supportLead: 'Ուղարկեք հարց, սխալի մասին զեկույց կամ առաջարկ: Մենք պատասխանում ենք էլ. փոստով:',
    supportContact: 'Օգտագործեք ձևը կամ գրեք <a href="mailto:balancecleanerapp@gmail.com">balancecleanerapp@gmail.com</a>:',
    supportNote: 'Սխալների դեպքում նշեք ձեր սարքը և տարբերակը:',
    supportName: 'Անուն', supportEmail: 'Էլ. փոստ', supportMessage: 'Հաղորդագրություն', supportSend: 'Ուղարկել →',
    talk: 'Կապվել ծրագրավորողի հետ →',
    getOnAppStore: "Ներբեռնել App Store-ից",
    liveTitle: "Արդեն հասանելի է App Store-ում",
    liveDesc: "Ներբեռնեք Balance Cleaner-ը և մի քանի վայրկյանում զրոյացրեք ձեր Apple ID-ի մնացորդը։",
    liveQr: "Սկանավորեք՝ ներբեռնելու համար",
    screenLabel: 'Պրոդուկտի էկրանները',
    screenTitle: 'Տեսեք հավելվածը<br>մինչև թողարկումը:',
    videoLabel: 'Վիդեո ցուցադրություն',
    videoTitle: 'Տեսեք, թե ինչպես է այն աշխատում:',
    videoLead: 'Ցուցադրություն բոլոր աջակցվող iPhone մոդելներով:',
    why: 'Ինչու BalanceCleaner',
    featuresTitle: 'Պարզ և մտածված:',
    clear: 'Պարզ դիզայն', clearText: 'Գործիքներ, որոնք հեշտ է օգտագործել առաջին իսկ հպումից:',
    private: 'Գաղտնիություն', privateText: 'Թափանցիկ որոշումներ և հարգանք ձեր տվյալների նկատմամբ:',
    quiet: 'Հանգիստ ուժ', quietText: 'Օգտակար տվյալներ՝ առանց բարդությունների:',
    improve: 'Շարունակական բարելավում', improveText: 'Ուղարկեք արձագանք անմիջապես ծրագրավորողին:',
    listening: 'Մենք լսում ենք', idea: 'Ունե՞ք գաղափար:',
    ideaText: 'Ուղարկեք ձեր կարծիքը կամ հարցը աջակցության բաժնի միջոցով:',
    openSupport: 'Բացել աջակցությունը →',
    faqTitle: 'Հաճախ տրվող հարցեր',
    faq1q: 'Ի՞նչ է BalanceCleaner-ը:',
    faq1a: 'BalanceCleaner-ը թույլ է տալիս զրոյացնել Apple ID-ի մնացորդը՝ առանց գրանցման:',
    faq2q: 'Ինչպե՞ս է աշխատում բալանսի զրոյացումը:',
    faq2a: 'Մինչ հաստատելը դուք տեսնում եք մնացորդի և հաշվարկի ճշգրիտ բաշխումը:',
    faq3q: 'Արդյո՞ք իմ տվյալները ապահով են:',
    faq3a: 'Այո: Ամեն ինչ կատարվում է ձեր սարքում Apple-ի StoreKit-ի միջոցով: Մենք տվյալներ չենք հավաքում:',
    faq4q: 'Արդյո՞ք անհրաժեշտ է հաշիվ:',
    faq4a: 'Ոչ, գրանցում չի պահանջվում:',
    faq5q: 'Ի՞նչ է Pro-ն:',
    faq5a: 'Pro-ն բացում է գործարքների ամբողջական պատմությունը, PDF արտահանումը և այլ կարգավորումներ: Հիմնական գործառույթը անվճար է:',
    guideLabel: 'Ակնարկ',
    guideTitle: 'Զրոյացնել Apple ID բալանսը',
    guideDesc: 'Apple ID տարածաշրջանը փոխելու համար բալանսը պետք է լինի զրո:',
    step1Title: 'Ստուգեք մնացորդը',
    step1Desc: 'Բացեք App Store-ի կարգավորումները և գտեք մնացորդը:',
    step2Title: 'Հաշվարկեք և գնեք',
    step2Desc: 'Եթե գինը գերազանցում է մնացորդը, Apple-ը կգանձի մնացածը քարտից:',
    step3Title: 'Տարածաշրջանի հաջող փոփոխություն',
    step3Desc: 'Զրոյացումից հետո վերադարձեք Apple ID և փոխեք տարածաշրջանը:',
    donationTitle: 'Ձեր վճարումը որպես աջակցություն',
    donationDesc: 'Վճարելով մնացորդը՝ դուք աջակցում եք անկախ iOS մշակմանը:',
    donationFooter: 'Շնորհակալություն հավելվածը անվճար պահելու համար:',
    guideNeedHelp: 'Օգնության կարիք ունե՞ք:',
    guideSupportTitle: 'Դիմեք Apple-ի աջակցությանը',
    guideSupportDesc: 'Եթե մնացորդը փոքր է նվազագույն գնից, դիմեք անմիջապես Apple-ին:',
    guideSupportWeb: 'Apple Բիլինգ',
    proFeaturesTitle: 'Պրեմիում հնարավորություններ',
    privacyEyebrow: 'ՁԵՐ ԳԱՂՏՆԻՈՒԹՅՈՒՆԸ ԿԱՐԵՎՈՐ Է',
    privacyTitle: 'Գաղտնիության քաղաքականություն',
    privCard1Title: 'Apple StoreKit Անվտանգություն',
    privCard1Desc: 'Բոլոր գործարքներն իրականացվում են Apple In-App Purchase API-ի միջոցով:',
    privCard2Title: 'Վճարումների հասանելիություն չկա',
    privCard2Desc: 'Մենք երբեք չենք տեսնում և չենք պահպանում ձեր քարտերի տվյալները:',
    privCard3Title: 'Տվյալների վաճառք չկա',
    privCard3Desc: 'Ձեր անձնական տվյալները երբեք չեն փոխանցվում երրորդ կողմերին:',
  top: 'Գլխավոր',
  devicePreview: 'Սարքի դիտում', devicePreviewTitle: 'Բոլոր էկրանները, բոլոր մոդելները.', devicePreviewDesc: 'Ոլորեք հորիզոնական՝ բոլոր սքրինշոթերը տեսնելու համար: iPhone 18 Pro-ն ցույց է տալիս իրական սքրինշոթեր:', comingSoon: 'Շուտով'
});

// =========================================================================
// APPLY LANGUAGE
// =========================================================================
const tierI18n = {
  en: {
    tiersLabel: "Purchase Tiers",
    tiersTitle: "How Balance Clearing Works",
    tiersDesc: "Each tier is a donation that simultaneously zeros your Apple ID balance. Buy the tier that matches your balance — Apple charges balance first, then card.",
    tiersNote: "💡 Smart Balance Matcher automatically selects the optimal combination of tiers to reach exactly $0.00.",
    tier1Price: "~$0.99 / 1 coin",  tier1Desc: "Clears a balance of ~$0.99.",
    tier2Price: "~$1.99 / 2 coins", tier2Desc: "Clears a balance of ~$1.99.",
    tier3Price: "~$2.99 / 3 coins", tier3Desc: "Use when your balance is around $2–3.",
    tier4Price: "~$3.99 / 4 coins", tier4Desc: "Best for a $3–4 leftover balance.",
    tier5Price: "~$4.99 / 5 coins", tier5Desc: "Handles balances around $4–5.",
    tier10Price: "~$9.99 / 10 coins", tier10Desc: "Clears larger balances up to $10.",
  },
  ru: {
    tiersLabel: "Уровни покупок",
    tiersTitle: "Как работает обнуление баланса",
    tiersDesc: "Каждый тир — это донат, который одновременно обнуляет ваш баланс Apple ID. Выберите тир, соответствующий вашему остатку.",
    tiersNote: "💡 Smart Balance Matcher автоматически подберёт оптимальную комбинацию тиров до $0.00.",
    tier1Price: "~99 ₽ / 1 монета",   tier1Desc: "Обнуляет баланс ~99 ₽.",
    tier2Price: "~199 ₽ / 2 монеты",  tier2Desc: "Для баланса ~199 ₽.",
    tier3Price: "~299 ₽ / 3 монеты",  tier3Desc: "Подходит для остатка 200–300 ₽.",
    tier4Price: "~399 ₽ / 4 монеты",  tier4Desc: "Оптимально для 300–400 ₽.",
    tier5Price: "~499 ₽ / 5 монет",   tier5Desc: "Для остатка до 500 ₽.",
    tier10Price: "~999 ₽ / 10 монет", tier10Desc: "Для больших остатков до 1000 ₽.",
  },
  fr: {
    tiersLabel: "Niveaux d'achat",
    tiersTitle: "Comment fonctionne le solde",
    tier1Price: "~0,99 € / 1 pièce", tier1Desc: "Solde ~0,99 €.",
    tier2Price: "~1,99 € / 2 pièces",tier2Desc: "Solde ~1,99 €.",
    tier3Price: "~2,99 € / 3 pièces",tier3Desc: "Solde ~2–3 €.",
    tier4Price: "~3,99 € / 4 pièces",tier4Desc: "Solde ~3–4 €.",
    tier5Price: "~4,99 € / 5 pièces",tier5Desc: "Solde ~4–5 €.",
    tier10Price: "~9,99 € / 10 pièces",tier10Desc: "Solde ~9–10 €.",
  },
  de: {
    tiersLabel: "Kaufstufen",
    tiersTitle: "Wie das Guthaben-Clearing funktioniert",
    tier1Price: "~0,99 € / 1 Münze", tier1Desc: "Guthaben ~0,99 €.",
    tier2Price: "~1,99 € / 2 Münzen",tier2Desc: "Guthaben ~1,99 €.",
    tier3Price: "~2,99 € / 3 Münzen",tier3Desc: "Guthaben ~2–3 €.",
    tier4Price: "~3,99 € / 4 Münzen",tier4Desc: "Guthaben ~3–4 €.",
    tier5Price: "~4,99 € / 5 Münzen",tier5Desc: "Guthaben ~4–5 €.",
    tier10Price: "~9,99 € / 10 Münzen",tier10Desc: "Guthaben ~9–10 €.",
  },
  es: {
    tiersLabel: "Niveles de compra",
    tiersTitle: "Cómo funciona la compensación de saldo",
    tier1Price: "~0,99 € / 1 moneda", tier1Desc: "Saldo ~0,99 €.",
    tier2Price: "~1,99 € / 2 monedas",tier2Desc: "Saldo ~1,99 €.",
    tier3Price: "~2,99 € / 3 monedas",tier3Desc: "Saldo ~2–3 €.",
    tier4Price: "~3,99 € / 4 monedas",tier4Desc: "Saldo ~3–4 €.",
    tier5Price: "~4,99 € / 5 monedas",tier5Desc: "Saldo ~4–5 €.",
    tier10Price: "~9,99 € / 10 monedas",tier10Desc: "Saldo ~9–10 €.",
  },
  it: {
    tiersLabel: "Livelli di acquisto",
    tiersTitle: "Come funziona la pulizia del saldo",
    tier1Price: "~0,99 € / 1 moneta", tier1Desc: "Saldo ~0,99 €.",
    tier2Price: "~1,99 € / 2 monete", tier2Desc: "Saldo ~1,99 €.",
    tier3Price: "~2,99 € / 3 monete", tier3Desc: "Saldo ~2–3 €.",
    tier4Price: "~3,99 € / 4 monete", tier4Desc: "Saldo ~3–4 €.",
    tier5Price: "~4,99 € / 5 monete", tier5Desc: "Saldo ~4–5 €.",
    tier10Price: "~9,99 € / 10 monete",tier10Desc: "Saldo ~9–10 €.",
  }
};

// Merge tier keys into main i18n dict
for (const lang in tierI18n) {
  if (dictionaries[lang]) {
    Object.assign(dictionaries[lang], tierI18n[lang]);
  } else {
    dictionaries[lang] = Object.assign({}, dictionaries.en, tierI18n[lang]);
  }
}

function applyLanguage(code) {
  const t = dictionaries[code] || dictionaries.en;
  document.documentElement.lang = code;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = t[el.dataset.i18n];
    if (val != null) el.innerHTML = val;
  });
  localStorage.setItem('balance-language', code);
  // Update all lang labels
  document.querySelectorAll('.lang-label').forEach(lbl => {
    lbl.textContent = code.toUpperCase();
  });
  
  // Sync Privacy page tabs if they exist
  const content = document.getElementById('lang-' + code);
  if (content) {
    document.querySelectorAll('.lang-tab').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.policy-content').forEach(s => s.classList.remove('active'));
    const privacyTab = document.querySelector('.lang-tab[data-lang="' + code + '"]');
    if (privacyTab) privacyTab.classList.add('active');
    content.classList.add('active');
  }
  // Bold active in all menus
  document.querySelectorAll('.lang-menu button').forEach(btn => {
    btn.style.fontWeight = btn.dataset.val === code ? '700' : 'normal';
  });
}

// Initialize language
const savedLang = localStorage.getItem('balance-language') || 'en';
applyLanguage(savedLang);

// =========================================================================
// MARK: - THEME INITIALIZATION (Permanent Dark Theme per design specification)
// =========================================================================
document.documentElement.classList.remove('light');
try {
  localStorage.removeItem('balance-theme');
} catch (e) {}

// =========================================================================
// LANGUAGE SWITCHER DROPDOWNS (multiple on page)
// =========================================================================

document.addEventListener('click', function(e) {
  const btn = e.target.closest('.lang-btn');
  if (btn) {
    e.stopPropagation();
    const menu = btn.closest('.custom-lang').querySelector('.lang-menu');
    const isOpen = menu.classList.contains('show');
    // Close all
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

  // Click outside — close all
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
  const contextImg = document.querySelector(`.canvas-context[data-context="${target}"]`);
  if (contextImg) {
    if (placeholder) placeholder.classList.add('hidden');
    setTimeout(() => contextImg.classList.add('visible'), 60);
  } else if (target === 'guide') {
    const firstStep = document.querySelector('#panel-guide [data-slide]');
    if (firstStep) {
      setTimeout(() => firstStep.click(), 60);
    }
  } else {
    // Show placeholder or wait for hover
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

// Interactive hover & click on item rows
function setupInteractivePreview() {
  const interactiveItems = document.querySelectorAll('[data-slide]');
  const slides = document.querySelectorAll('.canvas-image');
  const placeholder = document.getElementById('placeholder');

  interactiveItems.forEach(item => {
    const showSlide = () => {
      const slideKey = item.dataset.slide;
      if (!slideKey || slideKey === currentSlide) return;
      currentSlide = slideKey;

      if (placeholder) placeholder.classList.add('hidden');

      // Pause non-active videos and reset stage state
      document.querySelectorAll('.canvas-image video').forEach(v => {
        try {
          v.pause();
          v.closest('.mockup-stage')?.classList.remove('is-playing');
        } catch (e) {}
      });

      // Hide all context and images
      document.querySelectorAll('.canvas-context').forEach(c => c.classList.remove('visible'));
      slides.forEach(s => {
        const matches = s.dataset.slide === slideKey;
        s.classList.toggle('visible', matches);
      });

      // Highlight active row in list
      interactiveItems.forEach(i => i.classList.toggle('active', i === item));
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

// Interactive Video Players with Play Button & Controls
function setupVideoPlayers() {
  document.querySelectorAll('.mockup-stage').forEach(stage => {
    const video = stage.querySelector('video');
    const playBtn = stage.querySelector('.mockup-play-btn');
    const toggleBtn = stage.querySelector('.btn-play-toggle');
    const soundBtn = stage.querySelector('.btn-sound-toggle');

    if (!video) return;

    const updateUI = () => {
      const isPlaying = !video.paused && !video.ended;
      stage.classList.toggle('is-playing', isPlaying);
      if (toggleBtn) {
        const icon = toggleBtn.querySelector('.ctrl-icon');
        const text = toggleBtn.querySelector('.ctrl-text');
        if (icon) icon.textContent = isPlaying ? '❚❚' : '▶';
        if (text) text.textContent = isPlaying ? 'Pause' : 'Play Demo';
      }
    };

    const togglePlay = (e) => {
      if (e) e.stopPropagation();
      if (video.paused) {
        // Pause any other videos across all slides
        document.querySelectorAll('.canvas-image video').forEach(v => {
          if (v !== video) {
            v.pause();
            v.closest('.mockup-stage')?.classList.remove('is-playing');
          }
        });
        video.play().then(updateUI).catch(err => {
          console.warn('Playback error or policy:', err);
        });
      } else {
        video.pause();
        updateUI();
      }
    };

    if (playBtn) playBtn.addEventListener('click', togglePlay);
    if (toggleBtn) toggleBtn.addEventListener('click', togglePlay);
    const wrap = stage.querySelector('.mockup-wrap');
    if (wrap) wrap.addEventListener('click', togglePlay);

    if (soundBtn) {
      soundBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        video.muted = !video.muted;
        const icon = soundBtn.querySelector('.ctrl-icon');
        const text = soundBtn.querySelector('.ctrl-text');
        if (icon) icon.textContent = video.muted ? '🔇' : '🔊';
        if (text) text.textContent = video.muted ? 'Muted' : 'Sound On';
      });
    }

    video.addEventListener('play', updateUI);
    video.addEventListener('pause', updateUI);
    video.addEventListener('ended', updateUI);
  });
}

// Initial hash routing & DOM setup
document.addEventListener('DOMContentLoaded', () => {
  setupInteractivePreview();
  setupModelFilter();
  setupVideoPlayers();

  // Route helper
  function routeFromHash() {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    const validPanels = ['features', 'screens', 'guide', 'about', 'support', 'privacy'];
    if (validPanels.includes(hash)) {
      switchPanel(hash);
    } else if (hash === 'story') {
      switchPanel('about');
    } else {
      switchPanel('features');
    }
  }

  // Check initial hash
  routeFromHash();

  // Listen for hash changes (history navigation or direct URL hash updates)
  window.addEventListener('hashchange', routeFromHash);
});
