const playerSpawnLocation = [18, 6];

grid = [
  [ 'm01', 'm02', 'm02', 'm03', 'm04',  'wt',  'wt',  'wt',  'wt',  'wt',  'wt',  'wt',  'wt',  'wt', 'wtr',  'aq',  'aq',  'aq',  'aq',  'aq'],
  [  'm1',  'm2',  'm2',  'm3',  'm4',     0,     0,     0,     0,     0,     0,     0,     0,     0,  'wr',  'aq',  'aq',  'aq',  'aq',  'aq'],
  [  'm5',     0, 'tvd',     0,  'm8',     0,     0,     0,     0,     0,     0,     0,     0,     0,  'wr',  'aq',  'aq',  'aq',  'aq',  'aq'],
  [  'm9', 'm10', 'm10', 'm11', 'm12',     0,     0,     0, 'bd1', 'bd2', 'bd3',     0,     0,     0,  'wr',  'aq',  'aq',  'aq',  'aq',  'aq'],
  [ 'm13', 'm14', 'm14', 'm15', 'm16',     0,     0,     0, 'bd4', 'bd5', 'bd6',     0,     0,     0, 'bg1', 'bg2',  'aq',  'aq',  'aq',  'aq'],
  [  'wl',     0,     5,     0,     0,     0,     0,     0,     0,     0,     0,     0,     0,     0, 'bg4', 'bg5', 'bg6', 'bg6', 'bg6', 'bg6'],
  [  'wl',     0,     0,     0,     0, 'bl1',     0,     6,  'f1',  'f2',  'f3',     0,     0,     0, 'bg7', 'bg8', 'bg9', 'bg9', 'bg9',     3],
  [  'wl',     0,     0,     0,     0, 'bl2',     6, 'tvr',  'f4',  'f5',  'f6',     0,     0,     0,'bg10','bg11','bg12','bg12','bg12','bg12'],
  [  'wl',     0,     0,     0,     0, 'bl3',     0,     6,  'f7',  'f8',  'f9',     0,     0,     0,'bg13','bg14','bg15','bg15','bg15','bg15'],
  [  'wl',     0,     0,     0,     0, 'bl4',     0,     0,     0,     0,     0,     0,     0,     0,  'wr','bg17',  'aq',  'aq',  'aq',  'aq'],
  [  'wl',     7,     0,     0,     0,     0,     0,     0, 'bu1', 'bu2', 'bu3',     0,     0,     0,  'wr',  'aq',  'aq',  'aq',  'aq',  'aq'],
  [  'wl', 'tvr',     7,     0,     0,     0,     0,     0, 'bu4', 'bu5', 'bu6',     0,     0,     0,  'wr',  'aq',  'aq',  'aq',  'aq',  'aq'],
  [  'wl',     7,     0,     0,     0,     0,     0,     0,     0,     0,     0,     0,     0,     0,  'wr',  'aq',  'aq',  'aq',  'aq',  'aq'],
  [  'wl',     0,     0,     0,     0,     0,     0,     0,     0,     0,     0,     0,     0,     0,  'wr',  'aq',  'aq',  'aq',  'aq',  'aq'],
  [ 'wbl',  'wb',  'wb',  'wb',  'wb',  'wb',  'wb',  'wb',  'wb',  'wb',  'wb',  'wb',  'wb',  'wb', 'wbr',  'aq',  'aq',  'aq',  'aq',  'aq']
];


const canvas = document.querySelector('canvas');
// canvas.style.backgroundImage = `url("${tileSet}")`;
// canvas.style.backgroundPosition = '16px 16px';
// canvas.style.backgroundRepeat = 'repeat';
// canvas.style.backgroundSize = "0px 0px";
canvas.style.backgroundColor = '#d5d5d5';
const ctx = canvas.getContext('2d');
// const playerSpawnLocation = [8, 1];


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

  // fetch(weatherApiUrl)
  //   .then(res => res.json())
  //   .then(res => {
  //     console.log(res)
  //     // show temp in deg C not K
  //     const temp = Math.floor(res.main.temp - 273.15)
  //     weatherTemp.innerHTML =  `The weather in ${res.name} is ${temp}&deg;C and ${res.weather[0].main.toLowerCase()}.`
  //     weatherBox.appendChild(weatherTemp)

  //     // set icon to img tag
  //     const iconCode = res.weather[0].icon.replace('n', 'd')
  //     weatherIcon.src = `http://openweathermap.org/img/wn/${iconCode}@2x.png`
  //     weatherBox.appendChild(weatherIcon)
  //   })
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
// let log = new Image();
// log.src = logg;
// log.onload = function() {
//     // do something
// }

function drawLog(frameX, frameY, canvasX, canvasY) {
  // ctx.drawImage(log, frameX * tileWidth, frameY * tileWidth, 
  //               tileWidth, tileHeight, canvasX * blockWidth, canvasY * blockWidth, tileSWidth, tileSHeight);
     ctx.drawImage(log, 0, 0, 32, 32, canvasX * blockWidth, canvasY * blockWidth, 20, 20);
}

// tavern NPC
let tav = new Image();
tav.src = char;
tav.onload = function() {
    // do something
}

function drawTvd(frameX, frameY, canvasX, canvasY) {
  // ctx.drawImage(log, frameX * tileWidth, frameY * tileWidth, 
  //               tileWidth, tileHeight, canvasX * blockWidth, canvasY * blockWidth, tileSWidth, tileSHeight);
     ctx.drawImage(tav, 0, 8, 16, 16, canvasX * blockWidth, canvasY * blockWidth, spriteSWidth, spriteSHeight);
}
function drawTvr(frameX, frameY, canvasX, canvasY) {
  // ctx.drawImage(log, frameX * tileWidth, frameY * tileWidth, 
  //               tileWidth, tileHeight, canvasX * blockWidth, canvasY * blockWidth, tileSWidth, tileSHeight);
     ctx.drawImage(tav, 0, 40, 16, 16, canvasX * blockWidth, canvasY * blockWidth, spriteSWidth, spriteSHeight);
}

function drawTvu(frameX, frameY, canvasX, canvasY) {
  // ctx.drawImage(log, frameX * tileWidth, frameY * tileWidth, 
  //               tileWidth, tileHeight, canvasX * blockWidth, canvasY * blockWidth, tileSWidth, tileSHeight);
     ctx.drawImage(tav, -1, 70, 16, 16, canvasX * blockWidth, canvasY * blockWidth, spriteSWidth, spriteSHeight);
}

function drawTvl(frameX, frameY, canvasX, canvasY) {
  // ctx.drawImage(log, frameX * tileWidth, frameY * tileWidth, 
  //               tileWidth, tileHeight, canvasX * blockWidth, canvasY * blockWidth, tileSWidth, tileSHeight);
     ctx.drawImage(tav, -2, 103, 16, 16, canvasX * blockWidth, canvasY * blockWidth, spriteSWidth, spriteSHeight);
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

// ENVIRONMENT TILES

let tiles = new Image();
tiles.src = tileSet;
tiles.onload = function() {
  // drawTile(0,0,0,0);
  // well();
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

// function well() {
//   ctx.drawImage(tiles, 112, 48, 16, 16, 20, 20, 20, 20); // well
// }




// let grid = require('./levels/level01');
// import level01 from './levels/level01';
// console.log(level01)
// let grid = level01
// console.log(grid)
// console.log(canvas)

// news API
const url = 'https://newsapi.org/v2/top-headlines?' +
          'country=gb&' +
          'category=science&' +
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
  // loop through array on y axis and draw blocks
  for (y = 0; y < grid.length; y++) {
    //   loop through each subarray for x axis
    for (x = 0; x < grid[y].length; x++) {
      //     if 1, draw wall
      switch(grid[y][x]) {
        case 1:
          drawTile(23,0,x,y);
          break;
        case 0:
          drawTile(27,24,x,y);
          break;
        case 8:
          drawTile(0,0,x,y);
          break;
        case 2:
          drawTile(1,14,x,y);
          break;
        case 'wt':
          drawTile(23,0,x,y);
          break;
        case 'wb':
          drawTile(23,2,x,y);
          break;
        case 'wr':
          drawTile(24,1,x,y);
          break;
        case 'wl':
          drawTile(22,1,x,y);
          break;
        case 'wtl':
          drawTile(22,0,x,y);
          break;
        case 'wbl':
          drawTile(22,2,x,y);
          break;
        case 'wtr':
          drawTile(24,0,x,y);
          break;
        case 'wbr':
          drawTile(24,2,x,y);
          break;
        case 'f1':
          drawTile(22,9,x,y);
          break;
        case 'f2':
          drawTile(23,9,x,y);
          break;
        case 'f3':
          drawTile(24,9,x,y);
          break;
        case 'f4':
          drawTile(22,10,x,y);
          break;
        case 'f5':
          drawTile(23,10,x,y);
          break;
        case 'f6':
          drawTile(24,10,x,y);
          break;
        case 'f7':
          drawTile(22,11,x,y);
          break;
        case 'f8':
          drawTile(23,11,x,y);
          break;
        case 'f9':
          drawTile(24,11,x,y);
          break;
        case 'bd1':
          drawTile(28,4,x,y);
          break;
        case 'bd2':
          drawTile(29,4,x,y);
          break;
        case 'bd3':
          drawTile(30,4,x,y);
          break;
        case 'bd4':
          drawTile(28,5,x,y);
          break;
        case 'bd5':
          drawTile(29,5,x,y);
          break;
        case 'bd6':
          drawTile(30,5,x,y);
          break;
        case 'bu1':
          drawTile(28,6,x,y);
          break;
        case 'bu2':
          drawTile(29,6,x,y);
          break;
        case 'bu3':
          drawTile(30,6,x,y);
          break;
        case 'bu4':
          drawTile(28,7,x,y);
          break;
        case 'bu5':
          drawTile(29,7,x,y);
          break;
        case 'bu6':
          drawTile(30,7,x,y);
          break;
        case 'bl1':
          drawTile(26,4,x,y);
          break;
        case 'bl2':
          drawTile(26,5,x,y);
          break;
        case 'bl3':
          drawTile(26,6,x,y);
          break;
        case 'bl4':
          drawTile(26,7,x,y);
          break;
        case 'br1':
          drawTile(27,4,x,y);
          break;
        case 'br2':
          drawTile(27,5,x,y);
          break;
        case 'br3':
          drawTile(27,6,x,y);
          break;
        case 'br4':
          drawTile(27,7,x,y);
          break;
        case 'm01':
          drawTile(18,23,x,y);
          break;
        case 'm02':
          drawTile(19,23,x,y);
          break;
        case 'm03':
          drawTile(20,23,x,y);
          break;
        case 'm04':
          drawTile(22,23,x,y);
          break;
        case 'm1':
          drawTile(18,24,x,y);
          break;
        case 'm2':
          drawTile(19,24,x,y);
          break;
        case 'm3':
          drawTile(20,24,x,y);
          break;
        case 'm4':
          drawTile(22,24,x,y);
          break;
        case 'm5':
          drawTile(18,25,x,y);
          break;
        case 'm8':
          drawTile(22,25,x,y);
          break;
        case 'm9':
          drawTile(18,26,x,y);
          break;
        case 'm10':
          drawTile(19,26,x,y);
          break;
        case 'm11':
          drawTile(20,26,x,y);
          break;
        case 'm12':
          drawTile(22,26,x,y);
          break;
        case 'm13':
          drawTile(18,27,x,y);
          break;
        case 'm14':
          drawTile(19,27,x,y);
          break;
        case 'm15':
          drawTile(20,27,x,y);
          break;
        case 'm16':
          drawTile(22,27,x,y);
          break;
        case 'tvd':
          drawTvd(0,0, x, y);
          break;
        case 'tvr':
          drawTvr(0,20, x, y);
          break;
        case 'tvu':
          drawTvu(0,40, x, y);
          break;
        case 'tvl':
          drawTvl(0,60, x, y);
          break;
        case 'bg1':
          drawTile(24,1,x,y);
          break;
        case 'bg2':
          drawTile(5,3,x,y);
          break;
        case 'bg3':
          drawTile(27,22,x,y);
          break;
        case 'bg4':
          drawTile(27,24,x,y);
          break;
        case 'bg5':
          drawTile(26,23,x,y);
          break;
        case 'bg6':
          drawTile(27,23,x,y);
          break;
        case 'bg7':
          drawTile(27,24,x,y);
          break;
        case 'bg8':
          drawTile(26,24,x,y);
          break;
        case 'bg9':
          drawTile(27,24,x,y);
          break;
        case 'bg10':
          drawTile(27,24,x,y);
          break;
        case 'bg11':
          drawTile(26,25,x,y);
          break;
        case 'bg12':
          drawTile(27,25,x,y);
          break;
        case 'bg13':
          drawTile(27,24,x,y);
          break;
        case 'bg14':
          drawTile(26,26,x,y);
          break;
        case 'bg15':
          drawTile(27,26,x,y);
          break;
        case 'bg16':
          drawTile(25,27,x,y);
          break;
        case 'bg17':
          drawTile(5,3,x,y);
          break;
        case 'bg18':
          drawTile(27,27,x,y);
          break;
        case 'bg19':
          drawTile(25,28,x,y);
          break;
        case 'bg20':
          drawTile(26,28,x,y);
          break;
        case 'aq':
          drawTile(5,3, x, y);
          break;
        // case 'tvr':
        //   drawTvr(0,20, x, y);
        //   break;
        // case 'tvu':
        //   drawTvu(0,40, x, y);
        //   break;
        // case 'tvl':
        //   drawTvl(0,60, x, y);
        //   break;
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
          drawTile(27,24,x,y);
          break;
        case 3:
          drawTile(27, 24, x, y);
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
    drawTile(26,27,15,9);
    drawTile(26,22,15,4);
    drawTile(25,22,14,4); //bg1
    drawTile(25,23,14,5); //bg4
    // drawTile(25,24,14,6); //bg7
    drawTile(25,25,14,7); //bg10
    drawTile(25,26,14,8); //bg13

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

function displayScore() {
  const scoreBox = document.querySelector('.scoreBox');
  const scoreElem = document.createElement('p')
  scoreElem.innerHTML = `Score (from js) - ${score}`
  scoreElem.id = 'scoreBox'
  scoreBox.appendChild(scoreElem)
}

// function moveUp() {
//   player.y--;
//   draw();
// }

// function moveDown() {
//   player.y++;
//   draw();
// }

// function moveLeft() {
//   player.x--;
//   draw();
// }

// function moveRight() {
//   player.x++;
//   draw();
// }

function showNews() {
  if (player.x) {
    return null;
  }
}

// function moveIsLegal(newX, newY) {
//   // if newX, newY compared to board[newX][newY] is a wall, return true for collision
//   if (grid[newY][newX] != 1) return true;
//   else return false;
//   // console.log(`oldX: ${player.x}, oldY: ${player.y}`)
//   // console.log(`newX: ${newX}, newY: ${newY}`)
// }

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

    // function scoreHandler(currentLocationValue) {
    //   // only increase score for the first time player clicks a particular headline
    //   if (headlines[currentLocationValue].clicked == false) {
    //     score += 5;
    //     console.log(score)
    //     document.getElementById('scoreBox').innerHTML = `Score (from js) - ${score}`
    //   }
    //   headlines[currentLocationValue].clicked = true
    // }

    // function displayScore() {
    //   const scoreBox = document.querySelector('.scoreBox');
    //   const scoreElem = document.createElement('p')
    //   scoreElem.innerHTML = `Score (from js) - ${score}`
    //   scoreElem.id = 'scoreBox'
    //   scoreBox.appendChild(scoreElem)
    // }

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

    // function showNews() {
    //   if (player.x) {
    //     return null;
    //   }
    // }

    function moveIsLegal(newX, newY) {
      // if newX, newY compared to board[newX][newY] is a wall, return true for collision
      if (![1, 2, 'log', 'ht', 'hb', 'bl', 'br', 'tl', 'tr', 'r', 'hr', 'hl', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'wt', 'wb', 'wr', 'wl', 'm4', 'm8', 'm12', 'm16', 'm15', 'm14', 'm13', 'bg1', 'bg4', 'bg5', 'bg6', 'bg12', 'bg11', 'bg10', 'bg13' ].includes(grid[newY][newX])) return true;
      else return false;
      // console.log(`oldX: ${player.x}, oldY: ${player.y}`)
      // console.log(`newX: ${newX}, newY: ${newY}`)
    }

    // function startGame() {
    //   draw();
    //   document.addEventListener('keydown', e => {
    //     if (e.keyCode == 87 && moveIsLegal(player.x, player.y - 1)) moveUp();
    //     else if (e.keyCode == 83 && moveIsLegal(player.x, player.y + 1)) moveDown();
    //     else if (e.keyCode == 65 && moveIsLegal(player.x - 1, player.y)) moveLeft();
    //     else if (e.keyCode == 68 && moveIsLegal(player.x + 1, player.y))
    //     moveRight();
    //   });
    //   displayScore();
    // }

    startGame();

