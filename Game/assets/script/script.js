const startBtn = document.querySelector('#start');
const timeList = document.querySelector('#time-list');

const timeEl = document.querySelector('#time');

const screens = document.querySelectorAll('.screen');

const board = document.querySelector('#board');

let time = 0;

let score = 0;

let missClick = 0;

startBtn.addEventListener('click', (event) => {
  event.preventDefault();

  screens[0].classList.add('up');
});

// Делегирование событий
timeList.addEventListener('click', (event) => {
  if (event.target.classList.contains('time-btn')) {
    // time = parseInt(event.target.getAttribute('data-time'));
    time = Number(event.target.dataset.time);

    screens[1].classList.add('up');

    startGame();
  }
});

board.addEventListener('click', (event) => {
  if (event.target.classList.contains('circle')) {
    score++;

    event.target.remove();
    createRandomCircle();
  }
  missClick++;
});

function startGame() {
  setInterval(updateTime, 1000);
  createRandomCircle();
  setTime(time);
}

function updateTime() {
  if (time === 0) {
    finishGame();
  } else {
    let current = --time;

    if (current < 10) {
      current = `0${current}`;
    }

    setTime(current);
  }
}

function setTime(value) {
  timeEl.innerHTML = `00:${value}`; // textContent
}

function finishGame() {
  timeEl.parentNode.classList.add('hide');
  board.innerHTML = `<h1>Score: <span class='primary'>${score}</span></h1> 
  <h1>MissClicks: <span class='primary'>${missClick - score}</span></h1>`;
}

function createRandomCircle() {
  const circle = document.createElement('div');
  const size = getRandomNumber(10, 60);

  const color = chroma.random();

  // деструктуризация
  const { width, height } = board.getBoundingClientRect();

  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);

  circle.classList.add('circle');

  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;

  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;

  circle.style.background = color;
  circle.style.boxShadow = `0 0 2px ${color}`;

  board.append(circle);
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
