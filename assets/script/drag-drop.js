const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

// Начали перетаскивание
item.addEventListener('dragstart', dragStart);

// Закончили перетаскивание
item.addEventListener('dragend', dragEnd);

placeholders.forEach((placeholder) => {
  placeholder.addEventListener('dragover', dragover); // Над Элементом
  placeholder.addEventListener('dragenter', dragenter); // Вошли в Элемент
  placeholder.addEventListener('dragleave', dragleave); // Покинули Элемент
  placeholder.addEventListener('drop', dragdrop); // Бросили
});

function dragStart(event) {
  this.classList.add('hold');

  setTimeout(() => this.classList.add('hide'), 0);
}

function dragEnd() {
  this.classList.remove('hold', 'hide');
  //   this.className = 'item';
}

function dragover(event) {
  event.preventDefault();
}

function dragenter(event) {
  this.classList.add('hovered');
}

function dragleave(event) {
  this.classList.remove('hovered');
}

function dragdrop(event) {
  this.classList.remove('hovered');
  this.append(item);
}
