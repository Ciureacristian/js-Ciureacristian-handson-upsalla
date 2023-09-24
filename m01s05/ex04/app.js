const calculateRectangleArea = (width, length) => {
  const area = width * length;
};

console.warn(`
Calculeaza suprafata de tapet necesara pentru o camera de 6 pe 4 m cu tavan inalt de 2.5m,
 stiind ca exista o usa de 2.2 pe 1.5 si o suprafata de ferestre de 2 pe 1.5.
  “Suprafata de tapet necesara este: xxx metri patrati.”
`);
const longWall1Surface = calculateRectangleArea(6, 2.5);
const shortWall1Surface = calculateRectangleArea(4, 2.5);
const door1Surface = calculateRectangleArea(2.2, 1.5);
const window1Surface = calculateRectangleArea(2, 1.5);

const required1WalpaperSurface =
  longWall1Surface * 2 + shortWall1Surface * 2 - door1Surface - window1Surface;
console.log(
  `Suprafata de tapet este: ${required1WalpaperSurface} metri patrati.`,
);

console.warn(`
Creaza o functie wrapper numita calculateSquareArea() pentru calculateRectangleArea(),
 care sa primeasca ca parametru latura unui patrat si sa calculeze suprafata acestuia.
O functie wrapper este o functie care “imbraca” o functie existenta pentru a-i aduce imbunatatiri,
 extra cod sau pentru a-i limita in mod intentionat capacitatile.
`);
const calculateSquareArea = (width) => {
  const area = calculateRectangleArea(width, width);

  return area;
};
const sideLength = 5;
const squareArea = calculateSquareArea(sideLength);
console.log(`Aria pătratului cu latura de ${sideLength} este ${squareArea}`);

console.warn(`
Calculeaza suprafata de tapet necesara pentru o camera de 12 pe 9 m
 cu tavan inalt de 2.5m, stiind ca exista o usa de 3 pe 2 si o suprafata
  de ferestre de 3 pe 2. “Suprafata de tapet necesara este xxx metri patrati.”
`);
const longWall2Surface = (12, 2.5);
const shortWall2Surface = (9, 2.5);
const door2Surface = (3, 2);
const window2Surface = (3, 2);

const totalWalpaperSurface =
  longWall2Surface * 2 + shortWall2Surface * 2 - door2Surface - window2Surface;
console.log(
  `Suprafata de tapet necesara este ${totalWalpaperSurface} metri patrati.`,
);
