// Function to fetch todos asynchronously and display them


async function fetchTodos() {

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=10');
    const todos = await response.json();
    displayTodos(todos);
  } 
  
  catch (error) {
    console.error("Failed to fetch todos:", error);
  }

}


// Function to display todos on the page


function displayTodos(todos) {

  const todoList = document.getElementById('todoList');
  todoList.innerHTML = ''; // Clear existing todos

  todos.forEach((todo) => {
    const item = document.createElement('li');
    item.textContent = todo.name;
    todoList.appendChild(item);
  });

  todos.forEach(({ address }) => {
    const item = document.createElement('li');
    item.textContent = address.street;
    todoList.appendChild(item);
  });

}
  

// Function to add a new todo item using POST request


function addTodo() {
  
  const title = document.getElementById('todoInput').value;
  if (!title) return;
  document.getElementById('todoInput').value = ''
  displayNewTodo(title)

  // fetch('https://jsonplaceholder.typicode.com/todos', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({ title, completed: false }),
  // })
  //   .then(response => response.json())
  //   .then(newTodo => {
  //     displayNewTodo(newTodo);
  //     document.getElementById('todoInput').value = ''; // Clear input field
  //   })
  //   .catch(error => console.error("Error adding todo:", error));

}
  

// Function to display the newly added todo immediately on the page


function displayNewTodo(todo) {

  const todoList = document.getElementById('todoList');
  const item = document.createElement('li');
  // item.textContent = todo.title;
  item.textContent = todo;
  todoList.appendChild(item);
  
}


// Add event listener to the "Add Todo" button

document.getElementById('addTodoBtn').addEventListener('click', addTodo);


// Initial fetch to display todos when the page loads

fetchTodos();