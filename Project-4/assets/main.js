/**
 * Universal Mobile Showcase — main.js
 * Architecture replicated from CentSweep split-screen system.
 */
const dictionaries = {
  en: {
    portfolio: 'Portfolio', features: 'Features', screens: 'Screens',
    guideLabel: 'Overview', about: 'About', support: 'Support', privacy: 'Privacy',
    comingSoon: 'Coming Soon', getOnAppStore: 'Coming Soon to App Store',
    featuresHeader: 'Project 04 for iOS · Swift & Modern Frameworks',
    liveTitle: 'Coming Soon on the App Store',
    liveDesc: 'A native, responsive iOS experience crafted with precision engineering and privacy at its core.',
    hoverInspect: 'Hover module to inspect',
    feat1Title: 'Architecture & Core Engine',
    feat2Title: 'Intuitive Native Experience',
    feat3Title: 'Local Storage & Persistence',
    feat4Title: 'On-Device Privacy & Security',
    screenLabel: 'Product screens',
    screenTitle: 'Preview the interface.',
    guideTitle: 'Product Walkthrough',
    guideDesc: 'A simple, step-by-step introduction to getting the most out of Project 04.',
    storyTitle: 'Designed with intention.',
    storyLead: 'Crafted by an independent engineer with an obsession for speed, craftsmanship, and privacy.',
    storyText: 'Project 04 is built using native Swift architectures with zero unnecessary third-party dependencies. Everything runs locally on your Apple device.',
    supportTitle: 'How can we help?',
    supportLead: 'Send a question, bug report, or feature request. We reply directly by email.',
    supportName: 'Name', supportEmail: 'Email', supportMessage: 'Message', supportSend: 'Send Message →',
    privacyEyebrow: 'YOUR PRIVACY MATTERS', privacyTitle: 'Privacy Policy'
  },
  ru: {
    portfolio: 'Портфолио', features: 'Функции', screens: 'Экраны',
    guideLabel: 'Обзор', about: 'О приложении', support: 'Поддержка', privacy: 'Приватность',
    comingSoon: 'Скоро в App Store', getOnAppStore: 'Скоро в App Store',
    featuresHeader: 'Project 04 для iOS · Swift и нативные фреймворки',
    liveTitle: 'Скоро в App Store',
    liveDesc: 'Нативное приложение для iOS, созданное с вниманием к деталям и уважением к приватности.',
    hoverInspect: 'Наведите на модуль для просмотра',
    feat1Title: 'Архитектура и движок',
    feat2Title: 'Интуитивный интерфейс',
    feat3Title: 'Локальное хранилище',
    feat4Title: 'Приватность на устройстве',
    screenLabel: 'Экраны приложения',
    screenTitle: 'Познакомьтесь с интерфейсом.',
    guideTitle: 'Обзор продукта',
    guideDesc: 'Пошаговое руководство по ключевым возможностям Project 04.',
    storyTitle: 'Создано осознанно.',
    storyLead: 'Разработано независимым инженером с фокусом на скорость, надежность и приватность.',
    storyText: 'Project 04 создано на нативном Swift без лишних сторонних зависимостей. Все данные остаются на устройстве.',
    supportTitle: 'Как мы можем помочь?',
    supportLead: 'Отправьте вопрос, сообщение об ошибке или идею. Мы отвечаем по почте.',
    supportName: 'Имя', supportEmail: 'Email', supportMessage: 'Сообщение', supportSend: 'Отправить сообщение →',
    privacyEyebrow: 'ВАША ПРИВАТНОСТЬ ВАЖНА', privacyTitle: 'Политика конфиденциальности'
  }
};

function applyLanguage(code) {
  const t = dictionaries[code] || dictionaries.en;
  document.documentElement.lang = code;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = t[el.dataset.i18n];
    if (val != null) el.innerHTML = val;
  });
  localStorage.setItem('project-language', code);
  document.querySelectorAll('.lang-label').forEach(lbl => {
    lbl.textContent = code.toUpperCase();
  });
  document.querySelectorAll('.lang-menu button').forEach(btn => {
    btn.style.fontWeight = btn.dataset.val === code ? '700' : 'normal';
  });
}

const savedLang = localStorage.getItem('project-language') || 'en';
applyLanguage(savedLang);

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

let currentPanel = 'features';
let currentSlide = null;

function switchPanel(target) {
  if (!target) return;
  currentPanel = target;
  currentSlide = null;

  document.querySelectorAll('[data-nav]').forEach(link => {
    link.classList.toggle('nav-active', link.dataset.nav === target);
  });

  document.querySelectorAll('.panel').forEach(panel => {
    const isActive = panel.id === 'panel-' + target;
    panel.classList.toggle('panel-active', isActive);
    if (isActive) panel.scrollTop = 0;
  });

  const canvasImages = document.querySelectorAll('.canvas-image');
  const canvasContexts = document.querySelectorAll('.canvas-context');
  const placeholder = document.getElementById('placeholder');

  canvasImages.forEach(img => img.classList.remove('visible'));
  canvasContexts.forEach(ctx => ctx.classList.remove('visible'));

  const contextImg = document.querySelector('.canvas-context[data-context="' + target + '"]');
  if (contextImg) {
    if (placeholder) placeholder.classList.add('hidden');
    setTimeout(() => contextImg.classList.add('visible'), 60);
  } else {
    const firstTrigger = document.querySelector('#panel-' + target + ' [data-slide]');
    if (firstTrigger) {
      setTimeout(() => firstTrigger.click(), 60);
    } else if (placeholder) {
      placeholder.classList.remove('hidden');
    }
  }

  if (history.replaceState) {
    history.replaceState(null, '', '#' + target);
  } else {
    window.location.hash = '#' + target;
  }
}

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
      document.querySelectorAll('.canvas-context').forEach(c => c.classList.remove('visible'));
      slides.forEach(s => {
        s.classList.toggle('visible', s.dataset.slide === slideKey);
      });

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

      if (firstVisible) firstVisible.click();
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setupInteractivePreview();
  setupModelFilter();

  function routeFromHash() {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    const validPanels = ['features', 'screens', 'guide', 'about', 'support', 'privacy'];
    if (validPanels.includes(hash)) {
      switchPanel(hash);
    } else {
      switchPanel('features');
    }
  }

  routeFromHash();
  window.addEventListener('hashchange', routeFromHash);
});
