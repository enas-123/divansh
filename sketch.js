var oneRect, secRect,seaRect;
function setup() {
  createCanvas(1200,800);
  oneRect = createSprite(200, 200, 10, 80);
  oneRect.shapeColor="green";
  secRect = createSprite(400, 200, 80, 30);
  secRect.shapeColor="green";
  seaRect = createSprite(490, 250, 150, 10);
  seaRect.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  secRect.x=World.mouseX;
  secRect.y=World.mouseY;
  drawSprites();

  if(secRect.x-oneRect.x<oneRect.width/2+secRect.width/2){
    secRect.shapeColor="red";
    oneRect.shapeColor="red";

  }
  else{
    secRect.shapeColor="green";
    oneRect.shapeColor="green";
  }
  drawSprites();

}