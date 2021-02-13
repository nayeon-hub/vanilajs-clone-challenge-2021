const select = document.querySelector("select");
const key = "country";

function countrySelect() {
  const value = select.options[select.selectedIndex].value;
  localStorage.setItem(key, value);
}

function init() {
  select.addEventListener("click", countrySelect);
}
init();
