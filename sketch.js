const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird1;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,390,50,50);
    box2 = new Box(800,390,50,50);
    box3 = new Box(700,300,50,50);
    box4 = new Box(800,300,50,50);
    box5 = new Box(760,200,50,50);
    pig1 = new Pig(200,200)
    ground = new Ground(200,height,2000,20);
    log1 = new Log(750,320,150,PI/2);
    log2 = new Log(750,220,150,PI/2);
    log3 = new Log(750,150,90,PI/7);
    log4 = new Log(780,165,90,-PI/7);
    bird1 = new Bird(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird1.display();
}