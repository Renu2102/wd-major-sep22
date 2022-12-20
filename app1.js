 //api key:0b5102a4959719a630cee1fea1514e8b
 //SELECT ELEMENTS
 const iconElement= document.querySelector(".weather-icon");
 const iconElement1= document.querySelector(".weather-icon1");
 const iconElement2= document.querySelector(".weather-icon2");
 const iconElement3= document.querySelector(".weather-icon3");
 const iconElement4= document.querySelector(".weather-icon4");
 const iconElement5= document.querySelector(".weather-icon5");
 const iconElement6= document.querySelector(".weather-icon6");

 //temp
 const tempElement= document.querySelector(".tempeature-value p");
 const tempElement1= document.querySelector(".tempeature1-value p");
 const tempElement2= document.querySelector(".tempeature2-value p");
 const tempElement3= document.querySelector(".tempeature3-value p");
 const tempElement4= document.querySelector(".tempeature4-value p");
 const tempElement5= document.querySelector(".tempeature5-value p");
 const tempElement6= document.querySelector(".tempeature6-value p");
//humidity

 const humidityElement= document.querySelector(".humidity-value p");
 const humidityElement1= document.querySelector(".humidity1-value p");
 const humidityElement2= document.querySelector(".humidity2-value p");
 const humidityElement3= document.querySelector(".humidity3-value p");
 const humidityElement4= document.querySelector(".humidity4-value p");
 const humidityElement5= document.querySelector(".humidity5-value p");
 const humidityElement6= document.querySelector(".humidity6-value p");

//speed

 const speedElement= document.querySelector(".speed-value p");
 const speedElement1= document.querySelector(".speed1-value p");
 const speedElement2= document.querySelector(".speed2-value p");
 const speedElement3= document.querySelector(".speed3-value p");
 const speedElement4= document.querySelector(".speed4-value p");
 const speedElement5= document.querySelector(".speed5-value p");
 const speedElement6= document.querySelector(".speed6-value p");

 //description
 const descElement= document.querySelector(".tempeature-description p");
 const descElement1= document.querySelector(".tempeature1-description p");
 const descElement2= document.querySelector(".tempeature2-description p");
 const descElement3= document.querySelector(".tempeature3-description p");
 const descElement4= document.querySelector(".tempeature4-description p");
 const descElement5= document.querySelector(".tempeature5-description p");
 const descElement6= document.querySelector(".tempeature6-description p");

 //location

 const locationElement= document.querySelector(".location p");
 const locationElement1= document.querySelector(".location1 p");
 const locationElement2= document.querySelector(".location2 p");
 const locationElement3= document.querySelector(".location3 p");
 const locationElement4= document.querySelector(".location4 p");
 const locationElement5= document.querySelector(".location5 p");
 const locationElement6= document.querySelector(".location6 p");


 //time
 const timelement= document.querySelector(".timelement");
 const timelement1= document.querySelector(".timelement1");
 const timelement2= document.querySelector(".timelement2");
 const timelement3= document.querySelector(".timelement3");
 const timelement4= document.querySelector(".timelement4");
 const timelement5= document.querySelector(".timelement5");
 const timelement6= document.querySelector(".timelement6");


//app data
 const weather={};
 weather.tempeature={
     unit:"celsius"
 }

 //app consts and vars
 const KELVIN=273;
 //APP KEY
 const key="a118259873569a20f2d37eb3711f5561";

 //check if browser supports gelococation
  if('geolocation'in navigator){
     navigator.geolocation.getCurrentPosition(setPosition, showError);

 }else{
     notificationElement.getElementsByClassName.display="block";
    notificationElement.innerHTML="<p>Browser doesn't support Geolacation</p>"

 }
 //set users position
 function setPosition(position){
    let latitude =position.coords.latitude;
         let longitude =position.coords.longitude;

     getweather(latitude,longitude);

 }
 //shoe error when there is an issue with geolocation service
 function showError(error){
         notificationElement.getElementsByClassName.display="block";
   notificationElement.innerHTML =`<p> ${error.message}</p>`;
 }
 //get weather from api provider
 function getweather(latitude,longitude){
     let api=`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${key}`;
 
 fetch(api)
 
 .then(function(response){
     let data= response.json();  
     return data;
 })


 .then(function(data){

    console.log(data.list[0].main)
       console.log(data)

     weather.iconId=data.list[0].weather[0].icon;
     const temp=Math.floor(data.list[0].main.temp-KELVIN)
     weather.temp=temp;
     console.log("dataT",weather.temp)
     weather.humidity=data.list[0].main.humidity;
     console.log("dataH",weather.humidity)
     weather.feels_like=data.list[0].main.feels_like;
     console.log("dataF",weather.feels_like)
     weather.speed=data.list[0].wind.speed;
     console.log("dataS",weather.speed)
     weather.city=data.city.name;
     console.log("dataN",weather.city)
     weather.country=data.city.country;
     console.log("dataC",weather.country)
     weather.description=data.list[0].weather[0].description;
     console.log("dataD",weather.description)
     weather.dt_txt=data.list[0].dt_txt;
     console.log("dataDT",weather.dt_txt)

     weather.iconId1=data.list[1].weather[0].icon;
     const temp1=Math.floor(data.list[1].main.temp-KELVIN)
     weather.temp1=temp1;
     console.log("data1",weather.temp1)
     weather.humidity1=data.list[1].main.humidity;
     console.log("data1",weather.humidity1)
     weather.feels_like1=data.list[1].main.feels_like;
     console.log("data1",weather.feels_like1)
     weather.speed1=data.list[1].wind.speed;
     console.log("data1",weather.speed1)
     weather.city1=data.city.name;
     console.log("data1",weather.city1)
     weather.country1=data.city.country;
     console.log("data1",weather.country1)
     weather.description1=data.list[1].weather[0].description;
     console.log("data1",weather.description1)
     weather.dt_txt1=data.list[1].dt_txt;
     console.log("data1", weather.dt_txt1)
     

     weather.iconId2=data.list[2].weather[0].icon;
     const temp2=Math.floor(data.list[2].main.temp-KELVIN)
     weather.temp2=temp2;
     console.log("data1",weather.temp2)
     weather.humidity2=data.list[2].main.humidity;
     console.log("data1",weather.humidity2)
     weather.feels_like2=data.list[2].main.feels_like;
     console.log("data1",weather.feels_like2)
     weather.speed2=data.list[2].wind.speed;
     console.log("data1",weather.speed2)
     weather.city2=data.city.name;
     console.log("data1",weather.city2)
     weather.country2=data.city.country;
     console.log("data1",weather.country2)
     weather.description2=data.list[2].weather[0].description;
     console.log("data1",weather.description2)
     weather.dt_txt2=data.list[2].dt_txt;
     console.log("data1", weather.dt_txt2)
     
     weather.iconId3=data.list[3].weather[0].icon;
     const temp3=Math.floor(data.list[3].main.temp-KELVIN)
     weather.temp3=temp3;
     console.log("data1",weather.temp3)
     weather.humidity3=data.list[3].main.humidity;
     console.log("data1",weather.humidity3)
     weather.feels_like3=data.list[3].main.feels_like;
     console.log("data1",weather.feels_like3)
     weather.speed3=data.list[3].wind.speed;
     console.log("data1",weather.speed3)
     weather.city3=data.city.name;
     console.log("data1",weather.city3)
     weather.country3=data.city.country;
     console.log("data1",weather.country3)
     weather.description3=data.list[3].weather[0].description;
     console.log("data1",weather.description3)
     weather.dt_txt3=data.list[3].dt_txt;
     console.log("data1", weather.dt_txt3)

     weather.iconId4=data.list[4].weather[0].icon;
     const temp4=Math.floor(data.list[4].main.temp-KELVIN)
     weather.temp4=temp4;
     console.log("data1",weather.temp4)
     weather.humidity4=data.list[4].main.humidity;
     console.log("data1",weather.humidity4)
     weather.feels_like4=data.list[4].main.feels_like;
     console.log("data1",weather.feels_like4)
     weather.speed4=data.list[4].wind.speed;
     console.log("data1",weather.speed4)
     weather.city4=data.city.name;
     console.log("data1",weather.city4)
     weather.country4=data.city.country;
     console.log("data1",weather.country4)
     weather.description4=data.list[4].weather[0].description;
     console.log("data1",weather.description4)
     weather.dt_txt4=data.list[4].dt_txt;
     console.log("data1", weather.dt_txt4)

     weather.iconId5=data.list[5].weather[0].icon;
     const temp5=Math.floor(data.list[5].main.temp-KELVIN)
     weather.temp5=temp5;
     console.log("data1",weather.temp5)
     weather.humidity5=data.list[5].main.humidity;
     console.log("data1",weather.humidity5)
     weather.feels_like4=data.list[5].main.feels_like;
     console.log("data1",weather.feels_like5)
     weather.speed5=data.list[5].wind.speed;
     console.log("data1",weather.speed5)
     weather.city5=data.city.name;
     console.log("data1",weather.city5)
     weather.country5=data.city.country;
     console.log("data1",weather.country5)
     weather.description5=data.list[5].weather[0].description;
     console.log("data1",weather.description5)
     weather.dt_txt5=data.list[5].dt_txt;
     console.log("data1", weather.dt_txt4)


     
     weather.iconId6=data.list[6].weather[0].icon;
     const temp6=Math.floor(data.list[6].main.temp-KELVIN)
     weather.temp6=temp6;
     console.log("data1",weather.temp6)
     weather.humidity6=data.list[6].main.humidity;
     console.log("data1",weather.humidity6)
     weather.feels_like6=data.list[6].main.feels_like;
     console.log("data1",weather.feels_like6)
     weather.speed6=data.list[6].wind.speed;
     console.log("data1",weather.speed6)
     weather.city6=data.city.name;
     console.log("data1",weather.city6)
     weather.country6=data.city.country;
     console.log("data1",weather.country6)
     weather.description6=data.list[6].weather[0].description;
     console.log("data1",weather.description6)
     weather.dt_txt6=data.list[6].dt_txt;
     console.log("data1", weather.dt_txt6)

    //  weather.speed=data.wind.speed;

    //  console.log(weather.humidity,'tesrrrr');

    //  weather.description=data.weather[0].description;
    //  weather.iconId =data.weather[0].icon;
     
    //  weather.city =data.name;
    //  const datez=(new Date().toLocaleDateString(`${weather.timezone}`.innerHTML).substring(0));
    //  weather.timezone =datez;

    // weather.country =data.sys.country;
    // console.log(new Date().toLocaleDateString(`${weather.timezone}`.innerHTML).substring(0));
 })
 .then(function(){
     displayWeather();
 });
}
 //display weather to UI
  function displayWeather(){
    iconElement.innerHTML=`<img src="icons/${weather.iconId}@2x.png"/>`;
    tempElement.innerHTML =`Temp :${weather.temp}°<span>C</span>`;
    humidityElement.innerHTML =` Humidity :${weather.humidity}<span> %</span>`;
    speedElement.innerHTML =`Speed:${weather.speed}<span>  km</span>`;
    descElement.innerHTML =`${weather.description}`;
    locationElement.innerHTML=`${weather.city},${weather.country}`;
    timelement.innerHTML= `Date : ${weather.dt_txt}`;

    iconElement1.innerHTML=`<img src="icons/${weather.iconId1}@2x.png"/>`;
    tempElement1.innerHTML =`Temp :${weather.temp1}°<span>C</span>`;
    humidityElement1.innerHTML =` Humidity :${weather.humidity1}<span> %</span>`;
    speedElement1.innerHTML =`Speed:${weather.speed1}<span>  km</span>`;
    descElement1.innerHTML =`${weather.description1}`;
    locationElement1.innerHTML=`${weather.city1},${weather.country1}`;
    timelement1.innerHTML= `Date : ${weather.dt_txt1}`;


    iconElement2.innerHTML=`<img src="icons/${weather.iconId2}@2x.png"/>`;
    tempElement2.innerHTML =`Temp :${weather.temp2}°<span>C</span>`;
    humidityElement2.innerHTML =` Humidity :${weather.humidity2}<span> %</span>`;
    speedElement2.innerHTML =`Speed:${weather.speed2}<span>  km</span>`;
    descElement2.innerHTML =`${weather.description2}`;
    locationElement2.innerHTML=`${weather.city2},${weather.country2}`;
    timelement2.innerHTML= `Date : ${weather.dt_txt2}`;
   
    iconElement3.innerHTML=`<img src="icons/${weather.iconId3}@2x.png"/>`;
    tempElement3.innerHTML =`Temp :${weather.temp3}°<span>C</span>`;
    humidityElement3.innerHTML =` Humidity :${weather.humidity3}<span> %</span>`;
    speedElement3 .innerHTML =`Speed:${weather.speed3}<span>  km</span>`;
    descElement3.innerHTML =`${weather.description3}`;
    locationElement3.innerHTML=`${weather.city3},${weather.country3}`;
    timelement3.innerHTML= `Date : ${weather.dt_txt3}`;

    
    iconElement4.innerHTML=`<img src="icons/${weather.iconId4}@2x.png"/>`;
    tempElement4.innerHTML =`Temp :${weather.temp4}°<span>C</span>`;
    humidityElement4.innerHTML =` Humidity :${weather.humidity4}<span> %</span>`;
    speedElement4.innerHTML =`Speed:${weather.speed4}<span>  km</span>`;
    descElement4.innerHTML =`${weather.description4}`;
    locationElement4.innerHTML=`${weather.city4},${weather.country4}`;
    timelement4.innerHTML= `Date : ${weather.dt_txt4}`;

    iconElement5.innerHTML=`<img src="icons/${weather.iconId5}@2x.png"/>`;
    tempElement5.innerHTML =`Temp :${weather.temp5}°<span>C</span>`;
    humidityElement5.innerHTML =` Humidity :${weather.humidity5}<span> %</span>`;
    speedElement5.innerHTML =`Speed:${weather.speed5}<span>  km</span>`;
    descElement5.innerHTML =`${weather.description5}`;
    locationElement5.innerHTML=`${weather.city5},${weather.country5}`;
    timelement5.innerHTML= `Date : ${weather.dt_txt5}`;

    iconElement6.innerHTML=`<img src="icons/${weather.iconId6}@2x.png"/>`;
    tempElement6.innerHTML =`Temp :${weather.temp6}°<span>C</span>`;
    humidityElement6.innerHTML =` Humidity :${weather.humidity6}<span> %</span>`;
    speedElement6.innerHTML =`Speed:${weather.speed6}<span>  km</span>`;
    descElement6.innerHTML =`${weather.description6}`;
    locationElement6.innerHTML=`${weather.city6},${weather.country6}`;
    timelement6.innerHTML= `Date : ${weather.dt_txt6}`;

  
 }
 console.log(new Date().toLocaleDateString(`${weather.timezone}`.innerHTML).substring(0));
 //c to f conversion
 function celsiusToFahrenheit(tempeature){
 return (tempeature *9/5)+32;
 }
 //when the user click on the temperature element
 tempElement.addEventListener("click",function(){
     if(weather.tempeature.value=== undefined) return;

     if(weather.tempeature.unit=="celsius"){
         let fahrenheit =celsiusToFahrenheit(weather.tempeature.value);
         fahrenheit =Math.floor(fahrenheit);
         tempElement.innerHTML=`${fahrenheit}°<span>F</span>`;
         weather.tempeature.unit ="fahrenheit";

     }else{
        tempElement.innerHTML =`${weather.tempeature.value}°<span>C</span>`;
        weather.tempeature.unit ="celsius"

     }

 });
