// Constants
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const gridSize = 7;
const gridWidth = 700;
const gridHeight = 700;
const numCols = gridWidth / gridSize;
const numRows = gridHeight / gridSize;
const colors = ['red', 'green', 'water', 'grey', 'sand']; // Added 'grey' color

// Initialize grid
const grid = [];
for (let i = 0; i < numRows; i++) {
  const row = [];
  for (let j = 0; j < numCols; j++) {
    row.push(''); // Changed to an empty tile
  }
  grid.push(row);
}

// Mouse variables
let isMouseDown = false;
let currentColor = 'red';

// Event listeners
canvas.addEventListener('mousedown', handleMouseDown);
canvas.addEventListener('mouseup', handleMouseUp);
canvas.addEventListener('mousemove', handleMouseMove);

const redButton = document.getElementById('redButton');
const greenButton = document.getElementById('greenButton');
const waterButton = document.getElementById('waterButton');
const greyButton = document.getElementById('greyButton');
const sandButton = document.getElementById('sandButton'); 
const coalButton = document.getElementById('coalButton'); 
const lavaButton = document.getElementById('lavaButton');
const stoneButton = document.getElementById('stoneButton');
const freezePowderButton = document.getElementById('freezePowderButton');
const iceButton = document.getElementById('iceButton');
const steamButton = document.getElementById('steamButton');

redButton.addEventListener('click', () => setCurrentColor('red'));
greenButton.addEventListener('click', () => setCurrentColor('green'));
waterButton.addEventListener('click', () => setCurrentColor('water'));
greyButton.addEventListener('click', () => setCurrentColor('grey'));
sandButton.addEventListener('click', () => setCurrentColor('sand'));
coalButton.addEventListener('click', () => setCurrentColor('coal'));
lavaButton.addEventListener('click', () => setCurrentColor('lava'));
stoneButton.addEventListener('click', () => setCurrentColor('stone'));
freezePowderButton.addEventListener('click', () => setCurrentColor('freezePowder'));
iceButton.addEventListener('click', () => setCurrentColor('ice'));
steamButton.addEventListener('click', () => setCurrentColor('steam'));

// Functions
function drawGrid() {
  ctx.clearRect(0, 0, gridWidth, gridHeight);
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      const color = grid[i][j];
      if (color !== '') { //if the tile is not empty
        switch (color) {
          case 'red':
            ctx.fillStyle = redColor;
            break;
          case 'green':
            ctx.fillStyle = greenColor;
            break;
          case 'water':
            //we put the hex code of the color
            ctx.fillStyle = waterColor;
            break;
          case 'grey':
            ctx.fillStyle = greyColor;
            break;
          case 'sand':
            ctx.fillStyle = sandColor;
            break;
          case 'coal':
            ctx.fillStyle = coalColor;
            break;
          case 'lava':
            ctx.fillStyle = lavaColor;
            break;
          case 'stone':
            ctx.fillStyle = stoneColor;
            break;
          case 'freezePowder':
            ctx.fillStyle = freezePowderColor;
            break;
          case 'ice':
            ctx.fillStyle = iceColor;
            break;
          case 'steam':
            ctx.fillStyle = steamColor;
            break;
        }
        ctx.fillRect(j * gridSize, i * gridSize, gridSize, gridSize);
      }
    }
  }
}

function handleMouseDown(event) {
  isMouseDown = true;
}

function handleMouseUp(event) {
  isMouseDown = false;
}

function handleMouseMove(event) {
  if (isMouseDown) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const col = Math.floor(x / gridSize);
    const row = Math.floor(y / gridSize);
    if (col >= 0 && col < numCols && row >= 0 && row < numRows) {
      //we check if the tile is empty
      if (grid[row][col] === '') {
        grid[row][col] = currentColor;
      }
    }
  }
}

function applyGravity() {
  for (let i = numRows - 2; i >= 0; i--) {
    for (let j = 0; j < numCols; j++) {
      //we start by checking collision for gases. 
      if(grid[i][j] === 'steam'){
        if(i - 1 >= 0){
          //10% chance to go up
          if(Math.random() > 0.667){
            grid[i - 1][j] = 'steam';
            grid[i][j] = '';
          }
        }
        else{
          grid[i][j] = '';
        }
        
      }
      else {
          //we check if the tile below is empty and the current tile is not empty and not grey
      if (grid[i][j] !== '' && grid[i + 1][j] === '' && grid[i][j] !== 'grey') {
        grid[i + 1][j] = grid[i][j];
        grid[i][j] = '';
      }
      //if a water tile is ON TOP of a water tile
      if(grid[i][j] === 'water' && grid[i + 1][j] === 'water'){
        console.log('water on water');
        //the tile on the top becomes empty
        grid[i][j] = '';
        //we check if the diagonal tiles are empty below
        if(grid[i + 1][j + 1] === '' && grid[i + 1][j - 1] === ''){
            //if they are empty, we put a water tile on 50% right or left
            if(Math.random() > 0.5){
                grid[i + 1][j + 1] = 'water';
                console.log('water on water on water right');
            }else{
                grid[i + 1][j - 1] = 'water';
                console.log('water on water on water left');
            }
        }
        else if(grid[i + 1][j + 1] === '' && grid[i + 1][j - 1] !== ''){
            grid[i + 1][j + 1] = 'water';
            console.log('water on water on water right 1');
        }
        else if(grid[i + 1][j + 1] !== '' && grid[i + 1][j - 1] === ''){
            grid[i + 1][j - 1] = 'water';
            console.log('water on water on water left 2');
        }
        //if the diagonal tiles are not empty, we check if the tile directly on the right is empty; and the left is empty
        else if(grid[i][j + 1] === '' && grid[i][j - 1] === ''){
            //if they are empty, we put a water tile on 50% right or left
            if(Math.random() > 0.5){
                grid[i][j + 1] = 'water';
                console.log('water on water on water right 3');
            }else{
                grid[i][j - 1] = 'water';
                console.log('water on water on water left 4');
            }
        }
        else if(grid[i][j + 1] === '' && grid[i][j - 1] !== ''){
            grid[i][j + 1] = 'water';
            console.log('water on water on water right 5');
        }
        else if(grid[i][j + 1] !== '' && grid[i][j - 1] === ''){
            grid[i][j - 1] = 'water';
            console.log('water on water on water left 6');
        }
        else{
            grid[i][j] = 'water';
        }
      }
      //if a sand tile is ON TOP of a water tile
      if(grid[i][j] === 'sand' && grid[i + 1][j] === 'water'){
        //the tile on the top becomes water
        grid[i][j] = 'water';
        //the tile below becomes sand
        grid[i + 1][j] = 'sand';
      }
      //if the tile is lava
      if(grid[i][j] === 'lava'){
        //any water tile adjacent to the lava tile becomes stone
        if(grid[i + 1][j] === 'water'){
            grid[i + 1][j] = 'stone';
            //we generate steam on top of the lava
            grid[i-1][j] = 'steam';
        }
        if(grid[i - 1][j] === 'water'){
            grid[i - 1][j] = 'stone';
        }
        if(grid[i][j + 1] === 'water'){
            grid[i][j + 1] = 'stone';
        }
        if(grid[i][j - 1] === 'water'){
            grid[i][j - 1] = 'stone';
        }
      }
      //if the tile is freezePowder
      if(grid[i][j] === 'freezePowder' || grid[i][j] === 'ice'){
        //any water tile adjacent to the freezePowder or ice tile becomes ice
        if(grid[i + 1][j] === 'water'){
            grid[i + 1][j] = 'ice';
            grid[i][j] = 'ice';
        }
        if(grid[i - 1][j] === 'water'){
            grid[i - 1][j] = 'ice';
            grid[i][j] = 'ice';
        }
        if(grid[i][j + 1] === 'water'){
            grid[i][j + 1] = 'ice';
            grid[i][j] = 'ice';
        }
        if(grid[i][j - 1] === 'water'){
            grid[i][j - 1] = 'ice';
            grid[i][j] = 'ice';
        }
      }
    }
  }
}
}
const greyColorIndex = 3; // Index of 'grey' in the colors array

function setCurrentColor(color) {
  if (color === 'grey') {
    currentColor = colors[greyColorIndex];
  } else {
    currentColor = color;
  }
}

function update() {
  applyGravity();
  drawGrid();
}

setInterval(update, 100); // Update every 1/10 of a second
