class Game {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.canvas.width=500;
    this.canvas.height=500;
    this.context = this.canvas.getContext('2d');
    this.dino = new Dino(50, 20, "red", 50, 430, this.context); //width, height, color, x, y, ctx
    this.ground = new Ground(20, 500, "black", 0, 480, this.context);
    this.obstacles=[];
    this.interval = undefined;
    
  }

  start() {
    let gameOver = document.getElementById('game-over');
    document.body.insertBefore(this.canvas, gameOver);
    updateGame()
  }

  clear(){
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  createObstacle(){
    let obstacle = new Obstacle(20, 20, "grey", 300, 460, this.context);
    this.obstacles.push(obstacle);
  }

}

function updateGame(){
  this.interval=setInterval(updateGame,100);
  game.clear();
  game.dino.update('red');
}
