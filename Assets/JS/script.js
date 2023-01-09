var searchFormEl = document.querySelector("#search-form");
var cityInputEl = document.querySelector("#search");
var currentWeather = document.querySelector("#current");
var forecast = document.querySelector("#forecast");

var citySubmit = function(event) {
    event.preventDefault();

    var city = cityInputEl.trim();

    if (city) {
        getWeather(city);

        currentWeather.textContent = "";
        cityInputEl.value = "";
    } else {
        alert("Please enter a location");
    }
};


var getWeather = function (city, state, country) {
    var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${state},${country}&appid=1a17d99bc89a5259b8ad64dc157c4c0f`;

    fetch(apiUrl)
    .then(function (response) {
        if(response.ok) {
            response.json().then(function (data) {
                displayWeather(data, current, temp);
            });
        } else {
            alert("Error: " + response.statusText);
        }
    })
    .catch(function (error) {
        alert("Unable to find city. Try again later");
    });
};

var displayWeather = function () {
    
}




searchFormEl.addEventListener("submit", citySubmit);
