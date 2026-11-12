// MARK: - Filter Studio Multi-Language Dynamic Client Script
(() => {
  'use strict';

  // State
  let currentLang = 'en';
  let i18nData = {};
  const SUPPORTED_LANGS = ['en', 'ru', 'fr', 'es', 'it', 'de'];

  // Detect language
  const savedLang = localStorage.getItem('filterstudio_lang');
  const urlLang = new URLSearchParams(window.location.search).get('lang');
  const navLang = (navigator.language || 'en').slice(0, 2).toLowerCase();

  if (urlLang && SUPPORTED_LANGS.includes(urlLang)) {
    currentLang = urlLang;
  } else if (savedLang && SUPPORTED_LANGS.includes(savedLang)) {
    currentLang = savedLang;
  } else if (SUPPORTED_LANGS.includes(navLang)) {
    currentLang = navLang;
  }

  // Load language dictionary
  async function loadTranslations(lang) {
    try {
      const res = await fetch(`i18n/${lang}.json`);
      if (res.ok) {
        i18nData = await res.json();
      }
    } catch (e) {
      console.warn('Failed to load translations for', lang);
    }
  }

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('filterstudio_lang', lang);
    document.documentElement.lang = lang;

    // Update UI elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (i18nData[key]) {
        el.textContent = i18nData[key];
      }
    });

    // Update elements with language-specific attributes data-en, data-ru, etc.
    document.querySelectorAll(`[data-${lang}]`).forEach(el => {
      const val = el.getAttribute(`data-${lang}`);
      if (val) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = val;
        } else {
          el.innerHTML = val;
        }
      }
    });

    // Update language badge
    const label = document.querySelector('.lang-label');
    if (label) label.textContent = lang.toUpperCase();

    // Mark active in dropdown
    document.querySelectorAll('.lang-menu button').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-val') === lang);
    });
  }

  async function setLanguage(lang) {
    await loadTranslations(lang);
    applyLanguage(lang);
  }

  // Navigation and Tabs
  function initNav() {
    const navLinks = document.querySelectorAll('[data-nav]');
    const panels = document.querySelectorAll('.panel');

    function switchPanel(targetId) {
      const panel = document.getElementById(`panel-${targetId}`);
      if (!panel) return;

      panels.forEach(p => p.classList.remove('panel-active'));
      panel.classList.add('panel-active');

      navLinks.forEach(link => {
        if (link.getAttribute('data-nav') === targetId) {
          link.classList.add('nav-active');
        } else {
          link.classList.remove('nav-active');
        }
      });

      // Close mobile menu if open
      const mobileNav = document.getElementById('mobileNav');
      if (mobileNav) mobileNav.classList.remove('open');

      window.location.hash = targetId;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const target = link.getAttribute('data-nav');
        if (target) {
          e.preventDefault();
          switchPanel(target);
        }
      });
    });

    // Check hash on load
    if (window.location.hash) {
      const hash = window.location.hash.replace('#', '');
      switchPanel(hash);
    }
  }

  // Device Screens Filters & Slides
  function initScreens() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('#screensList .interactive-item');
    const visualSlides = document.querySelectorAll('.visual-slide');

    function showSlide(slideId) {
      visualSlides.forEach(slide => {
        slide.classList.toggle('slide-active', slide.id === `slide-${slideId}`);
      });
    }

    items.forEach(item => {
      item.addEventListener('click', () => {
        items.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        const slide = item.getAttribute('data-slide');
        if (slide) showSlide(slide);
      });
      item.addEventListener('mouseenter', () => {
        const slide = item.getAttribute('data-slide');
        if (slide) showSlide(slide);
      });
    });

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');

        items.forEach(item => {
          const model = item.getAttribute('data-model');
          if (filter === 'all' || model === filter) {
            item.style.display = '';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  // Features List interactive hover/click
  function initFeatures() {
    const featItems = document.querySelectorAll('#featuresList .interactive-item, #projectList .interactive-item');
    const visualSlides = document.querySelectorAll('.visual-slide');

    featItems.forEach(item => {
      item.addEventListener('click', () => {
        featItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        const slide = item.getAttribute('data-slide');
        if (slide) {
          visualSlides.forEach(s => s.classList.toggle('slide-active', s.id === `slide-${slide}` || s.id === `slide-${slide.replace('feat', 'duo')}`));
        }
      });
      item.addEventListener('mouseenter', () => {
        const slide = item.getAttribute('data-slide');
        if (slide) {
          visualSlides.forEach(s => s.classList.toggle('slide-active', s.id === `slide-${slide}` || s.id === `slide-${slide.replace('feat', 'duo')}`));
        }
      });
    });
  }

  // Guide Steps walkthrough
  function initGuide() {
    const guideCards = document.querySelectorAll('.guide-step-card');
    const visualSlides = document.querySelectorAll('.visual-slide');

    guideCards.forEach(card => {
      card.addEventListener('click', () => {
        guideCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        const slide = card.getAttribute('data-slide');
        if (slide) {
          visualSlides.forEach(s => s.classList.toggle('slide-active', s.id === `slide-${slide}`));
        }
      });
    });
  }

  // Mobile menu and dropdown toggles
  function initControls() {
    const burger = document.getElementById('navBurger');
    const closeBtn = document.getElementById('navClose');
    const mobileNav = document.getElementById('mobileNav');

    if (burger && mobileNav) {
      burger.addEventListener('click', () => mobileNav.classList.add('open'));
    }
    if (closeBtn && mobileNav) {
      closeBtn.addEventListener('click', () => mobileNav.classList.remove('open'));
    }

    const langBtn = document.querySelector('.lang-btn');
    const langMenu = document.querySelector('.lang-menu');

    if (langBtn && langMenu) {
      langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langMenu.classList.toggle('show');
      });

      document.querySelectorAll('.lang-menu button').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const selected = btn.getAttribute('data-val');
          if (selected) {
            setLanguage(selected);
            langMenu.classList.remove('show');
          }
        });
      });

      document.addEventListener('click', () => {
        langMenu.classList.remove('show');
      });
    }
  }

  // Lightbox Modal
  function initLightbox() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const closeBtn = document.querySelector('.modal-close');

    if (!modal || !modalImg) return;

    document.querySelectorAll('.visual-slide img').forEach(img => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImg.src = img.src;
        if (modalCaption) {
          modalCaption.textContent = img.alt || 'Filter Studio Showcase';
        }
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', () => modal.style.display = 'none');
    }
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.style.display = 'none';
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') modal.style.display = 'none';
    });
  }

  // Initialize all components
  document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initScreens();
    initFeatures();
    initGuide();
    initControls();
    initLightbox();
    setLanguage(currentLang);
  });
})();
