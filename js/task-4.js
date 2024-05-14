const form = document.querySelector('.login-form');
const button = document.querySelector('button');
button.textContent = 'Log in';

form.addEventListener('submit', sendForm);

function sendForm(event) {
  event.preventDefault();
  const inputEmail = event.target.elements.email.value;
  const inputPassword = event.target.elements.password.value;
  if (inputEmail === '' || inputPassword === '') {
    alert('All form fields must be filled in');
    return;
  }
  const result = {
    email: inputEmail.trim(),
    password: inputPassword.trim(),
  };
  console.log(result);
  form.reset();
}
