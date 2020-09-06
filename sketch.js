var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="blue";
  fixedRect.debug=true;

  movingRect=createSprite(300, 20, 30, 50); 
  movingRect.shapeColor="blue";
}

function draw() {
  background(0);  

 movingRect.x=World.mouseX;
 movingRect.y=World.mouseY;

 if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
  &&
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
    
  &&movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
  &&
  fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
    fixedRect.shapeColor="yellow"; 
    movingRect.shapeColor="yellow";
  }else{
    fixedRect.shapeColor="green"; 
    movingRect.shapeColor="green";
  }/*else{
    fixedRect.shapeColor="blue"; 
    movingRect.shapeColor="blue";
  }*/

  drawSprites();
}