window.addEventListener("load", generateFaces);
let numberOfFaces = 5;
let numRounds = 0;
const theLeftSide = document.querySelector("#leftSide");
const theRightSide = document.querySelector("#rightSide");

function generateFaces() {
  for (let i = 1; i <= numberOfFaces; i++) {
    let face = document.createElement("img");
    face.src = "../images/smile.png";
    let randomTop = Math.floor(Math.random() * 400 + 1);
    let randomLeft = Math.floor(Math.random() * 400 + 1);
    face.style.top = randomTop + "px";
    face.style.left = randomLeft + "px";
    theLeftSide.appendChild(face);
    document.body.addEventListener("click", gameOver);
  }

  theLeftSide.lastChild.addEventListener("click", nextLevel);
  const leftSideImages = theLeftSide.cloneNode(true);
  leftSideImages.removeChild(leftSideImages.lastChild);
  theRightSide.appendChild(leftSideImages);
}

function nextLevel() {
  event.stopPropagation();
  numRounds += 1;
  numberOfFaces += 5;
  while (theLeftSide.firstChild) {
    theLeftSide.removeChild(theLeftSide.firstChild);
  }
  while (theRightSide.firstChild) {
    theRightSide.removeChild(theRightSide.firstChild);
  }
  generateFaces();
}

function gameOver() {
  alert("Game Over! " + numRounds + " rounds!");
  document.body.removeEventListener("click", gameOver);
  theLeftSide.lastChild.removeEventListener("click", nextLevel);
}

restart.onclick = function newGame(event) {
  event.stopPropagation();
  location.reload(true);
};
