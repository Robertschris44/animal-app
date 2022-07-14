// get modal element
var modal = document.getElementById('simpleModal');
// get open modal button
var modalBtn = document.getElementById('modalBtn');
// get close modal button
var closeBtn = document.getElementsByClassName('closeBtn')[0];
// get random dog pic
var randomDogPic = document.getElementById('randomDogPic');
// get article 
// var article = document.getElementById("article");


// listen for randomDogPic button click, display and fetch new image
modalBtn.addEventListener('click', function(){
    modal.style.display = 'block';
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(res=>res.json())
        .then(result => {
            console.log(result)
            randomDogPic.src = result.message
        })
        .then(result => {
            localStorage.setItem('randomDogPic', JSON.stringify(result))
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

    