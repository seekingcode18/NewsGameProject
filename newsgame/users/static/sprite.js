let img = new Image();
// img.src = './Green-Cap-Character-16x18.png';
img.src = 'https://opengameart.org/sites/default/files/Green-Cap-Character-16x18.png';
img.onload = function() {
    init();
};

let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d');

const spriteScale = 2;
const spriteWidth = 16;
const spriteHeight = 18;
const spriteSWidth = spriteScale * spriteWidth;
const spriteSHeight = spriteScale * spriteHeight;

function drawFrame(frameX, frameY, canvasX, canvasY) {
  ctx.drawImage(img,
               frameX * spriteWidth, frameY * spriteHeight, spriteWidth,                
               spriteHeight, canvasX, canvasY, spriteSWidth, spriteSHeight);
}


function init() {
    //animation frames in a given direction
    drawFrame(0,0,0,0);
    drawFrame(1, 0, spriteSWidth, 0);
    drawFrame(0, 0, spriteSWidth * 2, 0);
    drawFrame(2, 0, spriteSWidth * 3, 0);
}

const cycleLoop = [0, 1, 0, 2];
let currentLoopIndex = 0;
let frameCount = 0;
let currentDirection = 0;
// ^ 0-down 1-up 2-left 3-right

//starts the loop
window.requestAnimationFrame(step);

// function continues walking loop
function step() {
    frameCount++;
    if (frameCount < 15) {
        window.requestAnimationFrame(step);
        return;
    }
    frameCount = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFrame(cycleLoop[currentLoopIndex], currentDirection, 0, 0);
    currentLoopIndex++;
    if (currentLoopIndex >= cycleLoop.length) {
        currentLoopIndex = 0
    }
    window.requestAnimationFrame(step);
}

function init() {
    windows.requestAnimationFrame(step);
}

