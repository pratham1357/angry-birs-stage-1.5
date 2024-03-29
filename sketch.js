const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5,ground,pig1,pig2,log1,log2,log3,log4,bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,300,70,70);
    box2 = new Box(900,300,70,70);
    log1 = new Log(800,270,300,PI/2);
    pig1 = new Pig(800,330);

    box3 = new Box(700,240,70,70);
    box4 = new Box(900,240,70,70);
    log2 = new Log(800,200,300,PI/2)
    pig2 = new Pig(800,220);

    box5 = new Box(800,150,70,70);
    log3 = new Log(740,150,150,PI/7);
    log4 = new Log(870,150,150,-PI/7);

    bird1 = new Bird(200,200);

    ground = new Ground(600,390,1200,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird1.display();
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              

    console.log(log1.body.angle);
   
}