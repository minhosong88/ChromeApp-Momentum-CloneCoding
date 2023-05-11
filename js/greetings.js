const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greetings");
const link = document.querySelector("a");
const loginClock = document.querySelector("h2#clock");
const todoForm = document.querySelector("#todo-form");
const background = document.querySelector("#background");


const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY="username";

function paintGreetings(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    loginClock.classList.remove(HIDDEN_CLASSNAME);
    todoForm.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello, ${username}`;
} 

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);    
} 

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else{
    paintGreetings(savedUsername);
}   