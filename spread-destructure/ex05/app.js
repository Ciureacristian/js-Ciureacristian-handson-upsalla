let person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: ['html', 'javascript', 'css'],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.log(
  `Folosind destructurarea, salveaza primul si ultimul skill
   in variabile numite skill1 si skill3, apoi folosind aceaste variabile
   , afiseaza intr-un paragraf propozitia: “Cunosc html si css.”.`,
);

// const skill1 = person.skills[0];
// const skill3 = person.skills[2];
const [skill1, , skill3] = person.skills;
const message1 = `Cunosc ${skill1} si ${skill3}.`;

const p1 = document.createElement('p');
p1.innerText = message1;

document.body.appendChild(p1);
console.log(message1);

console.warn(
  `Intr-un mod similar destructureaza arrayul friends pentru
   a obtine obiectul de pe indexul 1 apoi destructureaza obiectul
  obtinut in variabilele friend2Name, friend2Surname si friend2Age
  astfel incat sa le poti folosi in propozitia: Ma numesc Steven Stevenson si am 31 de ani. `,
);

const {
  name: friend2Name,
  surname: friend2Surname,
  age: friend2Age,
} = person.friends[1];
console.log(
  `Ma numesc ${friend2Name} ${friend2Surname} si am ${friend2Age} de ani.`,
);

console.warn(
  `Destructureaza obiectul person pentru a obtine o variabila hasPet
   si in functie de aceasta afiseaza propozitia: “Persoana are/nu are animale”`,
);

//const hasPet = person.petOwner
const { petOwner: hasPet } = person;
console.log(`Persona ${hasPet ? '' : 'nu'} are animale.`);

console.warn(`Destructureaza arrayul friends si obiectele de pe indexul 0 (friend1)
 si 2 (friend3), astfel incat sa poti afisa propozitiile:
“Prietenul meu este Larry Larryson.”
“Carol Carolson este prietena mea.”.`);

const [friend1, , friend3] = person.friends;
console.log(`Prietenul meu este ${friend1.name} ${friend1.surname}.`);
console.log(`${friend3.name} ${friend3.surname} este prietena mea.`);
