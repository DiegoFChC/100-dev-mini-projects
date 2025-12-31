const buttons = document.querySelectorAll('button')
const btnLigth = document.getElementById('ligth')
const btnDark = document.getElementById('dark')
const btnSystem = document.getElementById('system')

function getSystemTheme () {
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
  return systemTheme.matches ? 'dark' : 'ligth'
}

function handleTheme (theme) {
  // const currentTheme = document.body.getAttribute('data-theme')
  // console.log(currentTheme)
  document.body.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
}

btnLigth.addEventListener('click', () => handleTheme('ligth'))
btnDark.addEventListener('click', () => handleTheme('dark'))

function initTheme () {
  // const currentLocalTheme = localStorage.getItem('theme') || getSystemTheme()
  const currentLocalTheme = localStorage.getItem('theme')
  if (currentLocalTheme) handleTheme(currentLocalTheme)
  else document.body.setAttribute('data-theme', getSystemTheme())
}

// initTheme()

btnSystem.onclick = () => {
  const currentSystemTheme = getSystemTheme()
  handleTheme(currentSystemTheme)
}
