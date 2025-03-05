document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById('city-input');
    const getWeatherBtn = document.getElementById('get-weather-btn');
    const weatherInfo = document.getElementById('weather-info');
    const cityNameDisplay = document.getElementById('city-name');
    const temperatureDisplay = document.getElementById('temperature');
    const weatherDescription = document.getElementById('description');
    const sunrise = document.getElementById('sunrise');
    const sunset = document.getElementById('sunset');
    const errorMsg = document.getElementById('error-message');
    const API_KEY = your_API_KEY; //It's an free API get it from->https://openweathermap.org/

    getWeatherBtn.addEventListener('click', async () => {
        const city = cityInput.value.trim();
        if(!city) return;

        try {
            const data = await fetchWeatherData(city);
            displayWeatherData(data);
        } catch (error) {
            showError();
        }
        cityInput.value = "";
    })

    async function fetchWeatherData(city) {
        // get data
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

        const response = await fetch(url);
        // console.log(typeof response);
        console.log(response);
        
        if(!response.ok) {
            throw new Error("City not found")
        }
        const data = await response.json();
        return data;
    }

    function displayWeatherData(data) {
        // Display your fetched data->
        console.log(data); //to understand responses
        const {name, main, weather, sys} = data;

        const timestampRise = sys.sunrise;
        const timeRise = new Date(timestampRise * 1000);
        const timestampSet = sys.sunset;
        const timeSet = new Date(timestampSet * 1000);

        cityNameDisplay.textContent = name;
        temperatureDisplay.textContent = `Temperature : ${main.temp}`;
        weatherDescription.textContent = `Weather : ${weather[0].description}`;
        sunrise.textContent = `Sunrise : ${timeRise}`;
        sunset.textContent = `Sunset : ${timeSet}`;

        weatherInfo.classList.remove("hidden");
        errorMsg.classList.add("hidden");
    }

    function showError() {
        errorMsg.classList.remove("hidden");
    }
});