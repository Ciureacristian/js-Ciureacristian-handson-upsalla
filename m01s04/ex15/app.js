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
console.warn(`Intre Larry si Steven este o diferenta de x ani.
`);
var larryAge = person.friends.find((friend) => friend.name === 'Larry').age;
var stevenAge = person.friends.find((friend) => friend.name === 'Steven').age;
var ageDifference = Math.abs(larryAge - stevenAge);
console.log(`Intre Larry si Steven este o diferenta de ${ageDifference} ani.`);

console.warn(`Intre Larry si Carol este o diferenta de x ani.`);
var larryAge = person.friends.find((friend) => friend.name === 'Larry').age;
var carolAge = person.friends.find((friend) => friend.name === 'Carol').age;
var ageDifference = Math.abs(larryAge - carolAge);
console.log(`Intre Larry si Carol este o diferenta de ${ageDifference} ani.`);

console.warn(`Intre Steven si Larry este o diferenta de y ani`);
var stevenAge = person.friends.find((friend) => friend.name === 'Steven').age;
var larryAge = person.friends.find((friend) => friend.name === 'Larry').age;
var ageDifference = Math.abs(stevenAge - larryAge);
console.log(`Intre Steven si Larry este o diferenta de ${ageDifference} ani.`);

console.warn(`Intre Steven si Carol este o diferenta de z ani.`);
var stevenAge = person.friends.find((friend) => friend.name === 'Steven').age;
var carolAge = person.friends.find((friend) => friend.name === 'Carol').age;
var ageDifference = Math.abs(stevenAge - carolAge);
console.log(`Intre Steven si Carol este o diferenta de ${ageDifference} ani.`);

console.warn(`Intre carol si larry `);
var carolAge = person.friends.find((friend) => friend.name === 'Carol').age;
var larryAge = person.friends.find((friend) => friend.name === 'Larry').age;
var ageDifference = Math.abs(carolAge - larryAge);
console.log(`Intre Carol si Larry este o diferenta de ${ageDifference} ani.`);

console.warn(`Intre carol si steven`);
var carolAge = person.friends.find((friend) => friend.name === 'Carol').age;
var stevenAge = person.friends.find((friend) => friend.name === 'Steven').age;
var ageDifference = Math.abs(carolAge - stevenAge);
console.log(`Intre Carol si Steven este o diferenta de ${ageDifference} ani.`);
