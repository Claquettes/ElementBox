

const notGate = new Image();
notGate.src = "/assets/gates/not.png";

const andGate = new Image();
andGate.src = "/assets/gates/and.png";

const orGate = new Image();
orGate.src = "/assets/gates/or.png";

const xorGate = new Image();
xorGate.src = "/assets/gates/xor.png";

const nandGate = new Image();
nandGate.src = "/assets/gates/nand.png";

const norGate = new Image();
norGate.src = "/assets/gates/nor.png";

const backgroundColor = "#ffffff";

//the function to render the logical gates
function renderLogicalGates(i, j, typeOfGate){
    //we render the background
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(j * gridSize, i * gridSize, gridSize, gridSize);

    //we check what type of gate we are rendering
    switch(typeOfGate){
        case "NOTGate":
            ctx.drawImage(notGate, j * gridSize, i * gridSize, gridSize, gridSize);
            break;
        case "ANDGate":
            ctx.drawImage(andGate, j * gridSize, i * gridSize, gridSize, gridSize);
            break;
        case "ORGate":
            ctx.drawImage(orGate, j * gridSize, i * gridSize, gridSize, gridSize);
            break;
        case "XORGate":
            ctx.drawImage(xorGate, j * gridSize, i * gridSize, gridSize, gridSize);
            break;
        case "NANDGate":
            ctx.drawImage(nandGate, j * gridSize, i * gridSize, gridSize, gridSize);
            break;
        case "NORGate":
            ctx.drawImage(norGate, j * gridSize, i * gridSize, gridSize, gridSize);
            break;
    }
}