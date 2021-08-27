const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// 같은 스트링값을 지속적으로 사용할 경우 변수로 설정해 준다. 
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(event){
    //const username = loginInput.value;
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    //greeting.innerText = "Hello " + username;
    localStorage.setItem(USERNAME_KEY,username);          // store userename in local storage
    paintGreeting(savedUsername);
}

function paintGreeting(username){
    greeting.classList.remove(username);
    greeting.innerText = `Hello ${savedUsername}`;
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

//Default로 form을 숨기고 있다가 local stroage에 username이 존재하지 않는다면 form의 hidden 을 삭제시켜서 Input과 button을 표시시켜준다. 
if(savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);    
}else{
    // show the greetings
    paintGreeting(savedUsername);
}