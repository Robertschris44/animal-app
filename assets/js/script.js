var apiUrl = "https://api.adoptapet.com/search/pets_at_shelter?key=A34F48&v=1&output=xml&shelter_id=2342";

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
