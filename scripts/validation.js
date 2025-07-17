const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error",
};

function enableValidation(settings) {
  const formSelector = Array.from(
    document.querySelectorAll(settings.formSelector)
  );

  formSelector.forEach((formElement) => {
    createEventListeners(formElement);
  });
}

function hasInvalidInput(inputList) {
  return inputList.some((input) => {
    return !input.validity.valid;
  });
}

function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    disableButton(buttonElement);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(settings.inactiveButtonClass);
  }
}

function disableButton(buttonElement) {
  buttonElement.disabled = true;
  buttonElement.classList.add(settings.inactiveButtonClass);
}

function createEventListeners(formElement) {
  const inputList = Array.from(
    formElement.querySelectorAll(settings.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    settings.submitButtonSelector
  );

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkValidation(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
}

function checkValidation(formElement, inputElement) {
  if (!inputElement.validity.valid) {
    showValidationMessage(
      formElement,
      inputElement,
      inputElement.validationMessage
    );
  } else {
    hideValidationMessage(formElement, inputElement);
  }
}

function showValidationMessage(formElement, inputElement, errorMessage) {
  const errorMessageSelector = formElement.querySelector(
    "#" + inputElement.id + "-error"
  );
  errorMessageSelector.textContent = errorMessage;
  inputElement.classList.add(settings.inputErrorClass);
}

function hideValidationMessage(formElement, inputElement) {
  const errorMessageSelector = formElement.querySelector(
    "#" + inputElement.id + "-error"
  );
  errorMessageSelector.textContent = "";
  inputElement.classList.remove(settings.inputErrorClass);
}

function resetValidation(formElement, inputList) {
  inputList.forEach((input) => {
    hideValidationMessage(formElement, input);
  });
}

enableValidation(settings);
