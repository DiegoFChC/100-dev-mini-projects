import { logout, isLogged } from "../services/localStorage.js";

const logoutBtn = document.getElementById("logout_btn");
const title = document.querySelector(".home__container > h1");

try {
  const dataCurrentUser = isLogged();
  title.innerText = `Bienvenido ${dataCurrentUser.name}`;
} catch (err) {
  window.location.href = "index.html";
}

logoutBtn.onclick = () => {
  logout();
  window.location.href = "index.html";
};
