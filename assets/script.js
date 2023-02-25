
// import dayjs from 'dayjs';
//Global Variables/Declaration
document.addEventListener("DOMContentLoaded", function() {
var APIKey = "d3d868c125c76948db80ecf5668f6693";
var cityEl = document.querySelector("#current-city");
var currentWeather = document.querySelector("#current-weather");
var temp = document.querySelector("#temperature");
var windSpeed = document.querySelector("#wind-speed");
var humidity = document.querySelector("#humidity");
var forecastFiveEl = document.querySelector("#forecast");
var searchBtn = document.querySelector("#search-button");
var findCity = document.querySelector("#search-city");
var clearButton = document.querySelector("#clear-history");

searchBtn.addEventListener("click", function () {
  var searchedCity = findCity.value.trim();
  fetchWeather(searchedCity);
  console.log(findCity.value.trim());
});

var searchStorage = JSON.parse(localStorage.getItem("history")) || [];
var lastSearches = document.querySelector("#history");

// Display the current and future weather to the user after getting the city form from the input text box
function displayWeather(event) {
  event.preventDefault();
  if (findCity.value.trim() !== "") {
    city = findCity.value.trim();
    fetchWeather(city);
  }
}
// function that gets us the specific cities weather information
function fetchWeather(cityNameEL) {
  var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityNameEL}&appid=${APIKey}`;
  fetch(queryURL)
    .then(function (response){
      return response.json();
    })
    .then(function (currentData) {
      console.log(currentData);
      const dayJsObject = dayjs();
      cityEl.textContent = currentData.name + dayjs(currentData.dt).format("MM/DD/YYYY");
      var img = document.createElement("img");
      img.src = `http://openweathermap.org/img/wn/${currentData.weather[0].icon}@2x.png`;
      cityEl.appendChild(img);
      var temp = document.querySelector("#temperature");
      console.log(currentData.main.temp);
      temp.textContent = currentData.main.temp + "°F";
      var humidity = document.querySelector("#humidity");
      humidity.textContent = currentData.main.humidity + "%";
      windSpeed.textContent = currentData.wind.speed + "mph";
      getForecast(currentData.coord.lat, currentData.coord.lon);
    });
}

function renderPastSearches() {
  lastSearches.innerHTML = "";

  for (let i = 0; i < searchStorage.length; i++) {
    var histList = document.createElement("button");
    histList.classList.add("button-primary");
    histList.textContent = searchStorage[i];

    lastSearches.append(histList);

    histList.addEventListener("click", function (event) {
      var searchText = event.target.innerHTML;
      fetchWeather(searchText);
    });
  }
}
function getForecast(lat, lon) {
  queryUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}&units=imperial`;
  fetch(queryUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (forecastData) {
      forecastFiveEl.textContent = " ";

      console.log(forecastData);

      var forecastEl = document.createElement("h2");
      forecastEl.textContent = "5-Day Forecast";
      forecastFiveEl.appendChild(forecastEl);

      for (let i = 2; i < forecastData.list.length; i += 8) {
        const daily = forecastData.list[i];
        var cardEl = document.createElement("h3");
        cardEl.textContent = dayjs(daily.dt_txt).format("MM/DD/YYYY");
        cardEl.className=("card");
        forecastEl.appendChild(cardEl);
        var smlImg = document.createElement("img");
        smlImg.src = `https://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`;
        cardEl.appendChild(smlImg);
        console.log(forecastEl, i);
        var fiveTemp = document.createElement("li");
        var fiveWind = document.createElement("li");
        var fiveHumid = document.createElement("li");
        fiveTemp.textContent = daily.main.temp + "ºF";
        fiveWind.textContent = daily.wind.speed + " MPH";
        fiveHumid.textContent = daily.main.humidity + "%";
        cardEl.appendChild(fiveTemp);
        cardEl.appendChild(fiveWind);
        cardEl.appendChild(fiveHumid);
      }
    });
  
}
});
//         var date = document.createElement("h5");
//         date.textContent = daysObject.format("MM/DD/YYYY");
//         console.log(data.list[i]);
//         var cardDiv = document.createElement("div");
//         cardDiv.setAttribute("class", "card forecastCard");
//         var testTemp = document.createElement("p");
//         testTemp.textContent = "Temperature" + data.list[i].main.temp + "°F";
//         const icon = document.createElement("img");
//         icon.setAttribute(
//           "src",
//           `http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png`
//         );
//         var testHumidity = document.createElement("p");
//         testHumidity.textContent =
//           "humidity " + data.list[i].main.humidity + "%";

//         var testWind = document.createElement("p");
//         testWind.textContent = "Wind " + data.list[i].wind.speed + "mph";
//         cardDiv.append(date, icon, testTemp, testHumidity, testWind);
//         container.append(cardDiv);
//       }
// } )};
