window.addEventListener('DOMContentLoaded', () => {
  const $input = document.querySelector('.main__input')
  const $text = document.querySelector('.main__text')

  $input.addEventListener('keydown', (e) => {
    let search = $input.value
    console.log(e)

    if (search.trim() !== '' && e.key === 'Enter') {
      let regExp = new RegExp(search, 'gi')

      $text.innerHTML = $text.textContent.replace(
        regExp,
        '<span class="text__search">$&</span>'
      )
    }
  })
})
