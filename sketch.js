const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
  var ground
var ball
var rope
var box1,box2,box3,box4,box5


  function setup(){
 createCanvas(1550,550)

 engine = Engine.create();
 world = engine.world;


 ground= new Ground(700,500,1550,25)
ball= new Ball(200,200,50,50)
 rope=new Rope(ball.body,{x:200,y:50})
 box1= new Box(1000,400,80,80)
  }

  function draw(){
background("pink");
ground.display();
ball.display();
rope.display();
box1.display();
  }

  function mouseDragged(){
      Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
  }

  