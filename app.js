const app = document.querySelector('.app')

const getData = async (city) => {
    const apiKey = 'dfd956bb8b399abd1561624f12901a6c';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    const response = await fetch(url);
    if(response.status !== 200){
        throw new Error('can not fetch the data');
    };
    const data = await response.json();
    return data;
};


function displayWeather (city) {
    getData(city)
        .then(data => {
            console.log(data);
            const weatherContainer = document.createElement('div');
            weatherContainer.classList.add('weather-container');
            weatherContainer.innerHTML = `
            <h2>${data.name.toUpperCase()}, ${data.sys.country.toUpperCase()}</h2>
            <h1 class="temperature">${data.main.temp} &degC</h1>
            <h2 class="description">${data.weather[0].description.toUpperCase()}</h2>
            `
            app.append(weatherContainer)
        })
        .catch(err => console.log(err.message));

    }



function renderApp() {
    const city1 = "Katowice"
    const city2 = "Dundee";
    const city3 = "Dubai";
    displayWeather(city1);
    displayWeather(city2);
    displayWeather(city3);
}

renderApp()