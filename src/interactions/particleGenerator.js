function particleGenerator(i, j) {
  //we generate a tile below the generator/ the tile generated is of the type as one of the 4 tiles adjacent to the generator
  //we check the 4 tiles adjacent to the generator
  let adjacentTiles = [];
  if (
    grid[i + 1][j] !== "" &&
    grid[i + 1][j] !== "generator" &&
    grid[i + 1][j] !== "wire" &&
    grid[i + 1][j] !== "electrifiedGenerator" &&
    grid[i + 1][j] !== "electrifiedWire"
  ) {
    adjacentTiles.push(grid[i + 1][j]);
  }
  if (
    grid[i - 1][j] !== "" &&
    grid[i - 1][j] !== "generator" &&
    grid[i - 1][j] !== "wire" &&
    grid[i - 1][j] !== "electrifiedGenerator" &&
    grid[i - 1][j] !== "electrifiedWire"
  ) {
    adjacentTiles.push(grid[i - 1][j]);
  }
  if (
    grid[i][j + 1] !== "" &&
    grid[i][j + 1] !== "generator" &&
    grid[i][j + 1] !== "wire" &&
    grid[i][j + 1] !== "electrifiedGenerator" &&
    grid[i][j + 1] !== "electrifiedWire"
  ) {
    adjacentTiles.push(grid[i][j + 1]);
  }
  if (
    grid[i][j - 1] !== "" &&
    grid[i][j - 1] !== "generator" &&
    grid[i][j - 1] !== "wire" &&
    grid[i][j - 1] !== "electrifiedGenerator" &&
    grid[i][j - 1] !== "electrifiedWire"
  ) {
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
