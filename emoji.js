/* This is my emoji
Foundations of programming
Jönköping University 2023
*/

/* let x = 300; */
/* let y = 300; */
/* let s = 0.8; */

background(255, 255, 255);

function emoji(x, y, s, eyesClosed) {
  // The background of the emoji
  noStroke();
  fill(255, 204, 77);
  ellipse(x, y, 400 * s);

  if (eyesClosed) {
    fill(102, 69, 0);
    ellipse(x - 70 * s, y - 40 * s, 30, 5);
    ellipse(x + 60 * s, y - 40 * s, 30, 5);
  } else {
    // The eyes
    fill(102, 69, 0);
    ellipse(x - 70 * s, y - 40 * s, 56 * s, 80 * s);
    describe("left eye");
    ellipse(x + 60 * s, y - 40 * s, 56 * s, 80 * s);
    describe("right eye");
  }

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

/* emoji(100, 100, 0.4); */
/* emoji(300, 100, 0.4); */
/* emoji(100, 300, 0.4); */
/* emoji(300, 300, 0.4); */

let x = 300;
let y = 300;
let s = 0.6;
/* let emojiRotation = 0; */
/* function draw() { */
/*   background(255, 255, 255); */
/*   push(); */
/*   translate(x, 150); */
/*   rotate(emojiRotation); */
/*   emoji(mouseX, mouseY, s); */
/*   pop(); */

/*   x = x + 1; */
/*   y = y + 1; */

/* s = s + 0.01; */
/* emojiRotation = emojiRotation + 0.1; */
/* } */

function draw() {
  background(255, 255, 255);
  if (mouseIsPressed === true) {
    emoji(200, 200, 0.4, true);
  } else {
    emoji(200, 200, 0.4, false);
  }
}
