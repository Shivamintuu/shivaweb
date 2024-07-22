const apikey ="ce3af445b048a82000b3bf94c050900b";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metrics&q=";


const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector("button");
const weathericon=document.querySelector(".weatherimg");


async function chechweather(city){
    const response= await fetch(apiurl + city +`&appid=${apikey}`);
    var data =await response.json();
    console.log(data);
    
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)/10+"℃";
    document.querySelector(".humidity1").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind1").innerHTML=data.wind.speed+"km/hr";
    document.querySelector(".city").innerHTML=data.name;

     if(data.weather[0].main == "Clouds"){
       weathericon.src="/cloud.png";

     }
     else if(data.weather[0].main == "Clear"){
       weathericon.src="/clear.png";

     }
     else if(data.weather[0].main == "Haze"){
       weathericon.src="/mist.png";

     }
     else if(data.weather[0].main == "Rain"){
       weathericon.src="/rain.png";

     }
     else if(data.weather[0].main == "Snow"){
       weathericon.src="/snow.png";

     }
     
    
     
    }
    searchbtn.addEventListener("click", ()=>{
        chechweather(searchbox.value);

    })



    
