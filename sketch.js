const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;

function preload(){
    bgImg=loadImage("sprites/bg.png")
}
function setup(){
    var canvas = createCanvas(850,500);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

    box1 = new Box(500,420,70,70);
    box2 = new Box(720,420,70,70);
    pig1 = new Pig(610, 450);
    log1 = new Log(610,360,300, PI/2);

    box3 = new Box(500,340,70,70);
    box4 = new Box(720,340,70,70);
    pig3 = new Pig(610, 320);

    log3 =  new Log(610,280,300, PI/2);

    box5 = new Box(610,260,70,70);
    log4 = new Log(560,220,150, PI/7);
    log5 = new Log(670,220,150, -PI/7);

    bird = new Bird(100,100);

}

function draw(){
    background(bgImg);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
}