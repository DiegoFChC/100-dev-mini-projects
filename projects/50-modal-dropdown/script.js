const overlay = document.getElementById('modalOverlay')
const content = document.getElementById('modalContent')
const btn = document.getElementById('openModal')

btn.onclick = showModal

function showModal() {
  content.className = 'modal-content dropdown'

  // coordenadas
  const rect = btn.getBoundingClientRect()

  content.style.top = `${rect.bottom + 5}px`
  const menuWidth = 200
  content.style.left = `${rect.left - menuWidth}px`

  overlay.classList.add('is-visible')
}

overlay.addEventListener('mousedown', (event) => {
  if (!content.contains(event.target)) {
    closeModal()
  }
})

function closeModal () {
  overlay.classList.remove('is-visible')
  console.log('ejecutando algo si se desea...')
}

// Reposicionar si cambia de tamaño la pantalla

window.addEventListener('resize', () => {
  if (overlay.classList.contains('is-visible')) {
    showModal()
  }
})