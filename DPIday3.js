// Player position
let x = 100;
let y = 220;
let Img;

// Jump state
let jumping = false;
let jumpFrame = 0;


function preload() {
  Img = loadImage('DPIday3bunny.png');
}
function setup() {
  createCanvas(600, 400);
  Img.resize(140, 140);
  
}

function draw() {
  background(120, 190, 255); // sky

  // ground
  fill(60, 200, 90);
  rect(0, 330, width, 70);
  updateJump();

  drawPlayer();
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
function drawPlayer() {
  newSprite = image(Img, x, y);
}

