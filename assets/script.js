
//variable declared to store the searched city
var city="";
//Global Variables/Declaration
var APIKey = "d3d868c125c76948db80ecf5668f6693";
var weatherAPIRootURL = `"http://api.openweathermap.org`;
var city = document.querySelector("#city");
var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");
var humidity = document.querySelector("#humidity");
var Uvindex = document.querySelector("#uv-index");
var input = document.querySelector("#city-input");
var searchBtn = document.querySelector("#search-btn");
var findCity = document.querySelector("#find-city");
var clearButton = document.querySelector("#clear-history");
var searchHistory = [];

// dayjs.extend(window.dayjs_plugin_utc);
// dayjs.extend(window_.dayjs_plugin_timezone);

// searches the city to see if it exists in the entries from the storage
function find(c){
    for (var i=0; i<searchHistory.length; i++){
        if(c.toUpperCase()===searchHistory[i]){
            return -1;
        }
    }
    return 1;
}
// Display the current and future weather to the user after getting the city form from the input text box
var APIKey="d3d868c125c76948db80ecf5668f6693";

function displayWeather(event){
    event.preventDefault();
    if(findCity.val().trim()!==""){
        city=findCity.val.trim();
        currentWeather(city);
    }
}
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
            img.src
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
