const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
grid = [
  [1,1,1,1,1,1,1,1,1,1],
  [1,2,0,0,0,0,0,1,2,1],
  [1,1,1,0,1,1,0,1,0,1],
  [1,1,0,0,0,1,0,0,0,1],
  [1,0,0,1,0,1,1,1,0,1],
  [1,0,1,1,0,0,0,1,0,1],
  [1,0,0,1,1,1,0,1,0,1],
  [1,1,0,1,2,1,0,1,0,1],
  [1,4,0,0,0,0,0,1,3,1],
  [1,1,1,1,1,1,1,1,1,1]
]

let player = {
  x: 0,
  y: 0
}

const width = canvas.width;
const blockWidth = canvas.width / grid.length;

// console
const p = document.createElement('p')
p.innerHTML = `Width: ${width}, Block Width: ${blockWidth}`
document.querySelector('div').appendChild(p)

function drawWall(posX, posY) {
  ctx.beginPath();
  ctx.rect(posX * blockWidth,posY * blockWidth,blockWidth,blockWidth);
  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.closePath();
}

function drawBlank(posX, posY) {
  ctx.beginPath();
  ctx.rect()
}

function drawNPC(posX, posY) {
  ctx.beginPath();
  ctx.rect(posX * blockWidth,posY * blockWidth,blockWidth,blockWidth);
  ctx.fillStyle = '#4a9cc2';
  ctx.fill();
  ctx.closePath();
}

function drawPlayer(posX, posY) {
  console.log('draw player')
  console.log(player)
  ctx.beginPath();
  ctx.rect(posX * blockWidth, posY * blockWidth, blockWidth, blockWidth);
  ctx.fillStyle = '#4ac24a';
  ctx.fill();
  ctx.closePath();
  player.x = posX;
  player.y = posY;
  console.log('player after', player)
}

function drawExit(posX, posY) {
  ctx.beginPath();
  ctx.rect(posX * blockWidth, posY * blockWidth, blockWidth, blockWidth);
  ctx.fillStyle = '#edcb42';
  ctx.fill();
  ctx.closePath();
}

function draw() {
  // loop through array on y axis and draw blocks
  for (y = 0; y < grid.length; y++) {
  //   loop through each subarray for x axis
    for (x = 0; x < grid[y].length; x++) {
  //     if 1, draw wall
      if (grid[y][x] == 1) {
        drawWall(x,y)
      } else if (grid[y][x] == 2) {
        drawNPC(x,y)
      } else if (grid[y][x] == 3) {
        drawPlayer(x,y)
      } else if (grid[y][x] == 4) {
        drawExit(x,y)
      }
    }
  }
  // drawPlayer(8,8)
}

// w 87

function moveUp() {
  drawPlayer(player.x, player.y - 1)
}


function moveDown() {
  drawPlayer(player.x, player.y + 1)
}

function moveLeft() {
  drawPlayer(player.x - 1, player.y)
}

function moveRight() {
  drawPlayer(player.x + 1, player.y)
}

function startGame() {
  draw()
  window.addEventListener('keydown', e => {
    console.log('pressed key' + e.keyCode)
    if (e.keyCode == 87) moveUp()
    else if (e.keyCode == 83) moveDown()
    else if (e.keyCode == 65) moveLeft()
    else if (e.keyCode == 68) moveRight()
  })
}

startGame()