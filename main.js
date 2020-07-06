// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorMessage = document.querySelector("div")

const likes = document.getElementsByClassName("like-glyph")
let i = 0
for (const like of likes) {
  like.id= i 
  i++
  console.log(like)
  like.addEventListener("click", () => {
    mimicServerCall()
    .catch(function(error) {
    errorMessage.className=""
    errorMessage.innerText = error
    })
    setTimeout(() => {errorMessage.className= "hidden"}, 5000)
    if (errorMessage.className === "hidden"){
      if (like.className === "like-glyph"){
        document.getElementById(like.id).innerText=`${FULL_HEART}`
        like.className = "liked-glyph, activated-heart"
      } else {
        document.getElementById(like.id).innerText=`${EMPTY_HEART}`
        like.className = "like-glyph"
      }
    }
  })
  
}

  
 





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
