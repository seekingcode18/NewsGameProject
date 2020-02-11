const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
// const playerSpawnLocation = [8, 1];


// ALL THINGS SPRITE RELATED

let sprite = new Image();
// img.src = './Green-Cap-Character-16x18.png';
sprite.src = 'https://opengameart.org/sites/default/files/Green-Cap-Character-16x18.png';
sprite.onload = function() {
    init();
};

const spriteScale = 1;
const spriteWidth = 16;
const spriteHeight = 18;
const spriteSWidth = spriteScale * spriteWidth;
const spriteSHeight = spriteScale * spriteHeight;

function drawFrame(frameX, frameY, canvasX, canvasY) {
  ctx.drawImage(sprite,
               frameX * spriteWidth, frameY * spriteHeight, spriteWidth,                
               spriteHeight, player.x * blockWidth, player.y * blockWidth, spriteSWidth, spriteSHeight);
}                       //    ^         ^ to alter coordinates!

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



// let grid = require('./levels/level01');
// import level01 from './levels/level01';
// console.log(level01)
// let grid = level01
// console.log(grid)
// console.log(canvas)

// news API
const url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=6516669660b24bcda45cfd1a11285e73';
const req = new Request(url);
let headlines = [];
fetch(req)
  .then(res => res.json())
  .then(res => {
    res.articles.map(article => {
      article.clicked = false;
      headlines.push(article);
    })
  })
  // .then(function(response) {
  //   console.log(response.json());
  // })

let score = 0;

// document.querySelector("#points");
let points = Number(document.querySelector("#points").innerHTML);
// console.log(points)
// const newPoints = Number(points) + 5
// console.log(newPoints)
// document.querySelector("#points").innerHTML = String(newPoints);
// console.log(document.querySelector("#points"));

const username = document.querySelector("#username").innerHTML;
const id = document.querySelector("#id").value;
// for JSON form when making PUT request
//^ Using XML HTTP request

// set up output to display the news and other game info
const outputBox = document.querySelector('.output');

// set up the headline / link
const headlineToDisplay = document.createElement('p');
const linkToArticle = document.createElement('a');

// 0 = blank space
// 1 = wall
// 2 = player spawn point
// 3 = exit
// 5 through 9 = NPCs delivering news

// 1 - spawn 8,8
// grid = [
//   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 6, 0, 0, 0, 0, 0, 1, 5, 1],
//   [1, 1, 1, 0, 1, 1, 0, 1, 0, 1],
//   [1, 1, 0, 0, 0, 1, 0, 0, 0, 1],
//   [1, 0, 0, 1, 0, 1, 1, 1, 0, 1],
//   [1, 0, 1, 1, 0, 0, 0, 1, 0, 1],
//   [1, 0, 0, 1, 1, 1, 0, 1, 0, 1],
//   [1, 1, 0, 1, 7, 1, 0, 1, 0, 1],
//   [1, 3, 0, 0, 0, 0, 0, 1, 2, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// ];

// 2 - spawn 8,1
// grid = [
//   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 0, 3, 1, 5, 0, 0, 1, 2, 1],
//   [1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
//   [1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
//   [1, 1, 9, 1, 0, 1, 0, 1, 1, 1],
//   [1, 1, 1, 1, 0, 1, 0, 0, 0, 1],
//   [1, 0, 0, 0, 0, 1, 0, 1, 0, 1],
//   [1, 8, 1, 1, 1, 1, 0, 1, 0, 1],
//   [1, 0, 0, 0, 0, 0, 0, 0, 6, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// ];

let player = {
  x: playerSpawnLocation[0],
  y: playerSpawnLocation[1]
};

const width = canvas.width;
const blockWidth = canvas.width / grid[0].length;

function drawWall(posX, posY) {
  ctx.beginPath();
  ctx.rect(posX * blockWidth, posY * blockWidth, blockWidth, blockWidth);
  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.closePath();
}

function drawLevelEntrance(posX, posY) {
  ctx.beginPath();
  ctx.rect(posX * blockWidth, posY * blockWidth, blockWidth, blockWidth);
  ctx.fillStyle = 'orange';
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
  // ctx.beginPath();
  // ctx.rect(posX * blockWidth, posY * blockWidth, blockWidth, blockWidth);
  // ctx.fillStyle = '#4ac24a';
  // ctx.fill();
  // ctx.closePath();
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
  ctx.rect(100, 100, 100, 100);
  ctx.fillStyle = '#cc0000';
  ctx.fill();
  ctx.closePath();
}

//initiate sprite animation
// change to draw?
// window.requestAnimationFrame(draw);

function draw() {
  // clear before redraw
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawFrame(cycleLoop[currentLoopIndex], currentDirection, 0, 0);
  currentLoopIndex++;
  if (currentLoopIndex >= cycleLoop.length) {
    currentLoopIndex = 0
  }
  // loop through array on y axis and draw blocks
  for (y = 0; y < grid.length; y++) {
    //   loop through each subarray for x axis
    for (x = 0; x < grid[y].length; x++) {
      //     if 1, draw wall
      if (grid[y][x] == 1) {
        drawWall(x, y);
      } else if ([5, 6, 7, 8, 9].includes(grid[y][x])) {
        drawNPC(x, y);
        // } else if (grid[y][x] == 3) {
        //   drawPlayer(x,y)
      } else if (grid[y][x] == 3) {
        drawExit(x, y);
      } else if (['a', 'b', 'c', 'd', 'e'].includes(grid[y][x])) {
        drawLevelEntrance(x, y)
      }
    }
  }

  drawPlayer(player.x, player.y);

  // clear the output box when the player is not on top of it
  while (outputBox.lastChild) {
    outputBox.removeChild(outputBox.lastChild);
  }

  // check whether to show the news
  let currentLocationValue = grid[player.y][player.x];
  if ([5, 6, 7, 8, 9].includes(currentLocationValue)) {
    // show relevant headline in output box
    linkToArticle.href = headlines[currentLocationValue - 5].url;
    linkToArticle.target = '_blank'
    linkToArticle.id = `headline-${currentLocationValue - 5}`
    linkToArticle.classList.add('headline-link');
    linkToArticle.innerHTML = headlines[currentLocationValue - 5].title;
    headlineToDisplay.appendChild(linkToArticle);
    headlineToDisplay.addEventListener('click', e => scoreHandler(currentLocationValue));
    outputBox.appendChild(headlineToDisplay);
  }

  // check whether player has run into level entrance
  if (['a', 'b', 'c', 'd', 'e'].includes(currentLocationValue)) {
    if (currentLocationValue == 'a') {
      window.open("http://127.0.0.1:8000/level01/","_self")
    } else if (currentLocationValue == 'b') {
      window.open("http://127.0.0.1:8000/level02/","_self")
    } else if (currentLocationValue == 'c') {
      window.open("http://127.0.0.1:8000/level03/","_self")
    } else if (currentLocationValue == 'd') {
      console.log('level 4 coming soon')
      // window.open("http://127.0.0.1:8000/level04/","_self")
    }
  }

  // exit when player is on exit block
  if (currentLocationValue == 3) {
    fetch(`http://127.0.0.1:8000/user/${id}/`, {
      headers: {"Content-Type": "application/json; charset=utf-8",
      "X-CSRFToken": document.querySelector("#csrf").value
    },
      method: 'PUT',
      body: JSON.stringify({
        username: username,
        points: points
      })
    })
    console.log('exit')
  };
}

function scoreHandler(currentLocationValue) {
  // only increase score for the first time player clicks a particular headline
  if (headlines[currentLocationValue].clicked == false) {
    score += 5;
    points += 5;
    console.log(score)
    document.querySelector("#points").innerHTML = points;
    document.getElementById('scoreBox').innerHTML = `Score (from js) - ${score}`
  }
  headlines[currentLocationValue].clicked = true
}

function displayScore() {
  const scoreBox = document.querySelector('.scoreBox');
  const scoreElem = document.createElement('p')
  scoreElem.innerHTML = `Score (from js) - ${score}`
  scoreElem.id = 'scoreBox'
  scoreBox.appendChild(scoreElem)
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
    return null;
  }
}

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
    else if (e.keyCode == 68 && moveIsLegal(player.x + 1, player.y))
      moveRight();
  });
  displayScore();
}
    
    function scoreHandler(currentLocationValue) {
      // only increase score for the first time player clicks a particular headline
      if (headlines[currentLocationValue].clicked == false) {
        score += 5;
        console.log(score)
        document.getElementById('scoreBox').innerHTML = `Score (from js) - ${score}`
      }
      headlines[currentLocationValue].clicked = true
    }
    
    function displayScore() {
      const scoreBox = document.querySelector('.scoreBox');
      const scoreElem = document.createElement('p')
      scoreElem.innerHTML = `Score (from js) - ${score}`
      scoreElem.id = 'scoreBox'
      scoreBox.appendChild(scoreElem)
    }
    
    function moveUp() {
      player.y--;
      currentDirection = 1;
      draw();
    }
    
    function moveDown() {
      player.y++;
      currentDirection = 0;
      draw();
    }
    
    function moveLeft() {
      player.x--;
      currentDirection = 2;
      draw();
    }
    
    function moveRight() {
      player.x++;
      currentDirection = 3;
      draw();
    }
    
    function showNews() {
      if (player.x) {
        return null;
      }
    }
    
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
        else if (e.keyCode == 68 && moveIsLegal(player.x + 1, player.y))
        moveRight();
      });
      displayScore();
    }
    
    startGame();
