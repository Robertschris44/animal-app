// get modal element
var modal = document.getElementById('simpleModal');
// get open modal button
var modalBtn = document.getElementById('modalBtn');
// get close modal button
var closeBtn = document.getElementsByClassName('closeBtn')[0];
// get random dog pic
var randomDogPic = document.getElementById('randomDogPic');

// listen for click
modalBtn.addEventListener('click', function(){
    modal.style.display = 'block';
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(res=>res.json())
        .then(result => {
            console.log(result)
            randomDogPic.src = result.message
        })
        .catch(err=>console.log(err));
})
    

// listen for close click
closeBtn.addEventListener('click', closeModal);
// listen for outside click
window.addEventListener('click', outsideClick);


// function to close modal
function closeModal(){
    modal.style.display = 'none';
}

// function to close modal if outside click
function outsideClick(e){
    if (e.target == modal){
        modal.style.display = 'none';
    }
}


var apiUrl = "http://api.nytimes.com/svc/topstories/v2/us.json?api-key=UhYa3vUq6CEUGa2w1YE358ZWzhD1DjEz"

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
