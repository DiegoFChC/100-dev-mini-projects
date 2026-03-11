const display = document.querySelector('.display')
const buttons = document.querySelectorAll('button')

// buttons.forEach((btn) => {
//   btn.onclick = () => {
//     if (btn.id === 'clear') {
//       display.innerText = ''
//     } else if (btn.id === 'back') {
//       let str = display.innerText
//       display.innerText = str.substr(0, str.length - 1)
//     } else if (btn.id === 'equal') {
//       let str = display.innerText
//       let total = eval(str) ?? 0
//       display.innerText = total
//     } else {
//       display.innerText += btn.id
//     }
//   }
// })

for (const btn of buttons) {
  btn.addEventListener('click', () => {
    if (btn.id === 'clear') {
      display.innerText = ''
    } else if (btn.id === 'back') {
      let str = display.innerText
      display.innerText = str.substr(0, str.length - 1)
    } else if (btn.id === 'equal') {
      let str = display.innerText
      let total = eval(str) ?? 0
      display.innerText = total
    } else {
      display.innerText += btn.id
    }
  })
}