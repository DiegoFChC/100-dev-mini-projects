const navList = document.querySelectorAll('header nav li')
const menuBackdrop = document.querySelector('.menu-backdrop')
const nav = document.querySelector('header ul li')

navList.forEach((item) => {
  item.addEventListener('click', (e) => {
    for (const li of navList) {
      li.classList.remove('active')
    }
    const itemRect = item.getBoundingClientRect()
    const navRect = navList[0].getBoundingClientRect()
    item.classList.add('active')

    const position = itemRect.left - navRect.left

    menuBackdrop.style.setProperty('--x-backdrop', `${position}px`)
  })
})
