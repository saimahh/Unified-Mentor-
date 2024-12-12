document.getElementById("add-btn").addEventListener("click", function() {
    const todoInput = document.getElementById("todo-input");
    const inputValue = todoInput.value.trim();

    if (inputValue !== "") {
        addTodoItem(inputValue);
        todoInput.value = ""; // clear input field
    }
});

function addTodoItem(task) {
    const todoList = document.getElementById("todo-list");

    const li = document.createElement("li");

    const taskText = document.createElement("span");
    taskText.textContent = task;

    const checkButton = document.createElement("button");
    checkButton.textContent = "✓";
    checkButton.classList.add("check-btn");
    checkButton.addEventListener("click", function() {
        li.classList.toggle("done");
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click", function() {
        todoList.removeChild(li);
    });

    li.appendChild(taskText);
    li.appendChild(checkButton);
    li.appendChild(deleteButton);

    todoList.appendChild(li);
}

document.getElementById("todo-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("add-btn").click();
    }
});
