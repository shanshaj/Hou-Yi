var x, y, x1, y1, x2, y2, x3, y3, x4, y4, TargetX, TargetY, a, b;

var sun = [];
var sun0;
var feather = [];
var p;

function setup() {
    x = 0;
    y = 0;
    a = 0;
    b = 1;
    createCanvas(500, 500);
    // background(0);
    for (var i = 0; i < 10; i++) {
        sun[i] = createImg("images/suns/sun.png");
        //    feather[i]=createImg("images/feather.gif");
    }

    for (var i = 0; i < 15; i++) {
        //    sun[i]=createImg("images/suns/sun.png");
        feather[i] = createImg("images/feather"+int(random(0,6))+".gif");
//        featehr[i].id('feather');
//         feather[i] = createImg("images/feather0.gif");
    }
    //    sun0=createImg("images/suns/sun.png");
    //    p = new Particle(200, 200);
}

function draw() {
    // createCanvas(windowWidth, windowHeight);
    // background(0);


    TargetX = map(mouseX, 0, width, 10, 0);
    TargetY = map(mouseY, 0, height, 10, 0);

    x = x + (TargetX - x) * 0.05;
    y += (TargetY - y) * 0.05;


    randomSeed(9);
    for (var i = 0; i < 10; i++) {
        var size = random(100, 280)
        nx = (noise(i + a) - .5) * size * 1.5;
        ny = (noise(i + b) - .5) * size * 1.5;

        sun[i].size(size, size);
        sun[i].position(random(100, windowWidth - 100) + x + nx, random(50, windowHeight / 2) + y + ny);
        sun[i].style('z-index', 0)

    }

    for (var i = 0; i < 15; i++) {
        var size = random(7, 30)
        nx = (noise(i + a) - .5) * size * 6.5;
        ny = (noise(i + b) - .5) * size * 6.5;


        feather[i].position(random(600, windowWidth - 200) + x*size/3 + nx, random(450, windowHeight -80) + y*size/3 + ny);
        feather[i].size(size*noise(i + a)*2,size*noise(i + b)*2);
      
       
//        /sun[i].style('transform', 'rotate(20deg)');
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
    a += 0.002;
    b += 0.002;

    //    p.update();
    //  p.show();
}


function Particle(x, y) {
    // this.x = x;
    // this.y = y;
    this.pos = createVector(x, y);
    this.vel = createVector(1, 0);
    this.acc = createVector(0, 0.01);

    this.update = function () {
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

    this.show = function () {
        // point(mouseX,mouseY);
        //    strokeWeight(4);
        //    stroke(255);
        sun0.position(this.pos.x, this.pos.y);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
