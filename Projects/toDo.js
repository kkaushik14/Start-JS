// Storing all the ID's to do further operation on that i.e. adding EventListner ->
document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("todo-input");
    const addTaskButton = document.getElementById("add-task-btn");
    const todoList = document.getElementById("todo-list");

    let tasks = JSON.parse(localStorage.getItem('task')) || []; // taking items from local storeage and at the time of loading and store in this array || if nothing is there Empty "Array" to store tasks...

    tasks.forEach(task => renderTask(task));

    addTaskButton.addEventListener("click", () => {
        const inputText = todoInput.value.trim();
        // trim() -> removes whitespace from both the end of "string"

        if(inputText === "") return; //if got an empty input than return it as it is...

        // creating container object to make input carry these properties ->
        const newTask = {
            id: Date.now(),
            text: inputText,
            completed: false,
        }
        tasks.push(newTask);
        saveTasks();
        renderTask(newTask); //render again n again
        todoInput.value = ""; //clear input
    });

    function renderTask(task) {
        const li = document.createElement("li");
        li.setAttribute("data-id", task.id);

        if(task.completed) li.classList.add("completed");

        li.innerHTML = `
        <span>${task.text}</span>
        <button>Delete</button>
        `;

        li.addEventListener('click', (e) => {
            if(e.target.tagName === 'BUTTON') return;
            task.completed = !task.completed;
            li.classList.toggle('completed')
            saveTasks();
        });

        todoList.appendChild(li);
    }

    function saveTasks() {
        localStorage.setItem('task', JSON.stringify(tasks))
    }
});