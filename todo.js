const todoForm = document.querySelector('.todoForm'),
    todoInput = document.querySelector('.todoInput'),
    todoList = document.querySelector('.todoList');

let todos=[];

function clickHandler(event){
    event.preventDefault();
    const ET=event.target;
    if(ET.classList.contains('delB')){
        const todoIndex=ET.parentElement.id;
        todoList.removeChild(ET.parentElement);
        todos.splice(todoIndex,1);

        const todoLi = document.querySelectorAll('.todoList li');
        for(let i=0; i<todos.length;i++){
            todoLi[i].id=i;
        }
        saveLS(todos);
    }
}
function saveLS(todos){
    localStorage.setItem('todos',JSON.stringify(todos));
}
function createList(userTodoInput){
    const todoLi = document.createElement('li');
    const delButton = document.createElement('button');
    const span = document.createElement('span');

    span.innerText = userTodoInput;
    delButton.innerText='❌';
    delButton.classList.add('delB')
    todoLi.appendChild(delButton);
    todoLi.appendChild(span);
    todoList.appendChild(todoLi);
    todoLi.addEventListener('click',clickHandler)
    todos.push(userTodoInput);
    todoLi.id=todos.indexOf(userTodoInput);
    saveLS(todos);
}
function submitHandler(event){
    event.preventDefault();
    const userTodoInput = todoInput.value;
    todoInput.value="";
    createList(userTodoInput);
}
function init(){
    const todos_LS = localStorage.getItem('todos');
    todoForm.addEventListener('submit',submitHandler);
    if(todos_LS){
        JSON.parse(todos_LS).forEach((todo)=>createList(todo))
    }
}

init();