let img = new Image();
// img.src = 'Green-Cap-Character-16x18.png';
img.src = 'https://opengameart.org/sites/default/files/Green-Cap-Character-16x18.png';
img.onload = function() {
    init();
};

let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d');

function init() {
    // we'll add animation here
    ctx.drawImage(img, 0, 0, 16, 18, 0, 0, 16, 18)
}


