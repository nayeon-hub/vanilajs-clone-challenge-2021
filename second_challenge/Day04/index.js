const body = document.querySelector("body");
const color = ["#EEBC12", "#904EAD", "#2E8CD5"];

function handleResized() {
  let width = window.innerWidth;
  console.log(width);
  if (width >= 1050) {
    body.style.backgroundColor = color[0];
  } else if (width >= 850) {
    body.style.backgroundColor = color[1];
  } else {
    body.style.backgroundColor = color[2];
  }
}

window.addEventListener("resize", handleResized);
