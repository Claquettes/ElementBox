function applyExplosion (i, j, explosiveType){
    let explosionRadius = 0;    
    switch(explosiveType){
        case "tnt":
            explosionRadius = 4;
            break;
    }
    //we get all of the tiles in the explosion radius
    let tilesInExplosionRadius = [];
    //first we need to check if the explosion radius is within the grid, if not we change it to the maximum possible value
    if(i - explosionRadius < 0){
        explosionRadius = i;
    }
    if(j - explosionRadius < 0){
        explosionRadius = j;
    }
    if(i + explosionRadius > grid.length - 1){
        explosionRadius = grid.length - 1 - i;
    }
    if(j + explosionRadius > grid[0].length - 1){
        explosionRadius = grid[0].length - 1 - j;
    }
    //we get all of the tiles in the explosion radius, centered on the explosive tile. And we change them to ""
    for(let k = i - explosionRadius; k <= i + explosionRadius; k++){
        for(let l = j - explosionRadius; l <= j + explosionRadius; l++){
            tilesInExplosionRadius.push([k, l]);
            grid[k][l] = "";
        }
    }


}