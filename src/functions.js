function adjacent4Tiles(i, j, array){
    //we check if the i and j are not out of bounds
    if(i === 0 || j === 0 || i === grid.length - 1 || j === grid[0].length - 1){
        //we return an empty array
        return [];
    }
    else{
        //we return the 4 adjacent tiles
        return [grid[i + 1][j], grid[i - 1][j], grid[i][j + 1], grid[i][j - 1]];
    }
}

function adjacent8Tiles(i, j, array){
    //we check if the i and j are not out of bounds
    if(i === 0 || j === 0 || i === grid.length - 1 || j === grid[0].length - 1){
        //we return an empty array
        return [];
    }
    else{
        //we return the 8 adjacent tiles
        return [grid[i + 1][j], grid[i - 1][j], grid[i][j + 1], grid[i][j - 1], grid[i + 1][j + 1], grid[i + 1][j - 1], grid[i - 1][j + 1], grid[i - 1][j - 1]];
    }
}