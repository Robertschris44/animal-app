var apiUrl = ""

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
    // var apiUrl = "https://dog.ceo/api/breeds/list/all";
