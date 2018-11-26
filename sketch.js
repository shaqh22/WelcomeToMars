var y = 100;

function setup() {

  createCanvas(500, 500);  
  stroke(255);     // Set line drawing color to white
  frameRate(30);
}

function draw() { 
  background("#292A2C");   // Set the background to black
  y = y - 1; 
  if (y < 0) { 
    y = height; 
  }
  line(0, y, width, y);  
  
  fill("yellow");
  ellipse(mouseX,mouseY,50,50);
  
  fill("red");
  ellipse(300,300,300,300);
  textSize(40);
  textFont("Arial");
  textStyle(BOLD);
  textAlign(LEFT);
  text("Welcome To Mars",50,50)
  
  fill("blue");
  ellipse(70,120,75,70);
  
  fill("brown");
  ellipse(150,150,100,100)
  
  fill("purple");
  ellipse(20,90,30,30);
  }

