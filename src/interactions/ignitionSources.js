function ignitionInteraction(i, j, type) {
  //we check if there is an explosive tile
  if (explosives.includes(grid[i + 1][j])) {
    //we get the type of the explosive
    let explosiveType = grid[i + 1][j];
    applyExplosion(i + 1, j, explosiveType);
  }
  if (explosives.includes(grid[i - 1][j])) {
    //we get the type of the explosive
    let explosiveType = grid[i - 1][j];
    applyExplosion(i - 1, j, explosiveType);
  }
  if (explosives.includes(grid[i][j + 1])) {
    //we get the type of the explosive
    let explosiveType = grid[i][j + 1];
    applyExplosion(i, j + 1, explosiveType);
  }
  if (explosives.includes(grid[i][j - 1])) {
    //we get the type of the explosive
    let explosiveType = grid[i][j - 1];
    applyExplosion(i, j - 1, explosiveType);
  }
}
