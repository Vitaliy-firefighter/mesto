// ФУНКЦИЯ ОТКРЫТИЯ ПОПАПА 
export const openPopup = (popup) => {
  popup.classList.add('popup_opened'); 
  document.addEventListener('keydown', closePopupEsc);
}
// ФУНКЦИЯ ЗАКРЫТИЯ ПОПАПА
export const closePopup = (popup) => {
  popup.classList.remove('popup_opened'); 
  document.removeEventListener('keydown', closePopupEsc);
}
// ФУНКЦИЯ ESC 
const closePopupEsc = (evt) => {
  if (evt.key === 'Escape') {
    const popupEl = document.querySelector('.popup_opened');
    closePopup(popupEl);
  }
}
export const popupPhoto = document.querySelector('#popupPhoto');
export const popupImage = document.querySelector('.popup__image');
export const popupFigcaption = document.querySelector('.popup__figcaption');
