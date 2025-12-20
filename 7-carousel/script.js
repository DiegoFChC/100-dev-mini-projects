const $carouselSlide = document.querySelector('.carousel-slide')
const $carouselImages = document.querySelectorAll('.carousel-slide .item')

// Buttons
const $prevBtn = document.getElementById('prevBtn')
const $nextBtn = document.getElementById('nextBtn')

// Counter
let counter = 1
const size = $carouselImages[0].clientWidth

$carouselSlide.style.transform = `translateX(${-size * counter}px)`

// Button listeners
$nextBtn.addEventListener('click', () => {
  if (counter >= $carouselImages.length - 1) return
  $carouselSlide.style.transition = 'transform .4s ease-in-out'
  counter++
  $carouselSlide.style.transform = `translateX(${-size * counter}px)`
})

$prevBtn.addEventListener('click', () => {
  if (counter <= 0) return
  $carouselSlide.style.transition = 'transform .4s ease-in-out'
  counter--
  $carouselSlide.style.transform = `translateX(${-size * counter}px)`
})

$carouselSlide.addEventListener('transitionend', () => {
  if ($carouselImages[counter].querySelector('img').id === 'lastClone') {
    $carouselSlide.style.transition = 'none'
    counter = $carouselImages.length - 2
    $carouselSlide.style.transform = `translateX(${-size * counter}px)`
  } else if ($carouselImages[counter].querySelector('img').id === 'firstClone') {
    $carouselSlide.style.transition = 'none'
    counter = $carouselImages.length - counter
    $carouselSlide.style.transform = `translateX(${-size * counter}px)`
  }
})