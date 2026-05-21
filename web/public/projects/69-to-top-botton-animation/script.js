const toTopBtn = document.querySelector('.to-top')

toTopBtn.addEventListener('click', () => {
  document.documentElement.scrollTop = 0
})