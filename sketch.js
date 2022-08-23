var Play = 1;
var End = 0;
var gameState = PLAY;
var imageFundo;
var mario ;
var gameOver,restart;



var score;

function preload(){
    imageFundo = loadimage("fundodejogo.jpg");
    mario = loadimage("mario.png");
    gameOver = loadImage("gameOver.png");
    restart = loadImage("restart.png");
}

function setup() {
    createCanvas(400,400);
    nave = createspite(50,height-80,20,50);
    nave.score = 0.5;

   imageFundo = createsprite(200,height-50,400,20);
    imageFundo.addImage("imageFundo",fundodejogo.jpg);
    imageFudo.x = imageFundo.width /2;

    gameOver = createSprite(width/2,height/2);
    gameOver.addImage(gameOverImg);
    gameOver.scale = 0.5;

    


 
}

function draw() {
 background(180);
  Text("pontos:" + score,width-100,50);
     if(gameState === PLAY){
        gameover.visible = false;
         restart.visible =  false;
        imageFundo.velocityX = -5;
         score = score + Math.round(getFrameRate()/60);

      if(imageFundo.x<0){
         imageFundo.x = imageFundo.width/4;
        }
      }
     if((touches.lengh > 0||KeyDown("space"))&&y>=height-90){
         mario.velocity = -11;
      }
        mario.velocity =mario.velocityX + 0.10;


      else if (gameState === END) {
       gameOver.visible = true;
        restart.visible = true;
        imageFundo.velocityX = 0;
        mario.velocityY = 0}

        if(touches.length > 0 || mousePressedOver(restart)){
            console.log("reiniciar")
             reiniciar();
            touches = [];
            }
      }