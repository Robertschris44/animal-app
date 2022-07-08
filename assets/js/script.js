var apiUrl = "https://archive.org/advancedsearch.php?q=subject:google+sheets&output=json";

var listEl = document.getElementById("myData");

fetch(apiUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        var docArray = data.response.docs;
        for (var i = 0; i < docArray.length; i++) {
            var listItem = document.createElement("li");
            listItem.textContent = docArray[i].description;
            listEl.appendChild(listItem);
        }
    })
    .catch(function(error){
        console.log(error);
    });
