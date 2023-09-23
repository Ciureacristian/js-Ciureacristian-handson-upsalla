function calculateRectangleArea(width, length) {
  const area = width * length;

  return area;
}

console.warn(`
Folosind functia calculateRectangleArea(), afiseaza suprafata unui dreptunghi de 4 pe 3
`);
console.log(calculateRectangleArea(4, 3));

console.warn(`Afiseaza suprafata totala a unor dreptunghiuri de 5 pe 3, respectiv 3 pe 2. Foloseste variabile.
`);

const rectangle1Surface = calculateRectangleArea(5, 3);
const rectangle2Surface = calculateRectangleArea(3, 2);

console.log(rectangle1Surface + rectangle2Surface);
console.log(rectangle1Surface);
console.log(rectangle2Surface);

console.warn(`Calculeaza intr-o variabila numita squareSurface aria unui patrat de 3 pe 3.
`);
const squareSurface = calculateRectangleArea(3, 3);
console.log(squareSurface);
