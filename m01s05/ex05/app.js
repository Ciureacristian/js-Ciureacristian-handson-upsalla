const person = {
  getName: function () {
    return 'Nylon Windbreaker';
  },
  getAge: function () {
    return 36;
  },
};
const currentYear = new Date().getFullYear();
console.warn(`
Afiseaza primul nume al persoanei folosind metoda getName()
`);
console.log(person.getName().split(' ')[0]);

console.warn(`
Afiseaza anul de nastere al persoanei folosind metoda getAge() si anul curent.
`);
console.log(currentYear - person.getAge());

console.warn(`
Afiseaza ultimele doua cifre al anului de nastere al persoanei,
 folosind anul curent si metoda getAge(). (Exemplu: ‘87).
`);
console.log("'" + (currentYear - person.getAge()).toString().slice(-2));

console.warn(`
Afiseaza propozita: “Ma numesc xxx si am yy ani!”
`);
const firstName = person.getName();
console.log(`Ma numesc ${firstName} si am ${person.getAge()} ani.`);

console.warn(`Afiseaza numele intreg al persoanei folosind metoda getName()
`);
const fullName = person.getName();
console.log(`${fullName}`);

console.warn(`Afiseaza varsta persoanei folosind metoda getAge()
`);
const age = person.getAge();
console.log(`${age}`);

console.warn(`Afiseaza anul de nastere al persoanei, intr-o propozitie de felul “M-am nascut in aaaa.”
`);
const birtdayYear = currentYear - person.getAge();
console.log(`M-am nascut in ${birtdayYear}.`);

console.warn(`Afiseaza propozita: “Ma numesc xxx yyy m-am nascut acum aa ani in anul zzzz!”
`);
console.log(
  `Ma numesc ${person.getName()} m-am nascut acum ${person.getAge()} ani in anul ${birtdayYear}!`,
);
