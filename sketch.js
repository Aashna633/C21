var canvas;
var fixedRect,movingRect;

function setup() {
  canvas=createCanvas(800,800);
  fixedRect=createSprite(600, 200, 50, 50);
  fixedRect.shapeColor="blue";
  fixedRect.debug=true;
  
  movingRect=createSprite(400, 200, 50, 50);
  movingRect.shapeColor="blue";
  movingRect.debug=true;

  gameobject1=createSprite(100, 200, 50, 50);
  gameobject2=createSprite(200, 200, 50, 50);
  gameobject3=createSprite(300, 200, 50, 50);
  gameobject4=createSprite(400, 200, 50, 50);

 gameobject1.shapeColor="blue";
 gameobject2.shapeColor="blue";
 gameobject3.shapeColor="blue";
 gameobject4.shapeColor="blue";
}

function draw() {
  background("gold"); 
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(isTouching(movingRect, gameobject1)) 
  {
    gameobject1.shapeColor="red";
    movingRect.shapeColor="red";
  }
  else{
    gameobject1.shapeColor="blue";
    movingRect.shapeColor="blue";
  }
  

  drawSprites();
}

