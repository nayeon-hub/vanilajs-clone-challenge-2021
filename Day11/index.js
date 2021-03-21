const input = document.querySelector("input");
const buttons = document.querySelectorAll("button");
//1~10 -> 7894561230
let a = "";
let b = "";
let c = "";
let r = 0;

function reset(event) {
  const s = event.target.innerText;
  if (s === "C" || input.value == "ERROR") {
    a = "";
    b = "";
    c = "";
    r = "";
    input.value = r;
  } else {
    btnClick(event);
  }
}

function calculate() {
  if (c === "+") {
    r = String(parseInt(a) + parseInt(b));
    a = r;
    b = "";
    c = "";
  } else if (c === "-") {
    r = String(parseInt(a) - parseInt(b));
    a = r;
    b = "";
    c = "";
  } else if (c === "*") {
    r = String(parseInt(a) * parseInt(b));
    a = r;
    b = "";
    c = "";
  } else if (c === "/") {
    r = String(parseInt(a) / parseInt(b));
    a = r;
    b = "";
    c = "";
  }
}

function handleCheck(event) {
  //button확인
  if (event.target.nodeName === "BUTTON") {
    reset(event);
  }
}
function btnClick(event) {
  const s = event.target.innerText;
  if (a !== "") {
    //a 있을때
    if (c !== "" && parseInt(s)) {
      //c가 있을 때 b에 넣어줌
      b = b + s;
      input.value = b;
      calculate(event);
    } else if (c !== "") {
      //c가 있을 때 다른거 넣으면 Error
      input.value = "ERROR";
    } else if (c === "" && parseInt(s)) {
      //c가 없을 때 a에 넣어줌
      a = a + s;
      input.value = a;
    } else if (c === "") {
      //c가 없을 때 사칙연산 넣어줌
      c = s;
    } else if (s === "=") {
      input.value = a;
    }
  } else if (a === "") {
    //a없을 때
    if (parseInt(s)) {
      //숫자입력 그대로 a로 들어감
      a = a + s;
      input.value = a;
    } else {
      //다른 문자 입력하면 error
      input.value = "ERROR";
    }
  }
  console.log(`${a}, ${b}, ${c},${r}`);
}

document.addEventListener("click", handleCheck);
