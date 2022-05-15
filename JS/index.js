// ПОПАП ПРОФИЛЯ
const popupEdit = document.querySelector('#popupEdit');
const buttonOpenEdit = document.querySelector('.profile__button-edit');
const buttonEditClose = document.querySelector('#buttonEditClose');
const buttonEditSave = document.querySelector('#buttonEditSave');
const nameInput = document.querySelector('#nameInput');
const jobInput = document.querySelector('#jobInput');
const names = document.querySelector('.profile__names');
const doer = document.querySelector('.profile__doer');
const formProfileEdit = document.querySelector('#popupEditForm');

// ПОПАП ДОБАВЛЕНИЯ КАРТОЧКИ
const popupAddCard = document.querySelector('#popupAddCard');
const buttonOpenPopupAddCard = document.querySelector('.profile__add');
const buttonAddCardClose = document.querySelector('#buttonAddCardClose');
const photoGrid = document.querySelector('.photo__grid');
const photoTemplate = document.querySelector('#photoTemplate').content;


//  ДОБАВЛЕНИЕ КАРТОЧЕК
const namePlaceInput = document.querySelector('#namePlaceInput');
const LinkInput = document.querySelector('#LinkInput');
const formAddCard = document.querySelector('#formAddCard');
// =================================================================

//  ОТКРЫТИЕ ПОПАПА ФОТО
const popupPhoto = document.querySelector('#popupPhoto');
const buttonPhotoClose = document.querySelector('#buttonPhotoClose');
const popupImage = document.querySelector('.popup__image');
const popupFigcaption = document.querySelector('.popup__figcaption');



// =====================================================================
// ФУНКЦИЯ ОТКРЫТИЯ ПОПАПА 
const openPopup = (popup) => {
  popup.classList.add('popup_opened'); 
}

// ФУНКЦИЯ ЗАКРЫТИЯ ПОПАПА
const closePopup = (popup) => {
  popup.classList.remove('popup_opened'); 
}

// ФУНКЦИЯ ОТПРАВКИ ФОРМЫ ПРОФИЛЯ
const handleProfileFormSubmit = (evt) => {

  evt.preventDefault();
  
  names.textContent = nameInput.value;
  doer.textContent = jobInput.value;
  
  closePopup(popupEdit);
  }

// ФУНКЦИЯ  УДАЛЕНИЕ КАРТОЧЕК 
const deleteCard = (e) => {
  e.target.closest('.photo__item').remove();
}

// ФУНКЦИЯ LIKE КАРТОЧЕК 
const handleLike = (e) =>  {
  e.target.classList.toggle('photo__button-like_active');
}

// ФУНКЦИЯ ОТКРЫТИЯ ФОТО
const openPhoto = (e) => {
  openPopup(popupPhoto);
  popupFigcaption.textContent = e.target.alt;
  popupImage.src = e.target.src;
  popupImage.alt  = e.target.alt;
}


// ФУНКЦИЯ создания карточки
const createCard = ({name, link}) => {
    
  const photoItem = photoTemplate.cloneNode(true);
  const photoHeading = photoItem.querySelector('.photo__heading');
  const photoImage = photoItem.querySelector('.photo__image');
  const handleDeleteCard = photoItem.querySelector('.photo__button-basket');
  const handleLikeCard = photoItem.querySelector('.photo__button-like');

  photoHeading.textContent = name;
  photoImage.src = link;
  photoImage.alt = name;

  handleDeleteCard.addEventListener('click', function (e) {
    deleteCard (e);
  });

  handleLikeCard.addEventListener('click', function (e) {
    handleLike (e);
  });

  photoImage.addEventListener('click', openPhoto);

  return photoItem;
}

// КАРТОЧУК С JS
initialCards.forEach(function ({name, link}) {

  const newCard = createCard ({name, link});
  photoGrid.append(newCard);
  })

// ФУНКЦИЯ ОТПРАВКИ ФОРМЫ ДОБАВЛЕНИЯ КАРТОЧКИ
const  handleAddCardFormSubmit = (evt) => {

  evt.preventDefault();
  
  const newCardForm = createCard ({name: namePlaceInput.value, link: LinkInput.value});
  photoGrid.prepend(newCardForm);

  closePopup(popupAddCard);
  formAddCard.reset();
}



// =======================================================================
// ОБРАБОТЧИK ПРОФИЛЯ ПОПАПА ОТКРЫТИЯ
buttonOpenEdit.addEventListener('click', function () {
  openPopup(popupEdit);
  nameInput.value = names.textContent;
  jobInput.value = doer.textContent;
});

// ОБРАБОТЧИK ПРОФИЛЯ ПОПАПА ЗВКРЫТИЯ
buttonEditClose.addEventListener('click', function () {
  closePopup(popupEdit);
});


// ОБРАБОТЧИК ОТПРАВКИ ФОРМЫ ПРОФИЛЯ
formProfileEdit.addEventListener('submit', handleProfileFormSubmit); 



// ОБРАБОТЧИК ПОПАПА КАРТОЧКИ ОТКРЫТИЯ 
buttonOpenPopupAddCard.addEventListener('click', function () {
  openPopup(popupAddCard);
});

// ОБРАБОТЧИК ПОПАПА КАРТОЧКИ ЗАКРЫТИЯ
buttonAddCardClose.addEventListener('click', function () {
  closePopup(popupAddCard);
  formAddCard.reset();
});


// ОБРАБОТЧИК ОТПРАЛКИ ФОРМЫ ДОБАВЛЕНИЯ КАРТЫ
formAddCard.addEventListener('submit', handleAddCardFormSubmit); 

 
//  ОБРАБОТЧИК ЗАКРЫТИЕ ПОПАПА ФОТО
buttonPhotoClose.addEventListener('click', function () {
  closePopup(popupPhoto);
 });

