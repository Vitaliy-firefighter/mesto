// ПОПАП ПРОФИЛЯ
const popupEdit = document.querySelector('#popupEdit');
const popupButtonEdit = document.querySelector('.profile__button-edit');
const popupEditClose = document.querySelector('#popupEditClose');
const popupEditSave = document.querySelector('#popupEditSave');
let nameInput = document.querySelector('#nameInput');
let jobInput = document.querySelector('#jobInput');
let names = document.querySelector('.profile__names');
let doer = document.querySelector('.profile__doer');
let formElement = document.querySelector('#popupEditForm');


// ФУНКЦИЯ ОТКРЫТИЯ И ЗАКРЫТИЯ ПОПАПА
function openedPopupEdit() {
  popupEdit.classList.toggle('popup_opened'); 
  nameInput.value = names.textContent;
  jobInput.value = doer.textContent;
}

// ОБРАБОТЧИУ ПРОФИОЛЯ ПОПАПА
popupButtonEdit.addEventListener('click', openedPopupEdit);
popupEditClose.addEventListener('click', openedPopupEdit);


// ФУНКЦИЯ ОТПРАВКИ ФОРМЫ
function formSubmitHandler (evt) {

evt.preventDefault();

names.textContent = nameInput.value;
doer.textContent = jobInput.value;

openedPopupEdit();
}

formElement.addEventListener('submit', formSubmitHandler); 



// ============================================================
// ПОПАП ДОБАВЛЕНИЯ КАРТОЧКИ
const popupAddCards = document.querySelector('#popupAddCards');
const AddCards = document.querySelector('.profile__add');
const popupAddCardsClose = document.querySelector('#popupAddCardsClose');
const photoGrid = document.querySelector('.photo__grid');
const photoTemplate = document.querySelector('#photoTemplate').content;
const photoHeading = photoTemplate.querySelector('.photo__heading');
const photoImage = photoTemplate.querySelector('.photo__image');
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

// ФУНКЦИЯ ОТКРЫТИЯ И ЗАКРЫТИЯ ПОПАПА КАРТОЧКИ
function OpenedpopupAddCards () {
  popupAddCards.classList.toggle('popup_opened');
}

// ОБРАБОТЧИК ПОПАПА КАРТОЧКИ
AddCards.addEventListener('click', OpenedpopupAddCards);
popupAddCardsClose.addEventListener('click', OpenedpopupAddCards);



// =================================================
  // ЗАГРУЗКА КАРТОЧУК С JS
  initialCards.forEach(function (element) {
    
    photoHeading.textContent = element.name;
    photoImage.src = element.link;
    const PhotoElement = photoTemplate.cloneNode(true);
    photoGrid.append(PhotoElement);

  })


  
//  ДОБАВЛЕНИЕ КАРТОЧЕК
const namePlaceInput = document.querySelector('#namePlaceInput');
const LinkInput = document.querySelector('#LinkInput');
const popupAddCardsForm = document.querySelector('#popupAddCardsForm');

function formSubmitAddCards (evt) {

  evt.preventDefault();
  
  initialCards.unshift ({name: namePlaceInput.value, 
                        link: LinkInput.value});

  photoHeading.textContent = initialCards[0].name;
  photoImage.src = initialCards[0].link;

  const PhotoItem = photoTemplate.cloneNode(true);
  photoGrid.prepend(PhotoItem);

  //  УДАЛЕНИЕ КАРТОЧЕК
  const trashNewCards = document.querySelector('.photo__button-basket');
  trashNewCards.addEventListener('click', function (e) {
    e.target.closest('.photo__item').remove(); 
  });

  //  LIKE КАРТОЧЕК
  const likeNewCards = document.querySelector('.photo__button-like');
  likeNewCards.addEventListener('click', function (e) {
    e.target.classList.toggle('photo__button-like_active');
  });
 

  //  ОТКРЫТИЕ ПОПАПА ФОТО В НОВЫХ КАРТОЧКАХ
  const photoImageNewCards = document.querySelector('.photo__image');
  photoImageNewCards.addEventListener('click', function (e) {
    const popupImageNewCards = document.querySelector('.popup__image');
    const popupPhotoNewCards = document.querySelector('#popupPhoto');
    const photoItem = document.querySelector('.photo__item');
    const photoHeadingElNewCards = photoItem.querySelector('.photo__heading');
    const popupFigcaptionNewCards = document.querySelector('.popup__figcaption');

    photoItem.addEventListener('click', function (evt) {
      if (evt.target.classList.contains('photo__image')) {
        popupImage.src = evt.target.src;
        const photoHeadingElNewCards = photoItem.querySelector('.photo__heading');
        popupFigcaption.textContent = photoHeadingElNewCards.textContent;
      }
    });


    popupPhotoNewCards.classList.add('popup_opened');
    })


  OpenedpopupAddCards();
}

  popupAddCardsForm.addEventListener('submit', formSubmitAddCards); 


// ===============================================
//  УДАЛЕНИЕ КАРТОЧЕК ИЗ МАССИВА
const trash = document.querySelectorAll('.photo__button-basket');
const arrtrash = Array.from(trash);

arrtrash.forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.target.closest('.photo__item').remove();
  });
})

//  LIKE КАРТОЧЕК ИЗ МАССИВА
const like = document.querySelectorAll('.photo__button-like');
const arrLike = Array.from(like);

arrLike.forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.target.classList.toggle('photo__button-like_active');
  });
})


// ===============================================================
    //  ОТКРЫТИЕ ПОПАПА ФОТО
    const popupPhoto = document.querySelector('#popupPhoto');
    const photoItem = document.querySelectorAll('.photo__item');
    const arrPhotoItem = Array.from(photoItem);
    const popupPhotoClose = document.querySelector('#popupPhotoClose');
    const popupImage = document.querySelector('.popup__image');
    const popupFigcaption = document.querySelector('.popup__figcaption');
    
    
    arrPhotoItem.forEach(function (el) { 
      el.addEventListener('click', function (evt) {
        if (evt.target.classList.contains('photo__image')) {
          popupImage.src = evt.target.src;
          const photoHeadingEl = el.querySelector('.photo__heading');
          popupFigcaption.textContent = photoHeadingEl.textContent;
          popupPhoto.classList.add('popup_opened');
        }
      });
    })
    
    popupPhotoClose.addEventListener('click', function () {
      popupPhoto.classList.remove('popup_opened');
    });


















