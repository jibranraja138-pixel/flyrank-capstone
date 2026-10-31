const form = document.querySelector('#settings-form');
const saveStatus = document.querySelector('#save-status');
const firstName = form.elements.firstName;
const lastName = form.elements.lastName;
const bio = form.elements.bio;
const avatar = document.querySelector('#profile-avatar');
const charCount = document.querySelector('#char-count');
const photoInput = document.querySelector('#photo-input');
let photoUrl;
const storageKey = 'studyspace-settings';

try {
  const savedSettings = JSON.parse(localStorage.getItem(storageKey) || '{}');
  for (const [name, value] of Object.entries(savedSettings)) {
    const field = form.elements.namedItem(name);
    if (!field) continue;
    if (field.type === 'checkbox') field.checked = Boolean(value);
    else field.value = value;
  }
} catch {
  // Keep the default form values if local storage is unavailable or invalid.
}

function updateAvatar() {
  avatar.textContent = `${firstName.value.trim().charAt(0)}${lastName.value.trim().charAt(0)}`.toUpperCase() || 'JD';
}

function updateCharCount() {
  charCount.textContent = `${bio.value.length} / 160`;
}

document.querySelector('#upload-button').addEventListener('click', () => photoInput.click());
photoInput.addEventListener('change', () => {
  const file = photoInput.files?.[0];
  if (!file) return;
  if (photoUrl) URL.revokeObjectURL(photoUrl);
  photoUrl = URL.createObjectURL(file);
  avatar.textContent = '';
  avatar.style.background = `center / cover no-repeat url("${photoUrl}")`;
});
document.querySelector('#remove-photo').addEventListener('click', () => {
  if (photoUrl) URL.revokeObjectURL(photoUrl);
  photoUrl = undefined;
  photoInput.value = '';
  avatar.removeAttribute('style');
  updateAvatar();
});
firstName.addEventListener('input', updateAvatar);
lastName.addEventListener('input', updateAvatar);
bio.addEventListener('input', updateCharCount);
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const settings = Object.fromEntries([...new FormData(form).entries()]);
  for (const checkbox of form.querySelectorAll('input[type="checkbox"]')) {
    settings[checkbox.name] = checkbox.checked;
  }
  try {
    localStorage.setItem(storageKey, JSON.stringify(settings));
    saveStatus.textContent = 'Changes saved on this device.';
  } catch {
    saveStatus.textContent = 'Unable to save in this browser. Please try again.';
  }
  saveStatus.classList.add('saved');
  window.setTimeout(() => saveStatus.classList.remove('saved'), 2200);
});
form.addEventListener('reset', () => window.setTimeout(() => {
  localStorage.removeItem(storageKey);
  updateAvatar();
  updateCharCount();
  saveStatus.textContent = 'Your changes have been reset.';
}));
updateCharCount();
