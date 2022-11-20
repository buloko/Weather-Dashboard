var APIKey ="d3d868c125c76948db80ecf5668f6693"
var inputEL= document.querySelector("#city-input")
var searchBtn = document.querySelector("#search-btn")
// function that gets us the specific cities weather information
function apiFetch(city) {
var url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`
fetch(url)
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);


})
}


searchBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    var userInput=inputEL.value
    console.log(userInput);
    apiFetch(userInput)
})
