function drawGrid(view) {
  let electricalGrid = returnPotentialGrid();
  if (view === "grid") {
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
            case "c4":
              ctx.fillStyle = c4Color;
              break;
            case "smoke":
              ctx.fillStyle = smokeColor;
              break;
            case "dynamite":
              renderDynamite(i, j);
              specialrender = true;
              break;
            case "gunpowder":
              renderGunPowder(i, j);
              specialrender = true;
              break;
            case "fire":
              renderFire(i, j);
              specialrender = true;
              break;
            case "led":
              ctx.fillStyle = ledColor;
              break;
            case "electrifiedLed":
              ctx.fillStyle = electrifiedLedColor;
              break;
            case "oil":
              ctx.fillStyle = oilColor;
              break;
            case "ANDGate":
              renderLogicalGates(i, j, "ANDGate");
              specialrender = true;
              break;
            case "nuclearBomb":
              ctx.fillStyle = nuclearBombColor;
              break;
            case "NOTGate":
              renderLogicalGates(i, j, "NOTGate");
              specialrender = true;
              break;
            case "NANDGate":
              renderLogicalGates(i, j, "NANDGate");
              specialrender = true;
              break;
            case "NORGate":
              renderLogicalGates(i, j, "NORGate");
              specialrender = true;
              break;
            case "XORGate":
              renderLogicalGates(i, j, "XORGate");
              specialrender = true;
              break;
            case "ORGate":
              renderLogicalGates(i, j, "ORGate");
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
  } else if (view === "electrical") {
    //we render the grid with the value in the electrical grid

    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        if (electricalGrid[i][j] !== 0) {
          switch (electricalGrid[i][j]) {
            case 1:
              ctx.fillStyle = "green";
              break;
            case 2:
              ctx.fillStyle = "yellow";
              break;
            case 3:
              ctx.fillStyle = "orange";
              break;
            case 4:
              ctx.fillStyle = "red";
              break;
          }

          ctx.fillRect(j * gridSize, i * gridSize, gridSize, gridSize);
        }
      }
    }
  }
}

function renderGunPowder(i, j) {
  ctx.fillStyle = gunpowderFirstColor;
  //we render all of the tile in the first color
  ctx.fillRect(j * gridSize, i * gridSize, gridSize, gridSize);
  //we render 3 white dots in the middle of the tile
  ctx.fillStyle = gunpowderSecondColor;
  ctx.fillRect(
    j * gridSize + gridSize / 2 - 2,
    i * gridSize + gridSize / 2 - 2,
    4,
    4
  );
}

function renderDynamite(i, j) {
  ctx.fillStyle = dynamiteFirstColor;
  // Render the entire tile in dynamiteFirstColor
  ctx.fillRect(j * gridSize, i * gridSize, gridSize, gridSize);

  ctx.fillStyle = dynamiteSecondColor;
  // Draw 5 white vertical lines in dynamiteSecondColor
  const lineOffset = gridSize / 5; // Adjust this value to change the spacing between the lines
  const lineX = j * gridSize + lineOffset;
  const lineY = i * gridSize;
  const lineLength = gridSize - lineOffset * 2;
  const lineSpacing = lineLength / 4; // Adjust this value to change the spacing between the lines

  for (let k = 0; k < 3; k++) {
    ctx.fillRect(lineX + k * lineSpacing, lineY, 2, gridSize);
  }
}

function renderFire(i, j) {
  const fireColors = ["#FF3300", "#FF6600", "#FF9900", "#FFCC00", "#FFCC33"];

  // Render the tile background
  ctx.fillStyle = "FF0000"; //red background
  ctx.fillRect(j * gridSize, i * gridSize, gridSize, gridSize);

  // Render the fire texture
  for (let k = 0; k < 5; k++) {
    ctx.fillStyle = fireColors[k]; // Use different fire colors

    // Calculate the coordinates and dimensions of each fire pixel
    const pixelSize = Math.floor(gridSize / 2);
    const pixelX = j * gridSize + Math.floor(Math.random() * gridSize);
    const pixelY = i * gridSize + Math.floor(Math.random() * gridSize);

    // Render the fire pixel
    ctx.fillRect(pixelX, pixelY, pixelSize, pixelSize);
  }
}
