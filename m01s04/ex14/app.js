var person = {
  firstName: 'Cristi',
  lastName: 'Cristianos',
  birthYear: 1999,
  pets: [
    {
      name: 'Twix',
      species: 'papagal',
      age: 4,
    },
    {
      name: 'Mars',
      species: 'caine',
      age: 2,
    },
    {
      name: 'Bounty',
      species: 'hamster',
      age: 4,
    },
    {
      name: 'Lion',
      species: 'pisica',
      age: 10,
    },
  ],
};

console.warn(`Afiseaza in consola folosind metoda forEach() numele fiecarui animal.
`);
person.pets.forEach(function (animal) {
  console.log(`${animal.name}`);
});

console.warn(`Folosind o bucla for afiseaza suma anilor animalelor.
`);
var ageAnimal = 0;

for (var i = 0; i < person.pets.length; i++) {
  var message = [(ageAnimal += person.pets[i].age)].toString();
}
console.log(message);

console.warn(
  `Folosind forEach(), afiseaza cate una pe linie propozitiile: “Twix este papagal si are 4 ani. Mars este caine si are… etc”.`,
);
person.pets.forEach(function (animal) {
  console.log(
    `${animal.name} este ${animal.species} si are ${animal.age} ani.`,
  );
});

console.warn(`Folosind o bucla for, afiseaza cate una pe linie propozitiile: “Intre Dragos si Twix este o diferenta de xx ani. Intre Dragos si Mars… ” (repeta pentru toate intrarile din array).
`);
var currentYear = new Date().getFullYear();
for (var i = 0; i < person.pets.length; i++) {
  var animal = person.pets[i];
  var diff = currentYear - person.birthYear - animal.age;
  console.log(
    `Intre ${person.firstName} si ${animal.name} este o diferenta de ${diff} ani.`,
  );
}

console.warn(`Folosind o bucla for, afiseaza in ordine inversa numele animalelor din array sub forma de propozitii: “Animalul meu se numeste xxxx.”.
`);
for (var i = person.pets.length - 1; i >= 0; i--) {
  var animal = person.pets[i];
  console.log(`Animalul meu se numeste ${animal.name}.`);
}

console.warn(`Folosind o bucla for, afla care este cel mai in varsta animal si afiseaza propozitia: “xxx este cel mai batran animal pe care il am, dar intre noi este o diferenta de xx ani.” Salveaza primul pet intr-o variabila numita oldestPet si porneste bucla, daca varsta animalului curent din bucla este mai mare decat oldestPet.age, atunci oldestPet devine animalul curent.
`);
var oldestPet = person.pets[0];
var currentYear = new Date().getFullYear();

for (var i = 1; i < person.pets.length; i++) {
  var currentPet = person.pets[i];
  if (currentPet.age > oldestPet.age) {
    oldestPet = currentPet;
  }
}

var ageDifference = currentYear - person.birthYear - oldestPet.age;

console.log(
  `${oldestPet.name} este cel mai batran animal pe care il am, dar intre noi este o diferenta de ${ageDifference} ani.`,
);

console.warn(`Folosind o bucla forEach, afiseaza propozitia: “Am papagal, caine, hamster si pisica.”.
`);

var speciesArray = [];
person.pets.forEach(function (animal, index) {
  speciesArray.push(animal.species);
  if (speciesArray.length - 1 === index) {
    punctuation = '.';
  }
  if (speciesArray.length - 2 === index) {
    punctuation = ' si ';
  }

  if (speciesArray.length - 3 === index) {
    punctuation = ' si ';
  }
});
var sentence = `Am  ${speciesArray}.`;

console.log(sentence);
