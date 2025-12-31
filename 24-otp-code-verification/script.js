const form = document.querySelector('form')
const inputs = document.querySelectorAll('input')
const sendButton = document.querySelector('button')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  alert('Data send!!!')
})

inputs.forEach((input, index) => {
  const currentInput = input
  const previousInput = input.previousElementSibling
  const nextInput = input.nextElementSibling

  currentInput.addEventListener('keyup', (e) => {
    if (currentInput.value.length > 1) {
      currentInput.value = ''
      currentInput.value = e.key
      return
    }

    if (currentInput.value.length > 0 && nextInput) {
      nextInput.value = ''
      nextInput.removeAttribute('disabled')
      nextInput.focus()
    }

    if (e.key === 'Backspace' && previousInput) {
      currentInput.value = ''
      currentInput.setAttribute('disabled', true)
      previousInput.focus()
    }
    console.log(!inputs[inputs.length - 1].disabled && inputs[inputs.length - 1].value !== '')
    if (!inputs[inputs.length - 1].disabled && inputs[inputs.length - 1].value !== '') {
      sendButton.classList.add('active')
      return
    }
    sendButton.classList.remove('active')
  })
})

window.addEventListener('load', () => {
  inputs[0].focus()
})