const slideDiv = document.querySelector(".slider"),
  slideHeader = slideDiv.querySelector("h3"),
  slideSpan = slideHeader.querySelector("span"),
  slideInput = slideDiv.querySelector("input");

const guessForm = document.querySelector("form"),
  guessPara = guessForm.querySelector("p"),
  guessSpan = guessPara.querySelectorAll("span"),
  guessInput = guessForm.querySelector(".input");

function handleChange() {
  const slideValue = slideInput.value;
  slideSpan.innerText = slideValue;
}
function handleSubmit(event) {
  event.preventDefault();
  guessPara.className = "showing";
  const num = guessInput.value;
  guessNumber(num);
}

function guessNumber(n) {
  const answer = Math.floor(Math.random() * 200) + 1;
  const num = parseInt(n);

  guessSpan[0].innerText = num;
  guessSpan[1].innerText = answer;

  if (answer == num) {
    guessSpan[2].innerText = "You won!";
  } else {
    guessSpan[2].innerText = "You lost!";
  }
}

slideInput.addEventListener("mousemove", handleChange);
guessForm.addEventListener("submit", handleSubmit);
