let lastX = width / 2;
let lastY = width / 2;

strokeWeight(8);
function mouseDragged() {
  line(lastX, lastY, mouseX, mouseY);

  lastX = mouseX;
  lastY = mouseY;
}

function draw() {
  if (mouseX > 200) {
    background(255, 0, 0);
  } else if (mouseX > 100) {
    background(0, 0, 255);
  } else {
    background(0, 255, 0);
  }
}
