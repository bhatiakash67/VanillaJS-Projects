import { EditIcon, DeleteIcon } from "../assets/media"
export function toDoList() {

    document.getElementById('mainContent').innerHTML = `
    <main id="todoWrapper">
        <section id="todoBody">
            <form id="todoForm">
                <input type="text" id="todoInput" placeholder="Add a new task here">
                <button id="todoAddBtn">Add Task</button>
            </form>
            <ul id="todoList"></ul>
        </section>
    </main>
    `
    const tasks = JSON.parse(localStorage.getItem("tasks")) || []
    const addTaskBtn = document.getElementById('todoAddBtn')
    const ul = document.getElementById('todoList')

    function addTask(inputValue) {
        // UI for created task
        const taskItem = document.createElement('li')
        taskItem.innerHTML = `
    <label>
    <input type="checkbox" class="checkTest" />
    <span class="taskSpan">${inputValue}</span>
    </label>
    <section id="changeImgsContainer">
    <img class="changeImgs" id="editBtn" src=${EditIcon} alt="edit" />
    <img class="changeImgs" id="deleteBtn" src=${DeleteIcon} alt="delete" />
    </section>`
        ul.appendChild(taskItem)
        // to add new task at the top
        // ul.insertBefore(taskItem, ul.children[0]) 

        const editBtn = taskItem.querySelector('#editBtn')
        const deleteBtn = taskItem.querySelector('#deleteBtn')

        // edit tasks
        editBtn.addEventListener('click', () => {
            const taskText = taskItem.querySelector('span')
            const newTask = document.createElement('input')
            newTask.type = 'text'
            newTask.setAttribute('class', 'taskSpan')
            newTask.value = taskText.textContent
            taskItem.querySelector('label').replaceChild(newTask, taskText)
            newTask.focus()

            // save edited task
            newTask.addEventListener("blur", () => {
                const updatedTaskText = newTask.value.trim()
                if (updatedTaskText) {
                    const updatedTaskSpan = document.createElement('span')
                    updatedTaskSpan.setAttribute('class', 'taskSpan')
                    updatedTaskSpan.textContent = updatedTaskText
                    taskItem.querySelector('label').replaceChild(updatedTaskSpan, newTask)
                    // update  task in the tasks array
                    const taskIndex = tasks.indexOf(taskText.textContent)
                    if (taskIndex !== -1) tasks[taskIndex] = updatedTaskText
                    localStorage.setItem('tasks', JSON.stringify(tasks))
                } else {
                    alert('Task cannot be empty.')
                }
            })
            // save edited task on enter
            newTask.addEventListener('keypress', e => {
                if (e.key === 'Enter') newTask.blur()
            })
        })

        // delete task functionality
        deleteBtn.addEventListener('click', () => {
            const taskText = taskItem.querySelector('span').textContent
            const taskIndex = tasks.indexOf(taskText)
            // update the tasks array
            if (taskIndex !== -1) tasks.splice(taskIndex, 1)
            // update the tasks UI
            taskItem.remove()
            localStorage.setItem('tasks', JSON.stringify(tasks))
        })

        // toggle task functionality
        const checkBox = taskItem.querySelector('.checkTest')
        checkBox.addEventListener('change', () => {
            const taskText = taskItem.querySelector('span')
            if (checkBox.checked) {
                taskText.classList.add('crossed')
            } else {
                taskText.classList.remove('crossed')
            }
        })
    }

    // add task
    addTaskBtn.addEventListener("click", (e) => {
        e.preventDefault()
        const inputVal = document.getElementById('todoInput').value.trim()
        if (!inputVal) alert("Gotta add a task first.")
        else {
            addTask(inputVal)
            // add task to the array
            tasks.push(inputVal)
            localStorage.setItem('tasks', JSON.stringify(tasks))
            // empty the input field 
            document.getElementById('todoInput').value = ''
        }
    })
    // display the tasks after reload
    window.addEventListener("DOMContentLoaded", () => {
        tasks.forEach(task => addTask(task))
    })
}