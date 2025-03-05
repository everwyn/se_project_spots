// Card creator for initial cards

const cardTemplate = document.querySelector("#cards__template");
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
    .querySelector(".cards__card")
    .cloneNode(true);

  const cardName = cardElement.querySelector(".cards__card-description");
  const cardLink = cardElement.querySelector(".cards__card-image");

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
const modalFormElement = profileFormElement.querySelector(".modal__save");

const profileNameElement = document.querySelector(".profile__avatar-name");
const profileJobElement = document.querySelector(
  ".profile__avatar-description"
);

const nameInput = profileFormElement.querySelector(".modal__name");
const jobInput = profileFormElement.querySelector(".modal__description");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  let profileNameEdit = nameInput.value;
  let profileJobEdit = jobInput.value;

  profileNameElement.textContent = profileNameEdit;
  profileJobElement.textContent = profileJobEdit;

  toggleModal();
}

function toggleModal() {
  profileFormElement.classList.toggle("modal_opened");
}

editButtonProfile.addEventListener("click", toggleModal);
closeButtonModal.addEventListener("click", toggleModal);
modalFormElement.addEventListener("click", handleProfileFormSubmit);
