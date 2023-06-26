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

// Functions
function drawGrid() {
  ctx.clearRect(0, 0, canvasSize, canvasSize);
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      const color = grid[i][j];
      if (color !== "") {
        //if the tile is not empty
        switch (color) {
          case "red":
            ctx.fillStyle = redColor;
            break;
          case "green":
            ctx.fillStyle = greenColor;
            break;
          case "water":
            //we put the hex code of the color
            ctx.fillStyle = waterColor;
            break;
          case "grey":
            ctx.fillStyle = greyColor;
            break;
          case "sand":
            ctx.fillStyle = sandColor;
            break;
          case "coal":
            ctx.fillStyle = coalColor;
            break;
          case "lava":
            ctx.fillStyle = lavaColor;
            break;
          case "stone":
            ctx.fillStyle = stoneColor;
            break;
          case "freezePowder":
            ctx.fillStyle = freezePowderColor;
            break;
          case "ice":
            ctx.fillStyle = iceColor;
            break;
          case "steam":
            ctx.fillStyle = steamColor;
            break;
          case "acid":
            ctx.fillStyle = acidColor;
            break;
          case "generator":
            ctx.fillStyle = generatorColor;
            break;
          case "battery":
            ctx.fillStyle = batteryColor;
            break;
          case "wire":
            ctx.fillStyle = wireColor;
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
          grid[i][j] !== "grey" &&
          grid[i][j] !== "ice" &&
          grid[i][j] !== "stone" &&
          //we do not apply gravity to solid tiles, nor electronics
          grid[i][j] !== "generator" &&
          grid[i][j] !== "battery" &&
          grid[i][j] !== "wire"
           
        ) {
          grid[i + 1][j] = grid[i][j];
          grid[i][j] = "";
        }
        //if a water tile is ON TOP of a water tile
        if (grid[i][j] === "water" && grid[i + 1][j] === "water") {
          console.log("water on water");
          //the tile on the top becomes empty
          grid[i][j] = "";
          //we check if the diagonal tiles are empty below
          if (grid[i + 1][j + 1] === "" && grid[i + 1][j - 1] === "") {
            //if they are empty, we put a water tile on 50% right or left
            if (Math.random() > 0.5) {
              grid[i + 1][j + 1] = "water";
              console.log("water on water on water right");
            } else {
              grid[i + 1][j - 1] = "water";
              console.log("water on water on water left");
            }
          } else if (grid[i + 1][j + 1] === "" && grid[i + 1][j - 1] !== "") {
            grid[i + 1][j + 1] = "water";
            console.log("water on water on water right 1");
          } else if (grid[i + 1][j + 1] !== "" && grid[i + 1][j - 1] === "") {
            grid[i + 1][j - 1] = "water";
            console.log("water on water on water left 2");
          }
          //if the diagonal tiles are not empty, we check if the tile directly on the right is empty; and the left is empty
          else if (grid[i][j + 1] === "" && grid[i][j - 1] === "") {
            //if they are empty, we put a water tile on 50% right or left
            if (Math.random() > 0.5) {
              grid[i][j + 1] = "water";
              console.log("water on water on water right 3");
            } else {
              grid[i][j - 1] = "water";
              console.log("water on water on water left 4");
            }
          } else if (grid[i][j + 1] === "" && grid[i][j - 1] !== "") {
            grid[i][j + 1] = "water";
            console.log("water on water on water right 5");
          } else if (grid[i][j + 1] !== "" && grid[i][j - 1] === "") {
            grid[i][j - 1] = "water";
            console.log("water on water on water left 6");
          } else {
            grid[i][j] = "water";
          }
        }
        //if a sand tile is ON TOP of a water tile
        if (grid[i][j] === "sand" && grid[i + 1][j] === "water") {
          //the tile on the top becomes water
          grid[i][j] = "water";
          //the tile below becomes sand
          grid[i + 1][j] = "sand";
        }
        //if the tile is lava
        if (grid[i][j] === "lava") {
          //any water tile adjacent to the lava tile becomes stone
          if (grid[i + 1][j] === "water") {
            grid[i + 1][j] = "stone";
            //we generate steam on top of the lava
            grid[i - 1][j] = "steam";
          }
          if (grid[i - 1][j] === "water") {
            grid[i - 1][j] = "stone";
          }
          if (grid[i][j + 1] === "water") {
            grid[i][j + 1] = "stone";
          }
          if (grid[i][j - 1] === "water") {
            grid[i][j - 1] = "stone";
          }
        }
        //if the tile is freezePowder or ice
        if (grid[i][j] === "freezePowder" || grid[i][j] === "ice") {
          if (Math.random() > 0.7) {
            // 50% chance to become ice
            //any water tile adjacent to the freezePowder or ice tile becomes ice
            if (grid[i + 1][j] === "water") {
              grid[i + 1][j] = "ice";
              grid[i][j] = "ice";
            }
            if (grid[i - 1][j] === "water") {
              grid[i - 1][j] = "ice";
              grid[i][j] = "ice";
            }
            if (grid[i][j + 1] === "water") {
              grid[i][j + 1] = "ice";
              grid[i][j] = "ice";
            }
            if (grid[i][j - 1] === "water") {
              grid[i][j - 1] = "ice";
              grid[i][j] = "ice";
            }
          }
          //in contact with lava, will become stone and generate steam
          if (grid[i + 1][j] === "lava") {
            grid[i][j] = "stone";
            if (grid[i - 1][j] === "") {
              grid[i - 1][j] = "steam";
            }
          }
          if (grid[i - 1][j] === "lava") {
            grid[i][j] = "stone";
            if (grid[i + 1][j] === "") {
              grid[i + 1][j] = "steam";
            }
          }
          if (grid[i][j + 1] === "lava") {
            grid[i][j] = "stone";
            if (grid[i][j - 1] === "") {
              grid[i][j - 1] = "steam";
            }
          }
          if (grid[i][j - 1] === "lava") {
            grid[i][j] = "stone";
            if (grid[i][j + 1] === "") {
              grid[i][j + 1] = "steam";
            }
          }
        }
        //if the tile is a generator
        if (grid[i][j] === "generator") {
          //we generate a tile below the generator/ the tile generated is of the type as one of the 4 tiles adjacent to the generator
          //we check the 4 tiles adjacent to the generator
          let adjacentTiles = [];
          if (grid[i + 1][j] !== "" && grid[i + 1][j] !== "generator") {
            adjacentTiles.push(grid[i + 1][j]);
          }
          if (grid[i - 1][j] !== "" && grid[i - 1][j] !== "generator") {
            adjacentTiles.push(grid[i - 1][j]);
          }
          if (grid[i][j + 1] !== "" && grid[i][j + 1] !== "generator") {
            adjacentTiles.push(grid[i][j + 1]);
          }
          if (grid[i][j - 1] !== "" && grid[i][j - 1] !== "generator") {
            adjacentTiles.push(grid[i][j - 1]);
          }
          //we generate a tile below the generator
          if (adjacentTiles.length > 0) {
            if (grid[i + 1][j] === "") {
              grid[i + 1][j] =
                adjacentTiles[Math.floor(Math.random() * adjacentTiles.length)];
            }
          }
        }
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
