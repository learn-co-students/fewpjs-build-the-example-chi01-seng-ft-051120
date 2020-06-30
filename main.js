// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
function main() {
  const modal = document.getElementById("modal");
  modal.className = "hidden";
  const hearts = document.getElementsByClassName("like-glyph");
  for(let i=0; i<hearts.length; i++) {
    hearts[i].addEventListener("click", likeMe)
  } 
};

function likeMe() {
  let heart = event.target;
  mimicServerCall()
  .then(message => renderHeart(heart))
  .catch(error => displayError())
}

function renderHeart(heart) {
  if (heart.innerHTML === EMPTY_HEART) {
    heart.innerHTML = FULL_HEART; 
    heart.className = "activated-heart"
  } else {
    heart.innerHTML = EMPTY_HEART;
    heart.classList.remove("activated-heart")
  }  
}

function displayError() {
  const modal = document.getElementById("modal");
  modal.classList.remove("hidden")
  setTimeout(function() {
    modal.className = "hidden";
  }, 5000)
}

main();


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
