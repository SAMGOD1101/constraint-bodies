
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;


var engine ,world;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var roofObject;


function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

    roofObject= new Roof(800,200,width/7,20);
	bobDiameter=40;
	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	rope1=new Chain(bob1.body,roofObject.body,-bobDiameter*2,0);
	rope2=new Chain(bob2.body,roofObject.body,-bobDiameter*1,0);
	rope3=new Chain(bob3.body,roofObject.body,0,0);
	rope4=new Chain(bob4.body,roofObject.body,bobDiameter*1,0);
	rope5=new Chain(bob5.body,roofObject.body,bobDiameter*2,0);
    bob1=new Bob(startBobPositionX,-bobDiameter*2,startBobPositionY,bobDiameter);
	bob2=new Bob(startBobPositionX,-bobDiameter,startBobPositionY,bobDiameter);
	bob3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	bob4=new Bob(startBobPositionX,bobDiameter,startBobPositionY,bobDiameter);
	bob5=new Bob(startBobPositionX,bobDiameter*2,startBobPositionY,bobDiameter);

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  Engine.update(engine);
  
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
roofObject.display();

  drawSprites();
 
}

function keyPressed(){

if (keyCode===UP_ARROW){

	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})
  }

}

function drawLine(constraint){
bobBodyPosition=constraint.bodyA.position;
roofObjectPosition=constraint.bodyB.position;

roofObjectOffset=constraint.bodyB;

roofObjectX=roofObjectPosition.x + roofObjectOffset.x;
roofObjectY=roofObjectPosition.y + roofObjectOffset.y;

line(bobBodyPosition.x,bobBodyPosition.y,roofBodyPosition.x,roofBodyPosition.y);


}



