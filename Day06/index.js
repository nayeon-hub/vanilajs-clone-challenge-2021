const select = document.querySelector("select");
const options = select.querySelectorAll("option");

const KEY = "contry";

function test() {
  const value = select.value;
  localStorage.setItem(KEY, value);
}

function init() {
  select.addEventListener("change", test);
}

init();
