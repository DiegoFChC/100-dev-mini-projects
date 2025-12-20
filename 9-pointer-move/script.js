const $btn = document.querySelector('button')
const $circle = document.querySelector('.circle')

$btn.addEventListener('click', () => {
  if ($circle.classList.contains('active')) {
    $btn.innerText = 'Active light'
  } else {
    $btn.innerText = 'Deactivate light'
  }
  
  $circle.classList.toggle('active')
})

window.addEventListener('pointermove', (e) => {
  const { clientX: x, clientY: y } = e
  $circle.style.transform = `translate(${x}px, ${y}px)`
})