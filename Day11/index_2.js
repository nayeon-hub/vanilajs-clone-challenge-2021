const input = document.querySelector("input");

let a = "";
let c = "";
let r = [];

function reset() {
  a = "";
  c = "";
  r = [];
}

function errorPrint() {
  input.value = "ERROR";
  console.log(`a:${a},c:${c}, r:${r}`);
  reset();
}

function stringCheck() {
  if (r[1] === "-") {
    r = [parseInt(r[0]) - parseInt(r[2]), r[3]];
    input.value = r[0];
  } else if (r[1] === "*") {
    r = [parseInt(r[0]) * parseInt(r[2]), r[3]];
    input.value = r[0];
  } else if (r[1] === "+") {
    r = [parseInt(r[0]) + parseInt(r[2]), r[3]];
    input.value = r[0];
  } else if (r[1] === "/") {
    r = [parseInt(r[0]) / parseInt(r[2]), r[3]];
    input.value = r[0];
  }
}

function calculate() {
  const n_one = Number(r[0]).toFixed(4);
  const n_two = Number(a).toFixed(4);
  if (r[1] === "-") {
    r = [n_one - n_two];
    input.value = r[0].toFixed(4);
  } else if (r[1] === "*") {
    r = [n_one * n_two];
    input.value = r[0].toFixed(4);
  } else if (r[1] === "+") {
    r = [n_one + n_two];
    input.value = r[0].toFixed(4);
  } else if (r[1] === "/") {
    r = [n_one / n_two];
    input.value = r[0].toFixed(4);
  }
}

function lengthCheck() {
  if (r.length === 4) {
    stringCheck();
  }
}
function result() {
  calculate();
}
function moveString(event) {
  r.push(a);
  r.push(c);
  a = "";
  lengthCheck();
}

function numClick(s) {
  if (r.length === 1) {
    r = [];
    a = a + s;
    input.value = a;
  } else {
    a = a + s;
    input.value = a;
  }
}

function handleClick(event) {
  const s = event.target.innerText;
  if (parseInt(s)) {
    //   s가 숫자라면
    numClick(s);
  } else if (s === "+" || s === "*" || s === "/") {
    //s가 문자라면
    if (a === "") {
      //a가 없을 때
      if (r.length !== 1) {
        errorPrint();
      } else {
        c = s;
        r.push(c);
        c = "";
      }
    } else {
      //a가 있을 때
      c = s;
      moveString();
      c = "";
    }
  } else if (s === "-") {
    //s가 문자라면
    if (a === "") {
      //a가 없을 때
      if (r.length !== 1) {
        a = a + s;
      } else {
        c = s;
        r.push(c);
        c = "";
      }
    } else {
      //a가 있을 때
      c = s;
      moveString();
      c = "";
    }
  } else {
    if (c !== "") {
      errorPrint();
    } else {
      calculate();
      a = "";
      c = "";
    }
  }
}

function handleCheck(event) {
  const target = event.target.nodeName;
  if (target == "BUTTON") {
    if (event.target.innerText === "C") {
      reset();
      input.value = "RESET";
      console.log(`a:${a},c:${c}, r:${r}`);
    } else {
      handleClick(event);
      console.log(`a:${a},c:${c}, r:${r}`);
    }
  }
}

document.addEventListener("click", handleCheck);
