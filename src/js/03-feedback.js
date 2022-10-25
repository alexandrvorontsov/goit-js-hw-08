import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const formData = {};

form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onFormSubmit);
const data = getStorageData();
updateFormData(data);

function onFormData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function getStorageData() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY));
}

function updateFormData(data) {
  if (data) {
    for (const key in data) {
      form.elements[key].value = data[key];
    }
  }
}
