document.querySelector('.header__content').onclick = function () {
  document.querySelector('.header__menu-icon').classList.toggle('header__menu-icon_active');
  document.querySelector('.header__navigation').classList.toggle('header__navigation_active');
}