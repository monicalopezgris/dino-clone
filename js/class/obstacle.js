class Obstacle {
  constructor(width, height, color, x, y, ctx) {
    this.width = width;
    this.height = height;
    this.posX = x;
    this.posY = y;
    this.ctx = ctx;
    this.ctx.fillStyle = color;
    this.ctx.fillRect(this.posX, this.posY, this.height, this.width);
  }

  update() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.posX, this.posY, this.height, this.width);
  }

}
