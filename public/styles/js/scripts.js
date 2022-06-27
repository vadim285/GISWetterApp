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
    fetchWeatherforecast: function(city) {
        // eslint-disable-next-line max-len
        fetch("https://api.openweathermap.org/data/2.5/forecast?q=" +
         city +
         "&lang=de&units=metric&appid=" +
         this.apiKey)
            .then((response)=>response.json())
            .then((data)=>this.displayWeatherforecast(data));
            
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

    displayWeatherforecast(data) {
        let weatherrow = document.querySelector(".forecastweather");
         weatherrow.innerHTML = data.list.map((list,idx)=>{
            if(idx <=4){

                return `<div class="forcastweather${idx}">
                
                <h5 class= "Uhrzeit" > am ${data.list[idx].dt_txt}</h5>
                <div class="temp"> ${data.list[idx].main.temp}°C</div>
            
                <img src = https://openweathermap.org/img/wn/${data.list[idx].weather[0].icon}@2x.png class ="iconforcast"> 
                <div class="description">${data.list[idx].weather[0].description}</div>
                
            
            
                <div class="humidity">Feuchtigkeit: ${data.list[idx].main.humidity}%</div>
                <div class="wind">Wind: ${data.list[idx].wind.speed}m/s</div>
            </div>`;
            }
            }).join(' ');
            console.log(data);
                
    },
    search: function() {
        this.fetchWeather(document.querySelector(".searchbar").value);
        this.fetchWeatherforecast(document.querySelector(".searchbar").value);
    }

};

document.querySelector(".submit").addEventListener("click", function() {
    weather.search();
});