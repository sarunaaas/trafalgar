const burger = document.querySelector('#burgerisas');
const menu = document.querySelector('.menu__links');

burger.addEventListener('click', () => {
  burger.classList.toggle('is-active');
  menu.classList.toggle('is-active');
});