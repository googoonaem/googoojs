const clock = document.querySelector("#clock");
const day = document.querySelector("#day");

const getClock = () => {
  const date = new Date();
  day.innerText = `${date.getMonth()} / ${date.getDate()} / ${date.getFullYear()}`;
  const hour = date.getHours();
  clock.innerText = `${String(hour).padStart(2, "0")}:${String(
    date.getMinutes()
  ).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`;
};

getClock();
setInterval(getClock, 1000);
