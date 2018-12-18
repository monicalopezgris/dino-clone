class Game {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.dino = undefined;
    this.canvas.width=500;
    this.canvas.height=500;
    this.context = this.canvas.getContext('2d');
  }

  start() {
    let gameOver = document.getElementById('game-over');
    document.body.insertBefore(this.canvas, gameOver);
    this.dino = new Dino(20, 40, "red", 50, 460, this.context);
    
  }

}
