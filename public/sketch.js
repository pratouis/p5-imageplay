let photo, preImg, nextImg;

const EDGE_THRESHOLD = 2;
function preload() {
    photo = loadImage('./assets/photo.jpg');
}

function setup() {
    // stop draw running multiple times 
    noLoop();
    createCanvas(photo.width,photo.height);
    pixelDensity(1);
    preImg = createImage(photo.width, photo.height);
    nextImg = createImage(photo.width,photo.height);
    preProcessImage();
};

function draw() {
    image(preImg,0,0);
    // postProcessImage();
};

function preProcessImage() {
    preImg.loadPixels();
    photo.loadPixels();
    // make edges pop
    for(let i =0; i<preImg.pixels.length; i+=4) {
        let color1 = photo.pixels.slice(i, i+4);
        let b1 = brightness(color(...color1));
        let i2 = getNeighborStart(i);
        let color2 = photo.pixels.slice(i2, i2+4);
        let b2 = brightness(color(...color2));
        let diff = abs(b2-b1);
        if (diff > EDGE_THRESHOLD) {
            preImg.pixels[i] = 0;
            preImg.pixels[i+1] = 0;
            preImg.pixels[i+2] = 0;
        } else {
            preImg.pixels[i] = 255;
            preImg.pixels[i+1] = 255;
            preImg.pixels[i+2] = 255;
        }
        preImg.pixels[i+3] = 255;
    }
    preImg.updatePixels();
    image(preImg,0,0);
}

function getNeighborStart(i) {
    let neighbor = i+4;
    let x = i/4 % width;
    let y = Math.floor(i/4/width);
    if(x+1 >= preImg.width) {
        neighbor = i+preImg.width;
    }
    if(neighbor >= preImg.pixels.length) {
        neighbor = i-preImg.width;
    }
    return neighbor
}


function postProcessImage() {
    if (frameCount % 30 === 0) {
        if (frameCount/30 % 2 === 0) {
            // move leftish
        } else {
            // move rightish
        }
    }
}