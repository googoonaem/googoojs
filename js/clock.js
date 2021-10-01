const clock = document.querySelector("#clock");

const getClock = () => {
    const date = new Date();
    clock.innerText = `${String(date.getHours()).padStart(2, "0")}:${date.getMinutes()}:${String(date.getSeconds()).padStart(2, "0")}`;
};

getClock();
setInterval(getClock, 1000);