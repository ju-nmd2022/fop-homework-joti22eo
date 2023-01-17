background(255, 255, 255);

noStroke();
fill(255, 204, 77);
ellipse(300, 300, 400);

// Eyes
fill(102, 69, 0);
ellipse(230, 260, 56, 80);
describe("left eye");
ellipse(360, 260, 56, 80);
describe("right eye");

//  Mouth
arc(300, 330, 220, 180, 0, PI, OPEN);

fill(255, 204, 77);
arc(300, 300, 260, 180, 0, PI, OPEN);

// Teardrop
fill(93, 173, 236);
triangle(360, 302, 390, 350, 330, 350);
ellipse(360, 384, 80, 100);
