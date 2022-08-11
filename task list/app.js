// Define User Interface Cariables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const filter = document.querySelector('#filter');
const clearBtn = document.querySelector('.clear-task');
const taskInput = document.querySelector('#task');


// Load all Event Listeners
loadEventListeners();


// Load Event Listener Function
function loadEventListeners() {

    // Add Event Listener
    form.addEventListener('submit', addTask);

    // Remove Event Listener
    taskList.addEventListener('click', removeTask);

    // Clear Event Listener
    clearBtn.addEventListener('click', clearTasks);

    // Filter Event listener
    filter.addEventListener('keyup', filterTask);
}

// Add Task
function addTask(e) {

    // Conditional Statement to check if the input is Empty
    if(taskInput.value === '') {
        alert('Input a Task');
        li.remove();
    }

    // Create Li Element
    const li = document.createElement('li');

    // Add Class
    li.className = '.collection-item';

    // Create Node and Append Child to li
    li.appendChild(document.createTextNode(taskInput.value));

    // Create link Element (a tag)
    const link = document.createElement('a');

    // Add Class
    link.className = 'delete-item secondary-content';

    // Add HTML icon
    link.innerHTML = '<i class="fa fa-remove"></i>';

    // Append the Link to the li
    li.appendChild(link);

    // Append Li to the Ul
    taskList.appendChild(li);


    // Clear Input
    taskInput.value = '';

    e.preventDefault();
}


// Remove Task
function removeTask(e) {

    if(e.target.parentElement.classList.contains('delete-item')) {
        
        if(confirm('Are you sure')) {
            e.target.parentElement.parentElement.remove();
        }
    }
}

// Clear Task
function clearTasks() {

    // taskList.remove();
    // taskList.innerHTML = '';


    // Faster Way 
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

// Filter Task
function filterTask() {

}