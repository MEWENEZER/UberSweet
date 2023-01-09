function cardsPlugin(activeCard = 1) {
  const cards = document.querySelectorAll('.card');

  cards[activeCard].classList.add('active');

  for (const card of cards) {
    card.addEventListener('click', () => {
      if (card.classList.contains('active')) {
        return card.classList.remove('active');
      }
      clearActiveClasses();
      card.classList.add('active');
    });
  }

  function clearActiveClasses() {
    cards.forEach((card) => {
      card.classList.remove('active');
    });
  }
}

cardsPlugin();
