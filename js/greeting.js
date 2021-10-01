const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY ="username";

const savedUsername = localStorage.getItem(USERNAME_KEY);

const paintGreetings = (username) => {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
};

const onLoginSubmit = (event) => {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
};

if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
    paintGreetings(savedUsername);
}