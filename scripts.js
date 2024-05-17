document.getElementById('add-task-button').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskDate = document.getElementById('task-date');
    const taskPriority = document.getElementById('task-priority');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    taskItem.innerHTML = `
        <span>
            ${taskInput.value} (Due: ${taskDate.value}) - Priority: ${taskPriority.value}
        </span>
        <div class="actions">
            <button class="complete">✔</button>
            <button class="delete">✖</button>
        </div>
    `;

    taskList.appendChild(taskItem);
    
    const completeButton = taskItem.querySelector('.complete');
    const deleteButton = taskItem.querySelector('.delete');

    completeButton.addEventListener('click', () => {
        taskItem.classList.toggle('complete');
    });

    deleteButton.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });

    taskInput.value = '';
    taskDate.value = '';
    taskPriority.value = 'low';
}
