const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,groun;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;


    box1 = new Box(225,300,50,50);
    box2 = new Box(200,350,50,50);
    groun= new ground(200,390,400,34);

}

function draw(){
    background("white");
    Engine.update(engine);
    box1.display();
    box2.display();
    groun.display();
}