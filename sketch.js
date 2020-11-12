var bullet, speed, weight;
var wall, thickness;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
  bullet = createSprite(50,200,45,15)
  wall = createSprite(1200, 200, thickness, height/2)
}


function draw() {
  background(1600,400);  
  bullet.velocityX=speed
 
  wall.shapeColor=color(80, 80, 80)
  
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX=0;
    damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
   console.log(damage)
    if (damage>10) {
      bullet.shapeColor=color(255,0,0)
    }
    else{
      bullet.shapeColor=color(0,255,0)
    }
  }
  drawSprites();
}