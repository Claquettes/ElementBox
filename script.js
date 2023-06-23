// Constants
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const gridSize = 5;
const gridWidth = 500;
const gridHeight = 500;
const numCols = gridWidth / gridSize;
const numRows = gridHeight / gridSize;
const colors = ['red', 'green', 'blue', 'grey']; // Added 'grey' color

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
const blueButton = document.getElementById('blueButton');
const greyButton = document.getElementById('greyButton');

redButton.addEventListener('click', () => setCurrentColor('red'));
greenButton.addEventListener('click', () => setCurrentColor('green'));
blueButton.addEventListener('click', () => setCurrentColor('blue'));
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
      //if a blue tile is ON TOP of a blue tile
      if(grid[i][j] === 'blue' && grid[i + 1][j] === 'blue'){
        console.log('blue on blue');
        //the tile on the top becomes empty
        grid[i][j] = '';
        //we check if the diagonal tiles are empty below
        if(grid[i + 1][j + 1] === '' && grid[i + 1][j - 1] === ''){
            //if they are empty, we put a blue tile on 50% right or left
            if(Math.random() > 0.5){
                grid[i + 1][j + 1] = 'blue';
                console.log('blue on blue on blue right');
            }else{
                grid[i + 1][j - 1] = 'blue';
                console.log('blue on blue on blue left');
            }
        }
        else if(grid[i + 1][j + 1] === '' && grid[i + 1][j - 1] !== ''){
            grid[i + 1][j + 1] = 'blue';
            console.log('blue on blue on blue right 1');
        }
        else if(grid[i + 1][j + 1] !== '' && grid[i + 1][j - 1] === ''){
            grid[i + 1][j - 1] = 'blue';
            console.log('blue on blue on blue left 2');
        }
        //if the diagonal tiles are not empty, we check if the tile directly on the right is empty; and the left is empty
        else if(grid[i][j + 1] === '' && grid[i][j - 1] === ''){
            //if they are empty, we put a blue tile on 50% right or left
            if(Math.random() > 0.5){
                grid[i][j + 1] = 'blue';
                console.log('blue on blue on blue right 3');
            }else{
                grid[i][j - 1] = 'blue';
                console.log('blue on blue on blue left 4');
            }
        }
        else if(grid[i][j + 1] === '' && grid[i][j - 1] !== ''){
            grid[i][j + 1] = 'blue';
            console.log('blue on blue on blue right 5');
        }
        else if(grid[i][j + 1] !== '' && grid[i][j - 1] === ''){
            grid[i][j - 1] = 'blue';
            console.log('blue on blue on blue left 6');
        }
        else{
            grid[i][j] = 'blue';
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
