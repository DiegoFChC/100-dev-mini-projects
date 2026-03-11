const body = document.body;
const sidebar = document.querySelector(".sidebar");
const listItems = document.querySelectorAll(".item");
const menuToggle = document.querySelector(".menuToggle");
const toggleTheme = document.querySelector("#toggle_theme");

// Para activar el item de la lista seleccionado
function activeItemList() {
  listItems.forEach((item) => {
    item.classList.remove("selected");
  });
  this.classList.add("selected");
}

listItems.forEach((item) => {
  item.addEventListener("click", activeItemList);
});

// Colapsar sidebar
menuToggle.onclick = function () {
  sidebar.classList.toggle("collapse");

  // Si colapsa permito que las palabras aparezcan flotando
  if (sidebar.classList.contains("collapse")) {
    listItems.forEach((item) => {
      item.addEventListener("mouseover", (event) => {
        item.classList.add("hover");
      });
    });

    listItems.forEach((item) => {
      item.addEventListener("mouseleave", (event) => {
        item.classList.remove("hover");
      });
    });
  }
};

// Cambiar tema
toggleTheme.onclick = function () {
  toggleTheme.classList.toggle("active");
};
