

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const apiKey = "d146ba58a5b44d6c0f5feea80173170c";

const input = document.querySelector("input");
const button = document.querySelector("button");
const weatherimg = document.querySelector(".weather-icon")

async function checkWeather(city) {
    document.querySelector(".error").textContent= "";
    
    try{
        const response = await fetch(apiUrl + `&q=${city}&appid=${apiKey}`);
        const data = await response.json();
        console.log(data)
  
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C"; 
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr"; 
  
    if(data.weather[0].main == "Clouds"){
      weatherimg.src="images/clouds.png"
    }
  
    if(data.weather[0].main == "Clear"){
      weatherimg.src="images/clear.png"
    }
  
  
    if(data.weather[0].main == "Drizzle"){
      weatherimg.src="images/drizzle.png"
    }
  
  
    if(data.weather[0].main == "Humidity"){
      weatherimg.src="images/humidity.png"
    }
  
  
    if(data.weather[0].main == "Mist"){
      weatherimg.src="images/mist.png"
    }
  
  
    if(data.weather[0].main == "Rain"){
      weatherimg.src="images/rain.png"
    }
  
  
    if(data.weather[0].main == "Snow"){
      weatherimg.src="images/snow.png"
    }
  
    if(data.weather[0].main == "Wind"){
      weatherimg.src="images/wind.png"
    }
  
 
    }

    catch(error){
        document.querySelector(".error").textContent= "Invalid city name";
        document.querySelector(".city").innerHTML = "Not a city";
    }
  
  }


button.addEventListener("click", () => {
  checkWeather(input.value);
});
