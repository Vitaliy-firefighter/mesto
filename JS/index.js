const popup = document.querySelector('.popup');
const popupLink = document.querySelector('.profile__button-edit');
const popupClose = document.querySelector('.popup__button-close');
const buttonSave = document.querySelector('.popup__save');
let nameInput = document.querySelector('#nameInput');
let jobInput = document.querySelector('#jobInput');
let names = document.querySelector('.profile__names');
let doer = document.querySelector('.profile__doer');


function openedPopup() {
    popup.classList.toggle('popup_opened'); 
    nameInput.value = names.textContent;
    jobInput.value = doer.textContent;
}


popupLink.addEventListener('click', openedPopup);
popupClose.addEventListener('click', openedPopup);


let formElement = document.querySelector('.popup__form');



function formSubmitHandler (evt) {
  evt.preventDefault();

  names.textContent = nameInput.value;
  doer.textContent = jobInput.value;

  openedPopup();
}

formElement.addEventListener('submit', formSubmitHandler); 
