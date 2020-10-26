var  paperClass;
var paperClassBody,ground,redBox
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;


    var options ={
		isStatic:false,
		restitution: 0.3,
		friction:0.5,
		density:1.2
    }


	paperClass = createSprite (width/2,80,10,10);
	//ellipse(56, 46, 55, 55);


	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);



	redBox=createSprite(400,640,100,10);
	redBox1=createSprite(350,600,10,100);
	redBox2=createSprite(450,600,10,100);

	redBox = Bodies.rectangle(400,640,100,10,{isStatic:true});
 	World.add(world, redBox);

	redBox1 = Bodies.rectangle(350,600,10,100,{isStatic:true});
 	World.add(world, redBox1);

	redBox2 = Bodies.rectangle(450,600,10,100,{isStatic:true});
 	World.add(world, redBox2);
	

	paperClassBody = Bodies.circle(200 , 450 , 10 , {resttution:3, isStatic:false});
	World.add(world, paperClassBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

ellipse (paperClassBody.body.position.x, paperClassBody.body.position.y,10,10)

  //paperClass.x= paperClassBody.position.x 
  //paperClass.y= paperClassBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on

	Matter.Body.applyForce(paperClassBody.body,paperClassBody.body.position,{x:85, y:-85});

  }
}

