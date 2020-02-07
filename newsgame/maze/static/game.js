const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const startingPos = [8, 8];
let headlines = ['test headline 1', 'test headline 2', 'test headline 3']

// 0 = blank space
// 1 = wall
// 2 = player spawn point
// 3 = exit
// 5 through 9 = NPCs delivering news

grid = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 6, 0, 0, 0, 0, 0, 1, 5, 1],
  [1, 1, 1, 0, 1, 1, 0, 1, 0, 1],
  [1, 1, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 0, 0, 0, 1, 0, 1],
  [1, 0, 0, 1, 1, 1, 0, 1, 0, 1],
  [1, 1, 0, 1, 7, 1, 0, 1, 0, 1],
  [1, 3, 0, 0, 0, 0, 0, 1, 2, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

let player = {
  x: startingPos[0],
  y: startingPos[1]
};

const width = canvas.width;
const blockWidth = canvas.width / grid.length;

// console
const p = document.createElement('p');
p.innerHTML = `Width: ${width}, Block Width: ${blockWidth}`;
document.querySelector('div').appendChild(p);

function drawWall(posX, posY) {
  ctx.beginPath();
  ctx.rect(posX * blockWidth, posY * blockWidth, blockWidth, blockWidth);
  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.closePath();
}

function drawNPC(posX, posY) {
  ctx.beginPath();
  ctx.rect(posX * blockWidth, posY * blockWidth, blockWidth, blockWidth);
  ctx.fillStyle = '#4a9cc2';
  ctx.fill();
  ctx.closePath();
}

function drawPlayer(posX, posY) {
  // console.log('draw player');
  // console.log(player);
  ctx.beginPath();
  ctx.rect(posX * blockWidth, posY * blockWidth, blockWidth, blockWidth);
  ctx.fillStyle = '#4ac24a';
  ctx.fill();
  ctx.closePath();
  player.x = posX;
  player.y = posY;
}

function drawExit(posX, posY) {
  ctx.beginPath();
  ctx.rect(posX * blockWidth, posY * blockWidth, blockWidth, blockWidth);
  ctx.fillStyle = '#edcb42';
  ctx.fill();
  ctx.closePath();
}

function drawText() {
  ctx.beginPath();
  ctx.rect(100,100,100,100);
  ctx.fillStyle = '#cc0000';
  ctx.fill();
  ctx.closePath();
}

function draw() {
  // clear before redraw
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // loop through array on y axis and draw blocks
  for (y = 0; y < grid.length; y++) {
    //   loop through each subarray for x axis
    for (x = 0; x < grid[y].length; x++) {
      //     if 1, draw wall
      if (grid[y][x] == 1) {
        drawWall(x, y);
      } else if ([5,6,7,8,9].includes(grid[y][x])) {
        drawNPC(x, y);
        // } else if (grid[y][x] == 3) {
        //   drawPlayer(x,y)
      } else if (grid[y][x] == 3) {
        drawExit(x, y);
      }
    }
  }

  drawPlayer(player.x, player.y);

  // check whether to show the news
  let currentLocationValue = grid[player.y][player.x]
  if ([5,6,7,8,9].includes(currentLocationValue)) {
    console.log(headlines[currentLocationValue - 5])
  }

  if (currentLocationValue == 3) console.log('exit')
}

function moveUp() {
  player.y--;
  draw();
}

function moveDown() {
  player.y++;
  draw();
}

function moveLeft() {
  player.x--;
  draw();
}

function moveRight() {
  player.x++;
  draw();
}

function showNews() {
  if (player.x) {
    return null
  }
}

// output
const div = document.createElement('div');
p.innerHTML = `Width: ${width}, Block Width: ${blockWidth}`;
document.querySelector('.output').appendChild(div);

function moveIsLegal(newX, newY) {
  // if newX, newY compared to board[newX][newY] is a wall, return true for collision
  if (grid[newY][newX] != 1) return true;
  else return false;
  // console.log(`oldX: ${player.x}, oldY: ${player.y}`)
  // console.log(`newX: ${newX}, newY: ${newY}`)
}

function startGame() {
  draw();
  document.addEventListener('keydown', e => {
    if (e.keyCode == 87 && moveIsLegal(player.x, player.y - 1)) moveUp();
    else if (e.keyCode == 83 && moveIsLegal(player.x, player.y + 1)) moveDown();
    else if (e.keyCode == 65 && moveIsLegal(player.x - 1, player.y)) moveLeft();
    else if (e.keyCode == 68 && moveIsLegal(player.x + 1, player.y)) moveRight();
  });
}

startGame();
