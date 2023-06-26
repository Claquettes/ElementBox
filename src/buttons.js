const redButton = document.getElementById('redButton');
const greenButton = document.getElementById('greenButton');
const waterButton = document.getElementById('waterButton');
const greyButton = document.getElementById('greyButton');
const sandButton = document.getElementById('sandButton'); 
const coalButton = document.getElementById('coalButton'); 
const lavaButton = document.getElementById('lavaButton');
const stoneButton = document.getElementById('stoneButton');
const freezePowderButton = document.getElementById('freezePowderButton');
const iceButton = document.getElementById('iceButton');
const steamButton = document.getElementById('steamButton');
const acidButton = document.getElementById('acidButton');


redButton.addEventListener('click', () => setCurrentColor('red'));
greenButton.addEventListener('click', () => setCurrentColor('green'));
waterButton.addEventListener('click', () => setCurrentColor('water'));
greyButton.addEventListener('click', () => setCurrentColor('grey'));
sandButton.addEventListener('click', () => setCurrentColor('sand'));
coalButton.addEventListener('click', () => setCurrentColor('coal'));
lavaButton.addEventListener('click', () => setCurrentColor('lava'));
stoneButton.addEventListener('click', () => setCurrentColor('stone'));
freezePowderButton.addEventListener('click', () => setCurrentColor('freezePowder'));
iceButton.addEventListener('click', () => setCurrentColor('ice'));
steamButton.addEventListener('click', () => setCurrentColor('steam'));
acidButton.addEventListener('click', () => setCurrentColor('acid'));