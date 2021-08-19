const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here

var ball1,ball2,ball3,ball4,ball5;
var con1,con2,con3,con4,con5;
function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	
	Engine.run(engine);
	var ball_options = {
		restitution:0.8
	  }
	  
	  
	  ball1 = Bodies.circle(300,300,25,ball_options);
	  World.add(world,ball1);
	
	  con1 = Matter.Constraint.create({
		bodyA:roof,
		pointA:{x:300,y:200},
		bodyB:ball1,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  });

	World.add(world,con1);
	
	  ball2=Bodies.circle(350,300,25,ball_options);
	  World.add(world,ball2);

	  con2 = Matter.Constraint.create({
		bodyA:roof,
		pointA:{x:350,y:200},
		bodyB:ball2,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  });

	World.add(world,con2);

	  ball3=Bodies.circle(400,300,25,ball_options);
	  World.add(world,ball3);

	  con3 = Matter.Constraint.create({
		bodyA:roof,
		pointA:{x:400,y:200},
		bodyB:ball3,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  });

	World.add(world,con3);

	  ball4=Bodies.circle(450,300,25,ball_options);
	  World.add(world,ball4);

	  con4 = Matter.Constraint.create({
		bodyA:roof,
		pointA:{x:450,y:200},
		bodyB:ball4,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  });

	World.add(world,con4);
	  
	ball5=Bodies.circle(500,300,25,ball_options);
	  World.add(world,ball5);
	  
	  con5 = Matter.Constraint.create({
		bodyA:roof,
		pointA:{x:500,y:200},
		bodyB:ball5,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  });

	World.add(world,con5);
	 
	  
	ellipseMode(RADIUS);	  
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
	
  //create ellipse shape for multiple bobs here
  ellipse(ball1.position.x,ball1.position.y,25);
  ellipse(ball2.position.x,ball2.position.y,25);
  ellipse(ball3.position.x,ball3.position.y,25);
  ellipse(ball4.position.x,ball4.position.y,25);
  ellipse(ball5.position.x,ball5.position.y,25);
  
  push();
  strokeWeight(2);
  stroke("Black");
  line(roof.position.x,roof.position.y,ball1.position.x,ball1.position.y);
  line(roof.position.x,roof.position.y,ball2.position.x,ball2.position.y);
  line(roof.position.x,roof.position.y,ball3.position.x,ball3.position.y);
  line(roof.position.x,roof.position.y,ball4.position.x,ball4.position.y);
  line(roof.position.x,roof.position.y,ball5.position.x,ball5.position.y);
	pop();

}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball1,{x:0,y:0},{x:0.05,y:0});
    }
}
function keyPressed()
{
  if(keyCode==LEFT_ARROW)
    {
      Matter.Body.applyForce(ball5,{x:0,y:0},{x:-0.05,y:0});
    }
}
