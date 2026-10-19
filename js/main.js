/**
 * Hakob Ghlijyan — iOS Engineer Portfolio
 * Interactions & Navigation Logic
 * 
 * Логика навигации, скролл-анимаций и контактной формы.
 */

// MARK: - Main Application Lifecycle / Главный цикл приложения
(function() {
  'use strict';

  // MARK: - Navigation Scroll Effect / Эффект затемнения меню при скролле
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
  }

  // MARK: - Mobile Menu Toggle / Мобильное бургер-меню
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

  // MARK: - Active Navigation Link On Scroll / Активный пункт меню при прокрутке
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

  // MARK: - Scroll Reveal Animations / Анимации появления элементов
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

  // Reveal elements on initial load and on scroll
  checkReveal();
  window.addEventListener('scroll', checkReveal, { passive: true });
  window.addEventListener('resize', checkReveal, { passive: true });

  // MARK: - Contact Form Handling / Обработка контактной формы через FormSubmit
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

      fetch('https://formsubmit.co/ajax/293c41b07af89f4fd053ff7bbb0cf770', {
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