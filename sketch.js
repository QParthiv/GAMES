var mRec,fRec;


function setup() {
  createCanvas(800,400);
  mRec = createSprite(600, 150,80, 50);
  fRec = createSprite(200,150,50,80);
}

function draw() {
  background(230,225,230);
  
  mRec.x = World.mouseX;
  mRec.y = World.mouseY;

  if ((mRec.x-fRec.x < mRec.width/2+fRec.width/2) && 
     (fRec.x-mRec.x < mRec.width/2+fRec.width/2) && 
     (mRec.y-fRec.y < mRec.height/2+fRec.height/2) &&
     (fRec.y-mRec.y < mRec.height/2+fRec.height/2)) {
    mRec.shapeColor = "red";
    fRec.shapeColor = "red";
  } else {
    mRec.shapeColor = "green";
    fRec.shapeColor = "green";
  }

  drawSprites();
}