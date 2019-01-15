class Obstacle {
  constructor(width, height, color, x, y, ctx) {
    this.width = width;
    this.height = height;
    this.posX = x;
    this.posY = y;
    this.ctx = ctx;
    this.color= color;
    this.velocity = 1;
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.posX, this.posY, this.height, this.width);
  }

  paint() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.posX, this.posY, this.height, this.width);
    console.log('updating')
  }

  move(){
    this.posX -= this.velocity;
  }

}
