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
    this.interval = undefined;
    this.keydown = false;
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
    console.log('creteObstacle')
    let obstacle = new Obstacle(20, 20, "grey", 300, 460, this.context);
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
      }
    };
  }

  collision() {
    for (let i = 0; i < this.obstacles.length; i++) {
      let obstacle = this.obstacles[i];
      let dino = this.dino;

      let myleft = dino.posX;
      let myright = dino.posX + dino.width;
      let mytop = dino.posY;
      let mybottom = dino.posY + dino.height;
      let otherleft = obstacle.posX;
      let otherright = obstacle.posX + obstacle.width;
      let othertop = obstacle.posY;
      let otherbottom = obstacle.posY + obstacle.height;

      if (
        function(){
          return !(
            myright < otherleft ||
            myleft > otherright ||
            mybottom < othertop ||
            mytop > otherbottom
          );
        }
      ) {
        alert("colision");
      }
    }
  }

  update() {
    this.interval = window.requestAnimationFrame(this.update.bind(this));
    this.clear();
    this.dinoJump();
    this.ground.update();

    if (this.obstaclesMoving === true) {
      setInterval(this.moveObstacles.bind(this), 100);
      this.obstaclesMoving = false;
    }

    if (this.obstacles.length > 0) {
      this.obstacles.forEach(obstacle => {
        obstacle.update();
      });
    }else{
      console.log('no obstacle')
    }
    //this.deleteObstacle();
    this.dino.update();
    //this.collision();
  }
}

window.addEventListener("keydown", this.keydown);
