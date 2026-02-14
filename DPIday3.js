// Player position
let x = 100;
let y = 220;
let Img;
let Cloud;
let cloudSpeed = 3;
let cloudY = -80;
let cloudX = 0;

// Jump state
let jumping = false;
let jumpFrame = 0;


function preload() {
  Img = loadImage('DPIday3bunny.png');
  Cloud = loadImage('dpiday3clouds.png')
}
function setup() {
  createCanvas(600, 400);
  Img.resize(140, 140);
  Cloud.resize(200, 160);
}

function draw() {
  background(120, 190, 255); // sky
  fill('yellow');
  circle(10, 10, 100);
  // ground
  fill(60, 200, 90);
  rect(0, 330, width, 70);
  updateJump();
  drawPlayer();
  drawCloud(cloudX, cloudY);
  cloudX = cloudX + cloudSpeed;
  if (cloudX > width + 50) {
    cloudX = -100;
    cloudY = cloudY;
  }
  
}

// ==================================================
// JUMP FUNCTION
// ==================================================
function jump() {
  if (!jumping) {
    jumping = true;
    jumpFrame = 0;
  }
}

function keyPressed() {
  if (key === " ") jump();
  if (keyIsDown( UP_ARROW) === true) {
    jump();
  }
  
  if (keyIsDown(LEFT_ARROW) === true) {
    x -= 10;

  }

  if (keyIsDown(RIGHT_ARROW) === true) {
    x += 10;
  }
}



// ==================================================
// 🧠 JUMP LOGIC
// ==================================================
function updateJump() {
  if (!jumping) return;

  jumpFrame++;

  let t = jumpFrame / 30;
  let height = sin(t * PI) * 120;
  y = 220 - height;

  if (jumpFrame >= 30) {
    jumping = false;
    y = 220;
  }
}

// ==================================================
// 🎨 DRAW PLAYER
// ==================================================


function drawCloud(x, y) {
  newSprite2 = image(Cloud, cloudX, cloudY)
}
function drawPlayer() {
  newSprite = image(Img, x, y);
}

