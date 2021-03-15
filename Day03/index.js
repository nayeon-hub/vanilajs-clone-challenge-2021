const h2 = document.querySelector("h2");
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const superEventHandler = {
  first: function mouseOver() {
    h2.innerHTML = "The mouse is here!";
    h2.style.color = colors[0];
  },
  second: function mouseLeave() {
    h2.innerHTML = "The mouse is gone!";
    h2.style.color = colors[1];
  },
  third: function handleResized() {
    h2.innerHTML = "You just resized!";
    h2.style.color = colors[2];
  },
  fourth: function rightClick() {
    h2.innerHTML = "That was a right click!";
    h2.style.color = colors[3];
  },
};

h2.addEventListener("mouseover", superEventHandler["first"]);
h2.addEventListener("mouseleave", superEventHandler["second"]);
window.addEventListener("resize", superEventHandler["third"]);
window.addEventListener("contextmenu", superEventHandler["fourth"]);
