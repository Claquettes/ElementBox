function liquidInteraction(i, j, type) {
    //type refers to the type of liquid (water, lava, acid)
  //the tile on the top becomes empty
  grid[i][j] = "";
  //we check if the diagonal tiles are empty below
  if (grid[i + 1][j + 1] === "" && grid[i + 1][j - 1] === "") {
    //if they are empty, we put a water tile on 50% right or left
    if (Math.random() > 0.5) {
      grid[i + 1][j + 1] = "water";
    } else {
      grid[i + 1][j - 1] = "water";
    }
  } else if (grid[i + 1][j + 1] === "" && grid[i + 1][j - 1] !== "") {
    grid[i + 1][j + 1] = "water";
  } else if (grid[i + 1][j + 1] !== "" && grid[i + 1][j - 1] === "") {
    grid[i + 1][j - 1] = "water";
  }
  //if the diagonal tiles are not empty, we check if the tile directly on the right is empty; and the left is empty
  else if (grid[i][j + 1] === "" && grid[i][j - 1] === "") {
    //if they are empty, we put a water tile on 50% right or left
    if (Math.random() > 0.5) {
      grid[i][j + 1] = "water";
    } else {
      grid[i][j - 1] = "water";
    }
  } else if (grid[i][j + 1] === "" && grid[i][j - 1] !== "") {
    grid[i][j + 1] = "water";
  } else if (grid[i][j + 1] !== "" && grid[i][j - 1] === "") {
    grid[i][j - 1] = "water";
  } else {
    grid[i][j] = "water";
  }
}
