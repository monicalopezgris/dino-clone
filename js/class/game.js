class Game {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
    this.canvas.width = this.windowWidth;
    this.canvas.height = this.windowHeight;
    this.context = this.canvas.getContext("2d");
    this.context.fillStyle = "blue";
    this.context.fillRect(this.posX, this.posY, this.height, this.width);
    this.ground = new Ground(
      80,
      this.windowWidth,
      "green",
      0,
      this.windowHeight - 80,
      this.context
    );
    this.dino = new Dino(
      20,
      50,
      "img/dino.png",
      50,
      this.windowHeight - this.ground.width - 50,
      this.context
    ); //width, height, color, x, y, ctx
    this.obstacle = new Obstacle(
      20,
      20,
      "grey",
      this.windowWidth - 20,
      this.windowHeight - this.ground.width,
      this.context
    ); //width, height, color, x, y, ctx
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

  randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  // ------------------------OBSTACLES--------------------------------
  createObstacle() {
    let object = this.randomNumber(0, 1);

    switch (object) {
      case 0:
        this.obstacles.push(
          new Obstacle(
            20,
            20,
            "grey",
            this.windowWidth - 20,
            this.windowHeight - this.ground.width - 20,
            this.context
          )
        );
        break;
      case 1:
        this.obstacles.push(
          new Obstacle(
            20,
            20,
            "red",
            this.windowWidth - 20,
            this.windowHeight - this.ground.width - 30,
            this.context
          )
        );
        break;
      default:
        break;
    }

    this.generatingObstacle = false;
  }

  randomCreateObstacle() {
    this.generatingObstacle = true;
    setTimeout(this.createObstacle.bind(this), Math.random() * 5000);
  }

  deleteObstacle() {
    this.obstacles.forEach(obstacle => {
      if (obstacle.x < -20) {
        this.obstacles = this.obstacles.shift();
      }
    });
  }

  moveElements(element) {
    element.forEach(obstacle => {
      obstacle.move();
    });
  }

  paintEachElement(element) {
    element.forEach(obstacle => {
      obstacle.paint();
    });
  }

  // ------------------------DINO CONTROLS--------------------------------
  dinoMove() {
    window.addEventListener(
      "keydown",
      function(e) {
        if (this.keys[38]) {
          this.keys[e.keyCode] = false;
        } else {
          this.keys[e.keyCode] = true;
        }
      }.bind(this),
      false
    );
    window.addEventListener(
      "keyup",
      function(e) {
        if (this.keys[38]) {
          this.keys[e.keyCode] = true;
        } else {
          this.keys[e.keyCode] = false;
        }
      }.bind(this),
      false
    );

    if (this.keys[37]) {
      this.dino.moveLeft();
     
    }

    if (this.keys[39]) {
      this.dino.moveRight();
     
    }

  
  }

  onKeyUpDinoJump() {
    document.onkeyup = function(e) {
      if (e.keyCode === 38) {
        this.dino.jump(this.ground)
        // this.dino.inGround = false;
      
      }
    }.bind(this);
  }


  // ------------------------COLISIONS--------------------------------

  collisionControl() {
    this.obstacles.forEach(obstacle => {
      if (
        this.dino.y + this.dino.height >= obstacle.y &&
        this.dino.x + this.dino.width > obstacle.x &&
        this.dino.x <= obstacle.x + obstacle.height
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
      this.ground.paint();
      this.onKeyUpDinoJump();
      this.dinoMove();
      
      if (this.dino.inGround ===false) {
        this.dino.jump();
      }

      console.log(this.keys)
      
      this.dino.paint();
      this.dino.landControl(this.ground);
      
      if (this.generatingObstacle === false) {
        this.randomCreateObstacle();
      }
      
      if (this.obstacles.length > 0) {
        //If there are obstacles
        this.moveElements(this.obstacles);
        this.paintEachElement(this.obstacles);
        this.collisionControl();
        this.deleteObstacle();
      }
      
      //console.log(this.keys)
      if (this.interval !== undefined) {
        this.interval = window.requestAnimationFrame(this.update.bind(this));
      }
    }
  }
}
