const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var maxDrops=100;
var thunder1img, thunder2img, thunder3img, thunder4img, thunder1, thunder2, thunder3, thunder4;
var drops=[];

function preload(){
    thunder1img=loadImage("images/thunderbolt/1.png");
    thunder2img=loadImage("images/thunderbolt/2.png");
    thunder3img=loadImage("images/thunderbolt/3.png");
    thunder4img=loadImage("images/thunderbolt/4.png");
}

function setup(){
    canvas = createCanvas(400,650)
    background("black")

    umbrella = new Umbrella(200,500);

    if(frameCount%150===0){
        for(var i=0; i<maxDrops; i++){
            drops.push(new Drop(random(0,400), random(0,400)));
        }
    }
}

function draw(){
    Engine.update(engine)
    background(0);

    for(var i=0; i<maxDrops; i++){
        drops[i].display();
    }
    umbrella.display();
}   

