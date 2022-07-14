// get modal element
var modal = document.getElementById('simpleModal');
// get open modal button
var modalBtn = document.getElementById('modalBtn');
// get close modal button
var closeBtn = document.getElementsByClassName('closeBtn')[0];
// get random dog pic
var randomDogPic = document.getElementById('randomDogPic');
// div id for recent buddy to display
var buddyEl = document.querySelector('#buddy')


// listen for randomDogPic button click, display and fetch new image
modalBtn.addEventListener('click', function(){
    modal.style.display = 'block';
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(res=>res.json())
        .then(result => {
            console.log(result)
            randomDogPic.src = result.message
            localStorage.setItem('randomDogPic', JSON.stringify(result))

        })
        .catch(err=>console.log(err));

})

// 

// listen for close click
closeBtn.addEventListener('click', closeModal);

// listen for outside click
window.addEventListener('click', outsideClick);

// function to close modal
function closeModal(){
    // // create list item
    // var listBuddyEl = document.createElement("li");
    // listBuddyEl.className = "buddyList";

    // // create div to hold content and add to list item
    // var contentInfoEl = document.createElement("div");

    // // give it a class name
    // contentInfoEl.className = "buddyUrl";

    // JSON.parse(localStorage.getItem('randomDogPic', 'message'));
    // document.getElementById('buddy').src = '';
    // // add HTML content to div
    // contentInfoEl.innerHTML = "<img src=" +  + "</>";
    // listBuddyEl.appendChild(contentInfoEl);

    // // add list item to list
    // buddyEl.appendChild(listBuddyEl);

    modal.style.display = 'none';
}

// function to close modal if outside click
function outsideClick(e){
    if (e.target == modal){
        modal.style.display = 'none';
    }
}


var apiUrl = "https://api.nytimes.com/svc/topstories/v2/us.json?api-key=UhYa3vUq6CEUGa2w1YE358ZWzhD1DjEz"

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

    