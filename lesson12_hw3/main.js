const todoInput = document.querySelector('#textInput');
const addTodoBtn = document.querySelector('#btn-add');
const todoList = document.querySelector('#todoList');

let userInput = "";

todoInput.addEventListener('input', (e) => {
    userInput = e.target.value;
});

addTodoBtn.addEventListener('click', (e) => {
    if (userInput.trim() !== "") {
        const newTodo = document.createElement("li");
        newTodo.textContent = userInput;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn")

        newTodo.appendChild(deleteBtn);
        todoList.appendChild(newTodo);

        todoInput.value = '';
        userInput = '';
    }
});

todoList.addEventListener("click", (e) => {
    if (e.target.classList.contains('delete-btn')) {
        e.target.parentElement.remove();
    }
});