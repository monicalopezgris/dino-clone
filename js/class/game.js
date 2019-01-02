class Game {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.canvas.width = 500;
    this.canvas.height = 500;
    this.context = this.canvas.getContext("2d");
    this.dino = new Dino(50, 20, "red", 50, 430, this.context); //width, height, color, x, y, ctx
    this.ground = new Ground(20, 500, "black", 0, 480, this.context);
    this.obstacles = [];
    this.intervalObstacles = undefined;
    this.obstaclesMoving=false 
    this.interval = undefined;
    this.keydown=false;
  }
  
  start() {
    let gameOver = document.getElementById("game-over");
    document.body.insertBefore(this.canvas, gameOver);
    this.update();
  }

  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  createObstacle() {
    let obstacle = new Obstacle(20, 20, "grey", 300, 460, this.context);
    this.obstacles.push(obstacle);
    this.obstaclesMoving=true
  }

  moveObstacles(){
    this.obstacles.forEach(obstacle => {
      obstacle.posX -=10;
      console.log(obstacle.posX)
    });
  }

  dinoJump(){
    document.onkeydown = (e) => {
      if (e.keyCode ===38) {
        this.dino.jump();
        this.dino.land();
      }
    };
  }
  
  update(){
    this.interval = window.requestAnimationFrame(this.update.bind(this))
    this.clear();
    this.dinoJump();
    this.ground.update();
    if (this.obstaclesMoving===true ) {
      setInterval(this.moveObstacles.bind(this), 100);
      this.obstaclesMoving=false
    }

    if (this.obstacles.length>0) {
      this.obstacles[0].update();
    }
    
    this.dino.update();
    
  }
}

window.addEventListener('keydown',this.keydown)