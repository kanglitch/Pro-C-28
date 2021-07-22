
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var tree,Stone, Ground,launcher
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;
var launchingForce=100;


function preload(){
	boy=loadImage("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	Stone=new stone(235,420,30);

	mango1=new mango(1100,100,30);
	mango2=new mango(1170,130,30);
	mango3= new mango(1010,140,30);
	mango4=new mango(1000,70,30);
	mango5=new mango(1100,70,30);
	mango6=new mango(100,230,30);
	mango7=new mango(900,230,40);
	mango8=new mango(1140,150,40);
	mango9=new mango(1100,230,40);
	mango10=new mango(1200,200,40);
	mango11=new mango(1120,50,40);
	mango12=new mango(900,160,40);
	tree=new Tree(1050,580)
	Ground=new ground(width/2,600,width,20);

	launcher= new Launcher(stone.body,{x:235,y:420})
	var render= Render.create({
		element:document.body,
		engine: engine,
		options:{
			width:1300,
			height:600,
			wireframe:false
			
		}
	})

	Engine.run(engine);
  
}


function draw() {
	text(mouseX+","+mouseY,mouseX,mouseY)
  background(230);
  textSize(25)
  text("press space to get another chance !")
  image(boy,200,340,200,300)
  text(mouseX+','+mouseY,mouseX,mouseY)

  
	Stone.display();

	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	mango11.display();
	mango12.display();
	tree.display();
	Ground.display();

	detectcollision(Stone,mango1)
	detectcollision(Stone,mango2)
	detectcollision(Stone,mango3)
	detectcollision(Stone,mango4)
	detectcollision(Stone,mango5)
	detectcollision(Stone,mango6)
	detectcollision(Stone,mango7)
	detectcollision(Stone,mango8)
	detectcollision(Stone,mango9)
	detectcollision(Stone,mango10)
	detectcollision(Stone,mango11)
	detectcollision(Stone,mango12)

  
  drawSprites();

 
}
function mouseDragged(){
	Matter.Body.setPosition(Stone.body,{x:mouseX, y:mouseY})
}

function mouseReleased(){
	launcher.fly();
}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(Stone.body,{x:235,y:420})
		launcher.attach(Stone.body)
	}
}

function detectcollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	StoneBodyPosition=lstone.body.position
	var distance=dist(StoneBodyPosition.x,StoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

	if(distance<=lmango.r+lstone.r){
		console.log(lmango.r)
		Matter.body.setStatic(lmango.body,false)

	}
}



