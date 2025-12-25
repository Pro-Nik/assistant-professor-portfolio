function signup(e) {
  e.preventDefault();
  const user = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
  };
  localStorage.setItem("user", JSON.stringify(user));
  alert("Signup successful");
  window.location.href = "login.html";
}

function login(e) {
  e.preventDefault();
  const stored = JSON.parse(localStorage.getItem("user"));
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if (stored && stored.email === email && stored.password === pass) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials");
  }
}

function loadUser() {
  const user = JSON.parse(localStorage.getItem("user"));
  document.getElementById("welcome").innerText = "Welcome, " + user.name;
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}
