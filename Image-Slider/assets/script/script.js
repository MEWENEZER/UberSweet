const upButton = document.querySelector('.button__up');
const downButton = document.querySelector('.button__down');

const sidebar = document.querySelector('.slider__sidebar');
const mainSlide = document.querySelector('.slider__main-slide');

const container = document.querySelector('.container');

const slidesCount = mainSlide.querySelectorAll('div').length;

let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

document.addEventListener('keydown', (event) => {
  if (event.code == 'ArrowUp') {
    ChangeSlides('up');
  } else if (event.code == 'ArrowDown') {
    ChangeSlides('down');
  }
});

upButton.addEventListener('click', () => {
  ChangeSlides('up');
});

downButton.addEventListener('click', () => {
  ChangeSlides('down');
});

function ChangeSlides(direction) {
  if (direction === 'up') {
    activeSlideIndex++;

    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === 'down') {
    activeSlideIndex--;

    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }
  }

  const height = container.clientHeight;

  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;

  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}
