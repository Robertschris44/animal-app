var apiUrl = "https://api.humorapi.com/jokes/random?api-key=6a579bfcf6ca422d85fccfe8a0d550c2"

var listEl = document.getElementById("myData");

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
    //  http://api.nytimes.com/svc/semantic/v2/concept/search.json?query=animals&nytd_topic=rescue,shelter,pet&api-key=UhYa3vUq6CEUGa2w1YE358ZWzhD1DjEz


    // var apiUrl = "https://dog.ceo/api/breeds/list/all";
    // "https://api.chucknorris.io/jokes/random"
    //"http://api.nytimes.com/svc/semantic/v2/concept/search.json?query=pets&api-key=UhYa3vUq6CEUGa2w1YE358ZWzhD1DjEz"
