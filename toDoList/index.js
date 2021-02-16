const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  pendingList = document.querySelector(".js-pending"),
  finishedList = document.querySelector(".js-finished");
const PENDING_LS = "PENDING";
const FINISHED_LS = "FINISHED";
let pendingToDo = [];
let finishedToDo = [];

function moveToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const ul = li.parentNode;
  if (ul.className === "js-pending") {
    btn.innerText = "⏪";
    pendingList.removeChild(li);
    finishedList.appendChild(li);
    const cleanPending = pendingToDo.filter(function (toDo) {
      return toDo.id !== parseInt(li.id);
    });
    const cleanFinished = pendingToDo.filter(function (toDo) {
      return toDo.id === parseInt(li.id);
    });
    finishedToDo = finishedToDo.concat(cleanFinished);
    pendingToDo = cleanPending;
    saveToDos();
  } else if (ul.className === "js-finished") {
    btn.innerText = "✔";
    finishedList.removeChild(li);
    pendingList.appendChild(li);
    const cleanFinished = finishedToDo.filter(function (toDo) {
      console.log(toDo.id);
      console.log(li.id);
      return toDo.id !== parseInt(li.id);
    });
    const cleanPending = finishedToDo.filter(function (toDo) {
      console.log(toDo.id);
      return toDo.id === parseInt(li.id);
    });
    finishedToDo = cleanFinished;
    pendingToDo = pendingToDo.concat(cleanPending);
    saveToDos();
  }
}

// function MoveToDo(event) {
//   const btn = event.target;
//   const li = btn.parentNode;
//   finishedList.removeChild(li);
//   pendingList.appendChild(li);
//   btn.innerText = "⏪";
// }

// function backToDo(event) {
//   const btn = event.target;
//   const li = btn.parentNode;
//   finishedList.removeChild(li);
//   pendingList.appendChild(li);
//   btn.innerText = "✔";
// }

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const ul = li.parentNode;
  if (ul.className === "js-pending") {
    pendingList.removeChild(li);
    const cleanToDos = pendingToDo.filter(function (toDo) {
      return toDo.id !== parseInt(li.id);
    });
    pendingToDo = cleanToDos;
    saveToDos();
  } else if (ul.className === "js-finished") {
    finishedList.removeChild(li);
    const cleanToDos = finishedToDo.filter(function (toDo) {
      return toDo.id !== parseInt(li.id);
    });
    finishedToDo = cleanToDos;
    saveToDos();
  }
}

function saveToDos() {
  localStorage.setItem(PENDING_LS, JSON.stringify(pendingToDo));
  localStorage.setItem(FINISHED_LS, JSON.stringify(finishedToDo));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const checkBtn = document.createElement("button");
  const backBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = Date.now();
  span.innerText = text;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  checkBtn.innerText = "✔";
  checkBtn.addEventListener("click", moveToDo);
  pendingList.appendChild(li);
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(checkBtn);
  li.id = newId;

  const pendingObj = {
    text: text,
    id: newId,
  };
  pendingToDo.push(pendingObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedPending = localStorage.getItem(PENDING_LS);
  const loadedFinished = localStorage.getItem(FINISHED_LS);
  if (loadedPending !== null || loadedPending !== null) {
    const parsedPending = JSON.parse(loadedPending);
    const parsedFinished = JSON.parse(loadedFinished);
    parsedPending.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  } else {
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
