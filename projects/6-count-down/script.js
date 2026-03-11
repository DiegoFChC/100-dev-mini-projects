const circle = document.querySelector('.circle')
const buttonStart = document.getElementById('start')
const buttonPause = document.getElementById('pause')
const buttonRestart = document.getElementById('restart')
const time = document.querySelector('p')

let degs = 360
let seconds = 47
let minutes = 3
let hours = 0
let totalTime = seconds + (minutes * 60) + (hours * 3600)
const step = degs / totalTime
let color = 'rgb(0, 140, 255)'
let state = 'stop'

function formatTime (value) {
  return value < 10 ? `0${value}` : value
}

function updateText () {
  const newHour = formatTime(hours)
  const newMinut = formatTime(minutes)
  const newSecond = formatTime(seconds)
  time.innerText = `${newHour}:${newMinut}:${newSecond}`
}

function updateTime () {
  seconds--
  degs -= step

  if (seconds < 0) {
    seconds = 59
    minutes--

    if (minutes < 0) {
      minutes = 59
      hours--
    }
  }
  updateText()
}

let interval

function resetAll () {
  clearInterval(interval)
  buttonStart.disabled = false
  seconds = 47
  minutes = 3
  hours = 0
  degs = 360
  color = 'rgb(0, 140, 255)'
  circle.style.background = `conic-gradient(${color} ${degs}deg, rgb(0, 35, 65) 0deg)`
  updateText()
}

function startTime () {
  state = 'running'
  interval = setInterval(() => {
    updateTime()
    circle.style.background = `conic-gradient(${color} ${degs}deg, rgb(0, 35, 65) 0deg)`
    if (degs <= 0) {
      alert('Time over!!!')
      resetAll()
    }
    if (hours === 0 & minutes === 0 & seconds <= 15) color = 'rgba(199, 46, 0, 1)'
  }, 1000)
}

buttonStart.addEventListener('click', () => {
  buttonStart.disabled = true
  startTime()
})

buttonPause.addEventListener('click', () => {
  clearInterval(interval)
  buttonStart.disabled = false
})

buttonRestart.addEventListener('click', () => {
  resetAll()
})