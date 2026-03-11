const btn = document.querySelector('button')

btn.addEventListener('click', (e) => {
  // e.preventDefault()
  btn.classList.add('animate')

  setTimeout(() => {
    btn.classList.remove('animate')
  }, 600)
})
