var x,y, x1,y1,x2,y2,x3,y3,x4,y4,TargetX,TargetY,a,b;

var sun=[];
var sun0;
var p;
function setup() {
  x=0;
  y=0;
  a=0;
  b=1;
  createCanvas(500,1000);
  // background(0);
  for(var i=0;i<6;i++){
    sun[i]=createImg("images/suns/sun.png");
     
  }
//    sun0=createImg("images/suns/sun.png");
//    p = new Particle(200, 200);
}

function draw() {
  // createCanvas(windowWidth, windowHeight);
  // background(0);
    
  
  TargetX= map(mouseX,0,width,10,0);
  TargetY= map(mouseY,0,height,10,0);
  
  x=x+(TargetX-x)*0.05;
  y+=(TargetY-y)*0.05;
 
  
  randomSeed(9);
  for(var i=0;i<6;i++){
    var size=random(120,280)
    nx=(noise(i+a)-.5)*size*2;
    ny=(noise(i+b)-.5)*size*2;
    sun[i].size(size,size);
    sun[i].position(random(40,windowWidth-100)+x+nx,random(50,500/2)+y+ny);
    sun[i].style('z-index', 0)
  }
  
  // var start=window.document.getElementById("start");
  // start.style('z-index', -1)
  // print(start);
  // image(x1,y1);
  // fill(255,0,29);
  // rect(100+x1,150+y1,400,400);
  // fill(200,80,127);
  // rect(150+x2,150+y2,300,300);
  // fill(20,180,127);
  // rect(300+x3,200+y3,200,200);
  // fill(20,280,17);
  // rect(150+x2,150+y2,300,300);
  // fill(20,180,127);
  // rect(300+x3,200+y3,200,200);
  // fill(20,280,17);
  // rect(400+x4,300+y4,100,100);
  // image(img1, 200+x4,300+y4);
  // rect(200+x4,300+y4,100,100);
  a+=0.002;
  b+=0.002;
//    sun0.position(mouseX,mouseY);
//  p.update();
//  p.show();
}


function Particle(x, y) {
  // this.x = x;
  // this.y = y;
  this.pos = createVector(x, y);
  this.vel = createVector(1, 0);
  this.acc = createVector(0, 0.1);
  
  this.update = function() {
    var mouse = createVector(mouseX, mouseY);
    // This is ok but long
    // this.acc.x = mouse.x - this.pos.x;
    // this.acc.y = mouse.y - this.pos.y;
  
    // This is what i want to write but can't
    // this.acc = mouse - this.pos;
    
    // This is the awkward way
    this.acc = p5.Vector.sub(mouse, this.pos);
    // this.acc.mult(0.001);
    this.acc.setMag(0.1);
    
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.vel.limit(5);
  }

  this.show = function() {
    // point(mouseX,mouseY);
//    strokeWeight(4);
//    stroke(255);
    sun0.position(this.pos.x, this.pos.y);
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}