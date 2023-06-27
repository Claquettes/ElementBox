function calculateElectricity(i, j) {
  let hasElectricity = false;
  if (i === 0 || j === 0 || i === grid.length - 1 || j === grid[0].length - 1) {
    return;
  } else {
    let adjacentTilesForElectricity = [];
    if (grid[i + 1][j] !== "") {
      adjacentTilesForElectricity.push(grid[i + 1][j]);
    }
    if (grid[i - 1][j] !== "") {
      adjacentTilesForElectricity.push(grid[i - 1][j]);
    }
    if (grid[i][j + 1] !== "") {
      adjacentTilesForElectricity.push(grid[i][j + 1]);
    }
    if (grid[i][j - 1] !== "") {
      adjacentTilesForElectricity.push(grid[i][j - 1]);
    }
    for (let k = 0; k < adjacentTilesForElectricity.length; k++) {
      //we check if the tile is in the electrifiedTiles array
      if (electrifiedTiles.includes(adjacentTilesForElectricity[k])) {
        hasElectricity = true;
        break;
      }
    }
    if(hasElectricity){
    // Transform the tile accordingly to the electricity
    switch (grid[i][j]) {
      case "water":
        if (hasElectricity) {
          grid[i][j] = "electrifiedWater";
        }
        break;
      case "wire":
        if (hasElectricity) {
          grid[i][j] = "electrifiedWire";
        }
        break;
      case "generator":
        if (hasElectricity) {
          grid[i][j] = "electrifiedGenerator";
        }
        break;
      case "electrifiedWater":
        if (!hasElectricity) {
          grid[i][j] = "water";
        }
        break;
      case "electrifiedWire":
        if (!hasElectricity) {
          grid[i][j] = "wire";
        }
        break;
      case "electrifiedGenerator":
        if (!hasElectricity) {
          grid[i][j] = "generator";
        }
        break;
      case "led":
        if (hasElectricity) {
          grid[i][j] = "electrifiedLed";
        }
        break;
      }
    }
  }
}
