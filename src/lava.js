function lavaInteraction(i, j) {
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
