export function loadUsers() {
  let localData = JSON.parse(window.localStorage.getItem('users'))
  return localData || []
}

export function register({ name, email, password }) {
  let users = loadUsers()

  let existuser = users.some(user => user.email === email)

  if (!existuser) {
    users.push({ name, email, password })
    window.localStorage.setItem('users', JSON.stringify(users))
  } else {
    throw new Error('Este correo ya ha sido utilizado, por favor usa uno distinto.')
  }
}

export function login({ email, password }) {
  let users = loadUsers()

  let existUser = users.find(
    (user) => user.email === email && user.password === password
  )

  if (existUser) {
    window.localStorage.setItem('currentUser', JSON.stringify(existUser))
  } else {
    throw new Error(
      'Correo o contraseña incorrectos, por favor digítalos de nuevo'
    )
  }
}

export function logout() {
  window.localStorage.removeItem('currentUser')
}


export function isLogged () {
  let currentUser = JSON.parse(window.localStorage.getItem('currentUser'))
  if (currentUser) return currentUser
  else throw new Error('Usuario no logueado')
}