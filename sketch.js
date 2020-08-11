var wall, thickness;
var bullet, speed, weight ;


function setup() {

  createCanvas(1600, 400);
   wall=createSprite(1200, 200, thickness, width/2);
   wall.shapeColor=grey(80,80,80);
    car=createSprite(50, 200, 50, 50);

     speed=random(223,321);
     weight=random(30,52);
     thickness=random(22,83);
}

function draw() {
  background(0,0,0);
  
  bullet.velocityX = speed;
  if(hasCollided(bullet, wall))
  {
    bullet.velocityX=0;
    var damge=0.5 * weight *speed* speed/(thickness *thickness *thickness);

    if(damage>10)
    {
      wall.shapeColor=red(255,0,0);
    }


    if(damage<10)
    {
      wall.shapeColor=blue(0,255,0)
    }
  }
  

  drawSprites();
}

function hasCollided(bullet, wall)
{
bulletRightEdge=bullet.x +bullet.width;
wallLeftEdge>=wall.x;
if (bulletRightEdge>=wallLeftEdge)
{
  reture true
}
reture false;
}