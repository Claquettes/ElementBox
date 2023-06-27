function drawGrid() {
  let specialrender = false;
  ctx.clearRect(0, 0, canvasSize, canvasSize);
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      const color = grid[i][j];
      if (color !== "") {
        //if the tile is not empty
        switch (color) {
          case "red":
            ctx.fillStyle = redColor;
            break;
          case "green":
            ctx.fillStyle = greenColor;
            break;
          case "water":
            //we put the hex code of the color
            ctx.fillStyle = waterColor;
            break;
          case "grey":
            ctx.fillStyle = greyColor;
            break;
          case "sand":
            ctx.fillStyle = sandColor;
            break;
          case "coal":
            ctx.fillStyle = coalColor;
            break;
          case "lava":
            ctx.fillStyle = lavaColor;
            break;
          case "stone":
            ctx.fillStyle = stoneColor;
            break;
          case "freezePowder":
            ctx.fillStyle = freezePowderColor;
            break;
          case "ice":
            ctx.fillStyle = iceColor;
            break;
          case "steam":
            ctx.fillStyle = steamColor;
            break;
          case "acid":
            ctx.fillStyle = acidColor;
            break;
          case "generator":
            ctx.fillStyle = generatorColor;
            break;
          case "battery":
            ctx.fillStyle = batteryColor;
            break;
          case "wire":
            ctx.fillStyle = wireColor;
            break;
          case "electrifiedWater":
            ctx.fillStyle = electrifiedWaterColor;
            break;
          case "electrifiedWire":
            ctx.fillStyle = electrifiedWireColor;
            break;
          case "electrifiedGenerator":
            ctx.fillStyle = electrifiedGeneratorColor;
            break;
          case "tnt":
            ctx.fillStyle = tntColor;
            break;
            case "dynamite":
              ctx.fillStyle = redColor;
              //we render all of the tile in red
              ctx.fillRect(j * gridSize, i * gridSize, gridSize, gridSize);
              //we render the 3 white lines
              ctx.fillStyle = "white";
              ctx.fillRect(j * gridSize + 5, i * gridSize + 5, gridSize - 10, 5);
              ctx.fillRect(j * gridSize + 5, i * gridSize + 10, 5, gridSize - 20);
              ctx.fillRect(j * gridSize + 5, i * gridSize + gridSize - 10, gridSize - 10, 5);
              specialrender = true;
              break;
              
          }
          if (!specialrender) {
            ctx.fillRect(j * gridSize, i * gridSize, gridSize, gridSize);
          }
          specialrender = false;
      }
    }
  }
}
