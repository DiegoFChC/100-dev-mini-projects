const figures = [
  'square',
  'square',
  'circle',
  'circle',
  'drop',
  'drop',
  'oval',
  'oval',
  'leaf',
  'leaf',
  'diamond',
  'diamond',
  'rect',
  'rect',
  'paralelo',
  'paralelo',
]

const gameContainer = document.querySelector('.game-container')
const restartWindow = document.querySelector('.end-game')
const btnRestart = document.querySelector('.end-game .wrapper button')
const attemptsTag = document.querySelector('.end-game .wrapper p strong')
const score = document.querySelector('.score')
const TOTAL_CARDS = 16

let firstCard = null
let secondCard = null
let lockBoard = false
let attempts = 0
let matches = 0

/**
 * Crear una card en HTML
 * @param {string} figure Figura a mostrar en la card
 * @returns {HTMLElement} Card
 */
function createCard(figure) {
  const card = document.createElement('div')
  card.classList.add('card')
  card.setAttribute('data-figure', figure)

  card.innerHTML = `
    <div class='card-content'>
      <div class='front'></div>
      <div class='back ${figure}'></div>
    </div>
  `

  return card
}

/**
 * Función de reordenamiendo aleatorio bajo el algoritmo Fisher–Yates
 * @param {array} array Array a ordenar
 * @returns Array reordenado de forma alatoria
 */
function shuffle(array) {
  let lastIndex = array.length - 1

  while (lastIndex > 0) {
    const randomIndex = Math.floor(Math.random() * (lastIndex + 1))
    let temp = array[lastIndex]
    array[lastIndex] = array[randomIndex]
    array[randomIndex] = temp
    lastIndex--
  }

  return array
}

function flipCard() {
  if (lockBoard || this === firstCard) return

  this.classList.add('show')

  if (!firstCard) {
    firstCard = this
    return
  }
  secondCard = this
  lockBoard = true

  checkMatch()
  updateScore()
}

function checkMatch() {
  attempts++
  const { figure: first } = firstCard.dataset
  const { figure: second } = secondCard.dataset

  const isMatch = first === second

  return isMatch ? disabledCards() : unflipCards()
}

function disabledCards() {
  firstCard.removeEventListener('click', flipCard)
  secondCard.removeEventListener('click', flipCard)
  matches++

  resetBoard()
  endGame()
}

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove('show')
    secondCard.classList.remove('show')

    resetBoard()
  }, 1000)
}

function resetBoard() {
  lockBoard = false
  ;[firstCard, secondCard] = [null, null]
}

function updateScore() {
  score.querySelector('#matches strong').textContent = `${matches} / ${TOTAL_CARDS / 2}`
  score.querySelector('#attempts strong').textContent = attempts
}

function endGame() {
  if (matches < TOTAL_CARDS / 2) return

  setTimeout(() => {
    attemptsTag.textContent = attempts
    restartWindow.classList.add('show')
  }, 500)
}

function initGame() {
  gameContainer.innerHTML = ''
  const shuffleFigures = shuffle([...figures])

  shuffleFigures.forEach((figure) => {
    const card = createCard(figure)
    card.addEventListener('click', flipCard)
    gameContainer.appendChild(card)
  })

  btnRestart.addEventListener('click', restartGame)
}

function restartGame() {
  attempts = 0
  matches = 0
  restartWindow.classList.remove('show')

  updateScore()
  initGame()
}

initGame()
