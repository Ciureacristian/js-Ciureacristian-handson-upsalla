var person = {
  name: 'John',
  surname: 'Cena',
  age: 34,
  petOwner: true,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
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
  'Folosind obiectul person si un for, afiseaza in consola skillurile de pe pozitiile pare ale arrayului, in propozitii de forma "xxx se afla pe indexul iii al arrayului.".',
);
for (var i = 0; i < person.skills.length; i++) {
  var skill = person.skills[i];
  if (i % 2 === 0) {
    console.log(skill + ' se afla pe indexul ' + i + ' al arrayului.');
  }
}

console.warn(
  ' In mod similar, afiseaza skillurile care NU incep cu j, folosind propozitii de forma "Tehnologia xxx nu incepe cu j!".',
);
for (var i = 0; i < person.skills.length; i++) {
  var skill = person.skills[i];
  if (!skill.startsWith('j') || skill.startsWith('J')) {
    console.log('Tehnologia ' + skill + ' nu incepe cu j!');
  }
}

console.warn(
  ' Folosind un for, afiseaza propozitia: "Prietenii mei se numesc: xxx yyy, xxx yyy, xxx yyy."',
);
var message = 'Prietenii mei se numesc: ';
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var punctuation = ', ';

  if (i === person.friends.length - 1) {
    punctuation = '.';
  }
  message = message + friend.name + ' ' + friend.surname + punctuation;
}
console.log(message);

console.warn(
  ' Folosind un for, afiseaza numarul total de ani pe care il au persoanele din arrayul friends, doar daca varsta este mai mare sau egala cu 30 de ani intr-o propozitie de felul:"Suma varstelor persoanelor peste yy de ani este: ssss.".',
);
var sumAge = 0;
var message = 'Suma varstelor persoanelor peste 30 de ani este: ';
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];

  if (friend.age >= 30) {
    sumAge = sumAge + friend.age;
  }
}
console.log(message + sumAge + '.');

console.warn(
  ' Folosind un for, afiseaza suma anilor de nastere a persoanelor intr-o propozitie de felul "Suma anilor de nastere este: ssss.". ',
);
for (var i = 0; i < person.friends.length; i++) {
  var message = 'Suma anilor de nastere este: ';
  var ageTotal = (person.age += person.friends[i].age);
}
console.log(message + ageTotal + '.');

console.warn(
  ' Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends, doar daca aceasta este mai mare de 2 ani intr-o propozitie de forma "Diferenta de varsta mai mare de xxx ani este yyy.". ',
);
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var ageDiff = Math.abs(person.age - friend.age);

  if (ageDiff > 2) {
    console.log('Diferenta de varsta mai mare de 2 ani este ' + ageDiff + '.');
  }
}

console.warn(
  ' Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ", doar daca varsta prietenului este impara',
);
var message = '';
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var ageDiff = Math.abs(person.age - friend.age);

  if (friend.age % 2 !== 0) {
    message =
      message +
      'Intre ' +
      person.name +
      ' si ' +
      friend.name +
      ' este o diferenta de ' +
      ageDiff +
      ' ani. ';
  }
}
console.log(message.trim());

console.warn(
  ' Folosind proprietatea length a arrayului skills si o bucla for, afiseaza in ordine inversa elementele arrayului skills. Atentie, va trebui sa numeri invers, de la length la 0.',
);
for (var i = person.skills.length - 1; i >= 0; i--) {
  console.log(person.skills[i]);
}

console.warn(
  'Folosind obiectul person si un for, afiseaza in consola skillurile pe care le are persoana sub forma de propozitii "Tehnologia xxx are yyy caractere.". ',
);
for (var i = 0; i < person.skills.length; i++) {
  var skill = person.skills[i];
  var skillLength = skill.length;

  console.log('Tehnologia ' + skill + ' are ' + skillLength + ' caractere.');
}

console.warn(
  ' In mod similar, afiseaza skillurile care incep cu c, folosind propozitii de forma "Tehnologia xxx incepe cu litera "c".". ',
);
for (var i = 0; i < person.skills.length; i++) {
  var skill = person.skills[i];
  if (skill.charAt(0).toLowerCase() === 'c') {
    console.log('Tehnologia ' + skill + ' incepe cu litera "c".');
  }
}

console.warn(
  ' Folosind un for afiseaza propozitia: "Numele de familie ale prietenilor mei sunt: xxx, xxx, xxx."',
);
var familyName = [];
var message = 'Numele de familie ale prietenilor mei sunt:';
if (person.friends && person.friends.length > 0) {
  for (var i = 0; i < person.friends.length; i++) {
    if (person.friends[i].surname) {
      familyName.push(person.friends[i].surname);
    }
  }
}

console.log(message + ' ' + familyName.join(', ') + '.');

console.warn(
  ' Folosind un for, afiseaza numarul total de ani pe care il au persoanele din arrayul friends. ',
);
var totalAge = 0;

if (person.friends && person.friends.length > 0) {
  for (var i = 0; i < person.friends.length; i++) {
    if (person.friends[i].age) {
      totalAge += person.friends[i].age;
    }
  }
}

console.log(`"${totalAge}"`);

console.warn(
  ' Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends, sub forma de propozitii de felul: "Diferenta de varsta este: xxx.". ',
);

for (var i = 0; i < person.friends.length; i++) {
  var ageDifferences = [];
  var ageDifference = person.age - person.friends[i].age;
  ageDifferences.push(ageDifference);
  console.log('Diferenta de varsta este: ' + ageDifferences + '.');
}

console.warn(
  ' Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ". Repeta pentru tot arrayul friends.',
);
var message = ' ';
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var ageDiff = Math.abs(person.age - friend.age);

  if (friend.age % 1 == 0) {
    message =
      message +
      'Intre ' +
      person.name +
      ' si ' +
      friend.name +
      ' este o diferenta de ' +
      ageDiff +
      ' ani. ';
  }
}
console.log(message.trim());

console.warn(
  'Afiseaza fraza “Prietenii mei sunt: xxx yyy, xxx yyy, xxx yyy.” in ordine inversa a arrayului de prieteni. (Numarand de la length la 0).',
);

var friendSwitch = [];

for (var i = person.friends.length - 1; i >= 0; i--) {
  var friend = person.friends[i];
  friendSwitch.push(`${friend.name} ${friend.surname}`);
}

console.log(`Prietenii mei sunt: ${friendSwitch.join(', ')}.`);
