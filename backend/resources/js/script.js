// Listado de libros (simulación de una base de datos)
const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "fiction",
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    category: "non-fiction",
  },
  {
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    category: "science",
  },
  {
    title: "Guns, Germs, and Steel",
    author: "Jared Diamond",
    category: "history",
  },
  { title: "To Kill a Mockingbird", author: "Harper Lee", category: "fiction" },
  { title: "Educated", author: "Tara Westover", category: "non-fiction" },
];

// Cargar libros en la tabla
function loadBooks() {
  const tableBody = document.getElementById("book-table-body");
  tableBody.innerHTML = ""; // Limpiar tabla antes de cargar nuevos datos

  books.forEach((book) => {
    const row = document.createElement("tr");
    row.classList.add(book.category); // Añadir clase de categoría

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.category}</td> <!-- Añadir categoría -->
      <td><button class="reserve-button" onclick="reserveBook('${book.title}')">Reserve</button></td>
    `;

    tableBody.appendChild(row);
  });
}


// // Filtrar libros según la categoría seleccionada
// function filterBooks() {
//   const categoryFilter = document.getElementById("category-filter").value;
//   const filteredBooks =
//     categoryFilter === "all"
//       ? books
//       : books.filter((book) => book.category === categoryFilter);

//   const tableBody = document.getElementById("book-table-body");
//   tableBody.innerHTML = ""; // Limpiar tabla antes de cargar nuevos datos

//   filteredBooks.forEach((book) => {
//     const row = document.createElement("tr");
//     row.classList.add(book.category); // Añadir clase de categoría

//     row.innerHTML = `
//       <td>${book.title}</td>
//       <td>${book.author}</td>
//       <td><button class="reserve-button" onclick="reserveBook('${book.title}')">Reserve</button></td>
//     `;

//     tableBody.appendChild(row);
//   });
// }

function filterBooks() {
  const categoryFilter = document.getElementById("category-filter").value;
  const searchBox = document.getElementById("search-box").value.toLowerCase();

  const filteredBooks = books.filter((book) => {
    const matchesCategory =
      categoryFilter === "all" || book.category === categoryFilter;
    const matchesSearch =
      book.title.toLowerCase().includes(searchBox) ||
      book.author.toLowerCase().includes(searchBox);
    return matchesCategory && matchesSearch;
  });

  const tableBody = document.getElementById("book-table-body");
  tableBody.innerHTML = ""; // Limpiar tabla antes de cargar nuevos datos

  filteredBooks.forEach((book) => {
    const row = document.createElement("tr");
    row.classList.add(book.category); // Añadir clase de categoría

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.category}</td> <!-- Asegúrate de incluir la categoría aquí -->
      <td><button class="reserve-button" onclick="reserveBook('${book.title}')">Reserve</button></td>
    `;

    tableBody.appendChild(row);
  });
}

// Variables para el modal
const bookDetailsModal = document.getElementById("book-details-modal");
const closeBtn = document.getElementsByClassName("close")[0];

// Función para reservar un libro (simulación)
function reserveBook(title) {
  const book = books.find((book) => book.title === title);
  openBookDetailsModal(
    book.title,
    book.author,
    "Book description goes here...",
    "book-cover.jpg"
  );
}

// Función para abrir el modal de detalles del libro
function openBookDetailsModal(title, author, description, cover) {
  document.getElementById("book-title").innerText = title;
  document.getElementById("book-author").innerText = author;
  document.getElementById("book-description").innerText = description;
  document.getElementById("book-cover").src = cover;
  bookDetailsModal.style.display = "block";
}

// Función para cerrar el modal de detalles del libro
function closeBookDetailsModal() {
  bookDetailsModal.style.display = "none";
}

// Eventos para abrir y cerrar el modal
closeBtn.onclick = closeBookDetailsModal;
window.onclick = function (event) {
  if (event.target == bookDetailsModal) {
    closeBookDetailsModal();
  }
};

// Manejar la navegación entre secciones
function showSection(sectionId) {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => section.classList.remove("active"));
  document.getElementById(sectionId).classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
  loadBooks(); // Cargar libros al iniciar
  showSection("login");
});

function showForgotPassword() {
  showSection("forgot-password");
}
