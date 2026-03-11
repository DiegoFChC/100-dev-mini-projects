const btn = document.querySelector('.go-top')

btn.addEventListener('click', () => {
  document.documentElement.scrollTop = 0
})

window.addEventListener('scroll', () => {
  if (window.scrollY < 150) {
    btn.style.right = '-100px'
  } else {
    btn.style.right = '30px'
  }
})