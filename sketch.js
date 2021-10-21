var man;
var jungle;

function preload(){
  jungleImage = loadImage("jungle.jpg")
  manImage = loadImage("man.gif") 
  man1Image = loadImage("man.gif") 
 tigerImage = loadImage("tiger.gif")
 drugImage = loadImage("drug.gif")
 pacmanImage = loadImage("pacman.gif")
 bearImage = loadImage("bear.webp")
 jumpSound = loadSound("jump.wav")
 
}

function setup(){
  createCanvas(1200,600)

  jungle = createSprite(400,300,20,10)
  jungle.addImage(jungleImage)
  jungle.scale = 4;
  jungle.velocityX = 0.5;

  man = createSprite(1100,400,20,10)
  man.addImage(manImage)
  man.scale = 0.5;

  tiger = createSprite(170,400,20,10)
 tiger.addImage(tigerImage)
 tiger.scale = 0.7;
 
 drug = createSprite(200,400,20,10)
 drug.addImage(drugImage)
 drug.scale = 0.5;
 drug.velocityX = 5;

 drug1 = createSprite(200,400,20,10)
 drug1.addImage(drugImage)
 drug1.scale = 0.5;
 drug1.velocityX = 4;
 
 pacman = createSprite(200,400,20,10)
 pacman.addImage(pacmanImage)
 pacman.scale = 0.5;
 pacman.velocityX = 3;
  
 bear = createSprite(70,200,20,10)
 bear.addImage(bearImage)
 bear.scale = 0.5;
 bear.visible = false;
  
 
  
}
function draw(){
  background(255)

  if(keyIsDown(RIGHT_ARROW)){
    man.velocityX = 3;
  }
  if(keyIsDown(LEFT_ARROW)){
    man.velocityX = -3;
  }
  if(keyIsDown(UP_ARROW)){
    man.velocityY = -3;
    jumpSound.play();
  }
  if(keyIsDown(DOWN_ARROW)){
    man.velocityY = 3;
  }
  if(keyDown("space")){
    man.velocityX = 0;
    man.velocityY = 0;
  }
 
  
  drawSprites();
  if(drug.isTouching(man)){
    man.visible = false;
    drug.visible = false;
    drug1.visible = false;
    pacman.visible = false;
    jungle.velocityX = 0;
    
    textSize(100)
    stroke(3)
    fill("red")
    text("GAME OVER",150,210)
  }
  if(drug1.isTouching(man)){
    man.visible = false;
    drug.visible = false;
    drug1.visible = false;
    pacman.visible = false;
    jungle.velocityX = 0;
    
    textSize(100)
    stroke(3)
    fill("red")
    text("GAME OVER",150,210)
  }

  if(pacman.isTouching(man)){
    man.visible = false;
    drug.visible = false;
    drug1.visible = false;
    pacman.visible = false;
    jungle.velocityX = 0;
    
    textSize(100)
    stroke(3)
    fill("red")
    text("GAME OVER",150,210)
   
  }
  if(man.isTouching(tiger)){
    jumpSound.play();
    tiger.visible = false;
    man.visible = false;
    jungle.velocityX = 0;
    bear.visible = true;
    
   textSize(100)
   stroke(3)
   fill("yellow")
   text("You are a champion",150,210)
  }
  }
