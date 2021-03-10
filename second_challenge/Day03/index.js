const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
const superEventHandler = {
  first: mouseOver,
  second: mouseLeave,
  third: handleResized,
  fourth: rightClick,
};
const h2 = document.querySelector("h2");

function mouseOver() {
  h2.innerHTML = "The mouse is here!";
  h2.style.color = colors[0];
}

function mouseLeave() {
  h2.innerHTML = "The mouse is gone!";
  h2.style.color = colors[1];
}

function handleResized() {
  h2.innerHTML = "You just resized!";
  h2.style.color = colors[2];
}

function rightClick() {
  h2.innerHTML = "That was a right click!";
  h2.style.color = colors[3];
}

h2.addEventListener("mouseover", superEventHandler["first"]);
h2.addEventListener("mouseleave", superEventHandler["second"]);
window.addEventListener("resize", superEventHandler["third"]);
window.addEventListener("contextmenu", superEventHandler["fourth"]);
