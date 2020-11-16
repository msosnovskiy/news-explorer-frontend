import '../pages/index.css';
import '../pages/articles.css';

import Popup from './components/Popup.js';

const page = document.querySelector('.page');
const buttonSignin = page.querySelector('#buttonSignin');
const popupSignin = page.querySelector('#popupSignin');
const popupSignup = page.querySelector('#popupSignup');
const popupRegistered = page.querySelector('#popupRegistered');


// --------------------- меню ---------------------------------
const header = document.querySelector('.header');
const menu = document.querySelector('.header__content');
const navigation = document.querySelector('.header__navigation');
const logo = document.querySelector('.logo');
const menuBurgerButton = document.querySelector('.header__menu-icon');
const windowsWidth = document.documentElement.clientWidth;
// ------------------------------------------------------------


const signinPopup = new Popup(popupSignin, document);
const signupPopup = new Popup(popupSignup, document);
const registeredPopup = new Popup(popupRegistered, document);

buttonSignin.addEventListener('click', () => {
  signinPopup.open(popupSignin);
})

signinPopup.setEventListener();
signupPopup.setEventListener();
registeredPopup.setEventListener();





// --------------- Меню --------------------

function menuOpened() {
  return navigation.classList.contains(('header__navigation_active'));
}

// затемнение меню при прокрутке на мобильной версии

function scrolled() {
  let scrolledСounter = 0;
  scrolledСounter = window.pageYOffset || document.documentElement.scrollTop;
  return scrolledСounter;
}

window.onscroll = function () {
  if (!menuOpened()) {
    if (scrolled() >= 56 && windowsWidth <= 600) {
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
    if (56 > scrolled() && windowsWidth <= 600) {
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
      return;
    }
    // смена цвета логотипа, если меню в начале открыли и сразу закрыли
    if (scrolled() < 60 && !menuOpened()) {
      logo.classList.remove('logo_white');
      logo.classList.add('logo_black');
      menu.style.backgroundColor = 'transparent';
      menuBurgerButton.classList.add('header__menu-icon_black');
      return;
    }
    // смена цвета логотипа, если меню закрыли после скрола
    if (scrolled() >= 60 && !menuOpened()) {
      menu.style.backgroundColor = '#1A1B22';
      menuBurgerButton.classList.remove('header__menu-icon_black');
      menuBurgerButton.classList.add('header__menu-icon_white');
    }
    else {
      return;
    }
  }

}

if (menuBurgerButton) {
  menuBurgerButton.addEventListener('click', openMenu);
}

