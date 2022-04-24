const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var engine, world;
var slingshot, ground;




function preload(){
//load background image
}


function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,380,1200,20);
  ghitti = new Ghitti(200, 300)

 slingshot = new SlingShot(ghitti,{x:200,y:50})

}

function draw() {
 background(255, 255, 255);  
 Engine.update(engine)


 //display All
  ground.display();

}

// create mosueDragged function


// create mouseReleased function


//create keypressed
