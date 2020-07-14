class SlingShot{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness:0.05,
            length: 50
        }
        this.bodyB = bodyB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body
     }
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA) {
        var pointA = this.sling.bodyA.position;  
        var pointB = this.sling.bodyB.position;       
        strokeWeight(3);
        stroke("black");
       line(pointA.x,pointA.y,pointB.x,pointB.y);    
      }    
                 
   }
            
}
  
    
