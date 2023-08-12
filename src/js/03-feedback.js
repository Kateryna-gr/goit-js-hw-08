import throttle from 'lodash.throttle';
const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.js-email');
const message = document.querySelector('.js-message');

email.value = localStorage.getItem('feedback-form-email');
message.value = localStorage.getItem('feedback-form-message');

form.addEventListener('input', throttle(handlerInput, 500));

function handlerInput() {
  console.log('email:', email.value);
  localStorage.setItem('feedback-form-email', email.value);

  console.log('message:', message.value);
  localStorage.setItem('feedback-form-message', message.value);
}

form.addEventListener('submit', handlerForm);

function handlerForm(event) {
  event.preventDefault();

  if (!email.value || !message.value) {
    console.log('Незаповнені поля');
  } else {
    console.log({ Email: email.value, Message: message.value });
    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-email');
    localStorage.removeItem('feedback-form-message');
  }
}
