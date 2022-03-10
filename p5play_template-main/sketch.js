var caixa
function setup() {
  createCanvas(400,400);
  caixa = createSprite(200,200,10,10)
}

function draw() 
{
  background("blue");
  drawSprites()


  if (keyIsDown(RIGHT_ARROW)){
    caixa.position.x = caixa.position.x  +6
  }
  if (keyIsDown(LEFT_ARROW)){
    caixa.position.x = caixa.position.x  -6
  }
}




