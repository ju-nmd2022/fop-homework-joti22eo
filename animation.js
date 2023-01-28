background(255, 255, 255);

function emoji(x, y, s) {
  // The background of the emoji
  noStroke();
  fill(255, 204, 77);
  ellipse(x, y, 400 * s);

  // The eyes
  fill(102, 69, 0);
  ellipse(x - 70 * s, y - 40 * s, 56 * s, 80 * s);
  describe("left eye");
  ellipse(x + 60 * s, y - 40 * s, 56 * s, 80 * s);
  describe("right eye");

  //  The mouth
  arc(x, y + 30 * s, 220 * s, 180 * s, 0, PI, OPEN);
  fill(255, 204, 77);
  arc(x, y, 260 * s, 180 * s, 0, PI, OPEN);

  // The teardrop
  fill(93, 173, 236);
  triangle(
    x + 60 * s,
    y + 2 * s,
    x + 90 * s,
    y + 50 * s,
    x + 30 * s,
    y + 50 * s
  );
  ellipse(x + 60 * s, y + 84 * s, 80 * s, 100 * s);
}

let x = 200;
let speed = 5;

function draw() {
  clear();
  emoji(x, 200, 0.4);

  x = x + speed;

  if (x > 300 || x < 200) {
    speed = speed * -1;
  }
}
