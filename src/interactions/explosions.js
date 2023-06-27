function applyExplosion(i, j, explosiveType) {
  let explosionRadius = 0;
  switch (explosiveType) {
    case "tnt":
      explosionRadius = 4;
      break;
  }
  
  let tilesInExplosionRadius = [];
  
  if (i - explosionRadius < 0) {
    explosionRadius = i;
  }
  if (j - explosionRadius < 0) {
    explosionRadius = j;
  }
  if (i + explosionRadius > grid.length - 1) {
    explosionRadius = grid.length - 1 - i;
  }
  if (j + explosionRadius > grid[0].length - 1) {
    explosionRadius = grid[0].length - 1 - j;
  }
  
  for (let k = i - explosionRadius; k <= i + explosionRadius; k++) {
    for (let l = j - explosionRadius; l <= j + explosionRadius; l++) {
      tilesInExplosionRadius.push([k, l]);
      
      if (k === i && l === j) {
        // Explode the explosive tile itself
        grid[k][l] = "";
      } else if (grid[k][l] === explosiveType) {
        // Trigger chain reaction for explosive tiles within the radius
        applyExplosion(k, l, explosiveType);
      } else {
        // Explode other tiles in the explosion radius
        grid[k][l] = "";
      }
    }
  }
}
