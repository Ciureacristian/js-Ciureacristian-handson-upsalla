var object = {
  name: 'Ciurea',
  surname: 'Cristian',
  age: 24,
  petOwner: true,
};

console.warn(
  'Afiseaza fraza “Ma numesc xxx yyy si am xx ani.” in consola, folosind operatorul de concatenare.',
);

console.log(
  'Ma numesc Ciurea Cristian si am 23 ani.' +
    object.name +
    'Ciurea' +
    object.surname +
    'Cristian' +
    object.age +
    '24' +
    'ani',
);

console.warn(
  'Afiseaza anul in care te-ai nascut scazand varsta pe care ai trecut-o in obiect din anul curent (un proces numit hardcodare).',
);

console.log((2023 - object.age).toString());

console.warn(
  'Adauga o cheie noua de tip boolean cu numele petOwner (observa capitalizarea).',
);

Pascale;
