// Event Listeners
document.addEventListener("keyup", (e) => {
  const pressedKey = e.key.toUpperCase();
  const currentAlphabet = document.getElementById("current-alphabet").innerText;

  if (pressedKey === currentAlphabet) {
    updateScore();
    setCurrentAlphabetStyle(currentAlphabet.toLowerCase(), "remove");
    playGame();
  } else {
    updateLives();
  }
});

// Initial Setup
const startGame = () => {
  swapScreen("home", "play-ground");
  playGame();
};

const restartGame = () => {
  const currentAlphabet = document.getElementById("current-alphabet").innerText;
  setCurrentAlphabetStyle(currentAlphabet.toLowerCase(), "remove");
  document.getElementById("current-lives").innerText = 3;
  document.getElementById("current-score").innerText = 0;
  swapScreen("score-screen", "play-ground");
  playGame();
};
