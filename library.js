const statusButtons = document.querySelectorAll('[data-status]');
const categoryButtons = document.querySelectorAll('[data-category]');
const books = document.querySelectorAll('.book-card');

let selectedStatus = 'all';
let selectedCategory = 'all';

statusButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    selectedStatus = btn.getAttribute('data-status');
    filterBooks();
  });
});

categoryButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    selectedCategory = btn.getAttribute('data-category');
    filterBooks();
  });
});

function filterBooks() {
  books.forEach(book => {
    const status = book.getAttribute('data-status');
    const category = book.getAttribute('data-category');
    const matchStatus = (selectedStatus === 'all' || status === selectedStatus);
    const matchCategory = (selectedCategory === 'all' || category === selectedCategory);
    book.style.display = matchStatus && matchCategory ? 'block' : 'none';
  });
}
