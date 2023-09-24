const calculateRectangleArea = function (width, length) {
  const area = width * length;

  return area;
};

console.warn(`
Stiind ca un camp dreptunghiular de hamei produce 25kg/m2
, ce diferenta de productie este intre un teren de
 100m pe 250m si unul de 350m pe 200m?
`);
let field1Length = 100;
let field1Width = 250;
let field2Length = 350;
let field2Width = 200;
let barleyYield = 25;
let beerYield = 2.5 / 10;

const field1Yield =
  calculateRectangleArea(field1Width, field1Length) * barleyYield;
const field2Yield =
  calculateRectangleArea(field2Width, field2Length) * barleyYield;

console.log(field2Yield - field1Yield);

console.warn(`Stiind ca din 10kg de hamei produc 2.5l de bere, cati litri de bere va produce un teren de 400m pe 370m?
`);
const field3Yield = calculateRectangleArea(400, 370) * barleyYield;
const field3BeerYield = field3Yield * beerYield;
console.log(field3BeerYield);

console.warn(`
Stiind ca un camp dreptunghiular de grau produce 32kg/m2  de faina,
 afla si afiseaza cate kilograme de paine produce un camp de 300 pe 200 metri
 , stiind ca dintr-un kilogram de faina ies 2.5 kg de paine.
`);

let breadLength = 300;
let breadWidth = 200;
let flour = 2.5;
let wheat = 32;

const field1Wheat = calculateRectangleArea(breadLength, breadWidth);
const field2Wheat = calculateRectangleArea(flour, wheat);
const field3Wheat = field1Wheat * field2Wheat;
console.log(field3Wheat);

console.warn(`Dar doua campuri de 150 pe 200 si 500 pe 300 in total?
`);

const wheatProductionPerSquareMeter = 32;
const breadProductionPerKilogramOfFlour = 2.5;
const field1Width1 = 150;
const field1Length1 = 200;
const field2Width2 = 500;
const field2Length2 = 300;

const field1Area = calculateRectangleArea(field1Width1, field1Length1);
const wheatProduction1 = field1Area * wheatProductionPerSquareMeter;
const breadProduction1 = wheatProduction1 * breadProductionPerKilogramOfFlour;

const field2Area = calculateRectangleArea(field2Width2, field2Length2);
const wheatProduction2 = field2Area * wheatProductionPerSquareMeter;
const breadProduction2 = wheatProduction2 * breadProductionPerKilogramOfFlour;

const totalBreadProduction = breadProduction1 + breadProduction2;

console.log(totalBreadProduction);
