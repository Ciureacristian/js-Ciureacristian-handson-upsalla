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

console.warn(
  `Folosind destructurarea, salveaza al doilea skill
   din array-ul skill (skill2) si afiseaza propozitia: “Vreau sa invat javascript.”.`,
);
const skill2 = person.skills[1];
console.log(`Vreau sa invat ${skill2}.`);

console.warn(
  `Intr-un mod similar, destructureaza arrayul friends
   pentru a obtine obiectul de pe indexul 2 apoi destructureaza obiectul
    obtinut in variabilele friend3Name, friend3Surname si friend3Age astfel incat
     sa le poti folosi in propozitia: Ma numesc Carol Carolson  si am 29 de ani. `,
);
