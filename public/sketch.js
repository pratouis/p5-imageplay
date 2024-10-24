let photo, preImg;
function preload() {
    photo = loadImage('./assets/photo.jpg');
}

function setup() {
    // stop draw running multiple times 
    noLoop();
    createCanvas(photo.width,photo.height);
    pixelDensity(1);
    preImg = createImage(photo.width, photo.height);
    preProcessImage();
};

function draw() {
    // image(preImg,0,0);
    postProcessImage();
};
function preProcessImage() {
    preImg.loadPixels();
    photo.loadPixels();
    for(let i =0; i<preImg.pixels.length; i+=4) {
        let [r,g,b,alpha] = photo.pixels.slice(i, i+4);
        preImg.pixels[i] = r;
        preImg.pixels[i+1] = g;
        preImg.pixels[i+2] = b;
        preImg.pixels[i+3] = alpha;
    }
    preImg.updatePixels();
    image(preImg,0,0);
}

function postProcessImage() {
    preImg.loadPixels();
    for(let i =0; i<preImg.pixels.length; i+=4) {
        let color1 = preImg.pixels.slice(i, i+4);
        let [r,g,b,a] = color1;
        let b1 = brightness(color(...color1));
        let i2 = getNeighborStart(i);
        let color2 = preImg.pixels.slice(i2, i2+4);
        let b2 = brightness(color(...color2));
        let diff = abs(b2-b1);
        if (diff > 2) {
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