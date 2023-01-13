var cityInputEl = document.querySelector("#search");
var currentWeather = document.querySelector("#current");

displayWeather = function (data) {

    var location = document.createElement('div')
    location.textContent = data.name
    var temp = document.createElement('div')
    temp.textContent = 'Temp: ' + data.main.temp
    var wind = document.createElement('div')
    wind.textContent = 'Wind: ' + data.wind.speed + 'MPH'
    var humidity = document.createElement('div')
    humidity.textContent = 'Humidity: ' + data.main.humidity + '%'

    document.querySelector('.current').append(location, temp, wind, humidity)
}

$("#search-form").on("submit", function (event) {
    event.preventDefault();
    var city = cityInputEl.value;
    if (city) {
        getWeather(city);
        cityInputEl.value = "";
    } else {
        alert("Please enter a location");
    }
    if (city) {
        getForecast(city);
        cityInputEl.value = "";
    } else {
        alert("Please enter a location");
    }
});

var getWeather = function (city, state, country) {
    const apiKey = '1a17d99bc89a5259b8ad64dc157c4c0f'
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=${apiKey}&units=imperial`;

    document.querySelector('.current').innerHTML = '';

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    displayWeather(data);
                });
            } else {
                alert("Error: " + response.statusText);
            }
        })
        .catch(function (error) {
            alert("Unable to find city. Try again later");
        });
};

// ICON, TEMP, WIND, HUMIDITY



displayForecast = function (data) {
    var day1 = document.createElement('div');
    day1.id = 'day1'
    var day2 = document.createElement('div');
    day2.id = 'day2'
    var day3 = document.createElement('div');
    day3.id = 'day3'
    var day4 = document.createElement('div');
    day4.id = 'day4'
    var day5 = document.createElement('div');
    day5.id = 'day5'
    // The info for day 2
    var date1 = document.createElement('div');
    date1.textContent = data.list[0].dt_txt;
    var temp1 = document.createElement('div');
    temp1.textContent = "Temp: " + data.list[0].main.temp + "℉";
    var wind1 = document.createElement('div')
    wind1.textContent = 'Wind: ' + data.list[0].wind.speed + 'MPH'
    var humid1 = document.createElement('div')
    humid1.textContent = 'Humidity: ' + data.list[0].main.humidity
    // The info for day 2
    var date2 = document.createElement('div');
    date2.textContent = data.list[1].dt_txt;
    var temp2 = document.createElement('div');
    temp2.textContent = "Temp: " + data.list[1].main.temp + "℉";
    var wind2 = document.createElement('div')
    wind2.textContent = 'Wind: ' + data.list[1].wind.speed + 'MPH'
    var humid2 = document.createElement('div')
    humid2.textContent = 'Humidity: ' + data.list[1].main.humidity
    // The infor for day 3
    var date3 = document.createElement('div');
    date3.textContent = data.list[2].dt_txt;
    var temp3 = document.createElement('div');
    temp3.textContent = "Temp: " + data.list[2].main.temp + "℉";
    var wind3 = document.createElement('div')
    wind3.textContent = 'Wind: ' + data.list[2].wind.speed + 'MPH'
    var humid3 = document.createElement('div')
    humid3.textContent = 'Humidity: ' + data.list[2].main.humidity
    // The info for day 4 
    var date4 = document.createElement('div');
    date4.textContent = data.list[3].dt_txt;
    var temp4 = document.createElement('div');
    temp4.textContent = "Temp: " + data.list[3].main.temp + "℉";
    var wind4 = document.createElement('div')
    wind4.textContent = 'Wind: ' + data.list[3].wind.speed + 'MPH'
    var humid4 = document.createElement('div')
    humid4.textContent = 'Humidity: ' + data.list[3].main.humidity
    // The info for day 5
    var date5 = document.createElement('div');
    date5.textContent = data.list[4].dt_txt;
    var temp5 = document.createElement('div');
    temp5.textContent = "Temp: " + data.list[4].main.temp + "℉";
    var wind5 = document.createElement('div')
    wind5.textContent = 'Wind: ' + data.list[4].wind.speed + 'MPH'
    var humid5 = document.createElement('div')
    humid5.textContent = 'Humidity: ' + data.list[4].main.humidity


    day1.append(date1, temp1, wind1, humid1);
    day2.append(date2, temp2, wind2, humid2);
    day3.append(date3, temp3, wind3, humid3);
    day4.append(date4, temp4, wind4, humid4);
    day5.append(date5, temp5, wind5, humid5);

    document.querySelector('.forecast').append(day1, day2, day3, day4, day5);
};

var getForecast = function (city, state, country) {
    const apiKey = '1a17d99bc89a5259b8ad64dc157c4c0f'
    var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${state},${country}&appid=${apiKey}&units=imperial`;

    document.querySelector('.forecast').innerHTML = '';
    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    displayForecast(data);
                });
            } else {
                alert("Error: " + response.statusText);
            };
        })
        .catch(function (error) {
            alert("Unable to find city. Try again later");
        });
};
