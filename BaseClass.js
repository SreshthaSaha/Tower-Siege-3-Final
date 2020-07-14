class BaseClass{
    constructor(x, y, width, height) {
        var options = {
            isStatic:false,
            restitution:0.8,
            friction:7.5,
            density:1.0
        }
        this.body = Bodies.rectangle(x, y, width, height,options);
        this.width = width;
        this.height = height;
       // this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("pink")
        rect(0, 0, this.width, this.height);
        pop();
      }
}