function acidInteraction(i, j){
    if(Math.random() > 0.90){
        //any tile that is not acid or stone adjacent to the acid tile becomes acid
        if (grid[i + 1][j] !== "acid" && grid[i + 1][j] !== "stone" && grid[i + 1][j] !== "") {
          grid[i + 1][j] = "";
        }
        if (grid[i - 1][j] !== "acid" && grid[i - 1][j] !== "stone" && grid[i - 1][j] !== "") {
          grid[i - 1][j] = "";
        }
        if (grid[i][j + 1] !== "acid" && grid[i][j + 1] !== "stone" && grid[i][j + 1] !== "") { 
          grid[i][j + 1] = "";
        }
        if (grid[i][j - 1] !== "acid" && grid[i][j - 1] !== "stone" && grid[i][j - 1] !== "") {
          grid[i][j - 1] = "";
        }
    }
}

