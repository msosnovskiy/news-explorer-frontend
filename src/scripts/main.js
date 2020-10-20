const menu = document.querySelector('.header__content');
const menuBurgerButton = document.querySelector('.header__menu-icon');
const windowsWidth = document.documentElement.clientWidth;

menuBurgerButton.onclick = function () {
  document.querySelector('.header__menu-icon').classList.toggle('header__menu-icon_active');
  document.querySelector('.header__navigation').classList.toggle('header__navigation_active');
  document.querySelector('.header').classList.toggle('background_black');;
}

let scrolled;
window.onscroll = function () {
  scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled > 60 && windowsWidth <= 600 ) {
    menu.style.backgroundColor = '#1A1B22';
  }
  if (60 > scrolled && windowsWidth <= 600 ) {
    menu.style.backgroundColor = 'transparent';
  }
}