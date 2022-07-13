var getArtbtn = document.getElementById('get-art');
var apiUrl = "https://api.nytimes.com/svc/topstories/v2/us.json?api-key=JyFH4JN1GsOMgWAttCoCmEnNq3Fhd6Jg";
var listEl = document.getElementById("press-art");


function getArt(){
fetch(apiUrl)
  .then(res =>res.json())
  .then(function(getArt) {
    for(i=0; i <=27; i++) 

  });
}

getArt();


/*
fetch(apiUrl)
then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    
})
.catch(function(error){
    console.log(error);
});
*/



/*function getArt(){
    fetch(apiUrl)
      .then(response =>response.json())
      .then(data => {
        for(i=0; i<=27; i++) 
    
      })
    }
    
    getArt();







   