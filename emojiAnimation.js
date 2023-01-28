/* let x = 300; */
/* let y = 300; */
/* let s = 0.8; */

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

/* let x = -150; */
/* let direction = "forward"; */
/*  */
/* function draw() { */
/*   clear(); */
/*   emoji(x, 200, 0.6); */
/*  */
/*   if (direction === "forward") { */
/*     if (x < 300) { */
/*       x = x + 5; */
/*     } else { */
/*       direction = "backwards"; */
/*     } */
/*   } else if (direction === "backwards") { */
/*     if (x > 100) { */
/*       x = x - 10; */
/*     } else direction = "forward"; */
/*   } */
/* } */
/*  */

/* let x = 200; */
/* let speed = 2; */
/*  */
/* function draw() { */
/*   emoji(x, 200, 0.4); */
/*  */
/*   x = x + speed; */
/* } */
