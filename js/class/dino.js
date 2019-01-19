class Dino {
  constructor(width, height, img, x, y, ctx) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.jumpStrenght = -10;
    this.vx = 3;
    this.vy = this.jumpStrenght;
    this.gravity = 0.3;
    this.image = new Image();
    this.image.src = img;
    this.ctx = ctx;
    this.inGround = true;
    this.jumpLimit = 370;
  }

  paint() {
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  jump() {
    this.inGround = false;
    
    if (!this.inGround) {
      this.y += this.vy;
      this.vy += this.gravity;
    }
  }
  
  landControl(ground) {
    if (this.y + this.height > ground.y) {
      this.y = ground.y - this.height;
      this.vy = this.jumpStrenght;
      this.inGround=true;
    }
  }

  moveRight() {
    this.x += this.vx;
  }

  moveLeft() {
    this.x -= this.vx;
  }
}
