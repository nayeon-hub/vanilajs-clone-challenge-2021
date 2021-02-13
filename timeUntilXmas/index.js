const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h2");

function getTime() {
  const nowDate = new Date();
  //date 객체는 밀리초로 나타냄
  const xmasDate = new Date("2021-12-24:00:00:00+0900");
  const calDate = xmasDate - nowDate;
  const date = Math.floor(calDate / (1000 * 60 * 60 * 24));
  //1000 = 1초
  const hours = Math.floor(
    (calDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((calDate % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((calDate % (1000 * 60)) / 1000);

  clockTitle.innerText = `${date < 10 ? `0${date}` : date}d ${
    hours < 10 ? `0${hours}` : hours
  }h ${minutes < 10 ? `0${minutes}` : minutes}m ${
    seconds < 10 ? `0${seconds}` : seconds
  }s`;
  console.log(calDate);
}
function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
