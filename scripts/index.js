// Main document
const documentMain = document.querySelector(".content");

// Card creator for initial cards

const cardTemplate = document.querySelector("#card-template");
const cards = document.querySelector(".cards");
const cardsList = document.querySelector(".cards__list");
const cardLike = document.querySelector(".card__like");

const initialCards = [
  {
    name: "Golden Gate bridge",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
  },
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
    .querySelector(".card")
    .cloneNode(true);

  const cardName = cardElement.querySelector(".card__description");
  const cardLink = cardElement.querySelector(".card__image");

  cardName.textContent = data.name;
  cardLink.alt = data.name;
  cardLink.src = data.link;

  const likeButtonSelector = cardElement.querySelector(".card__like");
  likeButtonSelector.addEventListener("click", handleLike);

  const cardDelete = cardElement.querySelector(".card__delete");
  cardDelete.addEventListener("click", handleDeleteCard);

  cardLink.addEventListener("click", clickImage);

  return cardElement;
}

initialCards.forEach(function (item) {
  const cardElement = getCardElement(item);
  cardsList.prepend(cardElement);
});

function handleLike(event) {
  event.target.classList.toggle("card__like_active");
  event.target.classList.toggle("card__like");
}

function handleDeleteCard() {
  event.target.closest(".card").remove();
}

//Profile modal edit section
const profileFormElement = document
  .querySelector("#edit-modal")
  .content.querySelector(".modal")
  .cloneNode(true);
documentMain.after(profileFormElement);
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

  closeModal(profileFormElement);
}

function openModal(modal) {
  modal.classList.add("modal_opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

editButtonProfile.addEventListener("click", () => {
  openModal(profileFormElement);
  nameInput.value = profileNameElement.textContent;
  jobInput.value = profileJobElement.textContent;
});

closeButtonModal.addEventListener("click", () => {
  closeModal(profileFormElement);
});
modalFormElement.addEventListener("submit", handleProfileFormSubmit);

// New post modal

const newPostFormElement = document
  .querySelector("#post-modal")
  .content.querySelector(".modal");

documentMain.after(newPostFormElement);
const newPostButton = document.querySelector(".profile__button");

const postCloseButtonModal = newPostFormElement.querySelector(".modal__close");
const postModalFormElement = newPostFormElement.querySelector(".modal__form");

const newPostLink = newPostFormElement.querySelector("#name");
const newPostCaption = newPostFormElement.querySelector("#description");

newPostButton.addEventListener("click", () => {
  openModal(newPostFormElement);
});

postCloseButtonModal.addEventListener("click", () => {
  closeModal(newPostFormElement);
});

postModalFormElement.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const postName = newPostCaption.value;
  const postLink = newPostLink.value;
  const data = { name: postName, link: postLink };
  const cardElement = getCardElement(data);
  cardsList.prepend(cardElement);
  closeModal(newPostFormElement);
  evt.target.reset();
});

// Preview Modal

const previewModal = document
  .querySelector("#preview-modal")
  .content.querySelector(".modal");

const previewImageCaption = document.createElement("p");
previewImageCaption.classList.add("modal__preview-caption");

const modalPreviewContainer = document.createElement("div");
modalPreviewContainer.classList.add("modal__preview-container");

const previewImage = document.createElement("img");
previewImage.classList.add("modal__preview-image");

const closeButtonPreview = document.createElement("button");
closeButtonPreview.type = "button";
closeButtonPreview.classList.add("modal__preview-close");

const closeButtonPreviewImage = document.createElement("img");
closeButtonPreviewImage.src = "./images/xButtonWhite.svg";
closeButtonPreviewImage.alt = "preview close button";

closeButtonPreview.appendChild(closeButtonPreviewImage);
modalPreviewContainer.appendChild(previewImage);
modalPreviewContainer.appendChild(previewImageCaption);
modalPreviewContainer.appendChild(closeButtonPreview);
previewModal.appendChild(modalPreviewContainer);
documentMain.after(previewModal);

function clickImage(event) {
  previewImage.alt = event.target.alt;
  previewImage.src = event.target.src;
  previewImageCaption.textContent = event.target.alt;
  openModal(previewModal);
}

closeButtonPreview.addEventListener("click", () => {
  closeModal(previewModal);
});
