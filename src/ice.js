function iceInteraction(i, j){
    if (Math.random() > 0.7) {
        // 50% chance to become ice
        //any water tile adjacent to the freezePowder or ice tile becomes ice
        if (grid[i + 1][j] === "water") {
          grid[i + 1][j] = "ice";
          grid[i][j] = "ice";
        }
        if (grid[i - 1][j] === "water") {
          grid[i - 1][j] = "ice";
          grid[i][j] = "ice";
        }
        if (grid[i][j + 1] === "water") {
          grid[i][j + 1] = "ice";
          grid[i][j] = "ice";
        }
        if (grid[i][j - 1] === "water") {
          grid[i][j - 1] = "ice";
          grid[i][j] = "ice";
        }
      }
      //in contact with lava, will become stone and generate steam
      if (grid[i + 1][j] === "lava") {
        grid[i][j] = "stone";
        if (grid[i - 1][j] === "") {
          grid[i - 1][j] = "steam";
        }
      }
      if (grid[i - 1][j] === "lava") {
        grid[i][j] = "stone";
        if (grid[i + 1][j] === "") {
          grid[i + 1][j] = "steam";
        }
      }
      if (grid[i][j + 1] === "lava") {
        grid[i][j] = "stone";
        if (grid[i][j - 1] === "") {
          grid[i][j - 1] = "steam";
        }
      }
      if (grid[i][j - 1] === "lava") {
        grid[i][j] = "stone";
        if (grid[i][j + 1] === "") {
          grid[i][j + 1] = "steam";
        }
      }
}