import { login } from '../services/localStorage.js'

const loginForm = document.querySelector('.login__container > form')

loginForm.addEventListener('submit', (e) => {
  e.preventDefault()
  let email = e.target.email.value
  let password = e.target.password.value
  
  try {
    login({ email, password })
    window.location.href = 'home.html'
  } catch (err) {
    alert(err)
  } finally {
    loginForm.reset()
  }
})