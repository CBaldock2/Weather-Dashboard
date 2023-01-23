var cityInputEl = document.querySelector("#search");
var currentWeather = document.querySelector("#current");
var btn = document.querySelector('.btn')
var searchBtn = document.querySelector('#submit-btn')

displayWeather = function (data) {

    var location = document.createElement('h3')
    location.textContent = data.name;
    var icon = document.createElement('img');
    icon.src = 'http://openweathermap.org/img/wn/' + data.weather[0].icon +
        '@2x.png'
    var temp = document.createElement('div')
    temp.textContent = 'Temp: ' + data.main.temp
    var wind = document.createElement('div')
    wind.textContent = 'Wind: ' + data.wind.speed + 'MPH'
    var humidity = document.createElement('div')
    humidity.textContent = 'Humidity: ' + data.main.humidity + '%'
    document.querySelector('.current').append(location, icon, temp, wind, humidity)
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
    var icon1 = document.createElement('img');
    icon1.src = 'http://openweathermap.org/img/wn/' + data.list[0].weather[0].icon +
        '@2x.png'
    var temp1 = document.createElement('div');
    temp1.textContent = "Temp: " + data.list[0].main.temp + "℉";
    var wind1 = document.createElement('div');
    wind1.textContent = 'Wind: ' + data.list[0].wind.speed + 'MPH';
    var humid1 = document.createElement('div');
    humid1.textContent = 'Humidity: ' + data.list[0].main.humidity + '%';
    // The info for day 2
    var date2 = document.createElement('div');
    date2.textContent = data.list[8].dt_txt;
    var icon2 = document.createElement('img');
    icon2.src = 'http://openweathermap.org/img/wn/' + data.list[8].weather[0].icon +
        '@2x.png'
    var temp2 = document.createElement('div');
    temp2.textContent = "Temp: " + data.list[8].main.temp + "℉";
    var wind2 = document.createElement('div');
    wind2.textContent = 'Wind: ' + data.list[8].wind.speed + 'MPH';
    var humid2 = document.createElement('div');
    humid2.textContent = 'Humidity: ' + data.list[8].main.humidity + '%';
    // The infor for day 3
    var date3 = document.createElement('div');
    date3.textContent = data.list[16].dt_txt;
    var icon3 = document.createElement('img');
    icon3.src = 'http://openweathermap.org/img/wn/' + data.list[16].weather[0].icon +
        '@2x.png'
    var temp3 = document.createElement('div');
    temp3.textContent = "Temp: " + data.list[16].main.temp + "℉";
    var wind3 = document.createElement('div');
    wind3.textContent = 'Wind: ' + data.list[16].wind.speed + 'MPH';
    var humid3 = document.createElement('div');
    humid3.textContent = 'Humidity: ' + data.list[16].main.humidity + '%';
    // The info for day 4 
    var date4 = document.createElement('div');
    date4.textContent = data.list[24].dt_txt;
    var icon4 = document.createElement('img');
    icon4.src = 'http://openweathermap.org/img/wn/' + data.list[24].weather[0].icon +
        '@2x.png'
    var temp4 = document.createElement('div');
    temp4.textContent = "Temp: " + data.list[24].main.temp + "℉";
    var wind4 = document.createElement('div');
    wind4.textContent = 'Wind: ' + data.list[24].wind.speed + 'MPH';
    var humid4 = document.createElement('div');
    humid4.textContent = 'Humidity: ' + data.list[24].main.humidity + '%';
    // The info for day 5
    var date5 = document.createElement('div');
    date5.textContent = data.list[32].dt_txt;
    var icon5 = document.createElement('img');
    icon5.src = 'http://openweathermap.org/img/wn/' + data.list[32].weather[0].icon +
        '@2x.png'
    var temp5 = document.createElement('div');
    temp5.textContent = "Temp: " + data.list[32].main.temp + "℉";
    var wind5 = document.createElement('div');
    wind5.textContent = 'Wind: ' + data.list[32].wind.speed + 'MPH';
    var humid5 = document.createElement('div');
    humid5.textContent = 'Humidity: ' + data.list[32].main.humidity + '%';


    day1.append(date1, icon1, temp1, wind1, humid1);
    day2.append(date2, icon2, temp2, wind2, humid2);
    day3.append(date3, icon3, temp3, wind3, humid3);
    day4.append(date4, icon4, temp4, wind4, humid4);
    day5.append(date5, icon5, temp5, wind5, humid5);

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

// Adds the search to the local storage
function renderHistory() {
    let historyContainer = document.querySelector('#history-container');
    let locationArray;
    if(localStorage.getItem('location')){
        locationArray = JSON.parse(localStorage.getItem('location'));
    }else{
        locationArray = [];
    }
    historyContainer.innerHTML = '';
    locationArray.forEach(function (location) {
        let history = document.createElement('button');
        history.classList.add ('location')
        history.innerHTML = location;
        historyContainer.append(history);
    });
};

searchBtn.addEventListener('click', function () {
    let location = document.querySelector('#search').value;
    let locationArray;
    if(localStorage.getItem('location')){
        locationArray = JSON.parse(localStorage.getItem('location'));
    }else{
        locationArray = [];
    }
    locationArray.push(location);
    localStorage.setItem('location', JSON.stringify(locationArray));
    renderHistory();
});
