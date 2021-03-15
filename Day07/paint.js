const taskForm = document.querySelector(".js-form"),
  taskInput = taskForm.querySelector("input");
const pendingList = document.querySelector(".pending-ul");
const finishedList = document.querySelector(".finished-ul");

const task = [];

function paintTask(event) {
  event.preventDefault();
  pending();
  task.push({
    text: taskInput.value,
    id: task.length + 1,
  });
  localStorage.setItem("PENDING", JSON.stringify(task));
  taskInput.value = "";
}

function pending() {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const btnRemove = document.createElement("button");
  const btnFinish = document.createElement("button");

  pendingList.appendChild(li);
  li.appendChild(span);
  li.appendChild(btnRemove);
  li.appendChild(btnFinish);
  span.innerText = taskInput.value;
  btnRemove.innerText = "❌";
  btnFinish.innerText = "✅";

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

function init() {
  taskForm.addEventListener("submit", paintTask);
}

init();
