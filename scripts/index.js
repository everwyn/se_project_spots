// Card creator for initial cards

const cardTemplate = document.querySelector("#card-template");
const cards = document.querySelector(".cards");

const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card__item")
    .cloneNode(true);

  const cardName = cardElement.querySelector(".card__description");
  const cardLink = cardElement.querySelector(".card__image");

  cardName.textContent = data.name;
  cardLink.alt = data.name;
  cardLink.src = data.link;

  return cardElement;
}

for (let i = 0; i < initialCards.length; i++) {
  const cardElement = getCardElement(initialCards[i]);
  cards.prepend(cardElement);
}

//Modal edit for profile section
const profileFormElement = document.querySelector("#edit-modal");
const editButtonProfile = document.querySelector(".profile__avatar-edit");
const closeButtonModal = profileFormElement.querySelector(".modal__close");
const modalFormElement = profileFormElement.querySelector(".modal__form");

const profileNameElement = document.querySelector(".profile__avatar-name");
const profileJobElement = document.querySelector(
  ".profile__avatar-description"
);

const nameInput = profileFormElement.querySelector("#name");
const jobInput = profileFormElement.querySelector("#description");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const profileNameEdit = nameInput.value;
  const profileJobEdit = jobInput.value;

  profileNameElement.textContent = profileNameEdit;
  profileJobElement.textContent = profileJobEdit;

  closeModal();
}

function openModal() {
  profileFormElement.classList.add("modal_opened");
  nameInput.value = profileNameElement.textContent;
  jobInput.value = profileJobElement.textContent;
}

function closeModal() {
  profileFormElement.classList.remove("modal_opened");
}

editButtonProfile.addEventListener("click", openModal);
closeButtonModal.addEventListener("click", closeModal);
modalFormElement.addEventListener("submit", handleProfileFormSubmit);
