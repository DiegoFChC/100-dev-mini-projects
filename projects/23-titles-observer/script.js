const sections = document.querySelectorAll('section')
const links = document.querySelectorAll('a')

const config = {
  root: null,
  rootMargin: '0px 0px -50% 0px',
  threshold: 0
}

let observer = new IntersectionObserver((entries, self) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      intersectionHandler(entry)
    }
  })
}, config)

sections.forEach(section => {
  observer.observe(section)
})

function intersectionHandler (entry) {
  const id = entry.target.id

  links.forEach(link => link.classList.remove('active'))

  const currentLink = document.querySelector(`a[href='#${id}']`)
  currentLink.classList.add('active')
}