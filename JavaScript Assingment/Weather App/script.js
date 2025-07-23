const API_KEY = "NS5fW3vWHxLGceKlWfkOLgdcq2IUJhbX";
const form = document.querySelector("#form")
// const city = "karachi"
const weatherIcons = {
    "Sunny": "./sunny.png",
    "Mostly sunny": "./mostly sunny.png",
    "Cloudy": "./cloudy.png",
    "Mostly cloudy": "./mostly cloudy.png",
    "Partly cloudy": "./partly cloudy.png",
    "Rain": "./rain.png",
    "Showers": "./shower.webp",
    "Thunderstorms": "./thunderstorm.png",
    "Snow": "./snow.png",
};
form.addEventListener("submit",(e)=>{
    let input = document.querySelector("#input")
    const cityname = document.querySelector(".city")
    const weatherText = document.querySelector(".weather-text")
    const temp = document.querySelector(".temp")
    const cityTime = document.querySelector(".city-time")
    const tempF = document.querySelector(".fara")
    const tempC = document.querySelector(".cel")
    const weatherIcon =  document.querySelector(".weather-icon")
    let city = input.value
    // let city = localStorage.getItem("city") || input.value
    // localStorage.setItem("city",city)
    
    e.preventDefault()
    // console.dir(weatherIcon)
 fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?q=${city}&apikey=${API_KEY}`).then(response => response.json().then((data) => {
        let cityData = data[0]
        // console.log(cityData);
        return fetch(`http://dataservice.accuweather.com/currentconditions/v1/${cityData.Key}?apikey=${API_KEY}`).then(response => response.json().then((data)=>{
               const forecastContainer = document.querySelector(".forecast-container");

fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityData.Key}?apikey=${API_KEY}&metric=true`)
    .then(response => response.json())
    .then((forecastData) => {
        forecastContainer.innerHTML = ""; // Clear old forecast

        forecastData.DailyForecasts.forEach(day => {
            const date = new Date(day.Date);
            const weekday = date.toLocaleDateString('en-US', { weekday: 'short' });
            const iconPhrase = day.Day.IconPhrase;
            const maxTemp = day.Temperature.Maximum.Value;
            const minTemp = day.Temperature.Minimum.Value;
            console.log(day.Temperature.Minimum);
            
            const weatherIcon = weatherIcons[iconPhrase] || "./default.png";

            const card = document.createElement("div");
            card.classList.add("forecast-card");
card.innerHTML = `
    <p class="forecast-date">${weekday}</p>
    <img src="${weatherIcon}" alt="${iconPhrase}" class="forecast-icon">
    <div class="forecast-temps">
        <p class="min-temp">Min: ${minTemp}°C</p>
        <p class="max-temp">Max: ${maxTemp}°C</p>
    </div>
`;

            forecastContainer.appendChild(card);
        });
    });

            let currenData = data[0]     
            cityname.innerHTML = city
            weatherText.innerHTML = currenData.WeatherText
            temp.innerHTML = `${currenData.Temperature.Metric.Value}°${data[0].Temperature.Metric.Unit}`
            cityTime.innerHTML =   currenData.LocalObservationDateTime
            tempF.innerHTML = `${currenData.Temperature.Imperial.Value}°${data[0].Temperature.Imperial.Unit}`
            tempC.innerHTML = `${currenData.Temperature.Metric.Value}°${data[0].Temperature.Metric.Unit}`
            let iconSrc = weatherIcons[currenData.WeatherText] || "./default.png"; 
            weatherIcon.src = iconSrc;
            weatherIcon.alt = currenData.WeatherText;
            // console.log("current condition data", data);
            // console.log(`${data[0].Temperature.Metric.Value}°${data[0].Temperature.Metric.Unit}`);
            // console.log(`${data[0].Temperature.Imperial.Value}°${data[0].Temperature.Imperial.Unit}`);
            // console.log(citys);
            // console.log(data[0].LocalObservationDateTime);
            
            input.value = ""
        }))
    }
    ))  
})

