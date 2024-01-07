let btnNav = document.getElementById('btn-nav-out');
let menuHo = document.getElementById('menu-ho');
let menuVe = document.getElementById('menu-ve');
let showMenu = document.getElementById('btn-nav');
let cards = document.getElementById('cards');
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

window.addEventListener("resize", function() {
    let width = document.body.clientWidth;
    let num = 1200;
    if (width <= num) {
        btnNav.classList.replace('d-none', 'd-block');
        menuHo.classList.add('d-none');
    } else {
        btnNav.classList.replace('d-block', 'd-none');
        menuHo.classList.remove('d-none');
    }
});
showMenu.addEventListener('click', function() {
    if (menuVe.classList.contains('d-flex')) {
        menuVe.classList.replace('d-flex', 'd-none');
    } else {
        menuVe.classList.replace('d-none', 'd-flex');
    }
});
// let dateWeather = [];

function getdate(date1) {
    const date = new Date(date1);
    let dateWeather = [
        days[date.getDay()],
        months[date.getMonth()],
        date.getDate()
    ];
    return dateWeather;
}
async function getData(value) {
    if (value == null) {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=1cf2b4c26b4c4dc294361216240601&q=Cairo&days=3`);
        if (response.status == 200) {
            const data = await response.json();
            cards.innerHTML = `<div class="col-md-4">
        <div class="weather-card round-1 bg-2">
            <div class="date  d-flex flex-row justify-content-between align-items-center weather-text bg-1 pt-1">
                <p>${getdate(data.location.localtime)[0]}</p>
                <p>${getdate(data.location.localtime)[2]}${getdate(data.location.localtime)[1]}</p>
            </div>
            <div class="state d-flex flex-column justify-content-center weather-text px-3 py-2 ">
                <p class="text-size">${data.location.name}</p>
                <div class="temp d-flex flex-row justify-content-around align-items-center">
                    <p>${data.current.temp_c}<sup>o</sup>C</p>
                    <img src="https:${data.current.condition.icon}" alt="icon1" class="w-15">
                </div>
                <p class="weather-state-text">${data.current.condition.text}</p>
                <div class="proprty d-flex flex-row justify-content-between align-items-center w-75">
                    <div class="sub-property d-flex flex-row justify-content-center align-items-baseline">
                        <img src="images/icon-umberella.png" alt="rain" class="mx-1">
                        <p>${data.current.humidity}%</p>
                    </div>
                    <div class="sub-property d-flex flex-row justify-content-center align-items-baseline">
                        <img src="images/icon-wind.png" alt="wind" class="mx-1">
                        <p>${data.current.wind_kph}</p>
                    </div>
                    <div class="sub-property d-flex flex-row justify-content-center align-items-baseline">
                        <img src="images/icon-compass.png" alt="compass" class="mx-1">
                        <p>East</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-4 ">
        <div class="weather-card-o bg-4">
            <div class="date-o d-flex flex-row justify-content-center align-items-center  weather-text bg-3 pt-1">
                <p>${getdate(data.forecast.forecastday[1].date)[0]}</p>
            </div>
            <div class="state-o d-flex flex-column justify-content-center align-items-center my-3 weather-text">
                <img src="https:${data.forecast.forecastday[1].day.condition.icon}" alt="icon1" class="w-15">
                <p class="py-1 fs-5 fw-bolder text-white">${data.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</p>
                <p class="py-1">${data.forecast.forecastday[1].day.mintemp_c}<sup>o</sup>C</p>
                <p class="py-1 weather-state-text">${data.forecast.forecastday[1].day.condition.text}</p>
            </div>
        </div>
    </div>
    <div class="col-md-4 ">
        <div class="weather-card round-2 bg-6">
            <div class="date  d-flex flex-row justify-content-center align-items-center round-3 weather-text bg-5 pt-1">
                <p>${getdate(data.forecast.forecastday[2].date)[0]}</p>
            </div>
            <div class="state d-flex flex-column justify-content-center align-items-center my-3 weather-text">
                <img src="https:${data.forecast.forecastday[2].day.condition.icon}" alt="icon1" class="w-15">
                <p class="py-1 fs-5 fw-bolder text-white">${data.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</p>
                <p class="py-1">${data.forecast.forecastday[2].day.mintemp_c}<sup>o</sup>C</p>
                <p class="py-1 weather-state-text">${data.forecast.forecastday[2].day.condition.text}</p>
            </div>
        </div>
            </div>`;
        }


    } else {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=1cf2b4c26b4c4dc294361216240601&q=${value}&days=3`);

        if (response.status == 200) {
            const data = await response.json();
            cards.innerHTML = `<div class="col-md-4">
        <div class="weather-card round-1 bg-2">
            <div class="date  d-flex flex-row justify-content-between align-items-center weather-text bg-1 pt-1">
                <p>${getdate(data.location.localtime)[0]}</p>
                <p>${getdate(data.location.localtime)[2]}${getdate(data.location.localtime)[1]}</p>
            </div>
            <div class="state d-flex flex-column justify-content-center weather-text px-3 py-2 ">
                <p class="text-size">${data.location.name}</p>
                <div class="temp d-flex flex-row justify-content-around align-items-center">
                    <p>${data.current.temp_c}<sup>o</sup>C</p>
                    <img src="https:${data.current.condition.icon}" alt="icon1" class="w-15">
                </div>
                <p class="weather-state-text">${data.current.condition.text}</p>
                <div class="proprty d-flex flex-row justify-content-between align-items-center w-75">
                    <div class="sub-property d-flex flex-row justify-content-center align-items-baseline">
                        <img src="images/icon-umberella.png" alt="rain" class="mx-1">
                        <p>${data.current.humidity}%</p>
                    </div>
                    <div class="sub-property d-flex flex-row justify-content-center align-items-baseline">
                        <img src="images/icon-wind.png" alt="wind" class="mx-1">
                        <p>${data.current.wind_kph}</p>
                    </div>
                    <div class="sub-property d-flex flex-row justify-content-center align-items-baseline">
                        <img src="images/icon-compass.png" alt="compass" class="mx-1">
                        <p>East</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-4 ">
        <div class="weather-card-o bg-4">
            <div class="date-o d-flex flex-row justify-content-center align-items-center  weather-text bg-3 pt-1">
                <p>${getdate(data.forecast.forecastday[1].date)[0]}</p>
            </div>
            <div class="state-o d-flex flex-column justify-content-center align-items-center my-3 weather-text">
                <img src="https:${data.forecast.forecastday[1].day.condition.icon}" alt="icon1" class="w-15">
                <p class="py-1 fs-5 fw-bolder text-white">${data.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</p>
                <p class="py-1">${data.forecast.forecastday[1].day.mintemp_c}<sup>o</sup>C</p>
                <p class="py-1 weather-state-text">${data.forecast.forecastday[1].day.condition.text}</p>
            </div>
        </div>
    </div>
    <div class="col-md-4 ">
        <div class="weather-card round-2 bg-6">
            <div class="date  d-flex flex-row justify-content-center align-items-center round-3 weather-text bg-5 pt-1">
                <p>${getdate(data.forecast.forecastday[2].date)[0]}</p>
            </div>
            <div class="state d-flex flex-column justify-content-center align-items-center my-3 weather-text">
                <img src="https:${data.forecast.forecastday[2].day.condition.icon}" alt="icon1" class="w-15">
                <p class="py-1 fs-5 fw-bolder text-white">${data.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</p>
                <p class="py-1">${data.forecast.forecastday[2].day.mintemp_c}<sup>o</sup>C</p>
                <p class="py-1 weather-state-text">${data.forecast.forecastday[2].day.condition.text}</p>
            </div>
        </div>
            </div>`;
        }

    }

}
getData();