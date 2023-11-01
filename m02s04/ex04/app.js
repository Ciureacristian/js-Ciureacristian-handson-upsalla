document.addEventListener('DOMContentLoaded', function () {
  // scoatem form din dom
  const personForm = document.getElementById('personForm');
  const submitButton = personForm.querySelector('button[type="submit"]');

  // instantiam un pristine
  const pristine = new Pristine(personForm);

  // verificam la dom load
  const isValid = pristine.validate(true);

  if (!isValid) {
    submitButton.disabled = true;
  }

  // event delegation
  personForm.addEventListener('input', function (event) {
    const target = event.target;

    if (!target.name || target.name.trim().length <= 0) {
      return;
    }

    const isValid = pristine.validate(true);

    submitButton.disabled = !isValid;
  });

  personForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const form = event.currentTarget;

    const data = {
      name: form.name.value,
      surname: form.surname.value,
      age: form.age.value,
      email: form.email.value,
    };

    console.log('send to server', data);
  });
});
