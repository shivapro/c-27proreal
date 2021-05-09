
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof=new Roof(500,100,500,20);
	bobDia=50;
	
    startBob1PositionX=500;
	startBob1PositionY=600;
	
	// startBob2PositionX=600;
	// startBob2PositionY=600;

	// startBob3PositionX=700;
	// startBob3PositionY=600;

	// startBob4PositionX=800;
	// startBob4PositionY=600;

	// startBob5PositionX=900;
	// startBob5PositionY=600;


	bob1=new Bob(startBob1PositionX-bobDia*2,startBob1PositionY,bobDia)
	rope1=new Rope(bob1.body,roof.body,-bobDia*2,0)

	bob2=new Bob(startBob1PositionX-bobDia,startBob1PositionY,bobDia)
	rope2=new Rope(bob2.body,roof.body,-bobDia*1,0)

	bob3=new Bob(startBob1PositionX,startBob1PositionY,bobDia)
	rope3=new Rope(bob3.body,roof.body,0,0)

	bob4=new Bob(startBob1PositionX+bobDia,startBob1PositionY,bobDia)
	rope4=new Rope(bob4.body,roof.body,bobDia*1,0)

	bob5=new Bob(startBob1PositionX+bobDia*2,startBob1PositionY,bobDia)
	rope5=new Rope(bob5.body,roof.body,bobDia*2,0)


	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background("white");
  roof.display();

  bob1.display();
  rope1.display();

  bob2.display();
  rope2.display();

   bob3.display();
  rope3.display();

  bob4.display();
  rope4.display();

   bob5.display();
  rope5.display();

 

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})


	}


}


