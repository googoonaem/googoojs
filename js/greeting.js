const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-input");
const greeting = document.querySelector("#greeting");
const greetingPage = greeting.parentNode;

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);

const paintGreetings = (username) => {
  greetingPage.classList.remove(HIDDEN_CLASSNAME);
  const str = `Hello，${username} !!`;
  let delay = 0;
  for (let i = 0; i < str.length; i++) {
    const span = document.createElement("span");
    span.innerText = str[i];
    span.style.animationDelay = `${delay}s`;
    greeting.appendChild(span);
    delay += 0.2;
  }
};

const onLoginSubmit = (event) => {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
};

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
