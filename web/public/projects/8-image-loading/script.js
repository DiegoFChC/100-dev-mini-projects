window.addEventListener('load', () => {
  const $img = document.querySelector('.img__container')
  const $percent = document.querySelector('span')
  const $button = document.querySelector('button')
  const $text = document.querySelector('p')

  let progress = 0
  let blur = 30
  const DELTA = 30 / 100
  const INTERVAL_TIME = 20

  const updateValues = () => {
    progress++
    blur -= DELTA
    $img.style.filter = `blur(${blur}px)`
    $percent.textContent = progress + '%'    
    $button.style.setProperty('--progress', progress + '%')
  }

  $button.addEventListener('click', () => {
    $button.disabled = true
    $button.textContent = 'Loading...'
    let interval = setInterval(() => {
      updateValues()
      if (progress >= 100) {
        clearInterval(interval)
        $text.style.display = 'block'
        $button.style.display = 'none'
      }
    }, INTERVAL_TIME)
  })
})