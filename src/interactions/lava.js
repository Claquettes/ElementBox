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
  //we check if there is an explosive tile
  if(explosives.includes(grid[i + 1][j])){
    //we get the type of the explosive
    let explosiveType = grid[i + 1][j];
    applyExplosion(i + 1, j, explosiveType); 
  }
  if(explosives.includes(grid[i - 1][j])){
    //we get the type of the explosive
    let explosiveType = grid[i - 1][j];
    applyExplosion(i - 1, j, explosiveType); 
  }
  if(explosives.includes(grid[i][j + 1])){
    //we get the type of the explosive
    let explosiveType = grid[i][j + 1];
    applyExplosion(i, j + 1, explosiveType); 
  }
  if(explosives.includes(grid[i][j - 1])){
    //we get the type of the explosive
    let explosiveType = grid[i][j - 1];
    applyExplosion(i, j - 1, explosiveType); 
  }
  
}
