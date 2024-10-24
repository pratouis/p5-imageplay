let frog;
let pointilize = 25;
function preload() {
    // frog = loadImage('./assets/small_frog.jpg');
    frog = loadImage('./assets/frog.jpg')
}

function setup() {
    createCanvas(frog.width, frog.height);
    pixelDensity(1);
    background(0);
    // noLoop();
};

function draw() {
    paintPixels();
};


function spotPaint() {
    for(let i =0; i< 100; i++) {
        let x = random(width);
        let y = random(height);
        
        let c = frog.get(x,y);
        c[3] = c[3]/2;
        fill(c);
        noStroke();
        ellipse(x,y,15,15);
    }
}

/**
 * exercise 1
 * paint using pixels
 */

function paintPixels() {
    // console.log('being called?');
    frog.loadPixels();
    let times = 0;
    while(times++ < 50) {
        let x = floor(random(width));
        let y = floor(random(height));
        let i = 4* (x + y*width);
        let colorArr = frog.pixels.slice(i, i+4);
        colorArr[3] = 200;
        // if (frameCount % 30 === 0 && times % 100 === 0) {
        //     console.log('colorArr :: ', colorArr);
        // }
        noStroke();
        fill(...colorArr);
        ellipse(x,y,pointilize,pointilize);
    }
}

/**
 * exercise no 2
 * particles
 * draw image as particles where they take particles with them
 */

/**
 * exercise no 3
 * 2D -> 3D 
 */