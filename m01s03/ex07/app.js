var person = {
  firstName: 'John',
  lastName: 'Cena',
  email: 'john@example.com',
  birthYear: 1999,
  pets: [
    {
      name: 'Aki',
      species: 'Dog',
      age: 9,
    },
    {
      name: 'Max',
      species: 'Dog',
      age: 1,
    },
    {
      name: 'Nemo',
      species: 'Fish',
      age: 1,
    },
  ],
  zipCode: '123',
};

var petName = {
  name: 'Aki',
  species: 'Dog',
  age: 9,
  difference: 15,
};

console.warn(
  'Afiseaza propozitia: “Numele meu este: xxx yyy si am x animale.”. Nu uita de proprietatea length a arrayului pets. ',
);
console.log(
  'Numele meu este: ' +
    person.firstName +
    ' ' +
    person.lastName +
    ' si am ' +
    person.pets.length +
    ' animale.',
);

console.warn('Afiseaza propozitia: “Am acelasi email din copilarie: xxx.”.');
console.log('Am acelasi email din copilarie: ' + person.email + '.');

console.warn(
  'Afiseaza propozitia: “Unul din cele x animale ale mele este species si are age ani.”',
);
console.log(
  'Unul din cele ' +
    person.pets.length +
    ' animale ale mele este ' +
    person.pets[1].species +
    ' si are ' +
    person.pets[1].age +
    ' ani.',
);

console.warn(
  'Calculeaza si afiseaza (folosind anul curent), anul de nastere al animalului de pe indexul 2. ',
);
console.log((2023 - person.pets[2].age).toString());

console.warn(
  'Calculeaza si salveaza in variabila difference diferenta de ani dintre persoana si animalul de pe pozitia 0 si afiseaza aceasta diferenta. Foloseste anul curent. ',
);
console.log((2023 - (person.birthYear + person.pets[0].age)).toString());

console.warn(
  'Afiseaza propozitia: “Intre firstName si petName este o diferenta de difference ani.”.',
);
console.log(
  'Intre ' +
    person.firstName +
    ' si ' +
    petName.name +
    ' este o diferenta de ' +
    petName.difference +
    ' ani.',
);
