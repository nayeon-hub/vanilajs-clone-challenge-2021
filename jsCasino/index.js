const stickForm = document.querySelector(".js-stick"),
  stickInput = stickForm.querySelector("input"),
  stickTitle = document.querySelector(".numberStick");

const numForm = document.querySelector(".randomNumber"),
  numInput = numForm.querySelector("input");
const IMG_NUMBER = 100;

function paintStick() {
  const stickValue = stickInput.value;
  stickTitle.textContent = `Generate a number between 0 and ${stickValue}`;
}

function numRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function numPaint(text) {
  const num = numRandom();
  const numWrite = document.querySelector("p");
  const numResult = document.querySelector("h4");
  numWrite.innerText = `You Chose: ${text}, the machine choose: ${num + 1}`;
  if (num !== text) {
    numResult.innerText = "You lost 😥";
  } else {
    numResult.innerText = "You won 😎";
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const currentNum = numInput.value;
  numPaint(currentNum);
}

function init() {
  stickInput.addEventListener("mousemove", paintStick);
  numForm.addEventListener("submit", handleSubmit);
}

init();
