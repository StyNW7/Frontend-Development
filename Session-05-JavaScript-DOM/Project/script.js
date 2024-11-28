// Variables

const addTaskButton = document.getElementById("addTaskButton");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Add Task Button

addTaskButton.addEventListener("click", addTask);


// Task Input event handle

taskInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});

// Function to addTask

function addTask() {

    // Make the task more clear

    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    // Create new List Item
    
    const li = document.createElement("li");
    li.className = "task-item";

    // Create New Paragraph
    
    const p = document.createElement("p");
    p.textContent = taskText;

    // Create New Div
    
    const div = document.createElement("div");

    // Create new Checkbox
    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // When the checkbox is change

    checkbox.addEventListener("change", function() {

        if (this.checked) {
            li.classList.add("completed");
        } 
        
        else {
            li.classList.remove("completed");
        }

    });

    // Create new Delete Button
    
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Hapus";

    deleteButton.addEventListener("click", function() {
        taskList.removeChild(li);
    });

    // We have 1 div then we add the checkbox and deleteButton
    
    div.appendChild(checkbox);
    div.appendChild(deleteButton);
    
    li.appendChild(p);
    li.appendChild(div);
    
    taskList.appendChild(li);
    
    taskInput.value = "";
    
}
