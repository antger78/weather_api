// let apikey = "02b2070ab2a3000118358e8e0fa9f65d";
let searchHistory = [];


var apiKey = "02b2070ab2a3000118358e8e0fa9f65d";
var url =
  "https://api.openweathermap.org/data/2.5/onecall?q=New%20York&appid=02b2070ab2a3000118358e8e0fa9f65d";

// var urlLocation = "api.openweathermap.org/data/2.5/weather?q={city name}&appid= 02b2070ab2a3000118358e8e0fa9f65d"

var cityName = "Los Angeles";

//query selections
var searchBtn = document.querySelector("button-addon2");
// function testBtn() {
//     console.log('here');
// }
// function selectCity() {
//     var
// }

function search(cityName, latitude, longitude) {
  console.log("here");

  // var urlFiveDay = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  // fetch(urlFiveDay)
  //   .then((res) => res.json())
  //   .then(function (data) {
  //     console.log(data);
  //     // var latitude = data.coord.lat;
  //     // var longitude = data.coord.lon;
  //   });

  var urlLocation = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  fetch(urlLocation)
    .then((res) => res.json())
    .then(function (data) {
      console.log(data.coord);
      var latitude = data.coord.lat;
      var longitude = data.coord.lon;
      // var uvIndex = data.current.uvi;
//______________________________Weather for today 
      var urlWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

      fetch(urlWeather)
        .then((res) => res.json())
        .then(function (data) {
          console.log(data.current.temp);
          console.log(data.current.wind_speed);
          console.log(data.current.humidity);
          console.log(data.current.uvi);
        });
      var urlFiveDay = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;
      fetch(urlFiveDay)
        .then((res) => res.json())
        .then(function (data) {
          //______________Day 1
          console.log(data.list[0].dt_txt);
          console.log(data.list[0].weather);
          console.log(data.list[0].main.temp);
          console.log(data.list[0].main.humidity);
          console.log(data.list[0].wind.speed);
          //_______________Day 2
          console.log(data.list[8].dt_txt);
          console.log(data.list[8].weather);
          console.log(data.list[8].main.temp);
          console.log(data.list[8].main.humidity);
          console.log(data.list[8].wind.speed);
          //_______________Day 3
          console.log(data.list[16].dt_txt);
          console.log(data.list[16].weather);
          console.log(data.list[16].main.temp);
          console.log(data.list[16].main.humidity);
          console.log(data.list[16].wind.speed);
          //_______________Day 4
          console.log(data.list[24].dt_txt);
          console.log(data.list[24].weather);
          console.log(data.list[24].main.temp);
          console.log(data.list[24].main.humidity);
          console.log(data.list[24].wind.speed);
          //_______________Day 5
          console.log(data.list[32].dt_txt);
          console.log(data.list[32].weather);
          console.log(data.list[32].main.temp);
          console.log(data.list[32].main.humidity);
          console.log(data.list[32].wind.speed);
          // var latitude2= data.city.coord.lat;
          // var longitude2 = data.city.coord.lon;
        });
    });
}

// get the input first
search("New York");

// Get date at top of screen
const today = moment().format("LL");    
$("#currentDay").append("Today is: " + today);

//event listener
document.getElementById("button-addon2").addEventListener("click", search);

//_____________________________________________________________________________________________

//query selector, grab "button addon-2"
//add listener event, click to search function
//search
