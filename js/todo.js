const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = todoForm.querySelector("input");

let todos = [];

const TODOS_KEY = "todos";

function saveTodos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(todos));
}

function deleteTodo(event){
   const li =  event.target.parentElement;
   li.remove();
   todos = todos.filter(toDo => toDo.id !== parseInt(li.id));
   saveTodos();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText= newTodo.text;
    button.innerText = "❌";
    button.addEventListener("click",deleteTodo)
    li.appendChild(span);               // li 안에 span을 생성한다.
    li.appendChild(button); 
    todoList.appendChild(li);
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";

    const newTodoObj ={
        text: newTodo,
        id: Date.now(),
    };

    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}



todoForm.addEventListener("submit",handleTodoSubmit);          // submit 이벤트를 듣고 있다. 

const savedTodos = localStorage.getItem(TODOS_KEY);         // "localstorage의 todos key로 값을 가져온다. "


if(savedTodos !== null){
    const parsedTodo  = JSON.parse(savedTodos);         // string으로 되어있는 것을 JS object로 바꿔준다. 
    todos = parsedTodo;
    parsedTodo.forEach(paintTodo);               // array의 각각의 값마다 함수를 실행한다. 
}