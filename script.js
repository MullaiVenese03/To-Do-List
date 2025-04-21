// To- Do List App Program

// Getting all the Elements to JS
const enterTasks = document.getElementById("enterTasks");
const tasks = document.getElementById("tasks");
const addBtn = document.getElementById("addBtn");
const tasklist = document.getElementById("tasklist");
const clearBtn = document.getElementById("clearBtn");

// Task will be list by Hitting Enter Key in the KeyBoard
enterTasks.addEventListener("keydown", () => {
  if (event.key === "Enter") {
    addTask();
  }
});

//Task will be list by Hitting Button ☑️
addBtn.addEventListener("click", addTask);

// CRED { Create, Read, Edit, Delete } Operations of To-Do List App 
function addTask() {
  let allTasks = [];        // All the Tasks will be Stored in this Array
  const taskLength = allTasks.length - 1;       // To get Task from the Array

  // The input of the Task must be > 0
  if (enterTasks.value.length > 0) {
    const task = document.createElement("li");
    allTasks.push(enterTasks.value);

    // To get the Task from the Array for the Initial Task only Because of declaring length Initially
    if (allTasks.length === 1) {
      task.textContent = allTasks[taskLength + 1];
    } 
    else {
      task.textContent = allTasks[taskLength];
    }

    tasks.appendChild(task);        // Push the Input Task from Array to DOM list
    enterTasks.value = "";

    // The Task will be Deleted After the Task is Clicked before that Alert will be Shown 
    task.addEventListener("click", () => {
      task.style.textDecoration = "line-through 3px white";
      alert(` "${task.textContent}" task is Completed ✅`);
      setTimeout(() => {
        task.remove();
      }, 500);
    });
  } 
  else {
    alert("Please Enter the task");     // If the Input of Task is non this Alert will b Remain to Enter the Task.
  }
}	

//All Task from the Array will be Cleared by Hitting Button ❌
clearBtn.addEventListener("click", () => {
  tasks.innerHTML = "";
  enterTasks.value = "";
});