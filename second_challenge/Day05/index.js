const h2 = document.querySelector("h2");

const CHRISTMAS = "-12-25:00:00:00";

function paint() {
  h2.innerText = "🎇Merry Christmas!🎄 Nayeon🥰";
}

function getTime() {
  const xmasDay = new Date(`${new Date().getFullYear()}${CHRISTMAS}+0900`);
  const today = new Date();

  const xmas = Date.parse(xmasDay);
  const t = Date.parse(today);
  const difference = xmas - t;

  const s = difference / 1000;
  const seconds = s % 60;
  const m = parseInt(s / 60);
  const minutes = parseInt(m % 60);
  const h = parseInt(m / 60);
  const hours = parseInt(h % 24);
  const days = parseInt(h / 24);

  h2.innerText = `${days}d ${hours < 10 ? `0${hours}` : hours}h ${
    minutes < 10 ? `0${minutes}` : minutes
  }m ${seconds < 10 ? `0${seconds}` : seconds}s`;

  if (s <= 0) {
    paint();
  }
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();

// const clockTitle = document.querySelector("h2");

// function getTime() {
//   const xmasDay = new Date(`${new Date().getFullYear()}-12-24:00:00:00+0900`);
//   const now = new Date();
//   // This is in milisecondsx
//   const difference = new Date(xmasDay - now);
//   const secondsInMs = Math.floor(difference / 1000);
//   //   console.log(secondsInMs);
//   const minutesInMs = Math.floor(secondsInMs / 60);
//   const hoursInMs = Math.floor(minutesInMs / 60);
//   const days = Math.floor(hoursInMs / 24);
//   const seconds = secondsInMs % 60;
//   const minutes = minutesInMs % 60;
//   const hours = hoursInMs % 24;
//   const daysStr = `${days < 10 ? `0${days}` : days}d`;
//   const hoursStr = `${hours < 10 ? `0${hours}` : hours}h`;
//   const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}m `;
//   const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}s`;
//   clockTitle.innerHTML = `${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`;
// }

// function init() {
//   getTime();
//   setInterval(getTime, 1000);
// }
// init();
