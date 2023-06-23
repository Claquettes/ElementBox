// Constants
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const gridSize = 5;
const gridWidth = 500;
const gridHeight = 500;
const numCols = gridWidth / gridSize;
const numRows = gridHeight / gridSize;
const colors = ['red', 'green', 'water', 'grey']; // Added 'grey' color

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

//we define the colors
const water = 'blue';

const redButton = document.getElementById('redButton');
const greenButton = document.getElementById('greenButton');
const waterButton = document.getElementById('waterButton');
const greyButton = document.getElementById('greyButton');

redButton.addEventListener('click', () => setCurrentColor('red'));
greenButton.addEventListener('click', () => setCurrentColor('green'));
waterButton.addEventListener('click', () => setCurrentColor(water));
greyButton.addEventListener('click', () => setCurrentColor('grey'));

// Functions
function drawGrid() {
  ctx.clearRect(0, 0, gridWidth, gridHeight);
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      const color = grid[i][j];
      if (color !== '') {
        ctx.fillStyle = color;
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
      grid[row][col] = currentColor;
    }
  }
}

function applyGravity() {
  for (let i = numRows - 2; i >= 0; i--) {
    for (let j = 0; j < numCols; j++) {
      if (grid[i][j] !== '' && grid[i + 1][j] === '' && grid[i][j] !== 'grey') {
        grid[i + 1][j] = grid[i][j];
        grid[i][j] = '';
      }
<<<<<<< HEAD
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
=======
>>>>>>> parent of c19c969 (better water model : water will flow down and try as much as possible to be flat.)
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
