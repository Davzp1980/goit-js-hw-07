function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const mainDiv = document.getElementById('boxes');
const input = document.querySelector('input');
const createBotton = document.querySelector('button[data-create]');
const destroyBotton = document.querySelector('button[data-destroy]');

let data = 0;

input.addEventListener('input', event => (data = event.currentTarget.value));

createBotton.addEventListener('focus', () => {
  createBoxes(data);
});

function createBoxes(amount) {
  if (amount >= 1 && amount <= 100) {
    let width = 20;
    let height = 20;
    for (let i = 0; i < amount; i++) {
      const newDiv = document.createElement('div');
      newDiv.style.width = `${width + 10}px`;
      newDiv.style.height = `${height + 10}px`;
      newDiv.style.backgroundColor = getRandomHexColor();
      newDiv.classList.add('new-div');
      width += 10;
      height += 10;
      mainDiv.append(newDiv);
    }
  }
}

function destroyBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const newDiv = document.querySelector('.new-div');
    newDiv.remove();
  }
}

destroyBotton.addEventListener('focus', () => {
  destroyBoxes(data);
});
