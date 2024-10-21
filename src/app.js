const todoList = []

function addtask() {
    const input = document.getElementById('todo-input')
    const taskText = input.value.trim()
        if(taskText !== "") {
            const newTask = {
                id: Date.now(),
                text: taskText,
                done: false
            };
            todoList.push(newTask)
            renderTasks()
            input.value = ""
        }
};

function toggleTask(id) {
    const task = todoList.find(task => task.id === id)
        if(task) {
            task.done = !task.done
            renderTasks()
        }
}

function deleteTask(id) {
    const taskIndex = todoList.findIndex(task => task.id === id) 
        if (taskIndex > -1) {
            todoList.splice(taskIndex, 1)
            renderTasks()
        }
    }

function renderTasks() {
    const todoListElement = document.getElementById('todo-list')
        todoListElement.innerHTML = ""
        todoList.forEach(task => {
            const li = document.createElement('li')
            li.className = "todo-item"
            li.innerHTML = `<span class="${task.done ? 'done' : ''}" onlick="toggleTask(${task.id})">${task.text}</span>
                            <button onclick=deleteTask(${task.id})">Delete</button>`;
            todoListElement.appendChild(li);
        });
}

if(typeof module !== 'undefined') {
    module.exports= {addTask, toggleTask, deleteTask, todoList };
}

