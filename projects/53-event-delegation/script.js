const container = document.querySelector('.container')

function randomNumber(limit) {
  return Math.floor(Math.random() * limit) + 1
}

function randomRGB() {
  return `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`
}

container.addEventListener('click', (e) => {
  e.target.style.backgroundColor = randomRGB()
})
