//Global Variables
var APIKey = "d3d868c125c76948db80ecf5668f6693";
var cityEl = document.querySelector("#city");
var tempEl = document.querySelector("#temp");
var windEl = document.querySelector("#wind");
var fiveDayWea = document.querySelector("#FiveDayWeather");
var humidityEl = document.querySelector("#humid");
var weatherAPIRootURL = `"http://api.openweathermap.org`;
var inputEL = document.querySelector("#city-input");
var searchBtn = document.querySelector("#search-btn")
var searchHistory = [];

// dayjs.extend(window.dayjs_plugin_utc);
// dayjs.extend(window_.dayjs_plugin_timezone);

// function that gets us the specific cities weather information
function fetchWeather(city) {
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`
    fetch(url)
        .then((response) => {
            return response.json()
        }).then((data) => {
            console.log(data);
        })
}
function fetchWeather(location) {
    var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid={API key}`
    var { lat } = location;
    var { lon } = location;
    var city = location.name;
}

searchBtn.addEventListener("click", (e) => {
    e.preventDefault()
    var userInput = inputEL.value
    console.log(userInput);
    // apiFetch(userInput);
});
