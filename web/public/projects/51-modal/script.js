const overlay = document.getElementById('modalOverlay')
const content = document.getElementById('modalContent')
const btn = document.getElementById('openModal')

btn.onclick = showModal

function showModal() {
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