function calculateSurface(...arguments) {
  switch (arguments.length) {
    case 1:
      const side = args[0];
      if (arguments.length === 1) {
        return side * side;
      }
      console.log(
        `Suprafața unui pătrat cu latura ${side} este ${side * side}`,
      );
      break;
    case 2:
      const length = args[0];
      const width = args[1];
      if (arguments.length === 2) {
        return width * length;
      }
      break;
    case 3:
      const lengthP = args[0];
      const widthP = args[1];
      const heightP = args[2];
      if (arguments.length === 3) {
        return 1 * (lengthP * widthP + lengthP * heightP + widthP * heightP);
      }
      break;
  }
}

function calculateCircleArea(radius) {
  const area = Math.PI * radius * radius;
  console.log(`Suprafața unui cerc cu rază ${radius} este ${area.toFixed(2)}`);
}

// Funcția supraincarcată pentru calcularea suprafețelor
function calculateSurface(...args) {
  switch (args.length) {
    case 1:
      // Dacă primim un singur argument, calculăm suprafața unui pătrat
      const side = args[0];
      console.log(
        `Suprafața unui pătrat cu latura ${side} este ${side * side}`,
      );
      break;
    case 2:
      // Dacă primim doi argumente, calculăm suprafața unui dreptunghi
      const length = args[0];
      const width = args[1];
      console.log(
        `Suprafața unui dreptunghi cu lungime ${length} și lățime ${width} este ${
          length * width
        }`,
      );
      break;
    case 3:
      // Dacă primim trei argumente, calculăm suprafața totală a unui paralelipiped
      const lengthP = args[0];
      const widthP = args[1];
      const heightP = args[2];
      console.log(
        `Suprafața totală a unui paralelipiped cu lungime ${lengthP}, lățime ${widthP} și înălțime ${heightP} este ${
          2 * (lengthP * widthP + lengthP * heightP + widthP * heightP)
        }`,
      );
      break;
    default:
      console.log('Numărul de argumente este invalid.');
  }
}

// Obiectul "pet" cu metodele getName, getSpecies și getAge
const pet = {
  name: 'Rex',
  species: 'câine',
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

// Afișăm propoziția folosind metodele obiectului "pet"
const petName = pet.getName();
const petSpecies = pet.getSpecies();
const petAge = pet.getAge();
console.log(`${petName} este ${petSpecies} și are ${petAge} ani.`);

// Calculăm și afișăm vârsta animalului folosind metoda getAge
const animalAge = pet.getAge();
console.log(`Animalul meu are ${animalAge} ani.`);

// Apelăm funcția calculateCircleArea pentru câteva valori de rază
calculateCircleArea(2);
calculateCircleArea(20);
calculateCircleArea(16);
