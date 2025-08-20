document.addEventListener("DOMContentLoaded", ()=>{

    const inputCity = document.querySelector('.searchField');
    const searchBtn = document.querySelector('.searchBtn');
    const API_KEY = 'a9e5027afcd82232c884f45a6ef56963';

    //changable data parameters
    const weatherIcon = document.querySelector('.icon')
    const cityName = document.querySelector('.city');
    const temperature = document.querySelector('.temperature span');
    const humidityValue = document.querySelector('.newValue');
    const windSpeed = document.querySelector('.speed')

    searchBtn.addEventListener("click", async()=>{
        console.log(inputCity.value);
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&appid=${API_KEY}&units=metric`

        const response = await fetch(url);
        const data = await response.json();

        if(data.weather[0].icon == "04d" || data.weather[0].icon == "04n" || data.weather[0].icon == "02d" || data.weather[0].icon == "02n" || data.weather[0].icon == "03d" || data.weather[0].icon == "03n"){
            weatherIcon.src = "./images/clouds.png";
        }else if(data.weather[0].icon == "01d" || data.weather[0].icon == "01n"){
            weatherIcon.src = "./images/clear.png";
        }else if(data.weather[0].icon == "09d" || data.weather[0].icon == "09n"){
            weatherIcon.src = "./images/drizzle.png";
        }else if(data.weather[0].icon == "10d" || data.weather[0].icon == "10n"){
            weatherIcon.src = "./images/rain.png";
        }else if(data.weather[0].icon == "13d" || data.weather[0].icon == "13n"){
            weatherIcon.src = "./images/snow.png";
        }else if(data.weather[0].icon == "50d" || data.weather[0].icon == "50n"){
            weatherIcon.src = "./images/mist.png";
        }
        // console.log(data.weather[0]);
        cityName.textContent = data.name;
        temperature.textContent = data.main.temp;
        humidityValue.textContent = data.main.humidity;
        windSpeed.textContent = data.wind.speed;
        inputCity.value='';
    });
});