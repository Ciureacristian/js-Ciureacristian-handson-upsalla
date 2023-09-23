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
