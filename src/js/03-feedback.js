import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const formData = {};

form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onFormSubmit);
initForm(getFormData());

function onFormData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function getFormData() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY));
}

function initForm(data) {
  if (data) {
    Object.entries(data).forEach(([key, value]) => {
      form.elements[key].value = value;
    });
  }
}
