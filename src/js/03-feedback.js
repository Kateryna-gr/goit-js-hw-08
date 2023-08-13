import throttle from 'lodash.throttle';
const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.js-email');
const message = document.querySelector('.js-message');

const STORAGE_KEY = 'feedback-form-state';

let storageData = {
  storEmail: '',
  storMessage: '',
};

let storage = JSON.parse(localStorage.getItem(STORAGE_KEY));
console.log(storage);

if (storage) {
  email.value = storage.storEmail;
  message.value = storage.storMessage;
}

form.addEventListener('input', throttle(handlerInput, 500));

function handlerInput() {
  console.log('email:', email.value);
  storageData.storEmail = email.value;
 
  console.log('message:', message.value);
  storageData.storMessage = message.value;
 
  localStorage.setItem(STORAGE_KEY, JSON.stringify(storageData));

  console.log(localStorage.getItem(STORAGE_KEY));
}

form.addEventListener('submit', handlerForm);

function handlerForm(event) {
  event.preventDefault();

  if (!email.value || !message.value) {
    alert('Незаповнені поля!');
  } else {
    console.log({ Email: email.value, Message: message.value });
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
  }
}
