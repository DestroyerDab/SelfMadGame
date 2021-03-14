var health = 1000;
var score = 0;

function preload(){
runningMan =loadAnimation(
  "pictures/PC1.png", "pictures/PC2.png", "pictures/PC3.png", "pictures/PC4.png"
)

runningZombie =loadAnimation(
  "pictures/RedStick1.png", "pictures/RedStick2.png", "pictures/RedStick3.png", "pictures/RedStick4.png"
)

backgroundImage = loadAnimation(
  "pictures/backgroundImage.jpeg"
)
helicopterImage = loadAnimation(
  "pictures/Helicopter.png"
)

}

function setup() {
  createCanvas(1500,800);
  Background = createSprite(750, 400, 20, 20);
  Man = createSprite(100, 675, 50, 50);
  Man.addAnimation("RunningMan1", runningMan)
  Background.addAnimation("backgroundImage0", backgroundImage)
  Man.scale = 10;
  Background.scale = 2
  zombieGroup = new Group();
}

function draw() {
  background(0, 0, 0);  
  drawSprites();
  
  if(keyDown(RIGHT_ARROW)){
    Man.velocityX=6;
  }
  else if(keyDown(LEFT_ARROW)){
    Man.velocityX=-6;
  }
  else{
    Man.velocityX=0;

  }
  for(var i = 0; i<zombieGroup.length; i++){
    if(Man.isTouching(zombieGroup.get (i))){
      health = health-1;
      if(keyDown("space")){
        zombieGroup.get(i).destroy();
      }
    }
  }






  if(score===3){
    helicopter = createSprite(400, 200, 10, 10)
    helicopter.addAnimation("Helicopter", helicopterImage)
    helicopter.scale=0.5
  }




  for(var i = 0; i<zombieGroup.length; i++){
      if(frameCount%10 === 0){
        text("ready", 300, 100)
      if(keyDown("space")){
        zombieGroup.get(i).destroy();
        score++
      }
      }
  }
  if(health<0){
    health=100
    //game end
  }
  spawnZombie();

  text("Health:"+health, 100, 100)
  text("Score:"+score, 200, 100)
  

}

function spawnZombie(){
  if(frameCount%80 === 0){
    zombie=createSprite(400, 675, 10, 10)
    zombie.addAnimation("runningZombie1", runningZombie);
    zombie.scale=10
    zombie.velocityX=4
    zombieGroup.add(zombie)
  }
}