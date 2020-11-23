const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1,ground2,sling1,box,polygon;

function preload(){


}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
	world = engine.world;

  ground1 = new Ground(380,300,250,10);
  ground2 = new Ground(700,200,200,10);

  box1 = new Box(270,275,30,40);
  box2 = new Box(300,275,30,40);
  box3 = new Box(330,275,30,40);
  box4 = new Box(360,275,30,40);
  box5 = new Box(390,275,30,40);
  box6 = new Box(420,275,30,40);
  box7 = new Box(450,275,30,40);
  box8 = new Box(480,275,30,40);

  box9 = new Box(300,235,30,40);
  box10 = new Box(330,235,30,40);
  box11= new Box(360,235,30,40);
  box12 = new Box(390,235,30,40);
  box13 = new Box(420,235,30,40);
  box14= new Box(450,235,30,40);
  
  box15 = new Box(330,195,30,40);
  box16= new Box(360,195,30,40);
  box17 = new Box(390,195,30,40);
  box18 = new Box(420,195,30,40);
  
  box19= new Box(360,155,30,40);
  box20 = new Box(390,155,30,40);

  box21 = new Box(375,115,30,40);

  box22 = new Box(620,185,30,40);
  box23 = new Box(650,185,30,40);
  box24 = new Box(680,185,30,40);
  box25 = new Box(710,185,30,40);
  box26 = new Box(740,185,30,40);
  box27 = new Box(770,185,30,40);

  box28 = new Box(650,145,30,40);
  box29 = new Box(680,145,30,40);
  box30 = new Box(710,145,30,40);
  box31 = new Box(740,145,30,40);

  box32 = new Box(680,105,30,40);
  box33 = new Box(710,105,30,40);

  box34 = new Box(695,65,30,40);

  ball = new Ball(50,200,40);
  sling1 = new SlingShot(ball.body,{x:100,y:200});
  



  
}

function draw() {
  Engine.update(engine);
  background("black");  
  drawSprites();

  ground1.display();
  ground2.display();
  fill("blue");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  fill("green");
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  fill("yellow");
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  fill("red");
  box19.display();
  box20.display();
  fill("violet");
  box21.display();
  fill("green");
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  fill("yellow");
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  fill("red");
  box32.display();
  box33.display();
  fill("violet");
  box34.display();
  ball.display();

  sling1.display();
  
}
function mouseDragged(){
  //if (gameState!=="launched"){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});

  //}
}

function mouseReleased(){
  sling1.fly();

}

function keyPressed(){
  if(keyCode === 32){
      Matter.Body.setPosition(ball.body,{x:50,y:200});
     sling1.attach(ball.body);
  }
}