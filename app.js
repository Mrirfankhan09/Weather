
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '01871af76bmshf6fec227d1490f4p127fe0jsn2be5b0b52273',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

let city = document.getElementById("Search");
let whetertype = document.getElementById("whetertype");
let degree = document.getElementById("degree");
let locations = document.getElementById('location');
let humidity=document.getElementById("innumhum");
let wind =document.getElementById("innumwind");
let btn = document.getElementById("icon");


function getWheater(){

    let url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city.value}`;
    fetch(url,options).
    then((Response)=>{
        return Response.json();
    }).
    then((data)=>{
        console.log(data);
        locations.innerHTML=city.value;
        degree.innerHTML=`${data.temp}°<small>C</small>`
        humidity.innerHTML=`${data.humidity}%<br><small>Humidity</small>`
        wind.innerHTML=`${data.wind_speed
        }km/h<br><small>wind speed</small>`
    })

    // city.value="";
}
btn.addEventListener("click",(e)=>{
    getWheater();
})




// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }