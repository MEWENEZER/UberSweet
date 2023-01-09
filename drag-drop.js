const item = document.querySelector('.card');
const placeholders = document.querySelectorAll('.col');

// Начали перетаскивание
item.addEventListener('dragstart', dragStart);

// Закончили перетаскивание
item.addEventListener('dragend', dragEnd);

placeholders.forEach((placeholder) => {
  if (placeholder.dataset.type == 'placeholder') {
    placeholder.addEventListener('dragover', dragover); // Над Элементом
    placeholder.addEventListener('dragenter', dragenter); // Вошли в Элемент
    placeholder.addEventListener('dragleave', dragleave); // Покинули Элемент
    placeholder.addEventListener('drop', dragdrop); // Бросили
  }
});

function dragStart(event) {
  this.classList.add('border-danger');

  setTimeout(() => this.classList.add('d-none'), 0);
}

function dragEnd() {
  this.className = 'card';
}

function dragover(event) {
  event.preventDefault();
}

function dragenter(event) {
  this.classList.add('border-top');
  this.classList.add('border-primary');
}

function dragleave(event) {
  this.classList.remove('border-top');
  this.classList.remove('border-primary');
}

function dragdrop(event) {
  this.classList.remove('border-top');
  this.classList.remove('border-primary');
  this.append(item);
}
