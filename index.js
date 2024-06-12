const apiKey = "461ec0645916ae55df72e19146bf9c8e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".icon button");

const weatherIcon = document.querySelector(".weathe_icon");

async function checkWeather(city)
{
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".p1").innerHTML = Math.round(data.main.temp) + '°c';
    document.querySelector(".p2").innerHTML = data.name;
    document.querySelector(".p3").innerHTML = data.main.humidity+'%';
    document.querySelector(".p4").innerHTML = data.wind.speed + 'km/h';

    if(data.weather[0].main =="Clouds")
        {
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main =="Clear")
            {
                weatherIcon.src = "images/clear.png";
            }
        else if(data.weather[0].main =="Rain")
            {
                weatherIcon.src = "images/rain.png";
            }
        else if(data.weather[0].main =="Drizzle")
            {
                weatherIcon.src = "images/drizzle.png";
            }
        else if(data.weather[0].main =="Mist")
            {
                weatherIcon.src = "images/mist.png";
            }
        else if(data.weather[0].main =="Snow")
            {
                weatherIcon.src = "images/snow.png";
            }

}

searchBtn.addEventListener("click", ()=>
{
    checkWeather(searchBox.value);

})


