const taskForm = document.querySelector(".js-form"),
  taskInput = taskForm.querySelector("input");
const pendingList = document.querySelector(".pending-ul");
const finishedList = document.querySelector(".finished-ul");

const p = [];
const f = [];

function pSave(text) {
  localStorage.setItem("PENDING", JSON.stringify(p));
}
function fSave(text) {
  localStorage.setItem("FINISHED", JSON.stringify(f));
}

function paintTask(text, ul) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const btnRemove = document.createElement("button");
  const btnFinish = document.createElement("button");
  if (ul.className === "pending-ul") {
    ul.appendChild(li);
    li.appendChild(span);
    li.appendChild(btnRemove);
    li.appendChild(btnFinish);

    span.innerText = text;
    btnRemove.innerText = "❌";
    btnFinish.innerText = "✅";
    const pObj = {
      id: p.length + 1,
      text: text,
    };
    p.push(pObj);
    pSave(p);
  } else if (ul.className === "finished-ul") {
    ul.appendChild(li);
    li.appendChild(span);
    li.appendChild(btnRemove);
    li.appendChild(btnFinish);

    span.innerText = text;
    btnRemove.innerText = "❌";
    btnFinish.innerText = "⏪";
    const fObj = {
      id: f.length + 1,
      text: text,
    };
    f.push(fObj);
    fSave(f);
  }
  btnRemove.addEventListener("click", remove);
  btnFinish.addEventListener("click", move);
}

function move(event) {
  const li = event.target.parentNode;
  const ul = li.parentNode;
  const span = li.querySelector("span");
  const btn = li.querySelectorAll("button");

  if (ul.className === "pending-ul") {
    finishedList.appendChild(li);
    btn[1].innerText = "⏪";
  } else if (ul.className === "finished-ul") {
    pendingList.appendChild(li);
    btn[1].innerText = "✅";
  }
}

function remove(event) {
  const li = event.target.parentNode;
  const ul = li.parentNode;
  ul.removeChild(li);
}

function loadedTask() {
  const loadedPending = localStorage.getItem("PENDING");
  const loadedFinished = localStorage.getItem("FINISHED");
  if (loadedPending !== null) {
    const parsedPending = JSON.parse(loadedPending);
    parsedPending.forEach(function (pending) {
      paintTask(pending.text, pendingList);
    });
  } else if (loadedFinished !== null) {
    const parsedFinished = JSON.parse(loadedFinished);
    parsedFinished.forEach(function (finished) {
      paintTask(finished.text, finishedList);
    });
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = taskInput.value;
  paintTask(currentValue, pendingList);
  taskInput.value = "";
}

function init() {
  loadedTask();
  taskForm.addEventListener("submit", handleSubmit);
}

init();
