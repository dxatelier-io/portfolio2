const statusButtons = document.querySelectorAll('[data-filter]');
const categoryButtons = document.querySelectorAll('[data-category]');
const books = document.querySelectorAll('.book-card');

let selectedStatus = 'all';
let selectedCategory = 'all';

function filterBooks() {
  books.forEach(book => {
    const status = book.getAttribute('data-status');
    const category = book.getAttribute('data-category');

    const matchStatus = selectedStatus === 'all' || status === selectedStatus;
    const matchCategory = selectedCategory === 'all' || category === selectedCategory;

    book.style.display = (matchStatus && matchCategory) ? 'block' : 'none';
  });
}

statusButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    statusButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedStatus = btn.getAttribute('data-filter');
    filterBooks();
  });
});

categoryButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    categoryButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedCategory = btn.getAttribute('data-category');
    filterBooks();
  });
});
