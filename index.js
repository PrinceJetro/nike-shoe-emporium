// On app load, get all tasks from localStorage
window.onload = loadTasks;

// On form submit add task
document.querySelector("form").addEventListener("submit", e => {
  addTask();
});



function addTask() {
  const task = document.querySelector("form input");
  const list = document.querySelector("ul");
  // return if task is empty
  if (task.value === "") {
    alert("Please add some task!");
    return false;
  }
  // check is task already exist
  if (document.querySelector(`input[value="${task.value}"]`)) {
    alert("Task already exist!");
    return false;
  }

  // add task to local storage
  // Step 1: Retrieve the existing task list from local storage or initialize it as an empty array
const existingTasksJson = localStorage.getItem("tasks") || "[]";
const existingTasks = JSON.parse(existingTasksJson);

// Step 2: Create a new task object from an input field (task.value) with a default "completed" value of false
const newTask = { task: task.value, completed: false };

// Step 3: Combine the existing task list with the new task
const updatedTasks = [...existingTasks, newTask];

// Step 4: Convert the updated task list back to a JSON string
const updatedTasksJson = JSON.stringify(updatedTasks);

// Step 5: Store the updated task list in local storage under the key "tasks"
localStorage.setItem("tasks", updatedTasksJson);
  task.value = "";
}








function loadTasks() {
    // check if localStorage has any tasks
    // if not then return
    if (localStorage.getItem("tasks") == null) return;
  
    // Get the tasks from localStorage and convert it to an array
    // Step 1: Retrieve the JSON string from local storage associated with the "tasks" key
    const tasksJson = localStorage.getItem("tasks");

    // Step 2: Parse the JSON string into a JavaScript object
    const tasksObject = JSON.parse(tasksJson);

    // Step 3: Create a new array from the JavaScript object
    const tasks = Array.from(tasksObject);
  
    // Loop through the tasks and add them to the list
    tasks.forEach(task => {
      const list = document.querySelector("ul");
      const li = document.createElement("li");
      li.innerHTML = `<input type="checkbox" onclick="taskComplete(this)" class="check" ${task.completed ? "checked" : ""}>
            <input type="text" value="${task.task}" class="task ${task.completed ? "completed" : ""}" onfocus="getCurrentTask(this)" onblur="editTask(this)">
            <i class="fa fa-trash" onclick="removeTask(this)"></i>`;
      list.insertBefore(li, list.children[0]);
    });
  }


//   <div key={index} className='row'>
//   <div className='col-2'>
//     <input
//       type='checkbox'
//       ref={(el) => (checkboxRefs.current[index] = el)}
//       onChange={() => handleCheckboxChange(index)}
//       className='checkbox'
//     />
//   </div>
//   <div className='col-10'>
//     <h6>{item.value}</h6>
//   </div>
//   <div className='col-12'>
//     <hr />
//   </div>
// </div>




function taskComplete(event) {
  let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
  tasks.forEach(task => {
    if (task.task === event.nextElementSibling.value) {
      task.completed = !task.completed;
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  event.nextElementSibling.classList.toggle("completed");
}

function removeTask(event) {
  let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
  tasks.forEach(task => {
    if (task.task === event.parentNode.children[1].value) {
      // delete task
      tasks.splice(tasks.indexOf(task), 1);
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  event.parentElement.remove();
}

// store current task to track changes
var currentTask = null;

// get current task
function getCurrentTask(event) {
  currentTask = event.value;
}

// edit the task and update local storage
function editTask(event) {
  let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
  // check if task is empty
  if (event.value === "") {
    alert("Task is empty!");
    event.value = currentTask;
    return;
  }
  // task already exist
  tasks.forEach(task => {
    if (task.task === event.value) {
      alert("Task already exist!");
      event.value = currentTask;
      return;
    }
  });
  // update task
  tasks.forEach(task => {
    if (task.task === currentTask) {
      task.task = event.value;
    }
  });
  // update local storage
  localStorage.setItem("tasks", JSON.stringify(tasks));
}