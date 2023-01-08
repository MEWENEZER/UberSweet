const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('click', () => {
    if (card.classList.contains('active')) {
      return card.classList.remove('active');
    }
    clearActiveClasses();
    card.classList.add('active');
  });
});

function clearActiveClasses() {
  cards.forEach((card) => {
    card.classList.remove('active');
  });
}
