(() => {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('#menu');
  const year = document.querySelector('#year');

  if (year) year.textContent = new Date().getFullYear();
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();
