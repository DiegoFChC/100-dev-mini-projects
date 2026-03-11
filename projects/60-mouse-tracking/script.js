const mouseTracker = document.querySelector('.pointer-tracker')
const coordinates = document.querySelector('p strong')

window.addEventListener('mousemove', (e) => {
  const { clientX: x, clientY: y } = e

  mouseTracker.style.transform = `translate(${x}px, ${y}px)`
  coordinates.textContent = `x: ${x} y: ${y}`
})

window.addEventListener('resize', () => {
  const { innerWidth, innerHeight } = window

  mouseTracker.style.transform = `translate(${innerWidth / 2}px, ${innerHeight / 2}px)`
})
