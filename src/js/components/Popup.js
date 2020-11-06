export default class Popup {
  constructor(popupName, container) {
    this.popupName = popupName;
    this.container = container;
  }

  setContent() {
    
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
  }
}