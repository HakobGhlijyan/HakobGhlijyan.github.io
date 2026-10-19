/**
 * Nightwell & Split Index Interactive Script
 * Language switching, panel navigation, screenshot gallery, and live canvas preview.
 */

// MARK: - Application Lifecycle / Жизненный цикл приложения
(function() {
  'use strict';

  // MARK: - Configuration / Конфигурация приложения
  const APP_NAME = "Nightwell";
  const SIRI_APP_NAME = "Night Well";

  // MARK: - Navigation: Panel Swapping / Переключение вкладок
  const navLinks = document.querySelectorAll('[data-nav]');
  const panels = document.querySelectorAll('.panel');
  const canvasImages = document.querySelectorAll('.canvas-image');
  const canvasContexts = document.querySelectorAll('.canvas-context');
  const placeholder = document.getElementById('placeholder');
  let currentPanel = 'work';
  let currentSlide = -1;

  function switchPanel(target) {
    if (target === currentPanel) return;
    currentPanel = target;
    currentSlide = -1;

    // Update nav active state
    navLinks.forEach(link => {
      link.classList.toggle('nav-active', link.dataset.nav === target);
    });

    // Switch left panel
    panels.forEach(panel => {
      panel.classList.toggle('panel-active', panel.id === 'panel-' + target);
    });

    // Reset canvas visuals
    canvasImages.forEach(img => img.classList.remove('visible'));
    canvasContexts.forEach(ctx => ctx.classList.remove('visible'));

    if (target === 'work' || target === 'screens') {
      placeholder.classList.remove('hidden');
    } else {
      placeholder.classList.add('hidden');
      const contextImg = document.querySelector('[data-context="' + target + '"]');
      if (contextImg) {
        setTimeout(() => contextImg.classList.add('visible'), 80);
      }
    }
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      switchPanel(link.dataset.nav);
    });
  });

  // MARK: - Work & Screens: Interactive Hover & Preview
  const interactiveItems = document.querySelectorAll('.project-item, .screen-item');
  const slides = document.querySelectorAll('.canvas-image');

  interactiveItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const key = item.dataset.slide || item.dataset.index;
      if (!key || key === currentSlide) return;
      currentSlide = key;

      placeholder.classList.add('hidden');

      slides.forEach(slide => {
        const slideKey = slide.dataset.slide || slide.dataset.index;
        slide.classList.toggle('visible', slideKey === key);
      });
    });
  });

  const panelWork = document.querySelector('#panel-work');
  if (panelWork) {
    panelWork.addEventListener('mouseleave', () => {
      if (currentPanel !== 'work') return;
      currentSlide = null;
      slides.forEach(s => s.classList.remove('visible'));
      placeholder.classList.remove('hidden');
    });
  }

  const panelScreens = document.querySelector('#panel-screens');
  if (panelScreens) {
    panelScreens.addEventListener('mouseleave', () => {
      if (currentPanel !== 'screens') return;
      currentSlide = null;
      slides.forEach(s => s.classList.remove('visible'));
      placeholder.classList.remove('hidden');
    });
  }

  // MARK: - Touch Device Support / Поддержка сенсорных экранов
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    interactiveItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const key = item.dataset.slide || item.dataset.index;

        placeholder.classList.add('hidden');
        interactiveItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        slides.forEach(slide => {
          const slideKey = slide.dataset.slide || slide.dataset.index;
          const match = slideKey === key;
          slide.classList.toggle('visible', match);
          if (match && window.innerWidth <= 900) {
            slide.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        });
      });
    });
  }

  // MARK: - Screenshot Filtering (Duo, iPhone, iPad, Apple Watch)
  const filterBtns = document.querySelectorAll('.screen-filter-btn');
  const screenItems = document.querySelectorAll('.screen-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      screenItems.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // MARK: - Bilingual Language Switcher (EN / RU)
  const langBtns = document.querySelectorAll('.lang-btn');
  const translatableElements = document.querySelectorAll('[data-en][data-ru]');

  function setLanguage(lang) {
    document.documentElement.lang = lang;
    langBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    translatableElements.forEach(el => {
      el.innerHTML = el.getAttribute('data-' + lang) || el.innerHTML;
    });

    try {
      localStorage.setItem('nightwell_lang', lang);
    } catch (e) {}
  }

  langBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      setLanguage(btn.dataset.lang);
    });
  });

  // Restore preferred language
  try {
    const savedLang = localStorage.getItem('nightwell_lang');
    if (savedLang === 'ru') {
      setLanguage('ru');
    }
  } catch (e) {}
})();