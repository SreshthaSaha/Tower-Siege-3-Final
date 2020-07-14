class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    rect(x,y,this.width,this.height)
    this.visibility = 255;
  }
  Score(){
    if(this.visibility<0 && this.visibility>-105){
      score = score + 1;
    }
  }
  display(){
    if(this.body.speed < 5 ) {
       super.display();
    }else{
      World.remove(world,this.body);
      push();
      this.visibility = this.visibility-5;
      tint(255,this.visibility)
      rect(this.body,this.body.position.x,this.body.position.y,50,50)
      pop();
    }
  }
  
};
  
 