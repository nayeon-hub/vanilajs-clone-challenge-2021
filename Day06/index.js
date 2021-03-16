const select = document.querySelector("select");

function handleChange() {
  const selected = select.value;
  localStorage.setItem("country", selected);
}

function loadCountries() {
  const selected = localStorage.getItem("country");
  if (selected) {
    const option = select.querySelector(`option[value="${selected}"]`);
    //value값과 맞는 option찾기
    option.selected = true;
    //option의 selected 속성에 true를 넣어서 초기에 이 옵션을 선택한 상태로 설정함
  }
}

function init() {
  loadCountries();
  select.addEventListener("change", handleChange);
}

init();
