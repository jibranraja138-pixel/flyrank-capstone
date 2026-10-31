import { validateSettings } from "./settings-validation.js";

const form = document.querySelector("#settings-form");
const nameInput = form.elements.displayName;
const emailInput = form.elements.email;
const successMessage = document.querySelector("#success-message");

const errorElements = {
  displayName: document.querySelector("#display-name-error"),
  email: document.querySelector("#email-error"),
};

function showErrors(errors) {
  for (const fieldName of Object.keys(errorElements)) {
    const message = errors[fieldName] ?? "";
    const input = form.elements[fieldName];
    errorElements[fieldName].textContent = message;
    if (message) {
      input.setAttribute("aria-invalid", "true");
    } else {
      input.removeAttribute("aria-invalid");
    }
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  successMessage.hidden = true;

  const errors = validateSettings({
    displayName: nameInput.value,
    email: emailInput.value,
  });
  showErrors(errors);

  if (Object.keys(errors).length > 0) {
    form.querySelector('[aria-invalid="true"]')?.focus();
    return;
  }

  successMessage.hidden = false;
});

for (const fieldName of Object.keys(errorElements)) {
  form.elements[fieldName].addEventListener("input", () => {
    successMessage.hidden = true;
    const errors = validateSettings({
      displayName: nameInput.value,
      email: emailInput.value,
    });
    showErrors(errors);
  });
}
