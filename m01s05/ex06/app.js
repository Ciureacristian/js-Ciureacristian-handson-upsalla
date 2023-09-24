var person = {
  getName: function () {
    return 'Ciurea Cristian';
  },
  getAge: function () {
    return 24;
  },
};

function accessor(methodSuffix) {
  const methodeName = `get${methodSuffix}`;

  return person[methodeName]();
}

console.warn(`
Folosind accesorul, salveaza numele
 mic al persoanei intr-o variabila
  si foloseste-l in propozitia: “Eu sunt xxx.”`);
console.log(`Eu sunt ${accessor('Name')}.`);

console.warn(`
Afiseaza anul de nastere al persoanei folosind anul curent.
`);
const cuurentYear = new Date().getFullYear();
console.log([cuurentYear - accessor('Age')].toString());

console.warn(`Afiseaza propozitia “Ma numesc xxx yyy, am aa ani si m-am nascut in anul aaaa.”
`);
console.log(
  `Ma numesc ${person.getName()}, am ${person.getAge()} ani si m-am nascut in anul ${[
    cuurentYear - accessor('Age'),
  ].toString()}.`,
);

console.warn(`Folosind accesorul afiseaza numele persoanei.
`);
console.log(`${person.getName()}`);

console.warn(`Afiseaza varsta persoanei.
`);
console.log(`${person.getAge()}`);

console.warn(`
Afiseaza anul de nastere al persoanei folosind anul curent.
 Intr-o propozitie de forma “M-am nascut in 1987.”
`);
const currentYear = new Date().getFullYear();
const birtdayYear = currentYear - person.getAge();
console.log(`M-am nascut in ${birtdayYear}.`);

console.warn(`Afiseaza propozitia “Ma numesc xxx yyy si am aa ani!”
`);
console.log(`Ma numesc ${person.getName()} si am ${person.getAge()} ani!`);
