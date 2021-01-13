function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
  angleMode(DEGREES);
  
}

function draw() {
  background("rgb(255,245,238)");  

  translate(200, 200);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();

  strokeWeight(4);
  
  stroke("rgb(176,224,230)");
  fill("rgb(10,186,181)");
  let secang = map(sc, 0, 60, 0, 360);
  arc(0, 0, 274, 274, 0, secang);

  noFill();
  strokeWeight(6);
  stroke("rgb(248,131,121)");
  let mnang = map(mn, 0, 60, 0, 360);
  arc(0, 0, 285, 285, 0, mnang);

  strokeWeight(8);
  stroke("rgb(112,41,99)");
  let hrng = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 300, 300, 0, hrng);
  
  push();
  rotate(secang);
  stroke("rgb(176,224,230)");
  line(0, 0, 133, 0);
  pop();

  
  push();
  rotate(mnang);
  stroke("rgb(248,131,121)");
  line(0, 0, 100, 0);
  pop();
  
  push();
  rotate(hrng);
  stroke("rgb(112,41,99)");
  line(0, 0, 80, 0);
  pop();
  //fill(225);
  //noStroke();
  //text(hr + ':' + mn + ':' + sc, 10, 200);
  


}