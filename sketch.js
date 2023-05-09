var sea 
var ship,shipImg,seaImg

function preload(){
seaImg = loadImage("sea.png")
shipImg= loadAnimation("ship-1.png", "ship-2.pg", "ship-3.png", "ship-4.png")

}

function setup(){
  createCanvas(400,400);
  sea=createSprites(0,0,400,400)
  sea.addImage(seaImg);
  ship=createSprites(0,0,150,200)
  ship.addAnimation(shipImg)
  sea.scale=2.5
  ship.scale=1
  sea.velocityX = 2
}

function draw() {
  background("blue");

    if(sea.x < 0){
      sea.x = sea.width/2;

    }
    drawSprites()
}
