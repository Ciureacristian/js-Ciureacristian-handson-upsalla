const form = document.getElementById('personForm');
const person = {
  name: 'John',
  surname: 'Cena',
  age: 36,
};

form.addEventListener('submit', function (event) {
  event.preventDefault();
  //refactor
  const personDisplay = renderPerson(person);
  //refactor
  form.after(personDisplay);
});

function renderPerson(person) {
  const paragraph = document.createElement('p');

  paragraph.innerText = `${person.name} ${person.surname}: ${person.age}`;

  return paragraph;
}
