// Variables
var bubbles = []
var score = 0
var hit = false
var player

function setup() {
  createCanvas(600, 600)
  // The cookies get deleted if the user restarts the browser
  // If the user has not saved yet his name in the cookies, execute this:
  if ((document.cookie.includes("username")) === false ) {
    player = new Player()
    player.setName()
  } else {
    player = new Player()
    player.name = (document.cookie).substring(9)
  }
  console.log(document.cookie)
}

// Preloads the annoying and lovely sound
function preload() {
  soundFormats('wav');
  scoreSound = loadSound('./sounds/scoresound.wav');
}

function draw() {
  background(240)
  scoreSound.setVolume(0.1)
  player.show()
  player.move()

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].show()
    bubbles[i].move()
    if (bubbles[i].hits(player)) {
      document.location.reload()
      alert("GAME OVER! Result: " + player.name + " with " + score + " point(s)!")
    }

    // When the bubble goes out of the canvas, execute this:
    if (bubbles[i].goesOff()) {
      score++
      scoreSound.play()
      document.getElementById('score').innerHTML = score
      console.log(score)
      bubbles.splice(i, 1)
    }
  }

  // Create new Bubbles each 50 frames
  if (frameCount % 50 == 0) {
    bubbles.push(new Bubble());
    textSize(32)
    text('pene', 0, 650)
    fill(0, 102, 153);
  }

}

// Set direction to 0 while pressing to create the movement effect
function keyReleased() {
  if (key != ' ') {
    player.setDir(0);
  }
}

// Input read
function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    player.setDir(1)
  } else if (keyCode === LEFT_ARROW) {
    player.setDir(-1)
  }
}