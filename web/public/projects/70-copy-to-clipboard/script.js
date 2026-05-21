const svgCopied = document.querySelector('.copied')
const btnCopy = document.querySelector('.container button')
const input = document.querySelector('.container input')

btnCopy.addEventListener('click', async () => {
  try {
    const text = input.value
    btnCopy.disabled = true
    await navigator.clipboard.writeText(text)
    svgCopied.classList.add('active')
  } catch (err) {
    throw new Error('Error copying:', err)
  } finally {
    setTimeout(() => {
      svgCopied.classList.remove('active')
      btnCopy.disabled = false
    }, 1500)
  }
})