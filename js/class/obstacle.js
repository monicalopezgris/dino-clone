class Obstacle {
  constructor(width, height, img, x, y, ctx) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.vx = 1;
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = img;
    
  }

  paint() {
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  move() {
    this.x -= this.vx;
  }
}
