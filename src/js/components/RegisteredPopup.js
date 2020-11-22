import Popup from './Popup.js';
export default class RegisteredPopup extends Popup {
  constructor(popupName, container) {
    super(popupName, container)
    this.popupName = popupName;
    this.container = container;
    this.closeButton = this.popupName.querySelector('.popup__close');
    this.popupLink = this.popupName.querySelector('.popup__link');
  }

  setEventListeners() {
    this.closeButton.addEventListener('click', () => {
      super.close();
    })

    this.container.addEventListener('click', (event) => {
      if (event.target === this.popupName) {
        super.close();
      }
    });

    this.container.addEventListener('keydown', (event) => {
      if (event.keyCode === 27 && this.popupName.closest('.popup_is-opened')) {
        super.close();
      }
    });

    this.popupLink.addEventListener('click', (event) => {
      event.preventDefault();
      super.switchPopup();
    })
  }
}