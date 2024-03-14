const form = document.querySelector(`form`);
const formInput = document.querySelector(`#input_todo`);
const todoList = document.querySelector(`.list`);
const message = document.querySelector(`.todo_message`);

/**
 * Get todo data from localStorage
 * @returns {Array<string>} An empty Array | anything what does it have
 */
const addTodoLocalStorage = () => {
    return localStorage.getItem(`myTodo`)
        ? JSON.parse(localStorage.getItem(`myTodo`))
        : [];
};

/**
 * It's show message when added or Delete TodoList
 * @param {string} text It's receive text message
 * @param {string} status It calls class
 */
const todoMessage = (text, status) => {
    message.innerHTML = text;
    message.classList.add(`message_${status}`);

    setTimeout(() => {
        message.innerHTML = ``;
        message.classList.remove(`message_${status}`);
    }, 2000);
};

/**
 * Create li list Element , then add id-class and set inner html value ,maintenance Delete button as well
 * @param {string} todoInputValue Todo input value from user
 * @param {number} todoUniqueId This is todo Unique Id
 */
const createTodo = (todoInputValue, todoUniqueId) => {
    /**
     * Create li list Element
     */
    const createTodoList = document.createElement(`li`);
    createTodoList.id = todoUniqueId;
    createTodoList.classList.add(`list_style`);

    createTodoList.innerHTML = `
    <span>${todoInputValue}</span>
    <span> <button class="btn custom" id="delButton"><i class="fa fa-trash"></i></button> </span>
    `;

    todoList.appendChild(createTodoList);

    /**
     * Find delete Button and addEvenListener
     *@type{boolean}
     */
    const deleteButton = createTodoList.querySelector(`#delButton`);

    deleteButton.addEventListener(`click`, deleteList);
};

/**
 * Deleted todo list
 * @param {EventTarget} event
 */

const deleteList = (event) => {
    /**
     * Find parent Element of deleteButton
     */
    const selectList = event.target.parentElement.parentElement.parentElement;

    todoList.removeChild(selectList);
    todoMessage(`List deleted successfully`, `remove`);

    /**
     * Remove deleted Todo id from localStorage. Store again all todo data except deleted todo id
     */
    let store = addTodoLocalStorage();
    store = store.filter((todo) => todo.todoUniqueId !== selectList.id);
    localStorage.setItem(`myTodo`, JSON.stringify(store));
};

/**
 * addEventListener with form to get user input data
 * @param {Event} event
 */
const addForm = (event) => {
    event.preventDefault();
    const todoInputValue = formInput.value;

    /**
     * Generate unique Id with Date.now() Function
     */
    const todoUniqueId = Date.now().toString();

    createTodo(todoInputValue, todoUniqueId);
    todoMessage(`Added successfully`, `added`);

    //* added todo in localStorage
    /**
     * Set Todo Id and Value in localStorage
     * @type{string}
     */
    const store = addTodoLocalStorage();

    store.push({ todoUniqueId, todoInputValue });
    localStorage.setItem(`myTodo`, JSON.stringify(store));
};

/**
 * Loaded todo data from localStorage, After Refresh data will be still available
 */

const loadFromLocalStorage = () => {
    /**
     * Get todo data as Array and then map
     */
    const getTodo = addTodoLocalStorage();

    getTodo.map((todo) => {
        createTodo(todo.todoInputValue, todo.todoUniqueId);
    });
};

form.addEventListener(`submit`, addForm);
window.addEventListener(`DOMContentLoaded`, loadFromLocalStorage);
