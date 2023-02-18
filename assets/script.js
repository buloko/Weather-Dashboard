//Global Variables
var APIKey = "d3d868c125c76948db80ecf5668f6693";
var city = document.querySelector("#city");
var tempEl = document.querySelector("#temp");
var windEl = document.querySelector("#wind");
var fiveDayWea = document.querySelector("#FiveDayWeather");
var humidityEl = document.querySelector("#humid");
var weatherAPIRootURL = `"http://api.openweathermap.org`;
var inputEL = document.querySelector("#city-input");
var searchBtn = document.querySelector("#search-btn");
var searchHistory = [];

// dayjs.extend(window.dayjs_plugin_utc);
// dayjs.extend(window_.dayjs_plugin_timezone);

// function that gets us the specific cities weather information
function fetchWeather(cityEl) {
  var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;
  fetch(queryURL)
    .then((response) => {
      return response.json();
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (currentData){
        console.log(currentData);
        cityEl.textContent = 
              currentData.name + moment(currentData.dt, "X ").format("MM/DD/YYYY");
            var img = document.createElement("img");
            img.src = 
    }

    .catch(() => {
      MessageChannel.textContent = "Please search for a valid city";
    });
}
function fetchWeather(lat, lon) {
  var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`;
  fetch(url).then((response) => {
    return response.json;
  });
  .then(function (foreCastData) {
    foreCastData.textContent= " ";
    
    console.log(foreCastData)

  }
}

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  var userInput = inputEL.value;
  console.log(userInput);
  // apiFetch(userInput);
});
