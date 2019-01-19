class Obstacle {
  constructor(width, height, color, x, y, ctx) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.vx = 1;
    this.ctx = ctx;
    this.color = color;
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.height, this.width);
  }

  paint() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.height, this.width);
  }

  move() {
    this.x -= this.vx;
  }
}
