const b = document.querySelector("body");
const REGULAR_CLASS = "regular";
const SMALL_CLASS = "small";
const LARGE_CLASS = "large";

function sizeChange() {
  const currentSize = window.innerWidth;
  console.log(currentSize);
  if (currentSize < 700) {
    b.classList.add(SMALL_CLASS);
    b.classList.remove(LARGE_CLASS);
    b.classList.remove(REGULAR_CLASS);
  } else if (currentSize > 1050) {
    b.classList.add(LARGE_CLASS);
    b.classList.remove(REGULAR_CLASS);
    b.classList.remove(SMALL_CLASS);
  } else {
    b.classList.add(REGULAR_CLASS);
    b.classList.remove(LARGE_CLASS);
    b.classList.remove(SMALL_CLASS);
  }
}

function init() {
  window.addEventListener("resize", sizeChange);
}

init();
