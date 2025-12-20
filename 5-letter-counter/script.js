const input = document.querySelector('input')
const counter = document.querySelector('strong')

input.addEventListener('input', (e) => {
  let content = e.target.value
  counter.innerText = content.length
  console.log(content)
})