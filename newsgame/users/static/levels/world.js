const playerSpawnLocation = [9,  13];

grid = [
  ['c1',  'c2',  'c2',  'c2',  'c2',  'c2',  'c2',  'c2',  'c2',  'c3',  'p5',  'p5', 'p5',  'p5',  'col1',  'p6',  'hl',  1,  1,  'tr'],
  ['c4',  'c5',  'c5',  'c5',  'c5',  'c5',  'c5',  'c5',  'c5',  'c6',  'p5',  'p5',  'p5',  'p5',  'col1',  'p6',  0,  0,  0,  2],
  ['c7',  'c8',  'c8',  'c8',  'c13',  'c14',  'c8',  'c8',  'c8',  'c9',  'p5',  'p5',  'p5',  'p5',  'col1',  'p6',  0,  0,  0,  2],
  ['c10',  'c11',  'c11',  'c11',  'c15',  'c16',  'c11',  'c11',  'c11',  'c12',  'col1',  'col1',  'col1',  'col1',  'col1',  'p6',  0,  0,  0,  2],
  [2,  0,  0,  'p4',  'p5',  'p5',  'p6',  0,  0,  0,  'p8',  'p8',  'p8',  'p8',  'p8',  'p9',  0,  0,  0,  2],
  [2,  0,  0,  'p4',  'p5',  'p5',  'p6',  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  2],
  [2,  0,  0,  'p4',  'p5',  'p5',  'p12',  'p2',  'p2',  'p2',  'p3',  0,  0,  0,  'h1',  'h2',  'h3',  'h4',  'h5',  2],
  [2,  0,  0,  'p4',  'p5',  'p5',  'p5',  'p5',  'p5',  'p5',  'p6',  0,  0,  0,  'h6',  'h7',  'h8',  'h9',  'h10',  2],
  [2,  0,  0,  'p7',  'p8',  'p8',  'p8',  'p8',  'p11',  'p5',  'p6',  0,  0,  0,  'h11',  'h12',  'h13',  'h14',  'h15',  2],
  [2,  0,'r',  0,  0,  0,  0,  0,  'p4',  'p5',  'p6',  0,  0,  0,  'h16',  'h17',  'h18',  'h19',  'h20',  2],
  [2,  0,  0,  0,  0,  0,  0,  0,  'p4',  'p5',  'p6',  0,  0,  0,  'h21',  'h22',  'h23',  'h24',  'h25',  2],
  [2,  0, 'a4','a3', 0,  0,  0,  'ht',  'p4',  'p5',  'p12',  'p2',  'p2',  'p2', 'p2', 'p13', 'p5',  'p6',  0,  2],
  [2,  0, 'a1','a2', 'log',  9,  0,  2,  'p4',  'p5',  'p5',  'p5',  'p5',  'p5', 'p5', 'p5', 'p5',  'p6',  0,  2],
  [2,  0,  0,  0,  0,  0,  0,  2,  'p4',  'p5',  'p10',  'p8',  'p8',  'p8',  'p8',  'p8',  'p8',  'p9','r',  2],
  ['bl',  1,  1,  1,  1,  1,  1,'br',  'p4',  'p5',  'p6','hl',  1,  1,  1,  1,  1,  1,  1,  'br'],

];

const canvas = document.querySelector('canvas');
canvas.style.backgroundColor = '#3bbf41';
const ctx = canvas.getContext('2d');

// ASSETS
// ALL THINGS WEATHER RELATED

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(handleWeather);
  console.log('navigator geo location working in this browser')
}

function handleWeather(position) {
  const weatherBox = document.querySelector('.weather')
  const weatherTemp = document.createElement('p')
  const weatherIcon = document.createElement('img')
  weatherIcon.alt = 'current weather icon'
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  let weatherApiKey = 'bd39648442d5b7099e03718b9da3f06b';
  let weatherApiUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}`

  fetch(weatherApiUrl)
    .then(res => res.json())
    .then(res => {
      console.log(res)
      // show temp in deg C not K
      const temp = Math.floor(res.main.temp - 273.15)
      weatherTemp.innerHTML =  `The weather in ${res.name} is ${temp}&deg;C and ${res.weather[0].main.toLowerCase()}.`
      weatherBox.appendChild(weatherTemp)

      // set icon to img tag
      const iconCode = res.weather[0].icon.replace('n', 'd')
      weatherIcon.src = `http://openweathermap.org/img/wn/${iconCode}@2x.png`
      weatherBox.appendChild(weatherIcon)
    })
}

// ALL THINGS MUSIC RELATED
const mute = document.querySelector('#mute')

mute.addEventListener('click', e => {
  e.preventDefault();
  playMusic();
})

function playMusic() {
  const audio = document.querySelector('audio');
  // audio.play()
  if (audio.muted) audio.muted = false;
  else if (!audio.muted) audio.muted = true;
  }

// LOG NPC
let log = new Image();
log.src = logg;
log.onload = function() {
    // do something
}

function drawLog(frameX, frameY, canvasX, canvasY) {
     ctx.drawImage(log, 0, 0, 32, 32, canvasX * blockWidth, canvasY * blockWidth, 20, 20);
}

//PLAYER SPRITE
let sprite = new Image();
sprite.src = p1;
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

// ENVIRONMENT TILES

let tiles = new Image();
tiles.src = tileSet;
tiles.onload = function() {
};

const tileScale = 1;
const tileWidth = 16;
const tileHeight = 16;
const tileSWidth = 20;
const tileSHeight = 20;

function drawTile(frameX, frameY, canvasX, canvasY) {
  ctx.drawImage(tiles, frameX * tileWidth, frameY * tileWidth, 
                tileWidth, tileHeight, canvasX * blockWidth, canvasY * blockWidth, tileSWidth, tileSHeight); // brick 1
}                                  //^   x    /    y   coordinates

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

let score = 0;

let points = Number(document.querySelector("#points").innerHTML);

const username = document.querySelector("#username").innerHTML;
const id = document.querySelector("#id").value;
// for JSON form when making PUT request
//^ Using XML HTTP request

// set up output to display the news and other game info
const outputBox = document.querySelector('.output');

// set up the headline / link
const headlineToDisplay = document.createElement('p');
const linkToArticle = document.createElement('a');

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
  // drawTile(0,0,posX, posY);
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

function draw() {
  // clear before redraw
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // loop through array on y axis and draw blocks
  for (y = 0; y < grid.length; y++) {
    //   loop through each subarray for x axis
    for (x = 0; x < grid[y].length; x++) {
      //     if 1, draw wall
      switch(grid[y][x]) {
        case 1:
          drawTile(2,15,x,y);
          break;
        case 0:
          drawTile(5,9,x,y);
          break;
        case 8:
          drawTile(0,0,x,y);
          break;
        case 2:
          drawTile(1,14,x,y);
          break;
        case 'bl':
          drawTile(1,15,x,y);
          break;
        case 'tl':
          drawTile(1,13,x,y);
          break;
        case 'tr':
          drawTile(3,13,x,y);
          break;
        case 'br':
          drawTile(3,15,x,y);
          break;
        case 'hl':
          drawTile(0,16,x,y);
          break;
        case 'hr':
          drawTile(1,16,x,y);
          break;
        case 'ht':
          drawTile(0,14,x,y);
          break;
        case 'hb':
          drawTile(0,15,x,y);
          break;
        case 'a1':
          drawTile(5,17,x,y);
          break;
        case 'a2':
          drawTile(6,17,x,y);
          break;
        case 'a3':
          drawTile(6,16,x,y);
          break;
        case 'a4':
          drawTile(5,16,x,y);
          break;
        case 'r':
          drawTile(6,5,x,y);
          break;
        case 'log':
          drawLog(0,0, x, y);
          break;
        case 'h1':
          drawTile(6,0,x,y);
          break;
        case 'h2':
          drawTile(7,0,x,y);
          break;
        case 'h3':
          drawTile(8,0,x,y);
          break;
        case 'h4':
          drawTile(9,0,x,y);
          break;
        case 'h5':
          drawTile(10,0,x,y);
          break;
        case 'h6':
          drawTile(6,1,x,y);
          break;
        case 'h7':
          drawTile(7,1,x,y);
          break;
        case 'h8':
          drawTile(8,1,x,y);
          break;
        case 'h9':
          drawTile(9,1,x,y);
          break;
        case 'h10':
          drawTile(10,1,x,y);
          break;
        case 'h11':
          drawTile(6,2,x,y);
          break;
        case 'h12':
          drawTile(7,2,x,y);
          break;
        case 'h13':
          drawTile(8,2,x,y);
          break;
        case 'h14':
          drawTile(9,2,x,y);
          break;
        case 'h15':
          drawTile(10,2,x,y);
          break;
        case 'h16':
          drawTile(6,3,x,y);
          break;
        case 'h17':
          drawTile(7,3,x,y);
          break;
        case 'h18':
          drawTile(8,3,x,y);
          break;
        case 'h19':
          drawTile(9,3,x,y);
          break;
        case 'h20':
          drawTile(10,3,x,y);
          break;
        case 'h21':
          drawTile(6,4,x,y);
          break;
        case 'h22':
          drawTile(7,4,x,y);
          break;
        case 'h23':
          drawTile(8,4,x,y);
          break;
        case 'h24':
          drawTile(9,4,x,y);
          break;
        case 'h25':
          drawTile(10,4,x,y);
          break; 
        case 'p1':
          drawTile(0,3,x,y);
          break; 
        case 'p2':
          drawTile(1,3,x,y);
          break; 
        case 'p3':
          drawTile(2,3,x,y);
          break;  
        case 'p4':
          drawTile(0,4,x,y);
          break;
        case 'p5':
          drawTile(1,4,x,y);
          break; 
        case 'p6':
          drawTile(2,4,x,y);
          break;  
        case 'p7':
          drawTile(0,5,x,y);
          break; 
        case 'p8':
          drawTile(1,5,x,y);
          break; 
        case 'p9':
          drawTile(2,5,x,y);
          break;  
        case 'p10':
          drawTile(0,6,x,y);
          break; 
        case 'p11':
          drawTile(1,6,x,y);
          break; 
        case 'p12':
          drawTile(0,7,x,y);
          break;  
        case 'p13':
          drawTile(1,7,x,y);
          break;
        case 'c1':
          drawTile(22,2,x,y);
          break;
        case 'c2':
          drawTile(23,2,x,y);
          break;
        case 'c3':
          drawTile(24,2,x,y);
          break;
        case 'c4':
          drawTile(22,3,x,y);
          break;
        case 'c5':
          drawTile(23,3,x,y);
          break;
        case 'c6':
          drawTile(24,3,x,y);
          break;
        case 'c7':
          drawTile(22,4,x,y);
          break;
        case 'c8':
          drawTile(23,4,x,y);
          break;
        case 'c9':
          drawTile(24,4,x,y);
          break;
        case 'c10':
          drawTile(22,5,x,y);
          break;
        case 'c11':
          drawTile(23,5,x,y);
          break;
        case 'c12':
          drawTile(24,5,x,y);
          break;
        case 'c13':
          drawTile(7,27,x,y);
          break;
        case 'c14':
          drawTile(8,27,x,y);
          break;
        case 'c15':
          drawTile(7,28,x,y);
          break;
        case 'c16':
          drawTile(8,28,x,y);
          break;
        case 'col1':
          drawTile(1,4,x,y);
          break;  
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
          drawTile(5,9,x,y);
          break;
        case 3:
          drawExit(x, y);
          break;
        case 'a':
        case 'b':
        case 'c':
        case 'd':
        case 'e':
          drawLevelEntrance(x, y)
          break;
        }
      } 
    }
    drawTile(2,17,10,3);
    drawTile(4,17,11,3);
    drawTile(4,17,12,3);
    drawTile(4,17,13,3);
    drawTile(3,18,14,3);
    drawTile(4,18,14,2);
    drawTile(4,18,14,1);
    drawTile(4,18,14,0);

    drawFrame(cycleLoop[currentLoopIndex], currentDirection, 0, 0);
    currentLoopIndex++;
    if (currentLoopIndex >= cycleLoop.length) {
      currentLoopIndex = 0
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

  // on world map, check whether player has run into level entrance
  if (['a1', 'a2', 'a3', 'a4', 'h23', 'c13', 'c14', 'c15', 'c16', 'd', 'e'].includes(currentLocationValue)) {
    if (['a1', 'a2', 'a3', 'a4'].includes(currentLocationValue)) {
      window.open("http://127.0.0.1:8000/level01/","_self")
    } else if (currentLocationValue == 'h23') {
      window.open("http://127.0.0.1:8000/level02/","_self")
    } else if (['c13', 'c14', 'c15', 'c16'].includes(currentLocationValue)) {
      window.open("http://127.0.0.1:8000/level03/","_self")
    } else if (currentLocationValue == 'd') {
      const p = document.createElement('p');
      p.innerHTML = 'Level 4 coming soon...'
      outputBox.appendChild(p)
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
  window.open("http://127.0.0.1:8000/world/","_self")
};
}

function scoreHandler(currentLocationValue) {
  // only increase score for the first time player clicks a particular headline
  if (headlines[currentLocationValue].clicked == false) {
    score += 5;
    points += 5;
    console.log(points)
    document.querySelector("#points").innerHTML = points;
    // document.getElementById('scoreBox').innerHTML = `Score (from js) - ${score}`
  }
  headlines[currentLocationValue].clicked = true
}

function showNews() {
  if (player.x) {
    return null;
  }
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


    function moveIsLegal(newX, newY) {
      // if newX, newY compared to board[newX][newY] is a wall, return true for collision
      if (![1, 2, 'col1', 'log', 'ht', 'hb', 'bl', 'br', 'tl', 'tr', 'r', 'hr', 'hl', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'h10', 'h11', 'h12', 'h13', 'h14', 'h15', 'h16', 'h17', 'h18', 'h19', 'h20', 'h21', 'h22', 'h24', 'h25', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'c11', 'c12'].includes(grid[newY][newX])) return true;
      else return false;
    }

    startGame();

