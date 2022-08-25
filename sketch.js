const Motor = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//módulo Constraint de Matter.js


var engine;
var world;
var caixa1, caixa2, caixa3, caixa4, caixa5, caixa6;
var cenario;
var player1, player2;

var borracha;

function preload(){
    cenario = loadImage("./sprites/cenario.png");
}

function setup() {
    createCanvas(1200, 400);

    engine = Motor.create();
    world = engine.world;

    porco1  = new Porco(810, 350);
    porco2  =  new Porco(810, 220);
   

    caixa1  = new Caixa(700,320);
    caixa2  = new Caixa(920,320);
    caixa3  =  new Caixa(700,240);
    caixa4  =  new Caixa(920,240);
    caixa5   = new Caixa(810,160);
    
    tronco1 = new Tronco(810,260,300, PI/2);
    tronco2 =  new Tronco(810,180,300,  PI/2);
    tronco3  = new Tronco(760,120,150, PI/7);
    tronco4  = new Tronco(870,120,150, -PI/7);
 
    player1 = new Passaro(100,100);
    player2 = new Passaro(200,100);
    
    
    solo = new Solo(600,395,1200,20);

    //define o tipo de conexão entre os corpos


    //cria a corrente 

    //adiciona a corrente no mundo





    rectMode(CENTER);
    ellipseMode(RADIUS);
}


function draw() {
    background("cyan");
    image(cenario, 0,0,width, height)
    
    porco1.show();
    porco2.show();

    caixa1.show();
    caixa2.show();
    caixa3.show();
    caixa4.show();
    caixa5.show();

    tronco1.show();
    tronco2.show();
    tronco3.show();
    tronco4.show();

    player1.show();
    player2.show();

    solo.show();

    //exibir a corrente


    Motor.update(engine);

}

