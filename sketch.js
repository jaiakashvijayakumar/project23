var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box1;
var box2;
var box3;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	


	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	
	//box1 = createSprite(300,620,10,70);
	//box1.shapeColor = color(226,0,0);

	//box2 = createSprite(370,650,150,10);
	///box2.shapeColor = color(226,0,0);

	//box3 =createSprite(450,620,10,70);
	//box3.shapeColor = color(226,0,0);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:93, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);

	box1 = new Box(300,620,10,70);
	box2 = new Box(370,640,140,10);
	box3 = new Box (450,620,10,70);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //packageSprite.x= packageBody.position.x 
  //packageSprite.y= packageBody.position.y 

  


  drawSprites();

  if(keyPressed(packageSprite)){
	console.log("11111");

	  packageSprite.velocityY=0.1;

	 
  }

	box1.display();
	

   
	box2.display();
	
    box3.display();
}

function keyPressed(packageSprite) {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	console.log("2222");

	packageSprite.velocityY  =3;
	//object2.velocityY= 1;
 
	return true;
 }
	else{
		return false;
	}
  }




