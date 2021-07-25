const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var bridge, base,jointPoint;
var stone = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;

  base = new Base(windowWidth/4,windowHeight/4,400,300);
  bridge = new Bridge(windowWidth/4,windowHeight/4, 200 ,100);
  jointPoint = new JointPoint(300,300,80,300)

  frameRate(80);

  Matter.Composite.add(bridge.body,jointPoint);
  jointLink = new Link(bridge, jointPoint);

}

function draw() {
  background(51);
  Engine.update(engine);

  for(var i=0; i<=8; i++){
    var x = random(width/2 - 200,width/2 + 300);
    var y = random(-10,140);
    var stone = new Stone(x,y,80,80);
    stones,push(stone);
  }

}
