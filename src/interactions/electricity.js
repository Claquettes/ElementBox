function calculateElectricity(i, j) {
  let hasElectricity = false;
  if (i === 0 || j === 0 || i === grid.length - 1 || j === grid[0].length - 1) {
    return;
  } else {
    let adjacentTilesForElectricity = [];
    //we call the adjacent4Tiles function to get the 4 adjacent tiles
    adjacentTilesForElectricity = adjacent4Tiles(
      i,
      j,
      adjacentTilesForElectricity
    );
    let numberOfBatteries = 0;
    let numberOfElectrifiedWires = 0;
    for (let k = 0; k < adjacentTilesForElectricity.length; k++) {
      if (adjacentTilesForElectricity[k] === "battery") {
        numberOfBatteries++;
      }
      if (adjacentTilesForElectricity[k] === "electrifiedWire") {
        numberOfElectrifiedWires++;
      }
    }
    //we check if there is at least one battery or 2 electrifiedWires
    if (numberOfBatteries > 0 || numberOfElectrifiedWires > 1) {
      hasElectricity = true;
    }
  

    if (hasElectricity) {
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
    } else {
      //we transform the electrified tiles into normal tiles
      switch (grid[i][j]) {
        case "electrifiedWater":
          grid[i][j] = "water";
          break;
        case "electrifiedWire":
          grid[i][j] = "wire";
          break;
        case "electrifiedGenerator":
          grid[i][j] = "generator";
          break;
        case "electrifiedLed":
          grid[i][j] = "led";
          break;
      }
    }
  }
}
