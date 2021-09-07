const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = todoForm.querySelector("input");

// 할일이 들어갈 todos 배열
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
    const li = document.createElement("li");            // li 생성
    li.id = newTodo.id;
    const span = document.createElement("span");           //span 생성
    const button = document.createElement("button");       // button 생성
    span.innerText= newTodo.text;
    button.innerText = "❌";
    button.addEventListener("click",deleteTodo)             // 'X'의 클릭을 듣고 있는 Listener
    li.appendChild(span);               // li 안에 span을 생성한다.
    li.appendChild(button);             // li 안에 버튼을 생성한다.
    todoList.appendChild(li);
}

function handleTodoSubmit(event){
    event.preventDefault();             // submit시 기본 실행되는 event를 막는다
    const newTodo = todoInput.value;    // newTodo는 input의 값을 받는다.
    todoInput.value = "";

    const newTodoObj ={
        text: newTodo,
        id: Date.now(),                 // 순서에 맞는 id 부여
    };

    todos.push(newTodoObj);             // todos 배열에 push해준다. 
    paintTodo(newTodoObj);              // 값을 화면에 출력시켜준다.
    saveTodos();                        // 값을 localStorage에 넣어준다.
}



todoForm.addEventListener("submit",handleTodoSubmit);          // submit 이벤트를 듣고 있다. 

const savedTodos = localStorage.getItem(TODOS_KEY);         // "localstorage의 todos key로 값을 가져온다. "

if(savedTodos !== null){
    const parsedTodo  = JSON.parse(savedTodos);         // string으로 되어있는 것을 JS object로 바꿔준다. 
    todos = parsedTodo;
    parsedTodo.forEach(paintTodo);               // array의 각각의 값마다 함수를 실행한다. 
}