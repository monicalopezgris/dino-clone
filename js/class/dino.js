class Dino {
  constructor(width, height, color, x, y, ctx) {
    this.width = width;
    this.height = height;
    this.posX = x;
    this.posY = y;
    this.color = color;
    this.ctx = ctx;
    this.ctx.fillStyle = color;
    this.ctx.fillRect(this.posX, this.posY, this.height, this.width);
    this.jumping=false;
    this.jumpTop = 370;
  }

  update() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.posX, this.posY, this.height, this.width);
  }

  jump() {
    this.jumping = true;

    while (this.posY>this.jumpTop) {
      this.posY -= 1;
      console.log(this.posY)
    }

  }

  autoLand() {
    setTimeout(
      this.land.bind(this),
      1000
    );
  }

  land() {

    while (this.posY<430) {
      this.posY += 1;
      console.log(this.posY)
    }
    this.jumping = true;
  }

  moveRight() {
    this.posX += 5;
  }

  moveLeft() {
    this.posX -= 5;
  }
}
