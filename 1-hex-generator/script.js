const currentHEX = document.querySelector('h3')
const button = document.querySelector('button')

function generateHEX () {
  const letters = 'ABCDEF0123456789'
  let newHEX = '#'

  for (let i = 0; i < 6; i++) {
    let randomLetter = Math.floor(Math.random() * 16)
    newHEX += letters[randomLetter]
  }
  return newHEX
}

button.onclick = () => {
  let hex = generateHEX()
  document.body.style.backgroundColor = hex
  currentHEX.innerText = hex
}