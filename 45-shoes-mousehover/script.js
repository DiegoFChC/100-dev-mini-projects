const lis = document.querySelectorAll(".thum li");

console.log(lis)

function imgURL(item) {
  document.querySelector(".imgBox img").src = item.childNodes[0].src;
}

lis.forEach((item) => {
  item.addEventListener("mouseover", (event) => {imgURL(item)})
  // console.log(item.childNodes[0].src)
})