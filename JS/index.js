const popup = document.querySelector('.popup');
const popupLink = document.querySelector('.profile__edit');
const popupClose = document.querySelector('.popup__close');
const buttonSave = document.querySelector('.popup__save');


function openedPopup() {
    popup.classList.toggle('popup_opened'); 
}


popupLink.addEventListener('click', openedPopup);

popupClose.addEventListener('click', openedPopup);

let formElement = document.querySelector('.popup__form');

let nameInput = document.querySelector('#nameInput');

let jobInput = document.querySelector('#jobInput');

let names = document.querySelector('.profile__names');

let doer = document.querySelector('.profile__doer');

function formSubmitHandler (evt) {
  evt.preventDefault();

  nameInput.getAttribute('value');
  jobInput.getAttribute('value');

  names.textContent = nameInput.value;
  doer.textContent = jobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler); 

buttonSave.addEventListener('click', openedPopup);


