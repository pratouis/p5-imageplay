let lichen;

function preload() {
    lichen = loadImage("assets/lichen_pegs.jpeg");
};

function setup() {
    // size doesn't work
    createCanvas(600,400);
    // imageMode(CENTER);
};

function draw() {
    background(244);
    tint(255,mouseY%255,mouseX%255);
    image(lichen,0,0,mouseX,mouseY);
};

