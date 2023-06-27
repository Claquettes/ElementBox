function applyGasesGravity (i, j, type){
    if (i - 1 > 0) {
        //10% chance to go up
        if (Math.random() > 0.667) {
          grid[i - 1][j] = type;
          grid[i][j] = "";
        }
      } else {
        grid[i][j] = "";
      }
}