// Constants
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const canvasSize = 1000;

const gridSize = canvasSize / 50;

canvas.width = canvasSize;
canvas.height = canvasSize;

const numCols = Math.ceil(canvasSize / gridSize);
const numRows = Math.ceil(canvasSize / gridSize);

const colors = ["red", "green", "water", "grey", "sand"]; // Added 'grey' color
const liquids = ["water", "lava", "acid", "electrifiedWater"]; // Added 'electrifiedWater' liquid
const solids = ["stone", "grey", "ice"];
const electronics = ["generator", "battery", "wire", "electrifiedWire"]; // Added 'electrifiedWire' electronics

// Initialize grid
const grid = [];
for (let i = 0; i < numRows; i++) {
  const row = [];
  for (let j = 0; j < numCols; j++) {
    row.push(""); // Changed to an empty tile
  }
  grid.push(row);
}

// Mouse variables
let isMouseDown = false;
let currentColor = "red";

// Event listeners
canvas.addEventListener("mousedown", handleMouseDown);
canvas.addEventListener("mouseup", handleMouseUp);
canvas.addEventListener("mousemove", handleMouseMove);

function handleMouseDown(event) {
  isMouseDown = true;
}

function handleMouseUp(event) {
  isMouseDown = false;
}

function handleMouseMove(event) {
  if (isMouseDown) {
    var rect = canvas.getBoundingClientRect();
    var widthScale = canvas.width / rect.width;
    var heightScale = canvas.height / rect.height;
    var canvasClickX = (event.clientX - rect.left) * widthScale;
    var canvasClickY = (event.clientY - rect.top) * heightScale;

    const col = Math.floor(canvasClickX / gridSize);
    const row = Math.floor(canvasClickY / gridSize);
    if (col >= 0 && col < numCols && row >= 0 && row < numRows) {
      //we check if we are in erase mode
      if (currentColor === "") {
        grid[row][col] = "";
      } else {
        //we check if the tile is empty
        if (grid[row][col] === "") {
          grid[row][col] = currentColor;
        }
        //else we console.log the type of the tile
        else console.log(grid[row][col]);
      }
    }
  }
}

function applyGravity() {
  for (let i = numRows - 2; i >= 0; i--) {
    for (let j = 0; j < numCols; j++) {
      //we start by checking collision for gases.
      if (grid[i][j] === "steam" && grid[i - 1][j] === "") {
        if (i - 1 > 0) {
          //10% chance to go up
          if (Math.random() > 0.667) {
            grid[i - 1][j] = "steam";
            grid[i][j] = "";
          }
        } else {
          grid[i][j] = "";
        }
      } else {
        //we check if the tile below is empty and the current tile is not empty and not solid
        if (
          grid[i][j] !== "" &&
          grid[i + 1][j] === "" &&
          //we do not apply gravity if the tile is in the solid or electronics list
          !solids.includes(grid[i][j]) &&
          !electronics.includes(grid[i][j])
        ) {
          grid[i + 1][j] = grid[i][j];
          grid[i][j] = "";
        }
        //if a tile that is on the liquid list is on top of a tile that is on the liquid list
        if (liquids.includes(grid[i][j]) && liquids.includes(grid[i + 1][j])) {
          tileType = grid[i][j];
          liquidInteraction(i, j, tileType);
        }
        //if a sand tile is ON TOP of a liquid tile
        if (grid[i][j] === "sand" && liquids.includes(grid[i + 1][j])) {
          sandInteraction(i, j);
        }
        //if the tile is lava
        if (grid[i][j] === "lava") {
          lavaInteraction(i, j);
        }
        //if the tile is freezePowder or ice
        if (grid[i][j] === "freezePowder" || grid[i][j] === "ice") {
          iceInteraction(i, j);
        }
        //if the tile is a generator
        if (grid[i][j] === "electrifiedGenerator") {
          particleGenerator(i, j);
        }
        //if the tile is acid
        if (grid[i][j] === "acid") {
          acidInteraction(i, j);
        }
        calculateElectricity(i, j);
      }
    }
  }
}
const greyColorIndex = 3; // Index of 'grey' in the colors array

function setCurrentColor(color) {
  if (color === "grey") {
    currentColor = colors[greyColorIndex];
  } else {
    currentColor = color;
  }
}

function update() {
  applyGravity();
  drawGrid();
  requestAnimationFrame(update);
}

update();
