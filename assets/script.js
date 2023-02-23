//variable declared to store the searched city
var city = "";
// import dayjs from 'dayjs';
//Global Variables/Declaration
var APIKey = "d3d868c125c76948db80ecf5668f6693";
var weatherAPIRootURL = `"http://api.openweathermap.org`;

var city = document.querySelector("#city");
var currentCity = document.querySelector("#current-city");
var temp = document.querySelector("#temperature");
var windSpeed = document.querySelector("#wind-speed");
var humidity = document.querySelector("#humidity");
var input = document.querySelector("#city-input");
var searchBtn = document.querySelector("#search-button");
var findCity = document.querySelector("#search-city");
var clearButton = document.querySelector("#clear-history");
var cityEl = document.querySelector("#city-date");
var searchHistory = [];

// dayjs.extend(window.dayjs_plugin_utc);
// dayjs.extend(window_.dayjs_plugin_timezone);

// searches the city to see if it exists in the entries from the storage
function find(c) {
    for (var i = 0; i < searchHistory.length; i++) {
        if (c.toUpperCase() === searchHistory[i]) {
            return -1;
        }
    }
    return 1;
}
// Display the current and future weather to the user after getting the city form from the input text box
var APIKey = "d3d868c125c76948db80ecf5668f6693";

function displayWeather(event) {
    event.preventDefault();
    if (findCity.value().trim() !== "") {
        city = findCity.value.trim();
        currentWeather(city);
    }
}
// function that gets us the specific cities weather information
function fetchWeather(city) {
    var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;
    fetch(queryURL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            //Data object from server side Api icon property.
            //  cityEl.textContent =  data.name + " " + moment(data.dt,"X").format("MM/DD/YYYY");
            const dayJsObject = dayjs();

            currentCity.textContent = data.name + dayJsObject.format("MM/DD/YYYY");
            var img = document.createElement("img");
            img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            currentCity.appendChild(img);
            // var weathericon= data.weather[0].icon;
            // var iconurl="https://openweathermap.org/img/wn/"+weathericon +"@2x.png;
            // currentCity.innerHTML = data.name + " (" + dayjs + ") <img src='" + iconurl + "'>";
            var temp = document.querySelector("#temperature");
            console.log(data.main.temp);
            temp.textContent = data.main.temp + "°F";
            var humidity = document.querySelector("#humidity");
            humidity.textContent = data.main.humidity + "%";
            //  var wind = document.querySelector("#wind-s");
            windSpeed.textContent = data.wind.speed + "mph";
            var lat = data.coord.lat;
            var lon = data.coord.lon;
            var queryUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`;
            fetch(queryUrl)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                });
        });
}

// &exclude=${part}
//maybe use later for URL key
searchBtn.addEventListener("click", function () {
    var searchedCity = findCity.value.trim();
    fetchWeather(searchedCity);
    console.log(findCity.value.trim());
});
