// Declare the 2-dimensional array to store electrical potential
let electricalPotential;

// Initialize electrical potential grid with default values
function initPotentialGrid(grid) {
  electricalPotential = Array.from({ length: grid.length }, () =>
    Array(grid[0].length).fill(0)
  );
}

// Function to calculate electrical potential at each coordinate
function calculateElectricalPotential() {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "battery") {
        setNeighboringPotential(i, j, 4); // Set neighboring tiles' potential of 2
      }
      if(grid[i][j] === "electrifiedWire"){
        setNeighboringPotential(i, j, 2);
      }
    }
  }
}



// Function to set the potential of neighboring tiles
function setNeighboringPotential(i, j, potential) {
  //we update the potential of the tile, and the tiles around it. If the potential is Y, we will draw a 3x3 square around the tile, and set the potential of the tiles in the square to Y-1
  electricalPotential[i][j] = potential;
  const adjacentTiles = adjacent8Tiles(i, j, []);
  for (let k = 0; k < adjacentTiles.length; k++) {
    const [adjI, adjJ] = adjacentTiles[k];
    if (
      isInGridBounds(adjI, adjJ) &&
      electricalPotential[adjI][adjJ] < potential - 1
    ) {
      setNeighboringPotential(adjI, adjJ, potential - 1);
    }
  }
}



// Function to calculate electricity and update the main grid
function calculateElectricity() {
  calculateElectricalPotential();

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      switch (grid[i][j]) {
        case "water":
          if (electricalPotential[i][j] > 0) {
            grid[i][j] = "electrifiedWater";
          }
          break;
        case "wire":
          if (electricalPotential[i][j] > 0) {
            grid[i][j] = "electrifiedWire";
          } else {
            grid[i][j] = "wire";
          }
          break;
        case "generator":
          if (electricalPotential[i][j] > 0) {
            grid[i][j] = "electrifiedGenerator";
          } else {
            grid[i][j] = "generator";
          }
          break;
        case "led":
          const adjacentTiles = adjacent8Tiles(i, j, []);
          for (let k = 0; k < adjacentTiles.length; k++) {
            const [adjI, adjJ] = adjacentTiles[k];
            if (
              isInGridBounds(adjI, adjJ) &&
              grid[adjI][adjJ] === "battery" &&
              electricalPotential[adjI][adjJ] > 0
            ) {
              grid[i][j] = "electrifiedLed";
              break;
            }
          }
          break;
      }
    }
  }
}


// Check if coordinates are within the grid bounds
function isInGridBounds(i, j) {
  return i >= 0 && i < grid.length && j >= 0 && j < grid[0].length;
}

// Get the adjacent 8 tiles' coordinates
function adjacent8Tiles(i, j, result) {
  const deltas = [-1, 0, 1];
  for (let dx of deltas) {
    for (let dy of deltas) {
      if (dx === 0 && dy === 0) {
        continue;
      }
      const adjI = i + dx;
      const adjJ = j + dy;
      result.push([adjI, adjJ]);
    }
  }
  return result;
}

setInterval(() => {
  console.log(electricalPotential);
}, 5000);

function returnPotentialGrid() {
  return electricalPotential;
}