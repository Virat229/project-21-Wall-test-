var wall;
var bullet;
var speed,weight;
var thickness;
var damage;

function setup() {
  createCanvas(1600,400);
  //speed = random(80,150);
  speed = random(80,140);
  weight = random(30,52);
  thickness = random(22,83);
  bullet = createSprite(30, 200, 40, 10);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "violet";
  bullet.shapeColor = "white";
  bullet.velocityX = speed;
  bullet.depth = wall.depth + 1;
  console.log(speed);
  console.log(thickness);
  
}

function draw() {
  background(0,0,0);  
  bullet.depth = wall.depth + 1;
  if(isTouching(bullet,wall)){
    bullet.velocityX = 0;
    damage = 0.5 * weight * speed * speed *1/thickness *1/ thickness * 1/thickness;
    console.log(damage);
    if(damage <= 10){
      wall.shapeColor = "green";
 }
 if(damage > 10){
   wall.shapeColor = "red";
 }
 
  }
  drawSprites();
  //Text ("Wall Testing Unit",700,50);
}
