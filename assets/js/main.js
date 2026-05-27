(() => {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('#menu');
  const year = document.querySelector('#year');
  const gallery = document.querySelector('#live-gallery');
  const prev = document.querySelector('[data-gallery-prev]');
  const next = document.querySelector('[data-gallery-next]');

  if (year) year.textContent = new Date().getFullYear();

  if (toggle && menu) {
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
  }

  if (gallery && prev && next) {
    const move = (direction) => {
      const card = gallery.querySelector('.gallery-card');
      const amount = card ? card.getBoundingClientRect().width + 20 : 290;
      gallery.scrollBy({ left: amount * direction, behavior: 'smooth' });
    };

    prev.addEventListener('click', () => move(-1));
    next.addEventListener('click', () => move(1));
  }
})();
