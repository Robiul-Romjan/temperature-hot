const apiKey = `57c2604717d6323d626f29a5c7a8e2f3`;

const fetchWeatherData = async(city) => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await res.json();
    displayWeatherData(data);
};

const displayWeatherData = data => {
    console.log(data)
    const temperature = document.getElementById("temperature");
    const weatherStatus = document.getElementById("weather-status");
    weatherStatus.innerText = data.weather[0].main
    temperature.innerText = data.main.temp
};

const searchCity = () => {
    const searchCity = document.getElementById("search-city").value;
    const cityName = document.getElementById("city-name");
    cityName.innerText = searchCity;
    fetchWeatherData(searchCity)
};

fetchWeatherData("Dhaka")