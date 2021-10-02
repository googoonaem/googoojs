const API_KEY = "902ee5dfc4affeef82f48a91ab12d855";
const effect = document.getElementById("effect");

const onGeoOk = (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const elWeather = document.querySelector("#weather");
      const city = document.querySelector("#city");
      const temp = document.querySelector("#temp");
      const weather = data.weather[0].main;
      elWeather.innerText = weather;
      city.innerText = data.name;
      temp.innerText = Math.floor(data.main.temp - 273.15);
      effect.className = weather;
    });
};

const onGeoError = () => {
  alert("can't find you. no weather for you.");
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
