const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

let glyphStates = {
  "♡": "♥",
  "♥": "♡",
};

let colorStates = {
  red: "",
  "": "red",
};

let articleHearts = document.querySelectorAll(".like");

function likeCallback(e) {
  let heart = e.target;
  mimicServerCall("bogusUrl")
    .then(function (serverMessage) {
      heart.innerText = glyphStates[heart.innerText];
      heart.style.color = colorStates[heart.style.color];
    })
    .catch(function (error) {
      const modal = document.getElementById("modal");
      const modalMsg = document.getElementById("modal-message");
      modalMsg.innerText = error;
      modal.className = "";
      setTimeout(function () {
        modal.className = "hidden";
      }, 5000);
    });
}

for (let glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
