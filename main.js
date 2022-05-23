// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//create a functon called updateHeart. The function should make a server call to the mimicServerCall function using fetch. You will not need to
//convert the response to json. On a failed server call send an error to <div id="modal">'s h2 element. On a succeful server call, change the heart
//to full, if the heart is currently empty, and vice versa.
addEventListenerToLikeGlyph()

function addEventListenerToLikeGlyph() {
  let likeButton = document.querySelectorAll('.like-glyph')
  for (let button of likeButton) {
    button.addEventListener('click', e => {
      mimicServerCall()
      .then(resp => updateHeart(resp, e))
      .catch(error => setError(error))
    })
  }
}

function updateHeart(resp, e) {
  let likeGlyph = e.target
  let errorDiv = document.querySelector('div#modal')
  errorDiv.classList.add("hidden")
    if (e.target.textContent === EMPTY_HEART) {
      likeGlyph.textContent = FULL_HEART
      likeGlyph.classList.add('activated-heart')
    } else {
      likeGlyph.textContent = EMPTY_HEART
      likeGlyph.classList.remove('activated-heart')
    }
}

function setError(error) {
  let errorDiv = document.querySelector('div#modal')
  errorDiv.classList.remove("hidden")
  let errorMessage = errorDiv.querySelector('h2')
  errorMessage.textContent = error
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
