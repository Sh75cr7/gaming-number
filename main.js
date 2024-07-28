const playerOneHolder = document.querySelector(".playerOneHolder");
const playerOne = document.querySelector(".playerOne");
const playerOneError = document.querySelector(".playerOneError");
const playerOneInput = document.querySelector(".playerOneInput");
const startBtn = document.querySelector(".startBtn");

// player two

const playerTwoHolder = document.querySelector(".playerTwoHolder");
const playertwo = document.querySelector(".playertwo");
const playertwoError = document.querySelector(".playertwoError");
const playertwoInput = document.querySelector(".playertwoInput");
const GuessBtn = document.querySelector(".GuessBtn");
const startAgain = document.querySelector(".startAgain");

// start button funcitonality implement

let givenNumber = null;
let chance = 4;
startBtn.addEventListener("click", () => {
  if (isNaN(playerOneInput.value)) {
    playerOneError.style.display = "block";
    playerOneError.style.margin = "0";
    playerOneError.style.color = "red";
    playerOneError.innerHTML =
      "You are typed invalid input , input can be Number ";
  } else if (playerOneInput.value < 0 || playerOneInput.value > 10) {
    console.log(playerOneInput.value);
    playerOneError.innerHTML = "Number Must be 1 to 9";
    playerOneError.style.margin = "0";
    playerOneError.style.color = "red";
    playerOneError.style.display = "block";
  } else {
    givenNumber = playerOneInput.value;

    // player two funtionality start
    playerOneHolder.style.display = "none";
    playerTwoHolder.style.display = "block";
  }
});

// guess button funtionality start

GuessBtn.addEventListener("click", () => {
  if (isNaN(playertwoInput.value)) {
    playertwoError.style.display = "block";
    playertwoError.style.margin = "0";
    playertwoError.style.color = "red";
    playertwoError.innerHTML =
      "You are typed invalid input , input can be Number ";
  } else if (playertwoInput.value < 0 || playertwoInput.value > 10) {
    playertwoError.innerHTML = "Number Must be 1 to 9";
    playertwoError.style.margin = "0";
    playertwoError.style.color = "red";
    playertwoError.style.display = "block";
  } else {
    chance--;
    playertwoError.style.display = "block";
    playertwoError.innerHTML = `You have ${chance} chance`;
    playertwoError.style.color = "blue";

    if (givenNumber == playertwoInput.value) {
      GuessBtn.style.display = "none";
      playertwoInput.style.display = "none";
      playertwoError.style.display = "none";
      playertwo.innerHTML = "** You are Win ** ";
      playertwo.style.color = "Green";
      playertwo.style.fontSize = "27px";
      startAgain.style.display = "block";
    }

    if (chance == 0) {
      GuessBtn.style.display = "none";
      playertwoInput.style.display = "none";
      playertwoError.style.display = "none";
      playertwo.innerHTML = "**Game Over Try again**";
      playertwo.style.color = "Red";
      playertwo.style.fontSize = "27px";
      startAgain.style.display = "block";
    }
  }
});

// startAgain button
startAgain.addEventListener("click", () => {
  location.reload();
});