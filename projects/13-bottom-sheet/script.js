const $showModalBtn = document.querySelector('.show-modal')
const $bottonSheet = document.querySelector('.bottom-sheet')
const $sheetOverlay = document.querySelector('.sheet-overlay')
const $sheetContent = document.querySelector('.content')
const $dragIcon = document.querySelector('.drag-icon')

let isDragging= false, startY, startHeight

function showBottomSheet () {
  $bottonSheet.classList.add('show')
  document.body.style.overflowY = 'hidden'
  updateSheetHeight(50)
}

function hideBottomSheet () {
  $bottonSheet.classList.remove('show')
  document.body.style.overflowY = 'auto'
}

function updateSheetHeight (height) {
  $sheetContent.style.height = `${height}dvh`
  $bottonSheet.classList.toggle('fullscreen', height === 100)
}

function dragStart (e) {
  isDragging = true
  startY = e.pageY || e.touches?.[0].pageY
  startHeight = parseInt($sheetContent.style.height)
  $bottonSheet.classList.add('dragging')
}

function dragStop () {
  isDragging = false
  $bottonSheet.classList.remove('dragging')
  const sheetHeight = parseInt($sheetContent.style.height)
  sheetHeight < 25 ? hideBottomSheet() : sheetHeight > 80 ? updateSheetHeight(100) : null
}

function dragging (e) {
  if (!isDragging) return
  const delta = startY - (e.pageY || e.touches?.[0].pageY )
  const newHeight = startHeight + delta / window.innerHeight * 100
  updateSheetHeight(newHeight)
}

document.addEventListener('mouseup', dragStop)
$dragIcon.addEventListener('mousedown', dragStart)
document.addEventListener('mousemove', dragging)

document.addEventListener('touchend', dragStop)
$dragIcon.addEventListener('touchstart', dragStart)
document.addEventListener('touchmove', dragging)

$showModalBtn.addEventListener('click', showBottomSheet)
$sheetOverlay.addEventListener('click', hideBottomSheet)