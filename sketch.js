var movingrect;
var fixedrect;

function setup() {
  createCanvas(800,400);
 movingrect=createSprite(20,30,69,40);
 fixedrect=createSprite(300,200,40,69);
 movingrect.shapeColor="green";
 fixedrect.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  movingrect.x=mouseX;
  movingrect.y=mouseY;
  if(movingrect.x-fixedrect.x <=movingrect.width/2+fixedrect.width/2
    &&fixedrect.x-movingrect.x <=movingrect.width/2+fixedrect.width/2
    &&movingrect.y-fixedrect.y <=movingrect.height/2+fixedrect.height/2
    &&fixedrect.y-movingrect.y <=movingrect.height/2+fixedrect.height/2){
    movingrect.shapeColor="red";
    fixedrect.shapeColor="red";
  }
  else{
    movingrect.shapeColor="green";
    fixedrect.shapeColor="green";
  }
  drawSprites();
}