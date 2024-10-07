const addTaskButton = document.getElementById("addTaskButton");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;
    
    const li = document.createElement("li");
    li.className = "task-item";
    
    const p = document.createElement("p");
    p.textContent = taskText;
    
    const div = document.createElement("div");
    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function() {
        if (this.checked) {
            li.classList.add("completed");
        } else {
            li.classList.remove("completed");
        }
    });
    
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Hapus";
    deleteButton.addEventListener("click", function() {
        taskList.removeChild(li);
    });
    
    div.appendChild(checkbox);
    div.appendChild(deleteButton);
    
    li.appendChild(p);
    li.appendChild(div);
    
    taskList.appendChild(li);
    
    taskInput.value = "";
}
