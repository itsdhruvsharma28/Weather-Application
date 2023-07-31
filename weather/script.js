const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const bgc_video=document.querySelector(".background-clip");
bgc_video.style.height="870px";
const location_error = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');
          

async function checkWeather(city){
    const api_key = "8e6954edcc83d0b98258106394d3c6d7";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    
    if(weather_data.cod === `404`){
        location_error.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }
    // else
    // {
    console.log("run");
    location_error.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;


    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "/assets/cloud.png";
            bgc_video.src ="https://cdn.pixabay.com/vimeo/217588665/cloud-9151.mp4?width=1366&hash=cabc12e85dc3b8f451065ca7f1c60b8f16f3b639"; 
         
            break;
        case 'Clear':
            weather_img.src = "/assets/clear.png";
            bgc_video.src ="https://cdn.pixabay.com/vimeo/587646749/road-84970.mp4?width=1280&hash=75f02aa873a644853d6e494295ff76106a43b653";
            break;

        case 'Rain':
            weather_img.src = "/assets/rain.png";
            bgc_video.src ="https://player.vimeo.com/external/293913779.sd.mp4?s=391a9b4a5da506bcaab3bd20172f6368bc2ea2f5&profile_id=164&oauth2_token_id=57447761";

            break;
        case 'Mist':
            weather_img.src = "/assets/mist.png";
            bgc_video.src ="https://cdn.pixabay.com/vimeo/689925384/forest-111101.mp4?width=640&hash=21dd5e64a2f54c8639da11f8d0167195331824ec";
            break;

           case 'Wind':
                weather_img.src = "/assets/mist.png";
                bgc_video.src ="https://player.vimeo.com/external/308466443.sd.mp4?s=ef6a3d8c2496c77ab25e4d16f4cbd6bb4b51125b&profile_id=164&oauth2_token_id=57447761";
                break;

        case 'Snow':
            weather_img.src = "/assets/snow.png";
            bgc_video.src ="https://cdn.pixabay.com/vimeo/303404014/labrador-19572.mp4?width=640&hash=d120577129bc9b06bf40e56339a6de72e4e391a3";
            break;
            
        case 'Haze':
            weather_img.src = "/assets/mist.png";
            bgc_video.src ="https://cdn.pixabay.com/vimeo/387675159/upper-palatinate-31556.mp4?width=960&hash=e2a4a5ca3b71ab616fcf0fb4b403110587e34f48";
            break;

            case 'Drizzle':
            weather_img.src = "/assets/snow.png";
            bgc_video.src ="https://cdn.pixabay.com/vimeo/368501609/rain-28236.mp4?width=640&hash=834994beb632a32cbbe285cce4a1868392d5d37f";
            break;

    }

    console.log(weather_data);
}

searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});
