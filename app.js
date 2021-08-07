let weather = {
    "apiKey": "5d2ba83a6a0d4638fcb763058b23f884",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + city 
        +"&units=metric&lang=es&appid="
        + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
    displayWeather: function (data) {
        
    }
};