class Dino extends Object{

  update(){
    console.log('dino update')
    this.posX += 10;
    this.ctx.fillStyle = color;
    this.ctx.fillRect(this.posX, this.posY, this.height,this.width)
  }
}
