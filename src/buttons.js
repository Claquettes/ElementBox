const redButton = document.getElementById("redButton");
const greenButton = document.getElementById("greenButton");
const waterButton = document.getElementById("waterButton");
const greyButton = document.getElementById("greyButton");
const sandButton = document.getElementById("sandButton");
const coalButton = document.getElementById("coalButton");
const lavaButton = document.getElementById("lavaButton");
const stoneButton = document.getElementById("stoneButton");
const freezePowderButton = document.getElementById("freezePowderButton");
const iceButton = document.getElementById("iceButton");
const steamButton = document.getElementById("steamButton");
const acidButton = document.getElementById("acidButton");
const generatorButton = document.getElementById("generatorButton");
const batteryButton = document.getElementById("batteryButton");
const wireButton = document.getElementById("wireButton");
const tntButton = document.getElementById("tntButton");
const dynamiteButton = document.getElementById("dynamiteButton");
const c4Button = document.getElementById("c4Button");
const smokeButton = document.getElementById("smokeButton");

const eraserButton = document.getElementById("eraserButton");
const clearButton = document.getElementById("clearButton");
const gunpowderButton = document.getElementById("gunpowderButton");

redButton.addEventListener("click", () => setCurrentColor("red"));
greenButton.addEventListener("click", () => setCurrentColor("green"));
waterButton.addEventListener("click", () => setCurrentColor("water"));
greyButton.addEventListener("click", () => setCurrentColor("grey"));
sandButton.addEventListener("click", () => setCurrentColor("sand"));
coalButton.addEventListener("click", () => setCurrentColor("coal"));
lavaButton.addEventListener("click", () => setCurrentColor("lava"));
stoneButton.addEventListener("click", () => setCurrentColor("stone"));
freezePowderButton.addEventListener("click", () =>
  setCurrentColor("freezePowder")
);
iceButton.addEventListener("click", () => setCurrentColor("ice"));
steamButton.addEventListener("click", () => setCurrentColor("steam"));
acidButton.addEventListener("click", () => setCurrentColor("acid"));
generatorButton.addEventListener("click", () => setCurrentColor("generator"));
batteryButton.addEventListener("click", () => setCurrentColor("battery"));
wireButton.addEventListener("click", () => setCurrentColor("wire"));
tntButton.addEventListener("click", () => setCurrentColor("tnt"));
eraserButton.addEventListener("click", () => setCurrentColor(""));
clearButton.addEventListener("click", () => {
  for (let i = 0; i < grid.length; i++) {
    grid[i].fill("");
  }
  draw();
});
dynamiteButton.addEventListener("click", () => setCurrentColor("dynamite"));
c4Button.addEventListener("click", () => setCurrentColor("c4"));
smokeButton.addEventListener("click", () => setCurrentColor("smoke"));
gunpowderButton.addEventListener("click", () => setCurrentColor("gunpowder"));