const eyes = document.querySelector(".eyes");
const head = document.querySelector(".head");
const ears = document.querySelector(".ears");
const nose = document.querySelector(".nose");
const snout = document.querySelector(".snout");
// const text = document.querySelector('.text');

let cursorPos = { x: 0, y: 0 };
// Ancho de la pantalla
let windowWidth = window.innerWidth;
// Alto de la pantalla
let windowHeight = window.innerHeight;

function defWindowSize() {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
}

function mouseMove(e) {
  cursorPos = { x: e.clientX, y: e.clientY };
  follow();
}

function touchMove(e) {
  cursorPos = { x: e.targetTouches[0].offsetX, y: e.targetTouches[0].offsetY };
  follow();
}

const followCursor = (element, xRatio, yRatio) => {
  const elementOffset = element.getBoundingClientRect();
  const centerX = elementOffset.x + elementOffset.width / 2;
  // text.innerText = centerX;
  const centerY = elementOffset.y + elementOffset.height / 2;
  const distanceLeft = Math.round(
    ((cursorPos.x - centerX) * 100) / window.innerWidth
  );
  const distanceTop = Math.round(
    ((cursorPos.y - centerY) * 100) / window.innerHeight
  );
  element.style.transform = `translate(${distanceLeft / xRatio}px, ${
    distanceTop / yRatio
  }px)`;
};

const follow = () => {
  if (ears) followCursor(ears, -2.8, -2.8);
  if (head) followCursor(head, 6, 6);
  if (eyes) followCursor(eyes, 1.8, 1.8);
  if (snout) followCursor(snout, 1.5, 1.5);
  if (nose) followCursor(nose, 1, 1);
};

window.addEventListener("resize", defWindowSize);
window.addEventListener("mousemove", mouseMove);
window.addEventListener("touchmove", touchMove);
