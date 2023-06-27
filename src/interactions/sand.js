function sandInteraction(i, j) {
  //the tile on the top becomes water
  grid[i][j] = "water";
  //the tile below becomes sand
  grid[i + 1][j] = "sand";
}
