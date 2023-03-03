var ball1, ball2, ball3, ball4, ball5, ball6, ball7, ball8;
var wall1, wall2, wall3, wall4;
var wallsGroup;

var player;
var score=0;

function preload(){

}

function setup(){
createCanvas(400, 400);

ball1 = createSprite(200,200,20,20);
ball1.shapeColor = "green";
ball1.velocityX = 2;
ball1.velocityY = 3;

ball2 = createSprite(200,150,20,20);
ball2.shapeColor = "green";
ball2.velocityX = 2;
ball2.velocityY = 3;

ball3 = createSprite(140,200,20,20);
ball3.shapeColor = "green";
ball3.velocityX = 2;
ball3.velocityY = 3;

ball4 = createSprite(120,200,20,20);
ball4.shapeColor = "green";
ball4.velocityX = 2;
ball4.velocityY = 3;

ball5 = createSprite(200,100,20,20);
ball5.shapeColor = "green";
ball5.velocityX = 2;
ball5.velocityY = 3;

ball6 = createSprite(200,40,20,20);
ball6.shapeColor = "red";
ball6.velocityX = 2;
ball6.velocityY = 3;

ball7 = createSprite(10,200,20,20);
ball7.shapeColor = "red";
ball7.velocityX = 2;
ball7.velocityY = 3;

ball8 = createSprite(345,200,20,20);
ball8.shapeColor = "red";
ball8.velocityX = 2;
ball8.velocityY = 3;

player = createSprite(200,50,15,15);
player.shapeColor = "white";

wall1 = createSprite(0,200,10,400);
wall2 = createSprite(400,200,10,400);
wall3 = createSprite(200,0,400,10);
wall4 = createSprite(200,400,400,10);

wallsGroup = new Group(); {
wallsGroup.add(wall1);
wallsGroup.add(wall2);
wallsGroup.add(wall3);
wallsGroup.add(wall4);
}

ball1.bounceOff(wallsGroup);
ball2.bounceOff(wallsGroup);
ball3.bounceOff(wallsGroup);
ball4.bounceOff(wallsGroup);
ball5.bounceOff(wallsGroup);
ball6.bounceOff(wallsGroup);
ball7.bounceOff(wallsGroup);
ball8.bounceOff(wallsGroup);
player.bounceOff(wallsGroup);

}


function draw() {
  background("black");
  textSize(15);
  fill("yellow");
  text("Puntos: "+ score, 20, 25);

  createEdgeSprites();

  if(keyCode === UP_ARROW) {
    player.y = player.y -4;
  }
  if(keyCode === DOWN_ARROW) {
    player.y = player.y +4;
  }
  if(keyCode === LEFT_ARROW) {
    player.x = player.x -4;
  }
  if(keyCode === RIGHT_ARROW) {
    player.x = player.x +4;
  }
 
  
  drawSprites();
}
