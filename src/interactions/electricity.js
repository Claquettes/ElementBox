// Declare the 2-dimensional array to store electrical potential
let electricalPotential;

// Initialize electrical potential grid with default values
function initPotentialGrid(grid) {
  setInterval(() => {
    electricalPotential = Array.from({ length: grid.length }, () =>
      Array(grid[0].length).fill(0)
    );
  }, 1000);
}

// Function to calculate electrical potential at each coordinate
function calculateElectricalPotential() {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "battery") {
        setNeighboringPotential(i, j, 2); // Set neighboring tiles' potential of 2
      } else {
        if (grid[i][j] === "electrifiedWire" || grid[i][j] === "wire") {
          //THE WIRE IS ELECTRIFIED IF IT HAS A TILE WITH POTENTIAL > 3 AROUND IT, or 2 tile with a potential > 1 around it
          const adjacentTiles = adjacent8Tiles(i, j, []);
          let count = 0;
          for (let k = 0; k < adjacentTiles.length; k++) {
            const [adjI, adjJ] = adjacentTiles[k];
            if (
              isInGridBounds(adjI, adjJ) &&
              electricalPotential[adjI][adjJ] > 1
            ) {
              count++;
            } else if (
              isInGridBounds(adjI, adjJ) &&
              electricalPotential[adjI][adjJ] >= 2
            ) {
              count == 100; //if there is a battery .
            }
          }
          if (count >= 1) {
            setNeighboringPotential(i, j, 2);
            switch (grid[i][j]) {
              case "wire":
                grid[i][j] = "electrifiedWire";
                break;
              case "water":
                grid[i][j] = "electrifiedWater";
                break;
              case "led":
                grid[i][j] = "electrifiedLed";
                break;
              case "generator":
                grid[i][j] = "electrifiedGenerator";
                break;
            }
          } else {
            setNeighboringPotential(i, j, 0);
            grid[i][j] = "wire";
          }
        }
      }
    }
  } //The problem withh the code is that the wires needs to be doubled at the start, or the electricity will not be able to reach the end of the wire.
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
          if (electricalPotential[i][j] > 0) {
            grid[i][j] = "electrifiedLed";
          } else {
            grid[i][j] = "led";
          }
          break;
          //Go back to neutral state if the potential is 0
        case "electrifiedWire":
          if (electricalPotential[i][j] === 0) {
            grid[i][j] = "wire";
          }
          break;
        case "electrifiedWater":
          if (electricalPotential[i][j] === 0) {
            grid[i][j] = "water";
          }
          break;
        case "electrifiedGenerator":
          if (electricalPotential[i][j] === 0) {
            grid[i][j] = "generator";
          }
          break;
          case "electrifiedLed":
            if (electricalPotential[i][j] === 0) {
              grid[i][j] = "led";
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

function returnPotentialGrid() {
  return electricalPotential;
}
