const menuToggle = document.querySelector(".menuToggle");
const navigation = document.querySelector(".navigation");


function Togglemenu() {
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
}

function ImgSlider(params) {
  document.getElementById("slider").src = params;
}

menuToggle.addEventListener("click", Togglemenu)