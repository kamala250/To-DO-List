let todoItems = "";

let inputBox = document.getElementById("input-box");
inputBox.addEventListener("change", setTaskItem);

let task = "";
let taskArray = [];

function setTaskItem(event) {
  task = event.target.value;
}

let addButton = document.getElementById("add-button");
addButton.addEventListener("click", saveTask);

function saveTask(e) {
  if (task == "") {
    alert("Enter your task first");
  } else {
    taskArray.push(task);
    //console.log(taskArray)
    //console.logJSON.stringify(taskArray);
    localStorage.setItem("Tasks", taskArray);
  }
}

function getItems() {
  todoItems = localStorage.getItem("Tasks");
  console.log(todoItems);
}
getItems();

let itemsSpace = document.getElementById("task-items");

// create todo list item
function createItem() {
  // create main item div
  let item = document.createElement("div");
  item.classList.add("item");

  // create child elements
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  let itemText = document.createElement("p");
  itemText.innerHTML = todoItems;

  let progress = document.createElement("div");
  progress.classList.add("progress");

  let icon = document.createElement("i");
  icon.classList.add("fa-solid", "fa-xmark");

  // append children to item parent
  item.appendChild(checkbox);
  item.appendChild(itemText);
  item.appendChild(progress);
  item.appendChild(icon);

  // append children to main parent
  itemsSpace.appendChild(item);
}
createItem();