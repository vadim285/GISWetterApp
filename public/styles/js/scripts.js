/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
let weather = {
    apiKey: "6c4ef8e4b1573b5a4e530dca1de62fab",
    // eslint-disable-next-line quote-props
    fetchWeather: function(city) {
        // eslint-disable-next-line max-len
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
         city +
         "&lang=de&units=metric&appid=" +
         this.apiKey)
            .then((response)=>response.json())
            .then((data)=>this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = "Wetter in " + name;
        // eslint-disable-next-line max-len
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + " °C";
        document.querySelector(".humidity").innerText = "Feuchtigkeit: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind: " + speed + "m/s";
    },
    search: function() {
        this.fetchWeather(document.querySelector(".searchbar").value);
    }

};

document.querySelector(".submit").addEventListener("click", function() {
    weather.search();
    console.log("YES");
});