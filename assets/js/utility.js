// Constants
const ALPHABET_STRING = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Utility Functions
const swapScreen = (previousScreen, nextScreen) => {
  document.getElementById(previousScreen).classList.add("hidden");
  document.getElementById(nextScreen).classList.remove("hidden");
};
const playSound = (soundName) => {
  const audio = new Audio(`../sounds/${soundName}.mp3`);
  audio.play();
};

const getRandomAlphabet = () => {
  const index = Math.floor(Math.random() * ALPHABET_STRING.length);
  return ALPHABET_STRING[index];
};

const setCurrentAlphabetStyle = (id, action) => {
  const element = document.getElementById(id);
  if (action === "add") {
    element.classList.add("text-black", "font-black", "bg-orange-400");
  } else if (action === "remove") {
    element.classList.remove("bg-orange-400", "text-black", "font-bold");
  }
};

const updateScore = () => {
  const currentScoreElement = document.getElementById("current-score");
  currentScoreElement.innerText = parseInt(currentScoreElement.innerText) + 1;
};

const updateLives = () => {
  const currentLivesElement = document.getElementById("current-lives");
  const updatedLife = parseInt(currentLivesElement.innerText) - 1;
  currentLivesElement.innerText = updatedLife;
  if (updatedLife === 0) {
    const finalScoreElement = document.getElementById("final-score");
    finalScoreElement.innerText =
      document.getElementById("current-score").innerText;
    swapScreen("play-ground", "score-screen");
    playSound("game-over");
  } else {
    playSound("wrong-key");
  }
};

const playGame = () => {
  const alphabet = getRandomAlphabet();
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;
  setCurrentAlphabetStyle(alphabet.toLowerCase(), "add");
};
