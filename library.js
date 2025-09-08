const filterButtons = document.querySelectorAll('.filters button');
const books = document.querySelectorAll('.book-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.textContent.toLowerCase().replace(" ", "-");

    books.forEach(book => {
      if (filter === "all" || book.dataset.category === filter) {
        book.style.display = "block";
      } else {
        book.style.display = "none";
      }
    });

    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});
