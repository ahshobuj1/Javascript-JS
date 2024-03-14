const container = document.querySelector(`.container`);
const form = document.querySelector(`form`);
const formInput = document.querySelector(`#input_todo`);
const todoButton = document.querySelector(`.btn`);
const todoList = document.querySelector(`.list`);
const message = document.querySelector(`.todo_message`);

//*! add todo in localStorage
const addTodoLocalStorage = () => {
    return localStorage.getItem(`myTodo`)
        ? JSON.parse(localStorage.getItem(`myTodo`))
        : [];
};

//*! todo message
const todoMessage = (text, status) => {
    message.innerHTML = text;
    message.classList.add(`message_${status}`);

    setTimeout(() => {
        message.innerHTML = ``;
        message.classList.remove(`message_${status}`);
    }, 2000);
};

//*! create todo list
const createTodo = (todoInputValue, todoUniqueId) => {
    //* Create li list element
    const createTodoList = document.createElement(`li`);
    createTodoList.id = todoUniqueId;
    createTodoList.classList.add(`list_style`);

    createTodoList.innerHTML = `
    <span>${todoInputValue}</span>
    <span> <button class="btn custom" id="delButton"><i class="fa fa-trash"></i></button> </span>
    `;

    todoList.appendChild(createTodoList);

    //* delete button
    const deleteButton = createTodoList.querySelector(`#delButton`);

    deleteButton.addEventListener(`click`, deleteList);
};

//*! delete todo list

const deleteList = (event) => {
    const selectList = event.target.parentElement.parentElement.parentElement;

    todoList.removeChild(selectList);
    todoMessage(`List deleted successfully`, `remove`);

    //* delete todo from localStorage
    let store = addTodoLocalStorage();
    store = store.filter((todo) => todo.todoUniqueId !== selectList.id);
    localStorage.setItem(`myTodo`, JSON.stringify(store));
};

//*! add event listener
const addForm = (event) => {
    event.preventDefault();
    const todoInputValue = formInput.value;

    //* Create Unique id
    const todoUniqueId = Date.now().toString();

    createTodo(todoInputValue, todoUniqueId);
    todoMessage(`Added successfully`, `added`);

    //* added todo in localStorage
    const store = addTodoLocalStorage();

    store.push({ todoUniqueId, todoInputValue });
    localStorage.setItem(`myTodo`, JSON.stringify(store));
};

//* todo loaded from localStorage

const loadFromLocalStorage = () => {
    const getTodo = addTodoLocalStorage();

    getTodo.map((todo) => {
        createTodo(todo.todoInputValue, todo.todoUniqueId);
    });
};

form.addEventListener(`submit`, addForm);
window.addEventListener(`DOMContentLoaded`, loadFromLocalStorage);
