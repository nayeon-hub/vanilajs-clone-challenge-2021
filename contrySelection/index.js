const select = document.querySelector("select");
const key = "country";

function countrySelect() {
  const value = select.options[select.selectedIndex].value;
  //addEventListener가 진행될때마다 select의 option은 한개! 그래서 select에서 value값을 바로 구해도된다.
  localStorage.setItem(key, value);
}

function init() {
  select.addEventListener("change", countrySelect);
}
init();
