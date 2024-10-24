const pWIDTH = 800;
const pHEIGHT = 600;

function setup() {
    createCanvas(pWIDTH,pHEIGHT);
    background(0);
};

function draw() {
    // fromCenter();
    // randomPixelation();
    // gradient();
    mouseCenter();
};

function mouseCenter() {
    loadPixels();
    const d = pixelDensity();
    const realWidth = d*width;
    const realHeight = d*height;
    for (let x = 0; x<realWidth; x+=1) {
        for(let y =0; y<realHeight; y+=1){
            let startIndex = 4*(y*realWidth+x);
            let distanceFromCenter = dist(x,y,realWidth/2,realHeight/2);
            // RED
            pixels[startIndex] = cos(mouseX)*255;
            // GREEN
            pixels[startIndex+1] = cos(distanceFromCenter)*255;
            // BLUE
            pixels[startIndex+2] = sin(distanceFromCenter)*255;
            // ALPHA
            // pixels[startIndex+3] = asin(distanceFromCenter);
        }        
    }
    updatePixels();
};

function randomPixelation() {
    loadPixels();
    for(let i = 0; i < pixels.length; i+=4) {
        if (i % 64 === 0) {
            pixels[i]= random(255);
            pixels[i+1] = random(255);
        }
    }
    updatePixels();
};

function gradient() {
    loadPixels();
    const d = pixelDensity();
    const realWidth = d*width;
    const realHeight = d*height;
    for (let x = 0; x<realWidth; x+=1) {
        for(let y =0; y<realHeight; y+=1){
            let startIndex = 4*(y*realWidth+x);
            // RED
            pixels[startIndex] = y/2;
            // BLUE
            pixels[startIndex+1] = y/4;
            // GREEN
            pixels[startIndex+2] = x/4;
        }
    }
    updatePixels();
};

function fromCenter() {
    loadPixels();
    const d = pixelDensity();
    const realWidth = d*width;
    const realHeight = d*height;
    for (let x = 0; x<realWidth; x+=1) {
        for(let y =0; y<realHeight; y+=1){
            let startIndex = 4*(y*realWidth+x);
            let distanceFromCenter = dist(x,y,realWidth/2,realHeight/2);
            // RED
            // pixels[startIndex] = distanceFromCenter;
            // BLUE
            pixels[startIndex+1] = distanceFromCenter;
            // GREEN
            pixels[startIndex+2] = distanceFromCenter;
            // ALPHA
            // pixels[startIndex+3] = distanceFromCenter;
        }
    }
    updatePixels();
};
