function preload() {
    frog = loadImage('./assets/small_frog.jpg');
    // frog = loadImage('./assets/frog.jpg')
}

function setup() {
    createCanvas(frog.width,frog.height);
    pixelDensity(1);
    // noLoop();
};

function draw() {
    // image(frog, 0, 0);
    // myImageMethod();
    bwFilter();
};

let first = true;
let times = 0;

function myImageMethod() {
        loadPixels();
        frog.loadPixels();
        
        for(let i = 0; i<pixels.length; i+=4) {
            let x = i/4 % width;
            let y = Math.floor(i/4/width);
            // center
            let d = dist(width/2, height/2, x,y);
            // flashlight
            // let d = dist(mouseX, mouseY, x, y);
            let factor = map(d, 0, 1000, 2, 0);
            let frogPixel = frog.pixels.slice(i, i+4);
            let pColor = color(...frogPixel);
            let brighty = brightness(pColor);
            let [r,g,b,a] = frogPixel;
            pixels[i] = r*factor;
            pixels[i+1] = g*factor;
            pixels[i+2] = b*factor;
            pixels[i+3] = a;
        };
        updatePixels();
}

function centerShine() {
    loadPixels();
    frog.loadPixels();
    
    for(let i = 0; i<pixels.length; i+=4) {
        let x = i/4 % width;
        let y = Math.floor(i/4/width);
        // center
        let d = dist(width/2, height/2, x,y);
        // TODO look at map in p5
        let factor = map(d, 0, 1000, 2, 0)
        let [r,g,b,a] = frog.pixels.slice(i, i+4);
        pixels[i] = r*factor;
        pixels[i+1] = g*factor;
        pixels[i+2] = b*factor;
        pixels[i+3] = a;
    };
    updatePixels();
}

function bwFilter() {
    loadPixels();
    frog.loadPixels();

        
    for(let i = 0; i<pixels.length; i+=4) {
        let colors = frog.pixels.slice(i, i+4);
        let pColor = color(...colors);
        let brightVal = brightness(pColor);
        if (brightVal > mouseX%100) {
            pixels[i] = 255;
            pixels[i+1] = 255;
            pixels[i+2] = 255;
        } else {
            pixels[i] = 0;
            pixels[i+1] = 0;
            pixels[i+2] = 0;
        }
        pixels[i+3] = 255;
    };
    updatePixels();
}