const wouldMakeFireDie = ["", "fire", "stone"];

function fireInteraction(i, j) {
  //if the tile is only surrounded by air or fire
  if (
    wouldMakeFireDie.includes(grid[i + 1][j]) &&
    wouldMakeFireDie.includes(grid[i - 1][j]) &&
    wouldMakeFireDie.includes(grid[i][j + 1]) &&
    wouldMakeFireDie.includes(grid[i][j - 1])
  ) {
    //we delete the fire
    grid[i][j] = "";
  }
}
