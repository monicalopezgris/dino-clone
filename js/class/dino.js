class Dino {
  constructor(width, height, img, x, y, ctx) {
    this.width = width;
    this.height = height;
    this.posX = x;
    this.posY = y;
    this.image = new Image();
    this.image.src = img;
    this.ctx = ctx;
    //this.ctx.fillStyle = color;
    //this.ctx.fillRect(this.posX, this.posY, this.height, this.width);
    this.jumping=false;
    this.jumpTop = 370;
    this.velocity = 5;
    
  }

  update() {
    this.ctx.drawImage(this.image, 
      this.posX, 
      this.posY,
      this.width, this.height);


    //this.ctx.fillStyle = this.color;
    //this.ctx.fillRect(this.posX, this.posY, this.height, this.width);
  }

  jump() {
    this.autoLand()
    this.jumping = true;

    while (this.posY>this.jumpTop) {
      this.posY -= this.velocity;
    }

  }

  autoLand() {
    setTimeout(
      this.land.bind(this),
      100
    );
  }

  land() {
    
    while (this.posY<430) {
      this.posY += this.velocity;
    }
    this.jumping = false;
  }

  moveRight() {
    this.posX += this.velocity;
  }

  moveLeft() {
    this.posX -= this.velocity;
  }
}
