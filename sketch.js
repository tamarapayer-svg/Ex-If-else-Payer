function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  if (mouseX < width / 2) {
    background(200, 230, 250);
    fill(255, 204, 0);
  } else {
    background(25, 25, 112);
    fill(255, 255, 255);
  }

  let d;
  if (mouseIsPressed) {
    d = 250;
  } else {
    d = 150;
  }

  circle(mouseX, mouseY, d);
}