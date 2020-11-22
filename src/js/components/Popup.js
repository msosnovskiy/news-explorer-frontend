export default class Popup {
  constructor(popupName, container) {
    this.popupName = popupName;
    this.container = container;
    this.closeButton = this.popupName.querySelector('.popup__close');
    this.popupLink = this.popupName.querySelector('.popup__link');
  }

  open(popup) {
    popup.classList.add('popup_is-opened');
  }

  close() {
    this.popupName.classList.remove('popup_is-opened');
  }

  switchPopup() {
    this._popupId = this.popupLink.getAttribute('href').replace('#', '');
    this._popupByLink = this.container.querySelector(`#${this._popupId}`);
    this.close();
    this.open(this._popupByLink);
  }
}