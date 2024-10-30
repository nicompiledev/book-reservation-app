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
      <td><button class="reserve-button" onclick="reserveBook('${book.title}')">Reserve</button></td>
    `;

    tableBody.appendChild(row);
  });
}

// Filtrar libros según la categoría seleccionada
function filterBooks() {
  const categoryFilter = document.getElementById("category-filter").value;
  const filteredBooks =
    categoryFilter === "all"
      ? books
      : books.filter((book) => book.category === categoryFilter);

  const tableBody = document.getElementById("book-table-body");
  tableBody.innerHTML = ""; // Limpiar tabla antes de cargar nuevos datos

  filteredBooks.forEach((book) => {
    const row = document.createElement("tr");
    row.classList.add(book.category); // Añadir clase de categoría

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td><button class="reserve-button" onclick="reserveBook('${book.title}')">Reserve</button></td>
    `;

    tableBody.appendChild(row);
  });
}

// Función para reservar un libro (simulación)
function reserveBook(title) {
  alert(`You have reserved: ${title}`);
}



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