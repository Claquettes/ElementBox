


function sandInteraction(i, j) {
  //we get the type of the liquid below
  let type = grid[i + 1][j];
  //the tile on the top becomes water
  grid[i][j] = type;
  //the tile below becomes sand
  grid[i + 1][j] = "sand";
}
