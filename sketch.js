var spaceImg, space;
var irobmamImg, irobmam
var spacesuttelImg, spacesuttel
var gameState = "play"

function preload(){
  spaceImg = loadImage("space.png");
  spacesuttel = loadImage("spacesuttel.png");
  irobmamImg = loadImage("irobmam.png");
  
}

function setup() {
  createCanvas(600, 600);
  space = createSprite(300,300);
  space.addImage("tower",towerImg);
  space.velocityY = 1;
  
  irobmam = createSprite(300,300)
  irobmam.addImage("ghost",ghostImg)
  irobmam.scale = 0.3 
  
  
  spacesuttelsGroup = new Group()
  ibGroup = new Group()
}

function draw() {

  background(200);
  if (gameState==="play") {
    
  
  if(space.y > 400){
      space.y = 300
    }

    if (keyDown("space")) {
      irobmam.velocityY = -5
    }
    irobmam.velocityY = irobmam.velocityY +0.5
  

    if (keyDown("right_arrow")) {
      irobmam.x = irobmam.x +5
      
    }
    if (keyDown("left_arrow")) {
      irobmam.x = irobmam.x -5
      
    }

    if (spacesuttelsGroup.isTouching(irobmam)){
      irobmam.velocityY = 0
    }
    if (ibGroup.isTouching(irobmam)||irobmam.y>600) {
      irobmam.destroy()
      gameState = "end"
    }
    spawnspacesuttel()
  
    drawSprites()
}
if (gameState==="end") {
  fill ("red")
  text ("GAME OVER",250,250)
}
}
function spawnspacesuttel (){
  if(frameCount%240===0){
    var spacesuttel= createSprite(200,10)
    var ib = createSprite(200,15)
    ib.width = climber.width
    ib.height = 2

    
    spacesuttel.x = door.x
    ib.x = door.x

    
    spacesuttel.addImage(spacesuttelImg)

    spacesuttel.velocityY = 1
    ib.velocityY = 1

    irobmam.depth = spacesuttel.depth
    irobmam.depth+= 1
    spacesuttel.lifetime = 800
    ib.lifetime = 800

    doorsGroup.add(door)
    spacesuttelsGroup.add(spacesuttel)
    
  }

  

}

