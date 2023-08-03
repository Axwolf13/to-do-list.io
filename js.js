// Welcome pop-up
let welcome = prompt("What's your name?", "Akshay");
alert(`Hello, ${welcome}! Let's see your to-do list😇 for today!`);

// Declaring global variable
let taskText;

// Show popup
function showPopup() {
  document.getElementById("popup").style.display = "block";
  document.getElementById("addButton").style.display = "none";
}

// Close popup
function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("addButton").style.display = "block";
}

// Add task popup
function addTask() {
  const taskInput = document.getElementById("taskInput");
  taskText = taskInput.value.trim();

  const todoList = document.getElementById("todoList");
  const li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", function () {
    this.classList.toggle("completed");
  });

  todoList.appendChild(li);
  taskInput.value = "";
  closePopup();
}

function handleButtonClick() {
  if (taskText === "") {
    alert("🔴Please enter a valid task!");
  } else {
    alert("Task added!");
  }
}

function handleEnter(event) {
  if (event.key === "Enter") {
    document.getElementById("addTaskBtn").click();
  }
}
