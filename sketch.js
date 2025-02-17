var helicopterImg, helicopter, package,packageImg;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1;
var box2;
var box3;

function preload()
{
	helicopterImg=loadImage("helicopter.png")
	packageImg=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);

	package=createSprite(width/2, 80, 10,10);
	package.addImage(packageImg)
	package.scale=0.15

	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterImg)
	helicopter.scale=0.6

	rectMode(CENTER);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(0)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(350, 200 , 5 ,{restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 ,{isStatic:true} );
 	World.add(world, ground);

	 box1 = new box(350,650,100,20);
	 box2 = new box(290,610,20,100);
	 box3 = new box(410,610,20,100);


	Engine.run(engine);
  
}

function draw() {
	background(180);
	rectMode(CENTER);
  package.x= packageBody.position.x 
  package.y= packageBody.position.y 
  drawSprites();
  box1.display();
  box2.display();
  box3.display();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    	Matter.Body.setStatic(packageBody,false);
  }
}