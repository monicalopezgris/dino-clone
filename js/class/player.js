class Dino {
  constructor(width, height, color, x, y, ctx) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.ctx.fillStyle = color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  test(){
      console.log(ctx);
  }
}
