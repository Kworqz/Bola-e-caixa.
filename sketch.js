var tela;
var bloco1,bloco2,bloco3,bloco4;
var bola, arestas;
var music;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    tela = createCanvas(800,600);

    bola = createSprite(random(20,750),100, 40,40);
    bola.shapeColor = rgb(255,255,255);

    bloco1 = createSprite(0,580,360,30);
    bloco1.shapeColor = "blue";

    bloco2 = createSprite(295,580,200,30);
    bloco2.shapeColor = "orange";

    bloco3 = createSprite(510,580,200,30);
    bloco3.shapeColor = "green";

    bloco4 = createSprite(725,580,200,30);
    bloco4.shapeColor = "red";

    bola.velocityY = 3.25;
    bola.velocityX = 3.25;
    
}

function draw() {
    background(rgb(169,169,169));
    arestas=createEdgeSprites();
    bola.bounceOff(arestas);
    
    if(bloco1.isTouching(bola) && bola.bounceOff(bloco1)){
        bola.shapeColor = "blue";
        music.play();
    }


    if(bloco2.isTouching(bola)){
        bola.shapeColor = "orange";
        bola.velocityY = 0;
        bola.velocityX = 0;

        music.stop();
    }

    if(bloco3.isTouching(bola)&&bola.bounceOff(bloco3)){
    bola.shapeColor = "green";
    music.play();
    }

    if(bloco4.isTouching(bola)&&bola.bounceOff(bloco4)){
    bola.shapeColor = "red";
    music.play();

    }

    drawSprites();
}