class Ground{
    constructor(width, height, color, x, y, ctx) {
        this.width = width;
        this.height = height;
        this.posX = x;
        this.posY = y;
        this.color = color;
        this.ctx = ctx;
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.posX, this.posY, this.height, this.width);
    }

    test(){
        console.log('test ground')
    }
    
    update() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.posX, this.posY, this.height, this.width);
      }
}