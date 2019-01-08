class Game {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.canvas.width = 500;
    this.canvas.height = 500;
    this.context = this.canvas.getContext("2d");
    this.dino = new Dino(50, 20, "red", 50, 430, this.context); //width, height, color, x, y, ctx
    this.ground = new Ground(20, 500, "black", 0, 480, this.context);
    this.obstacles = [];
    this.obstaclesMoving = false;
    this.obstaclesExist = false;
    this.keydown = false;
  }

  start() {

    let gameOver = document.getElementById("game-over");
    this.canvas.setAttribute('id', 'canvas');
    document.body.insertBefore(this.canvas, gameOver);
    this.update();
  }

  stop(){
    let element = document.getElementById('canvas');
    element.parentNode.removeChild(element);
  }

  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  createObstacle() {
    console.log('creteObstacle')
    let obstacle = new Obstacle(20, 20, "grey", 500, 460, this.context);
    this.obstacles.push(obstacle);
    this.obstaclesMoving = true;
    
  }

  deleteObstacle() {
    this.obstacles.forEach(obstacle => {
      if (obstacle.posX < -20) {
        this.obstacles = this.obstacles.shift();
      }
    });
  }

  randomPaintObstacle(){
    this.createObstacle();
    setTimeout(this.randomPaintObstacle.bind(this), Math.random() * 7000);
  }

  moveObstacles() {
    this.obstacles.forEach(obstacle => {
      obstacle.posX -= 10;
    });
  }

  dinoJump() {
    document.onkeydown = e => {
      if (e.keyCode === 38) {
        this.dino.jump();
        this.dino.land();
      }else if(e.keyCode === 40){
        this.dino.directLand();
      }else if(e.keyCode === 39){
        this.dino.moveRight();
      }else if(e.keyCode === 37){
        this.dino.moveLeft();
      }
    };
  }

  collision() {
    let dino = this.dino;
    let object = this.obstacles[0];
    let colision = false;
    if (dino.posX+dino.width > object.posX){
      colision = true;
    }

    if (colision===true){
      console.log('gameover')
      setStage("game-over", "start");
      this.stop();

    }
  }

  update() {
    this.interval = window.requestAnimationFrame(this.update.bind(this));
    this.clear();
    this.dinoJump();
    this.ground.update();
    
    if (this.obstacles.length > 0) {  //Si hay obstaculos
      this.obstacles.forEach(obstacle => {
        obstacle.update();
      });

      if (!this.obstaclesExist) {
        setInterval(this.moveObstacles.bind(this), 100);
        this.obstaclesExist=true;
      }

      this.collision();

    }else{
      console.log('no obstacle')
    }
    //this.deleteObstacle();
    this.dino.update();
    
  }
}

window.addEventListener("keydown", this.keydown);

