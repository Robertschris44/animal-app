var apiUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=JyFH4JN1GsOMgWAttCoCmEnNq3Fhd6Jg";

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

   