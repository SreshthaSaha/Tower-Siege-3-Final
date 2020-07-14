const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var base1,base2,ground;
var engine, world;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22;
var invisibeBox;
var sling;
var background1 = "bg.png";
var bImage;
var score = 0;

function preload() {
  getBackgroundimage(); 

}

function setup() {
  var canvas = createCanvas(1900,800);
  engine = Engine.create();
  world = engine.world;
 
  base1 = new Ground(763,550,405,30)
  base2 = new Ground(1500,350,240,30)
  
  ground = new Ground(850,750,1700,30)

  b22 = new Box2(200,700,80,80)

  invisibeBox = new Box1(185,100,30,30);

  sling = new SlingShot(b22.body,invisibeBox.body);

  b1 = new Box(600,485,80,100)
  b2 = new Box(681,485,80,100)
  b3 = new Box(762,485,80,100)
  b4 = new Box(843,485,80,100)
  b5 = new Box(924,485,80,100)
  b6 = new Box(640.5,385,80,100)
  b7 = new Box(722,385,80,100)
  b8 = new Box(802.5,385,80,100)
  b9 = new Box(883.5,385,80,100)
  b10 = new Box(680.5,285,80,100)
  b11 = new Box(762.0,285,80,100)
  b12 = new Box(843.5,285,80,100)
  b13 = new Box(722,185,80,100)
  b14 = new Box(802,185,80,100)
  b15 = new Box(762.5,85,80,100)
  b16 = new Box(1420,285,80,100)
  b17 = new Box(1500,285,80,100)
  b18 = new Box(1580,285,80,100)
  b19 = new Box(1460,185,80,100)
  b20 = new Box(1540,185,80,100)
  b21 = new Box(1500,85,80,100)
  
  // polygon = Bodies.circle(50,200,20)
  // World.add(world,polygon)

  Engine.run(engine);  
  
}

function draw() {
  if(bImage){
    background(bImage);
    }

  textSize(30);
  fill("black");
  text("Score = " + score,50,50);
  
  ground.display();
  base1.display();
  base2.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();

  b1.Score();
  b2.Score();
  b3.Score();
  b4.Score();
  b5.Score();
  b6.Score();
  b7.Score();
  b8.Score();
  b9.Score();
  b10.Score();
  b11.Score();
  b12.Score();
  b13.Score();
  b14.Score();
  b15.Score();
  b16.Score();
  b17.Score();
  b18.Score();
  b19.Score();
  b20.Score();
  b21.Score();
  
  b22.display();
  sling.display();
  invisibeBox.display();
  

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(b22.body,{x: mouseX , y: mouseY});
}
function mouseReleased(){
  sling.fly();
}
function keyPressed(){
  if(keyCode === 32){
      sling.attach(b22.body)
  }
}
async function getBackgroundimage(){
  var backgroundImage = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var backgroundImageJSON = await backgroundImage.json();
  var backgroundImageTime = backgroundImageJSON.datetime;
  var backgroundImagehour = backgroundImageTime.slice(11,13)
  console.log(backgroundImagehour);

  if(backgroundImagehour >= 06 && backgroundImagehour <= 17){
      background1 = "bg.png";
  }else{
    background1 = "bg2.jpg";
  }
  bImage = loadImage(background1);
}