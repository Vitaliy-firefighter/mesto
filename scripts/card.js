import {openPopup, popupImage, popupFigcaption, popupPhoto} from './utils.js'
export class card {
  constructor(name, link, templateEl) {
    this._name = name;
    this._link = link;
    this._templateEl = templateEl;
  }
  _getTemplate() {
    const cardElement = document.querySelector(this._templateEl).content.querySelector('.card').cloneNode(true);

    return cardElement; 
  }

  _handleLike(e) {
    e.target.classList.toggle('card__button-like_active');
  }

  _deleteCard(e) {
    this._element.remove();
    this._element = '';
  }

  _openPhoto() {
    popupImage.src = this._link;
    popupImage.alt = this._name;
    popupFigcaption.textContent = this._name;
    openPopup(popupPhoto);
  }
  
  _setEventListeners() {
    this._buttonLikeCard = this._element.querySelector('.card__button-like');
    this._buttonLikeCard.addEventListener('click', (e) => {
      this._handleLike(e);
    });

    this._buttonDeleteCard = this._element.querySelector('.card__button-basket');
    this._buttonDeleteCard.addEventListener('click', (e) => {
      this._deleteCard(e);
    });

    this._cardImage = this._element.querySelector('.card__image');
    this._cardImage.addEventListener('click', () => {
      this._openPhoto();
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._cardTitle = this._element.querySelector('.card__heading');
    this._cardTitle.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    return this._element;
  }
}
