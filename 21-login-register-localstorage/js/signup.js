import { register } from "../services/localStorage.js";

const signupForm = document.querySelector(".signup__container > form");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const dataForm = new FormData(signupForm);
  let name = dataForm.get("name");
  let email = dataForm.get("email");
  let password = dataForm.get("password");

  try {
    register({ name, email, password });
    window.location.href = "index.html";
  } catch (err) {
    alert(err);
  } finally {
    signupForm.reset();
  }
});
