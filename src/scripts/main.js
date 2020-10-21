const header = document.querySelector('.header');
const menu = document.querySelector('.header__content');
const navigation = document.querySelector('.header__navigation');
const logo = document.querySelector('.logo');
const menuBurgerButton = document.querySelector('.header__menu-icon');
const windowsWidth = document.documentElement.clientWidth;

function menuOpened() {
  return navigation.classList.contains(('header__navigation_active'));
}

// затемнение меню при прокрутке на мобильной версии
let scrolled = 0;
window.onscroll = function () {
  scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled >= 60 && windowsWidth <= 600 && !menuOpened()) {
    if (header.classList.contains('header_black')) {
      menuBurgerButton.classList.remove('header__menu-icon_black');
      menuBurgerButton.classList.add('header__menu-icon_white');
      menu.style.backgroundColor = '#1A1B22';
      logo.classList.remove('logo_black');
      logo.classList.add('logo_white');
      return;
    }
    menu.style.backgroundColor = '#1A1B22';
  }
  if (60 > scrolled && windowsWidth <= 600 && !menuOpened()) {
    if (header.classList.contains('header_black')) {
      menuBurgerButton.classList.remove('header__menu-icon_white');
      menuBurgerButton.classList.add('header__menu-icon_black');
      menu.style.backgroundColor = 'transparent';
      logo.classList.add('logo_black');
      logo.classList.remove('logo_white');
      return;
    }
    menu.style.backgroundColor = 'transparent';
  }
}

//открытие меню и смена логотипа
const openMenu = () => {
  menuBurgerButton.classList.toggle('header__menu-icon_active');
  navigation.classList.toggle('header__navigation_active');
  header.classList.toggle('background_black');

  // проверка - темное ли меню
  if (header.classList.contains('header_black')) {
    // смена цвета логотипа при открытии меню в самом верху страницы
    if (logo.classList.contains('logo_black')) {
      logo.classList.remove('logo_black');
      logo.classList.add('logo_white');
    }
    // смена цвета логотипа, если меню в начале открыли и сразу закрыли
    if (scrolled <= 60 && !menuOpened()) {
      logo.classList.remove('logo_white');
      logo.classList.add('logo_black');
      console.log(scroled)
    }

    else return;
  }

}

if (menuBurgerButton) {
  menuBurgerButton.addEventListener('click', openMenu);
}

