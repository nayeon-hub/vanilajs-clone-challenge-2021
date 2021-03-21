const input = document.querySelector("input");
const buttons = document.querySelectorAll("button");
//1~10 -> 7894561230
let a = "";
let b = "";
let c = "";
let r = "";

function checkReset(event) {
  const s = event.target.innerText;
  if (s === "C" || input.value == "ERROR") {
    reset();
  }
}
function reset() {
  a = "";
  b = "";
  c = "";
  r = "";
}

function clickNum(event) {
  const s = event.target.innerText;
  if (r === "") {
    a = a + s;
    input.value = a;
  } else {
    b = b + s;
    input.value = b;
  }
  console.log(`${a},${b},${c}`);
}

function handleCheck(event) {
  //button확인
  if (event.target.nodeName === "BUTTON") {
    checkReset(event);
  }
}

function init() {
  document.addEventListener("click", handleCheck);
}

init();
