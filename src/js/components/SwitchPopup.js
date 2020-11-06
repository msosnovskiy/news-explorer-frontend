export default class SwitchPopup {
  constructor(popups) {
    this.popups = popups;
  }

  switch(popup) {

    // if (popup.closest('#popupSignin')) {

    // }

    this.popups.forEach((element) => {
      if (element.popupName.closest('.popup_is-opened')) {
        element.close();
      }
      else element.open();
    })
  }

  setEventListener() {
    this.popups.forEach(element => {
      if (!element.popupLink === false) {
        element.popupLink.addEventListener('click', () => {
          this.switch(element.popupName);
        });
      }
      return;
    });
  }

}