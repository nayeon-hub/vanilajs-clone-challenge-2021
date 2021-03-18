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
  const num = guessInput.value;
  //input은 무조건 문자열을 받음 , 아무것도 없는 경우 ""
  if (num === "") {
    //무조건 입력은 들어감!
    return;
  } else {
    guessPara.className = "showing";
    guessNumber(num);
  }
}

function guessNumber(n) {
  const max = range.value;
  const min = parseInt(slideInput.min);
  const answer = Math.floor(Math.random() * (max - min)) + min; //Math.ceil 반올림함수, Math.floor은 소수점 버림
  //최소값, 최대값 지정
  const num = parseInt(n, 10);
  console.log(num);
  guessSpan[0].innerText = num;
  guessSpan[1].innerText = answer;

  // if (answer == num) {
  //   guessSpan[2].innerText = "You won!";
  // } else {
  //   guessSpan[2].innerText = "You lost!";
  // }
  //mini if가 훨씬 코드를 간결하게 해줌
  guessSpan[2].innerText = `${answer === num ? "You won!" : "You lost!"}`;
  //innerText는 text를 추가함. innerHTML은 html자체를 추가함. innerHTML을 사용해보기!

  //answer
  // resultSpan.innerHTML = `
  // You chose: ${userGuess},
  // the machine chose: ${random}.<br />
  // <strong>${userGuess === random ? "You won!" : "You lost!"}</strong>
  // `;
}

slideInput.addEventListener("input", handleChange); //input! not mousemove
guessForm.addEventListener("submit", handleSubmit);
