const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const clearBtn = document.getElementById("clearBtn");

function updateCount() {
  taskCount.textContent = `You have ${taskList.children.length} pending tasks`;
}

addBtn.onclick = () => {
  if (taskInput.value.trim() === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskInput.value}</span>
    <button>🗑</button>
  `;

  li.querySelector("button").onclick = () => {
    li.remove();
    updateCount();
  };

  taskList.appendChild(li);
  taskInput.value = "";
  updateCount();
};

clearBtn.onclick = () => {
  taskList.innerHTML = "";
  updateCount();
};
