export default class Form {
  constructor(popup) {
    this.popup = popup;
    this.form = this.popup.popupName.querySelector('.popup__form');
    this.button = this.form.querySelector('.button');
  }

  _validateInputElement(input) {
    input.setCustomValidity("");
    if (input.validity.valueMissing) {
      input.setCustomValidity('Это обязательное поле');
      return false
    }
    if (input.validity.tooShort) {
      input.setCustomValidity(`Должно быть не меньше ${input.attributes.minlength.value} символов`);
      return false
    }
    if (input.validity.patternMismatch) {
      input.setCustomValidity(`неверный формат ${input.name}`);
      return false
    }
    if (input.validity.typeMismatch) {
      input.setCustomValidity(`неверный формат ${input.name}`);
      return false
    }
    return input.checkValidity();
  }

  isFieldValid(input) {
    const errorElem = this.form.querySelector(`.error[data-for="${input.name}"]`);
    const valid = this._validateInputElement(input);
    errorElem.textContent = input.validationMessage;
    return valid;
  }

  setSubmitButtonState(button, state) {
    if (state) {
      button.removeAttribute('disabled');
      button.classList.add('popup__button_valid');
      button.classList.remove('popup__button_invalid');
    } else {
      button.setAttribute('disabled', true);
      button.classList.add('popup__button_invalid');
      button.classList.remove('popup__button_valid');
    }
  }

  // resetValidityForms(form) {
  //   const inputs = [...form.elements];
  //   inputs.forEach((input) => {
  //     if (input.type !== 'submit' && input.type !== 'button') {
  //       input.setCustomValidity("");
  //       console.log('good');
  //     }
  //   });
  // }

  _clear() {
    const errorElem = this.form.querySelectorAll('.error');
    const inputElem = this.form.querySelectorAll('.popup__input');
    errorElem.forEach((item) => item.textContent = '');
    inputElem.forEach((item) => item.value = '');
    this.setSubmitButtonState(this.button, false);
  }

  setServerError() {
    // добавляет форме ошибку, пришедшую с сервера;
  }
  _getInfo() {
    // вспомогательный метод, возвращает данные формы.
  }

  setEventListeners() {
    // Валидация формы
    this.form.addEventListener('input', (event) => {
      const [...inputs] = this.form.elements;
      this.isFieldValid(event.target);
      if (inputs.reduce((acc, el) => this._validateInputElement(el) && acc, true)) {
        this.setSubmitButtonState(this.button, true);
      } else {
        this.setSubmitButtonState(this.button, false);
      }
    });

    // переключение попапов при клике по ссылке
    this.popup.popupLink.addEventListener('click', (event) => {
      event.preventDefault();
      this.popup.switchPopup();
      this._clear();
    })

    // Закрытие попапа при клике на крестик
    this.popup.closeButton.addEventListener('click', () => {
      this.popup.close();
      this._clear();
    })


    // закрытие попапа по Esc
    this.popup.container.addEventListener('keydown', (event) => {
      if (event.keyCode === 27 && this.popup.popupName.closest('.popup_is-opened')) {
        this.popup.close();
        this._clear();
      }
    });

    // Закрытие попапа при клике вне окна попапа
    this.popup.container.addEventListener('click', (event) => {
      if (event.target === this.popup.popupName) {
        this.popup.close();
        this._clear()
      }
    });

  }

}