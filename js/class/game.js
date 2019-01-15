class Game {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.canvas.width = 500;
    this.canvas.height = 500;
    this.context = this.canvas.getContext("2d");
    this.context.fillStyle = "blue";
    this.context.fillRect(this.posX, this.posY, this.height, this.width);
    this.dino = new Dino(20, 50, "img/dino.png", 50, 440, this.context); //width, height, color, x, y, ctx
    this.ground = new Ground(20, 500, "green", 0, 480, this.context);
    this.obstacle = new Obstacle(20, 20, "grey", 500, 460, this.context); //width, height, color, x, y, ctx
    this.obstacles = [];
    this.keys = [];
    this.generatingObstacle = false;
    this.gameOver = false;
  }

  start() {
    let gameOver = document.getElementById("game-over");
    this.canvas.setAttribute("id", "canvas");
    document.body.insertBefore(this.canvas, gameOver);
    this.interval = window.requestAnimationFrame(this.update.bind(this));
    this.update();
  }

  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  // ------------------------OBSTACLES--------------------------------
  createObstacle() {
    this.obstacles.push(new Obstacle(20, 20, "grey", 500, 460, this.context));
    console.log(this.obstacles)
    this.generatingObstacle = false;
  }

  randomCreateObstacle() {
    this.generatingObstacle = true;
    setTimeout(this.createObstacle.bind(this), Math.random() * 5000);
  }

  deleteObstacle() {
    this.obstacles.forEach(obstacle => {
      if (obstacle.posX < -20) {
        this.obstacles = this.obstacles.shift();
      }
    });
  }

  moveElements(element) {
    element.forEach(obstacle => {
      obstacle.move();
    });
  }

  updateEachElement(element) {
    element.forEach(obstacle => {
      obstacle.paint();
    });
  }

  // ------------------------DINO CONTROLS--------------------------------
  dinoMove() {
    window.addEventListener(
      "keydown",
      function(e) {
        this.keys[e.keyCode] = true;
      }.bind(this),
      false
    );
    window.addEventListener(
      "keyup",
      function(e) {
        this.keys[e.keyCode] = false;
      }.bind(this),
      false
    );

    if (this.keys[37]) {
      this.dino.moveLeft();
    }

    if (this.keys[39]) {
      this.dino.moveRight();
    }

    if (this.keys[38]) {
      if (this.dino.jumping === false) {
        this.dino.jump();
      }
      this.dino.autoLand();
    }

    if (this.keys[40]) {
      this.dino.land();
    }
  }

  drawDino() {
    a;
  }

  // ------------------------COLISIONS--------------------------------

  collisionControl() {
    this.obstacles.forEach(obstacle => {
      if (
        //this.coll1(obstacle) && this.coll2(obstacle)
        this.dino.posY + this.dino.height >= obstacle.posY &&
        this.dino.posX + this.dino.width > obstacle.posX &&
        this.dino.posX <= obstacle.posX + obstacle.height
      ) {
        setStage("game-over", "start");
        this.gameOver = true;
      } else {
      }
    });
  }

  update() {
    if (!this.gameOver) {
      this.clear();
      this.dinoMove();
      this.ground.update();
      this.dino.update();

      
      if (this.generatingObstacle === false) {
        this.randomCreateObstacle();
      }
      

      if (this.obstacles.length > 0) {
        //If there are obstacles
        this.moveElements(this.obstacles);
        this.updateEachElement(this.obstacles);
        this.collisionControl();
        //this.deleteObstacle();
      }

      if (this.interval !== undefined) {
        this.interval = window.requestAnimationFrame(this.update.bind(this));
      }
    }
  }
}
