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


let apiUrl = "http://api.nytimes.com/svc/topstories/v2/world.json?api-key=UhYa3vUq6CEUGa2w1YE358ZWzhD1DjEz"

let headlines = document.getElementById('headlines');

fetch(apiUrl)
.then(response => response.json())
.then(data => {
    console.log(data);

    data.results.map(article => {

        console.log(article.title);

        let a = document.createElement("a");
        a.setAttribute('href', article.url);
        a.innerHTML = article.title;
        a.setAttribute("class", "article-title");

        let p = document.createElement("p");
        p.innerHTML = article.abstract;

        let img = document.createElement("img");
        img.setAttribute('src', article.multimedia[0].url);

        headlines.appendChild(img);
        headlines.appendChild(a);
        headlines.appendChild(p);
    })
})
        
        


