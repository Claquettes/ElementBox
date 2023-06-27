function calculateElectricity(i, j) {
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
    // Check if there is electrified water, electrified wire, or a battery in the adjacent tiles
    const hasElectricity = adjacentTilesForElectricity.some(
      (tile) =>
        tile === "electrifiedWater" ||
        tile === "electrifiedWire" ||
        tile === "battery"
    );

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
    }
  }
}
