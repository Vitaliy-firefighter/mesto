import {card} from './card.js'
import {obj, initialCards} from './constants.js'
import {FormValidator} from './FormValidator.js'
// ПОПАП ПРОФИЛЯ
const popupEdit = document.querySelector('#popupEdit');
const buttonOpenEdit = document.querySelector('.profile__button-edit');
const buttonEditClose = document.querySelector('#buttonEditClose');
const names = document.querySelector('.profile__names');
const doer = document.querySelector('.profile__doer');

// ПОПАП ДОБАВЛЕНИЯ КАРТОЧКИ
const popupAddCard = document.querySelector('#popupAddCard');
const buttonOpenPopupAddCard = document.querySelector('.profile__add');
const buttonAddCardClose = document.querySelector('#buttonAddCardClose');
const photoGrid = document.querySelector('.photo__grid');

// ФОРМЫ 
const formEdit = document.forms.editForm;
const formAddCard = document.forms.formAddCard;

// ИНПУТЫ
const namePlaceInput = document.querySelector('#namePlaceInput');
const linkInput = document.querySelector('#linkInput');
const nameInput = document.querySelector('#nameInput');
const jobInput = document.querySelector('#jobInput');

//  ОТКРЫТИЕ ПОПАПА ФОТО
export const popupPhoto = document.querySelector('#popupPhoto');
const buttonPhotoClose = document.querySelector('#buttonPhotoClose');
export const popupImage = document.querySelector('.popup__image');
export const popupFigcaption = document.querySelector('.popup__figcaption');

// вызов классов
const newFormEdit = new FormValidator(obj, formEdit);
newFormEdit.enableValidation();

const newFormAddCard = new FormValidator(obj, formAddCard);
newFormAddCard.enableValidation();

// =====================================================================
// ФУНКЦИЯ ОТКРЫТИЯ ПОПАПА 
export const openPopup = (popup) => {
  popup.classList.add('popup_opened'); 
  document.addEventListener('keydown', closePopupEsc);
}

// ФУНКЦИЯ ЗАКРЫТИЯ ПОПАПА
const closePopup = (popup) => {
  popup.classList.remove('popup_opened'); 
  document.removeEventListener('keydown', closePopupEsc);
}

// ФУНКЦИЯ ОТПРАВКИ ФОРМЫ ПРОФИЛЯ
const handleProfileFormSubmit = (evt) => {

  closePopup(popupEdit);

  evt.preventDefault();
  
  names.textContent = nameInput.value;
  doer.textContent = jobInput.value;

}

const renderCard = (card) => {
  photoGrid.prepend(card);
} 
initialCards.forEach((item) => {
  const cardNew = new card(item.name, item.link, '#photoTemplate');
  const cardElement = cardNew.generateCard();
  renderCard(cardElement);
})


// ФУНКЦИЯ ОТПРАВКИ ФОРМЫ ДОБАВЛЕНИЯ КАРТОЧКИ
const  handleAddCardFormSubmit = (evt) => {

  const cardNew = new card(namePlaceInput.value, linkInput.value, '#photoTemplate');
  const cardElement = cardNew.generateCard();
  renderCard(cardElement);

  closePopup(popupAddCard);

  evt.preventDefault();
  

  formAddCard.reset();
}

// ФУНКЦИЯ ЗАКРЫТИЯ ОВЕРЕЛЕЯ
const closePopupOwerlay = (evt) => {
  if (evt.target.classList.contains('popup__container')) {
    closePopup(evt.currentTarget);
  }
}

// ФУНКЦИЯ ESC 
const closePopupEsc = (evt) => {
  if (evt.key === 'Escape') {
    const popupEl = document.querySelector('.popup_opened');
    closePopup(popupEl);
  }
}

// =======================================================================
// ОБРАБОТЧИK ПРОФИЛЯ ПОПАПА ОТКРЫТИЯ
buttonOpenEdit.addEventListener('click', function () {
  nameInput.value = names.textContent;
  jobInput.value = doer.textContent;
  openPopup(popupEdit);
});

// ОБРАБОТЧИK ПРОФИЛЯ ПОПАПА ЗВКРЫТИЯ
buttonEditClose.addEventListener('click', function () {
  closePopup(popupEdit);
});

// ОБРАБОТЧИK ПРОФИЛЯ ОВРЕЛЕЯ
popupEdit.addEventListener('mousedown', closePopupOwerlay);

// ОБРАБОТЧИК ОТПРАВКИ ФОРМЫ ПРОФИЛЯ
formEdit.addEventListener('submit', handleProfileFormSubmit); 

// ОБРАБОТЧИК ПОПАПА КАРТОЧКИ ОТКРЫТИЯ 
buttonOpenPopupAddCard.addEventListener('click', function () {
  openPopup(popupAddCard);
});

// ОБРАБОТЧИК ПОПАПА КАРТОЧКИ ЗАКРЫТИЯ
buttonAddCardClose.addEventListener('click', function () {
  closePopup(popupAddCard);
  formAddCard.reset();
});

// ОБРАБОТЧИK ДОБАВЛЕНИЯ КАРТОЧКИ ОВЕЛЕЯ
popupAddCard.addEventListener('mousedown', closePopupOwerlay);

// ОБРАБОТЧИК ОТПРАЛКИ ФОРМЫ ДОБАВЛЕНИЯ КАРТЫ
formAddCard.addEventListener('submit', handleAddCardFormSubmit); 

//  ОБРАБОТЧИК ЗАКРЫТИЕ ПОПАПА ФОТО
buttonPhotoClose.addEventListener('click', function () {
  closePopup(popupPhoto);
});

 // ОБРАБОТЧИK ФОТО ОВЕЛЕЯ
popupPhoto.addEventListener('mousedown', closePopupOwerlay);



