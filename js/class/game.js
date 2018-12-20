class Game {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.canvas.width=500;
    this.canvas.height=500;
    this.context = this.canvas.getContext('2d');
    this.dino = new Dino(50, 20, "red", 50, 430, this.context); //width, height, color, x, y, ctx
    this.ground = new Ground(20, 500, "black", 0, 480, this.context);
    //this.interval = setInterval(updateGame,500);
    
  }

  start() {
    let gameOver = document.getElementById('game-over');
    document.body.insertBefore(this.canvas, gameOver);
  }

  clear(){
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    console('clear game')
  }

}

function updateGame(){
  //game.clear();
  //game.dino.update();
}
