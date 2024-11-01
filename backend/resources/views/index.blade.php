<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Book Reservation App</title>
  <!-- <link rel="stylesheet" href="../css/styles.css"> -->
  <link rel="stylesheet" href="{{ asset('css/styles.css') }}">
</head>

<body>
  <!-- Barra superior combinada de título y navegación -->
  <div class="header">
    <div class="app-title">Book Reservation App</div>

    <!-- Barra de búsqueda y menú de navegación -->
    <div class="nav-bar">
      <div class="nav-menu">
        <a href="#" onclick="showSection('book-list')">Book List</a>
        <a href="#" onclick="showSection('profile')">My Profile</a>
        <a href="#" onclick="showSection('login')">Login/Sign Up</a>
      </div>
    </div>
  </div>

  <!-- Contenedor principal -->
  <div class="main-content">
    <!-- Sección de inicio de sesión -->
    <div id="login" class="section active">
      <div class="login-box">
        <h2>Login</h2>
        <form>
          <input type="text" placeholder="Username" required>
          <input type="password" placeholder="Password" required>
          <button type="submit">Sign in</button>
          <p>
            <a href="#" onclick="showForgotPassword()">Forgot your password?</a>
          </p>
          <p>
            Not registered yet?
            <a href="#" onclick="showSection('signup')">Sign up here</a>
          </p>
        </form>
      </div>
    </div>

    <!-- Sección de recuperación de contraseña -->
    <div id="forgot-password" class="section">
      <div class="forgot-password-box">
        <h2>Forgot Password</h2>
        <form>
          <input type="email" placeholder="Email" required>
          <button type="submit">Send Recovery Link</button>
          <p>
            Remember your password?
            <a href="#" onclick="showSection('login')">Log in here</a>
          </p>
        </form>
      </div>
    </div>

    <!-- Sección de registro -->
    <div id="signup" class="section">
      <div class="signup-box">
        <h2>Sign Up</h2>
        <form>
          <input type="text" placeholder="Username" required>
          <input type="email" placeholder="Email" required>
          <input type="password" placeholder="Password" required>
          <button type="submit">Sign Up</button>
          <p>Already have an account? <a href="#" onclick="showSection('login')">Log in here</a></p>
        </form>
      </div>
    </div>

    <!-- Sección de perfil -->
    <div id="profile" class="section">
      <div class="account-info">
        <div class="profile-header">
          <div class="user-info">
            <h2>Juan Pérez</h2>
            <p>Total Reservations: 5</p>
          </div>
          <img src="path/to/profile-image.jpg" alt="Profile Picture" class="profile-image">
        </div>

        <h3>Active Reservations</h3>
        <table class="reservations-table">
          <thead>
            <tr>
              <th>Book Title</th>
              <th>Author</th>
              <th>Due Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Book 1</td>
              <td>Author 1</td>
              <td>Due Date 1</td>
              <td><button class="delete-button">Delete</button></td>
            </tr>
            <tr>
              <td>Book 2</td>
              <td>Author 2</td>
              <td>Due Date 2</td>
              <td><button class="delete-button">Delete</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Sección de lista de libros -->
    <div id="book-list" class="section">
      <div class="book-list-container">
        <div class="book-filter">
          <label for="category-filter">Filter by Category:</label>
          <select id="category-filter" onchange="filterBooks()">
            <option value="all">All</option>
            <option value="fiction">Fiction</option>
            <option value="non-fiction">Non-Fiction</option>
            <option value="science">Science</option>
            <option value="history">History</option>
          </select>
          <input type="text" id="search-box" placeholder="Search for books..." onkeyup="filterBooks()">
        </div>

        <h3>Available Books</h3>
        <table class="book-table reservations-table">
          <thead>
            <tr>
              <th>Book Title</th>
              <th>Author</th>
              <th>Category</th> <!-- Nueva columna agregada -->
              <th>Actions</th>
            </tr>
          </thead>
          <tbody id="book-table-body">

          </tbody>
        </table>

      </div>

      <!-- Modal para detalles del libro -->
      <!-- Modal para detalles del libro -->
      <div id="book-details-modal" class="modal">
        <div class="modal-content">
          <span class="close">&times;</span>

          <!-- Contenedor para título y autor -->
          <div class="book-header">
            <h2 id="book-title"></h2>
            <p id="book-author"></p>
          </div>

          <!-- Contenedor central para descripción e imagen -->
          <div class="book-info">
            <p id="book-description" class="book-description"></p>
            <img id="book-cover" src="" alt="Book cover">
          </div>

          <!-- Contenedor inferior para selector de días y botón de reserva -->
          <div class="modal-footer">
            <label for="days">Days:</label>
            <input type="number" id="days" value="5" min="1">
            <button class="reserve-button">Reserve</button>
          </div>
        </div>
      </div>


    </div>
  </div>

  <!-- Pie de página -->
  <div class="footer">
    &copy; 2024 Igniweb S.A.S
  </div>

  <!-- Script para manejar la navegación y el filtrado -->
  <!-- <script src="../js/script.js"></script> -->
  <script src="{{ asset('js/scripts.js') }}"></script>

</body>

</html>
