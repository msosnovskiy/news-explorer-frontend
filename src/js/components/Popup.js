export default class Popup {
  constructor(popupName, openButton, container) {
    this.popupName = popupName;
    this.openButton = openButton;
    this.container = container;
  }

  open () {
    this.popupName.classList.add('popup_is-opened');
  }

  close () {
    this.popupName.classList.remove('popup_is-opened');
  }

  setEventListener() {
    this.closeButton = this.popupName.querySelector('.popup__close');
    this.popupLink = this.popupName.querySelector('.popup__link');

    this.openButton.addEventListener('click', () => {
      this.open();
    })

    this.closeButton.addEventListener('click', () => {
      this.close();
    })

    this.container.addEventListener('click', (event) => {
      if (event.target === this.popupName) {
        this.close();
      }
    });

    this.container.addEventListener('keydown', (event) => {
      if (event.keyCode === 27 && this.popupName.closest('.popup_is-opened')) {
        this.close();
      }
    });

    // --- реализовать переключение попапов
    this.popupLink.addEventListener('click', () => {
      console.log(this.popupLink);
    })
  }
}