const API_KEY = "NS5fW3vWHxLGceKlWfkOLgdcq2IUJhbX";
const city = "karachi"

function getLocation (){
    
    fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?q=${city}&apikey=${API_KEY}`).then(response => response.json().then((data) => {
        let cityData = data[0]
        console.log(cityData);
        return fetch(`http://dataservice.accuweather.com/currentconditions/v1/${cityData.Key}?apikey=${API_KEY}`).then(response => response.json().then((data)=>{
            console.log("current condition data", data);
            
        }))
    }
    ))  
}
    
getLocation()