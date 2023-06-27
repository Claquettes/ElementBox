function ANDGateInteraction(i, j) {
  //we check if there is an electrifiedTile on the top and on the bottom of the ANDGate
  if (
    electrifiedTiles.includes(grid[i + 1][j]) &&
    electrifiedTiles.includes(grid[i - 1][j]) &&
    //WE CHECK IS I AND J ARE NOT ON THE EDGE OF THE GRID
    i !== 0 &&
    i !== numRows - 1 &&
    j !== 0 &&
    j !== numCols - 1
  ) {
    console.log("OUTPUT = 1");
    grid[i][j] = "electrifiedANDGate";
    //The ANDGate Output an 1, the tile on the right of the ANDGate is electrified
    switch (grid[i][j + 1]) {
      case "water":
        grid[i][j + 1] = "electrifiedWater";
        break;
      case "wire":
        grid[i][j + 1] = "electrifiedWire";
        break;
    }
  }
}
