// STAGES CHANGER
let start = document.getElementById("start-button");
let gameOver = document.getElementById("restart");

function setStage(show, hidde, isStart) {
  if (!isStart) {
    document.getElementById(show).classList.remove("hidden");
  }
  document.getElementById(hidde).classList.add("hidden");
}


start.onclick = function() {
  setStage("game-over", "start", true);
  startGame();
};

gameOver.onclick = function() {
  location.reload();
};


// GAME
const game = new Game();
function startGame() {
  game.start();
}
