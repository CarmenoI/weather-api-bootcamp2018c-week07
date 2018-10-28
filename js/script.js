// document.querySelector('form').addEventListener('submit', weather)
// document.querySelector
// const apiKey = "303be78f98622c038f39a513947788cc"
//
// //function that allows the user to enter city and country and get back a temp
// function weather(e){
//  e.preventDefault()
//  let city = document.querySelector('#city').value
//  let country = document.querySelector('#country').value
//  let current =document.querySelector('#current').value
//  let apiKey= "303be78f98622c038f39a513947788cc"
//  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${apiKey}`)
//    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
//    .then(response => {
//        let f = (response.main.temp)-273.15)*9/5+32}
//        alert`this in celsius ${(f)}`
//        current.text.Content = f.toFixed(1)
//        // document.querySelector('#currentTemp').textContent = response.main.temp
//    })
//    .catch(err => {
//        console.log(`error ${err}`)
//        alert("sorry, there are no results for your search")
//    });
//    //function to display the temp of the city entered
//
//
// }
//[                                                      The break between                                                          ]
const enter = document.querySelector("#submit")
const cityInput = document.querySelector("#city");
const countryInput = document.querySelector("#country");
let f = document.querySelector("#current");

let city = "";
let country = "";

enter.addEventListener("click", function(){
  city = cityInput.value
  country = countryInput.value
  getWeather();
  e.preventDefault()
})


function getWeather(){
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=303be78f98622c038f39a513947788cc`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
        console.log(response);
        console.log(response.main.temp)
        let f = (response.main.temp - 273.15) * 9/5 + 32
        current.textContent = f.toFixed(1)
    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
    document.getElementById("current")
    f.innerHTML.write = current
    // current.innerHTML.write = f;
}
