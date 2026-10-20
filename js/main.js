/**
 * Hakob Ghlijyan — iOS Engineer Portfolio
 * Interactions, Theme System & Shimmering Canvas Animation
 * 
 * Логика навигации, смены темы (тёмная/светлая), анимации переливающегося песка и контактной формы.
 */

// MARK: - Main Application Lifecycle / Главный цикл приложения
(function() {
  'use strict';

  // =========================================================================
  // MARK: - THEME MANAGEMENT / СИСТЕМА УПРАВЛЕНИЯ ТЕМАМИ (Dark & Light Mode)
  // Seamless theme switcher with vector SVG icons, smooth blur transition & persistence
  // =========================================================================

  const THEME_ICON_SUN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>';
  const THEME_ICON_MOON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';

  const metaThemeColor = document.getElementById('metaThemeColor') || document.querySelector('meta[name="theme-color"]');

  /**
   * Применяет выбранную тему (light или dark) к документу и обновляет иконки/метатеги
   * Applies selected theme (light or dark) to document and updates icons/meta tags
   */
  function applyTheme(mode) {
    const isLight = mode === 'light';
    document.documentElement.classList.toggle('light', isLight);

    // В светлой теме показываем Луну (для перехода в тёмную), в тёмной — Солнце
    const icon = isLight ? THEME_ICON_MOON : THEME_ICON_SUN;
    document.querySelectorAll('.theme-icon').forEach(el => el.innerHTML = icon);

    document.querySelectorAll('.theme').forEach(btn => {
      const label = isLight ? 'Switch to dark theme' : 'Switch to light theme';
      btn.setAttribute('aria-label', label);
      btn.setAttribute('title', label);
    });

    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', isLight ? '#f8f6f0' : '#0f0e0b');
    }

    try {
      localStorage.setItem('portfolio-theme', mode);
      localStorage.setItem('balance-theme', mode); // Синхронизация с Balance Cleaner
    } catch (e) {}
  }

  // Определение сохраненной темы или дефолтная темная тема
  const savedTheme = (function() {
    try {
      return localStorage.getItem('portfolio-theme') || localStorage.getItem('balance-theme') || 'dark';
    } catch (e) {
      return 'dark';
    }
  })();
  applyTheme(savedTheme);

  // Обработчик клика по кнопке темы с кинематографичным блюр-переходом
  document.addEventListener('click', function(e) {
    const btn = e.target.closest('.theme');
    if (!btn) return;

    btn.classList.add('theme-transition');
    setTimeout(() => btn.classList.remove('theme-transition'), 600);

    const isCurrentlyLight = document.documentElement.classList.contains('light');
    const nextTheme = isCurrentlyLight ? 'dark' : 'light';

    document.body.classList.add('theme-blur');
    setTimeout(() => {
      applyTheme(nextTheme);
    }, 200);
    setTimeout(() => {
      document.body.classList.remove('theme-blur');
    }, 450);
  });

  // =========================================================================
  // MARK: - SHIMMERING SAND & DUNES CANVAS / КАНВА ПЕРЕЛИВАЮЩЕГОСЯ ЗОЛОТОГО ПЕСКА
  // Flowing organic dunes, sparkling stardust grains, and subtle mouse deflection
  // =========================================================================

  (function initSandCanvas() {
    const canvas = document.getElementById('heroSandCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const heroSection = document.getElementById('hero');
    let width = 0;
    let height = 0;
    let dpr = 1;
    let animationId = null;
    let isVisible = true;
    let time = 0;

    // Конфигурация песчинок
    const PARTICLE_COUNT = 90;
    const particles = [];

    // Интерактивность курсора
    const mouse = { x: -1000, y: -1000, active: false };

    function isLightMode() {
      return document.documentElement.classList.contains('light');
    }

    // Цветовые палитры для переливающегося песка
    function getColors() {
      const light = isLightMode();
      return {
        particleColors: light
          ? ['rgba(154, 114, 51, ', 'rgba(184, 141, 72, ', 'rgba(196, 155, 82, ', 'rgba(138, 98, 38, ']
          : ['rgba(201, 169, 110, ', 'rgba(223, 197, 150, ', 'rgba(240, 215, 170, ', 'rgba(255, 235, 195, '],
        waveGradients: light
          ? [
              { c1: 'rgba(154, 114, 51, 0.05)', c2: 'rgba(184, 141, 72, 0.01)' },
              { c1: 'rgba(184, 141, 72, 0.04)', c2: 'rgba(248, 246, 240, 0.00)' },
              { c1: 'rgba(196, 155, 82, 0.03)', c2: 'rgba(240, 235, 225, 0.00)' }
            ]
          : [
              { c1: 'rgba(201, 169, 110, 0.06)', c2: 'rgba(201, 169, 110, 0.01)' },
              { c1: 'rgba(223, 197, 150, 0.04)', c2: 'rgba(15, 14, 11, 0.00)' },
              { c1: 'rgba(240, 215, 170, 0.03)', c2: 'rgba(15, 14, 11, 0.00)' }
            ]
      };
    }

    function resize() {
      if (!heroSection) return;
      const rect = heroSection.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.scale(dpr, dpr);
    }

    // Создание песчинок
    function createParticles() {
      particles.length = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * (width || 800),
          y: Math.random() * (height || 600),
          radius: Math.random() * 1.5 + 0.6,
          baseAlpha: Math.random() * 0.45 + 0.25,
          alpha: 0.3,
          shimmerSpeed: Math.random() * 0.03 + 0.015,
          shimmerPhase: Math.random() * Math.PI * 2,
          vx: (Math.random() - 0.35) * 0.45,
          vy: (Math.random() - 0.5) * 0.25,
          colorIndex: Math.floor(Math.random() * 4)
        });
      }
    }

    // Отрисовка барханов/волн струящегося песка
    function drawDunes(time, colors) {
      const waveCount = 3;
      const waveHeights = [height * 0.72, height * 0.82, height * 0.90];
      const amplitudes = [28, 38, 22];
      const frequencies = [0.0022, 0.0018, 0.0031];
      const speeds = [0.0008, 0.0005, 0.0011];

      for (let i = 0; i < waveCount; i++) {
        ctx.beginPath();
        ctx.moveTo(0, height);

        const baseH = waveHeights[i];
        const amp = amplitudes[i];
        const freq = frequencies[i];
        const spd = speeds[i];
        const gradConfig = colors.waveGradients[i % colors.waveGradients.length];

        for (let x = 0; x <= width; x += 16) {
          const y = baseH +
            Math.sin(x * freq + time * spd + i * 1.5) * amp +
            Math.sin(x * (freq * 0.6) - time * (spd * 0.7)) * (amp * 0.5);
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.closePath();

        const gradient = ctx.createLinearGradient(0, baseH - amp, 0, height);
        gradient.addColorStop(0, gradConfig.c1);
        gradient.addColorStop(1, gradConfig.c2);

        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }

    // Главный цикл рендера
    function render() {
      if (!isVisible) return;

      time += 1;
      ctx.clearRect(0, 0, width, height);

      const colors = getColors();

      // 1. Отрисовка барханов
      drawDunes(time, colors);

      // 2. Отрисовка песчинок с переливанием и физикой
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.shimmerPhase += p.shimmerSpeed;
        const shimmer = Math.sin(p.shimmerPhase);
        p.alpha = Math.max(0.08, Math.min(0.9, p.baseAlpha + shimmer * 0.25));

        p.x += p.vx;
        p.y += p.vy;

        // Мягкое отклонение от курсора мыши
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 130;
          if (dist < maxDist && dist > 0) {
            const force = (1 - dist / maxDist) * 1.6;
            p.x += (dx / dist) * force;
            p.y += (dy / dist) * force;
          }
        }

        // Зацикливание границ экрана
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = colors.particleColors[p.colorIndex] + p.alpha + ')';
        ctx.fill();

        // Нежный ореол свечения вокруг ярких песчинок
        if (p.radius > 1.3 && p.alpha > 0.45) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = colors.particleColors[p.colorIndex] + (p.alpha * 0.15) + ')';
          ctx.fill();
        }
      }

      animationId = requestAnimationFrame(render);
    }

    // Слушатели положения курсора мыши
    if (heroSection) {
      heroSection.addEventListener('mousemove', function(e) {
        const rect = heroSection.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
        mouse.active = true;
      }, { passive: true });

      heroSection.addEventListener('mouseleave', function() {
        mouse.active = false;
        mouse.x = -1000;
        mouse.y = -1000;
      }, { passive: true });
    }

    // Оптимизация: пауза анимации вне зоны видимости через IntersectionObserver (0% CPU/GPU)
    if ('IntersectionObserver' in window && heroSection) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          isVisible = entry.isIntersecting;
          if (isVisible && !animationId) {
            render();
          } else if (!isVisible && animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
          }
        });
      }, { threshold: 0.05 });
      observer.observe(heroSection);
    }

    window.addEventListener('resize', () => {
      resize();
      createParticles();
    }, { passive: true });

    resize();
    createParticles();
    render();
  })();

  // =========================================================================
  // MARK: - NAVIGATION & INTERACTIONS / НАВИГАЦИЯ И ВЗАИМОДЕЙСТВИЕ
  // =========================================================================

  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
  }

  // Мобильное меню
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  // Активный пункт меню при прокрутке
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = navLinks ? navLinks.querySelectorAll('a[href^="#"]') : [];

  function updateActiveNav() {
    const scrollY = window.scrollY + 120;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        navAnchors.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === '#' + id);
        });
      }
    });
  }
  window.addEventListener('scroll', updateActiveNav, { passive: true });

  // Анимация появления блоков (Scroll Reveal)
  const reveals = document.querySelectorAll('.reveal');

  function checkReveal() {
    const windowH = window.innerHeight;
    reveals.forEach(function(el) {
      if (el.classList.contains('visible')) return;
      const top = el.getBoundingClientRect().top;
      if (top < windowH - 80) {
        el.classList.add('visible');
      }
    });
  }

  checkReveal();
  window.addEventListener('scroll', checkReveal, { passive: true });
  window.addEventListener('resize', checkReveal, { passive: true });

  // =========================================================================
  // MARK: - MATRIX ACCORDION / МАТРИЧНЫЙ АККОРДЕОН ПРОЕКТОВ (Kinetic Style)
  // Dynamic 2D grid accordion: clicking any cell expands it while others collapse
  // =========================================================================
  (function initMatrixAccordion() {
    const grid = document.getElementById('matrix');
    if (!grid) return;
    const cells = Array.from(grid.querySelectorAll('.cell'));
    if (!cells.length) return;

    let activeIndex = -1;
    const BIG_COL = 5; // Вес активной колонки (5fr vs 1fr 1fr)
    const BIG_ROW = 4.2; // Вес активной строки (4.2fr vs 1fr)

    function isMobile() {
      return window.innerWidth <= 960;
    }

    function reset() {
      if (isMobile()) {
        grid.style.gridTemplateColumns = '1fr';
        grid.style.gridTemplateRows = 'repeat(6, 1fr)';
      } else {
        grid.style.gridTemplateColumns = '1fr 1fr 1fr';
        grid.style.gridTemplateRows = '1fr 1fr';
      }
      cells.forEach(c => c.classList.remove('is-active', 'is-dim'));
      activeIndex = -1;
    }

    function open(i) {
      if (isMobile()) {
        grid.style.gridTemplateColumns = '1fr';
        const rows = ['1fr', '1fr', '1fr', '1fr', '1fr', '1fr'];
        rows[i] = '4.5fr';
        grid.style.gridTemplateRows = rows.join(' ');
      } else {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const cols = ['1fr', '1fr', '1fr'];
        const rows = ['1fr', '1fr'];
        cols[col] = BIG_COL + 'fr';
        rows[row] = BIG_ROW + 'fr';
        grid.style.gridTemplateColumns = cols.join(' ');
        grid.style.gridTemplateRows = rows.join(' ');
      }

      cells.forEach((c, j) => {
        c.classList.toggle('is-active', j === i);
        c.classList.toggle('is-dim', j !== i);
      });
      activeIndex = i;

      // Ensure active card is comfortably in viewport on mobile and tablet
      if (isMobile()) {
        setTimeout(() => {
          const rect = cells[i].getBoundingClientRect();
          if (rect.top < 80 || rect.bottom > window.innerHeight) {
            cells[i].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        }, 220);
      }
    }

    cells.forEach((cell, i) => {
      function toggle() {
        if (activeIndex === i) {
          reset();
        } else {
          open(i);
        }
      }

      cell.addEventListener('click', toggle);

      cell.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          if (e.target.tagName !== 'A') {
            e.preventDefault();
            toggle();
          }
        } else if (e.key === 'Escape') {
          reset();
        }
      });
    });

    window.addEventListener('resize', () => {
      if (activeIndex !== -1) {
        open(activeIndex);
      } else {
        reset();
      }
    }, { passive: true });
  })();

  // =========================================================================
  // MARK: - CONTACT FORM (FormSubmit AJAX) / ОБРАБОТКА КОНТАКТНОЙ ФОРМЫ
  // =========================================================================

  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');

  if (contactForm && submitBtn) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const message = messageInput ? messageInput.value.trim() : '';

      if (!name || !email || !message) {
        alert('Please fill in all fields before sending / Пожалуйста, заполните все поля.');
        return;
      }

      submitBtn.disabled = true;
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';

      fetch('https://formsubmit.co/ajax/hakobghlijyan@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
          _subject: `New Portfolio Message from ${name}`
        })
      })
      .then(response => {
        if (response.ok) {
          submitBtn.textContent = '✓ Message Sent! Thank you.';
          submitBtn.style.background = '#28a745';
          contactForm.reset();
          setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = '';
            submitBtn.disabled = false;
          }, 4500);
        } else {
          throw new Error('Form error');
        }
      })
      .catch(() => {
        contactForm.submit();
      });
    });
  }
})();