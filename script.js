// Minimal JS for interactivity: theme toggle and dynamic year
(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const year = document.getElementById('year');

  // set year
  if (year) year.textContent = new Date().getFullYear();

  // Helper: get persisted theme or system
  function getInitialTheme() {
    const persisted = localStorage.getItem('theme'); // "dark" or "light"
    if (persisted) return persisted;
    // fallback to system preference
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', theme);
  }

  // initialize
  const initial = getInitialTheme();
  applyTheme(initial);

  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      // simple accessible feedback
      toggle.setAttribute('aria-pressed', next === 'dark');
    });
  }

  // optional: smooth-scrolling for in-page links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const targetId = a.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({behavior: 'smooth', block: 'start'});
      }
    });
  });
})();
