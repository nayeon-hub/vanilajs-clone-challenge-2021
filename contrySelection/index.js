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

// function handleChange() {
//   const selected = select.value;
// option이 선택되었을 때의 value
//   localStorage.setItem("country", selected);
// }

// function loadCountries() {
//   const selected = localStorage.getItem("country");
//   if (selected) {
//     const option = document.querySelector(`option[value="${selected}"]`);
// option[value="selected"]를 표현
//     option.selected = true;
//   }
// }

// loadCountries();
// select.addEventListener("change", handleChange);
