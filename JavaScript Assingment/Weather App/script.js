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
    "Showers": "./shower.png",
    "Thunderstorms": "./thunderstorm.png",
    "Snow": "./snow.png",
    "Fog": "./foggy.png",
    "Clear": "./clear.png"
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
    
    e.preventDefault()
    console.dir(weatherIcon)
 fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?q=${city}&apikey=${API_KEY}`).then(response => response.json().then((data) => {
        let cityData = data[0]
        // console.log(cityData);
        return fetch(`http://dataservice.accuweather.com/currentconditions/v1/${cityData.Key}?apikey=${API_KEY}`).then(response => response.json().then((data)=>{
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

