// get modal element
var modal = document.getElementById("simpleModal");
// get open modal button
var modalBtn = document.getElementById("modalBtn");
// get close button
var closeBtn = document.getElementById("closeBtn");

// Listen for click
modalBtn.addEventListener('')


var apiUrl = "http://api.nytimes.com/svc/topstories/v2/us.json?api-key=UhYa3vUq6CEUGa2w1YE358ZWzhD1DjEz"

// var listEl = document.getElementById("myData");

fetch(apiUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        
    })
    .catch(function(error){
        console.log(error);
    });


    // this works:
    // "https://api.humorapi.com/jokes/random?api-key=6a579bfcf6ca422d85fccfe8a0d550c2"
    // "http://api.nytimes.com/svc/semantic/v2/concept/search.json?query=animals&nytd_topic=rescue,shelter,pet&api-key=UhYa3vUq6CEUGa2w1YE358ZWzhD1DjEz
    // "https://dog.ceo/api/breeds/image/random";
    // "https://api.chucknorris.io/jokes/random"
    // "http://api.nytimes.com/svc/semantic/v2/concept/search.json?query=pets&api-key=UhYa3vUq6CEUGa2w1YE358ZWzhD1DjEz"
