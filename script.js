document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    // Define the size of the canvas, 1/2 of the window width and full height
    const size = window.innerWidth / 4;
    canvas.width = size;
    canvas.height = size;
    
    // Initialize the canvas with black tiles
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add click event listener to the canvas
    canvas.addEventListener('click', function(e) {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate the size of each tile
      const tileSize = canvas.width / 400;
      
      // Calculate the tile index
      const rowIndex = Math.floor(y / tileSize);
      const columnIndex = Math.floor(x / tileSize);
      
      // Calculate the tile position
      const tileX = columnIndex * tileSize;
      const tileY = rowIndex * tileSize;
      
      // Change the color of the clicked tile and neighboring tiles to white
      ctx.fillStyle = 'white';
      const sizeIncrease = 3; // Increase the tile size by 3 pixels
      const expandedTileX = tileX - sizeIncrease;
      const expandedTileY = tileY - sizeIncrease;
      const expandedTileSize = tileSize + sizeIncrease * 2;
      ctx.fillRect(expandedTileX, expandedTileY, expandedTileSize, expandedTileSize);
    });
  });
  