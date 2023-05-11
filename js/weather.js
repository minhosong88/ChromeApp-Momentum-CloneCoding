const API_KEY ="fe26225bc63f7cb88da1d03feead0d05";


function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("you live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
        .then(response =>response.json()
        .then((data)=>{
            const weather=document.querySelector("#weather #temp span:nth-child(1)");
            const temp=document.querySelector("#weather #temp span:nth-child(2)");
            const city=document.querySelector("#weather #city");
            temp.innerText = `${data.main.temp}℃`;  
            weather.innerText = `${data.weather[0].main}`; 
            city.innerText = `@${data.name}`;
            }));    
}
function onGeoError(){
    alert("Can't Find your lacation. Weather information is not available.")
}
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);

