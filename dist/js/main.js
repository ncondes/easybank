const hamburguer = document.querySelector('.header__menu');
const overlay = document.querySelector('.overlay');
const mobileMenu = document.querySelector('.header__mobile-menu');

let = mediaquery = window.matchMedia('(min-width: 500px)');

hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('open');
  overlay.classList.toggle('open');
  overlay.classList.add('fade-out');
  mobileMenu.classList.toggle('open');
  mobileMenu.classList.add('fade-out');
});

mediaquery.addEventListener(function (e) {
  alert('ejecutando el listener', e);
});
