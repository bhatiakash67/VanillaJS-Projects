export function toDoList() {
    document.getElementById('mainContent').innerHTML = `
    <main id="todoWrapper">
        <h1 id="todoHeader">TO DO LIST</h1>
        <section id="todoBody">
            <form id="todoForm">
                <input type="text" id="todoInput" placeholder="Add a new task here">
                <button id="todoAddBtn">Add Task</button>
            </form>
            <ul id="todoList"></ul>
        </section>
    </main>
    `
    const addTaskBtn = document.getElementById('todoAddBtn')
    const ul = document.getElementById('todoList')

    function addTask(inputValue) {
        // UI for created task
        const taskItem = document.createElement('li')
        taskItem.innerHTML = `
    <label>
    <input type="checkbox" class="checkTest" />
    <span>${inputValue}</span>
    </label>
    <section id="changeImgsContainer">
    <img class="changeImgs" id="editBtn" src="../assets/edit.png" alt="edit button" />
    <img class="changeImgs" id="deleteBtn" src="../assets/delete.png" alt="delete button" />
    </section>`
        ul.appendChild(taskItem)
        const editBtn = taskItem.querySelector('#editBtn')
        const deleteBtn = taskItem.querySelector('#deleteBtn')

        // edit tasks
        editBtn.addEventListener('click', () => {
            const taskText = taskItem.querySelector('span')
            const newTask = document.createElement('input')
            newTask.type = 'text'
            newTask.value = taskText.textContent
            taskItem.querySelector('label').replaceChild(newTask, taskText)
            newTask.focus()

            // save edited task
            newTask.addEventListener("blur", () => {
                const updatedTaskText = newTask.value.trim()
                if (updatedTaskText) {
                    const updatedTaskSpan = document.createElement('span')
                    updatedTaskSpan.textContent = updatedTaskText
                    taskItem.querySelector('label').replaceChild(updatedTaskSpan, newTask)
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
            taskItem.remove()
        })
        // check task functionality
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
            document.getElementById('todoInput').value = ''
        }
    })
}