// ПОПАП ПРОФИЛЯ
const popupEdit = document.querySelector('#popupEdit');
const buttonOpenEdit = document.querySelector('.profile__button-edit');
const buttonEditClose = document.querySelector('#buttonEditClose');
const buttonEditSave = document.querySelector('#buttonEditSave');
const names = document.querySelector('.profile__names');
const doer = document.querySelector('.profile__doer');

// ПОПАП ДОБАВЛЕНИЯ КАРТОЧКИ
const popupAddCard = document.querySelector('#popupAddCard');
const buttonOpenPopupAddCard = document.querySelector('.profile__add');
const buttonAddCardClose = document.querySelector('#buttonAddCardClose');
const buttonAddCardSave = popupAddCard.querySelector('.popup__save');
const photoGrid = document.querySelector('.photo__grid');
const photoTemplate = document.querySelector('#photoTemplate').content;


// ФОРМЫ 
const formEdit = document.forms.editForm;
const formAddCard = document.forms.formAddCard;

// ИНПУТЫ
const namePlaceInput = document.querySelector('#namePlaceInput');
const LinkInput = document.querySelector('#LinkInput');
const nameInput = document.querySelector('#nameInput');
const jobInput = document.querySelector('#jobInput');



//  ОТКРЫТИЕ ПОПАПА ФОТО
const popupPhoto = document.querySelector('#popupPhoto');
const buttonPhotoClose = document.querySelector('#buttonPhotoClose');
const popupImage = document.querySelector('.popup__image');
const popupFigcaption = document.querySelector('.popup__figcaption');



// =====================================================================
// ФУНКЦИЯ ОТКРЫТИЯ ПОПАПА 
const openPopup = (popup) => {
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

// ФУНКЦИЯ  УДАЛЕНИЕ КАРТОЧЕК 
const deleteCard = (e) => {
  e.target.closest('.card').remove();
}

// ФУНКЦИЯ LIKE КАРТОЧЕК 
const handleLike = (e) =>  {
  e.target.classList.toggle('card__button-like_active');
}

// ФУНКЦИЯ ОТКРЫТИЯ ФОТО
const openPhoto = (e) => {
  popupFigcaption.textContent = e.target.alt;
  popupImage.src = e.target.src;
  popupImage.alt  = e.target.alt;
  openPopup(popupPhoto);
}


// ФУНКЦИЯ создания карточки
const createCard = ({name, link}) => {
    
  const card = photoTemplate.cloneNode(true);
  const cardHeading = card.querySelector('.card__heading');
  const cardImage = card.querySelector('.card__image');
  const buttonDeleteCard = card.querySelector('.card__button-basket');
  const buttonLikeCard = card.querySelector('.card__button-like');

  cardHeading.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;

  buttonDeleteCard.addEventListener('click', deleteCard);

  buttonLikeCard.addEventListener('click', handleLike);

  cardImage.addEventListener('click', openPhoto);

  return card;
}

// КАРТОЧУК С JS
initialCards.forEach(function ({name, link}) {

  const newCard = createCard ({name, link});
  photoGrid.append(newCard);
})



// ФУНКЦИЯ ОТПРАВКИ ФОРМЫ ДОБАВЛЕНИЯ КАРТОЧКИ
const  handleAddCardFormSubmit = (evt) => {

  closePopup(popupAddCard);

  evt.preventDefault();
  
  const newCardForm = createCard ({name: namePlaceInput.value, link: LinkInput.value});
  photoGrid.prepend(newCardForm);

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
  disasbleButtonSave(buttonAddCardSave);
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

