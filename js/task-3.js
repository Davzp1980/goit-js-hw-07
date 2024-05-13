const span = document.getElementById('name-output');

const input = document.getElementById('name-input');

input.addEventListener('input', event => {
  const text = event.target.value;
  if (text === '') {
    span.textContent = 'Anonymous';
  }
  span.textContent = text.trim();
});
