function calculateSurface(...args) {
  switch (args.length) {
    case 1:
      const side = args[0];
      const squareArea = side * side;
      return squareArea;
    case 2:
      const length = args[0];
      const width = args[1];
      const rectangleArea = length * width;
      return rectangleArea;
    case 3:
      const lengthP = args[0];
      const widthP = args[1];
      const heightP = args[2];
      const parallelepipedArea =
        2 * (lengthP * widthP + lengthP * heightP + widthP * heightP);
      return parallelepipedArea;
    default:
      return null;
  }
}

function calculateCircleArea(radius) {
  const area = Math.PI * radius * radius;
  return area;
}

const squareResult = calculateSurface(2);
const rectangleResult = calculateSurface(6, 10);
const parallelepipedResult = calculateSurface(3, 4, 7);
const circleResult1 = calculateCircleArea(2);
const circleResult2 = calculateCircleArea(20);
const circleResult3 = calculateCircleArea(16);

console.log(`Suprafata unui patrat cu latura 2 este ${squareResult}`);
console.log(
  `Suprafata unui dreptunghi cu lungime 6 și latime 10 este ${rectangleResult}`,
);
console.log(
  `Suprafata totala a unui paralelipiped cu lungime 3, latime 4 și inaltime 7 este ${parallelepipedResult}`,
);
console.log(`${circleResult1}.`);
console.log(`${circleResult2}.`);
console.log(`${circleResult3}.`);

const pet = {
  name: 'Rex',
  species: 'caine',
  age: 5,
  getName: function () {
    return this.name;
  },
  getSpecies: function () {
    return this.species;
  },
  getAge: function () {
    return this.age;
  },
};

const petName = pet.getName();
const petSpecies = pet.getSpecies();
const petAge = pet.getAge();
console.log(`${petName} este ${petSpecies} si are ${petAge} ani.`);

const animalAge = pet.getAge();
console.log(`Animalul meu are ${animalAge} ani.`);

calculateCircleArea(2);
calculateCircleArea(20);
calculateCircleArea(16);
