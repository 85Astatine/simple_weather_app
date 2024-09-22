let city = document.querySelector(".place");
let btn = document.querySelector(".search_btn");
let inp = document.querySelector(".inp input");
let temp = document.querySelector(".tempareture");
let humidity = document.querySelector(".hum_div .hum_per");
let wind = document.querySelector(".hum_div .hum_wind")
let image = document.querySelector(".weather_1 img")

btn.addEventListener("click",(evt)=>{
    evt.preventDefault;
    inp_value = inp.value;
    if(inp_value==="" || inp_value === " "){
        alert("EROR! please try again.")
        inp_value = ""
        return;
    }
    weather(inp_value)
})


let weather = async(val)=>{
    try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${val.toLowerCase()}&appid=f3f0f13aa773af889c918c5084c9f9d5&units=metric`;
        let fa = await fetch(url);
        let response = await fa.json();
        work(response)
    }catch(error){}
}

let work = (resp) => {
    let city_name = resp.name;    
    let v;
    if(city_name === v){
        alert("EROR! Try again.")
        return;
    }
    city.innerText = city_name;
    let tempareture = resp.main.temp;
    temp.innerText = `${tempareture}°C`
    let humid = resp.main.humidity;
    humidity.innerText = `${humid}%`;
    let windspeed = resp.wind.speed;
    wind.innerText = `${windspeed}km/h`;
    sun_cloud(resp) 
}
let sun_cloud = (resp) =>{
    let situation = resp.weather[0].main;
    if(situation === "Clear"){
        image.setAttribute("src","Clear.png")
    }else if(situation === "Clouds"){
        image.setAttribute("src", "Clouds.png")
    }else if(situation === "Rain"){
        image.setAttribute("src", "Rain.png")
    }else if(situation === "Haze"){
        image.setAttribute("src", "Haze.png")
    }
}
window.addEventListener("load",()=>{
    weather("dhaka")
})
