class Dino {
  constructor(width, height, color, x, y, ctx) {
    this.width = width;
    this.height = height;
    this.posX = x;
    this.posY = y;
    this.jumpUpLimit = 300;
    this.jumpDownLimit = 100;
    this.jumpLimit = false;
    this.ctx = ctx;
    this.ctx.fillStyle = color;
    this.ctx.fillRect(this.posX, this.posY, this.height, this.width);
  }

  update(color) {
    console.log("dino update");
    this.jump();
    this.ctx.fillStyle = color;
    this.ctx.fillRect(this.posX, this.posY, this.height, this.width);
  }

  jump() {
    console.log("hi");
    if (!this.jumpLimit) {
      if (this.posY === this.jumpUpLimit) {
        this.jumpLimit = true;
      } else {
        this.posY -= 1;
      }
    } else if(this.posY<420){
      this.posY += 1;
    }
  }
}
