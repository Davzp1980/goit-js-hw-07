const span = document.getElementById('name-output');

const input = document.getElementById('name-input');

input.addEventListener('input', event => {
  const text = event.target.value;
  if (text.trim() === '') {
    span.textContent = 'Anonymous';
  } else {
    span.textContent = text.trim();
  }
});
