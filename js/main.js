let start = document.getElementById("start-button");
let gameOver = document.getElementById("return-button");

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
  setStage("start", "game-over");
};

function startGame() {
  let game = new Game();
  game.start();
}
