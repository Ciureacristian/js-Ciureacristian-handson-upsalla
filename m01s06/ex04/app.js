(function () {
  const paragrapheElement = document.createElement('p');
  paragrapheElement.classList.add('message');
  document.body.append(paragrapheElement);

  document.addEventListener('DOMContentLoaded', function () {
    const stage = document.querySelector('.stage');

    stage.addEventListener('mouseover', function () {
      const message = 'Mouseul este pe scena';
      console.log(message);
      showMessage(message);

      stage.addEventListener('mouseout', function () {
        const message = 'Mouseul nu este pe scena';
        showMessage(message);
        console.log(message);
      });
    });
  });

  function showMessage(message) {
    paragrapheElement.innerText = message;
  }
})();
