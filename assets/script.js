
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
var searchBtn = document.querySelector("#search-button");
var findCity = document.querySelector("#search-city");
var clearButton = document.querySelector("#clear-history");
var cityEl= document.querySelector("#city-date");
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
    if(findCity.value().trim()!==""){
        city=findCity.value.trim();
        currentWeather(city);
    }
}
// function that gets us the specific cities weather information
function fetchWeather(city) {
  var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;
  fetch(queryURL)
    .then((response) => response.json())
    .then((data) => {
     //parse the response to display the current weather including the City name, the Date and the weather icon.
     console.log(data)
     //Data object from server side Api icon property.
     cityEl.textContent =  data.name+ " " + moment(data.dt,"X").format("MM/DD/YYYY");
     const icon = document.querySelector("#icon");
     icon.setAttribute("src",`http://openweathermap.org/img/w/${data.weather[0].icon}.png`);
     icon.setAttribute("class", "current");
     var temp = document.querySelector("#temperature");
     temp.textContent = data.main.temp + "°F";
     var humidity = document.querySelector("#humidity");
     humidity.textContent = "Humidity: " + data.main.humidity + "%";
     var wind = document.querySelector("#wind");
     wind.textContent = "Wind: " + data.wind.speed + "mph";
   })
}
     

searchBtn.addEventListener("click",function(){
    var searchedCity = findCity.value.trim()
    fetchWeather(searchedCity)
    console.log(findCity.value.trim())
})