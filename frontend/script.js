function addTask() {
  const taskInput = document.getElementById("new-task");
  const taskText = taskInput.value;

  if (taskText) {
    const list = document.getElementById("todo-list");
    const listItem = document.createElement("li");

    listItem.textContent = taskText;
    listItem.onclick = () => toggleHighlight(listItem);

    list.appendChild(listItem);
    taskInput.value = ""; // Clear input field
  } else {
    console.log("No task entered!");
  }
}

function toggleHighlight(taskElement) {
  taskElement.classList.toggle("highlight");
}
