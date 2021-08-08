let weather = {
    "apiKey": "5d2ba83a6a0d4638fcb763058b23f884",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + city 
        +"&units=metric&lang=es&appid="
        + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        //console.log(name,icon,description,temp,humidity,speed);//
        document.querySelector(".city").innerText = "Clima en " + name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humedad: " + humidity + "%";
        document.querySelector(".wind").innerText = "Viento: " + speed + " km/h";
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};

document.querySelector(".search button").addEventListener("click", function () {
   weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {    //para que al apretar enter busque la ciudad sin clickear la lupa//
    if (event.key == "Enter") {
        weather.search();
    }

});

weather.fetchWeather("Buenos Aires");