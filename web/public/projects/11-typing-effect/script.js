const $dinamicText = document.querySelector('span')
const words = ['Love', 'like Art', 'the Future', 'Everything']

let wordIndex = 0
let charIndex = 0
let isDeleting = false

function typeEffect () {
  const currentWord = words[wordIndex]
  const currentChar = currentWord.substring(0, charIndex)
  $dinamicText.textContent = currentChar
  $dinamicText.classList.remove('stop-blinbking')

  if (!isDeleting && charIndex < currentWord.length) {
    $dinamicText.classList.remove('stop-blinbking')
    charIndex++
    setTimeout(typeEffect, 200)
  } else if (isDeleting && charIndex > 0) {
    $dinamicText.classList.add('stop-blinbking')
    charIndex--
    setTimeout(typeEffect, 100)
  } else {
    isDeleting = !isDeleting
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex
    setTimeout(typeEffect, 1200)
  }
}

typeEffect()