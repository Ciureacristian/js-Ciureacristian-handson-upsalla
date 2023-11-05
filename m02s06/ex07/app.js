document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('personForm').addEventListener('submit', (event) => {
    event.preventDefault();
    // currentTarget elementul pe care am pus eventul
    const form = event.currentTarget;
    // destructure
    // const name = form.name
    // name,surname -> elemente de DOM
    const { name, surname } = form;
    const person = {
      id: Date.now().toString(),
      name: name.value,
      surname: surname.value,
    };

    console.log(person);
    postPerson(person).then(() => {
      form.reset();
    });
  });

  // no hoisting
  const renderPersons = (persons = []) => {
    const section = document.getElementById('personsDisplay');
    section.innerHTML = '';

    persons.forEach((person) => {
      // destructure
      // const name = person.name;
      const { name, surname } = person;

      const p = document.createElement('p');
      p.innerText = `${name} ${surname}`;

      section.append(p);
    });
  };

  const getPersons = () => {
    return fetch('http://localhost:8080/persons')
      .then((response) => {
        return response.json();
      })
      .then((persons) => {
        renderPersons(persons);
      });
  };

  const postPerson = (person) => {
    return fetch('http://localhost:8080/persons', {
      method: 'POST',
      body: JSON.stringify(person),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then(() => {});
  };

  getPersons();

  // renderPersons([
  //   {
  //     name: 'Dragos',
  //     surname: 'Iordache',
  //   },
  // ]);
});
