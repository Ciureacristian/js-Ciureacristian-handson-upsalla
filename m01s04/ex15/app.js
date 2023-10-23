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

const length = person.friends.length;
for (let i = 0; i < length; ++i) {
  const outterFriend = person.friends[i];

  for (let j = 0; j < length; ++j) {
    if (i === j) {
      continue;
    }
    const innerFriend = person.friends[j];
    const ageDifference = Math.abs(outterFriend.age - innerFriend.age);
    const message = `Intre ${outterFriend.name} si ${innerFriend.name} este o diferenta de ${ageDifference} ani.`;

    console.log(message);
  }
}
