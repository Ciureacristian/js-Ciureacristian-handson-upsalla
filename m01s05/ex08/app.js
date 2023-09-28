const button = document.getElementById('clicker');
const removeButton = document.getElementById('removeEvent');
const queryButton = document.getElementById('queryButton');

function clickHandler() {
  alert('Ai apasat butonul!');
}

button.addEventListener('click', clickHandler);

removeButton.addEventListener('click', function () {
  button.removeEventListener('click', clickHandler);
});

queryButton.addEventListener('click', function () {
  const varsta = prompt(`Care este varsta ta?`);

  if (varsta !== null) {
    console.log(`Ai ${varsta} ani.`);
  }
});

const messageAge = document.getElementById('message');
messageAge.innerText = `Ai ${varsta} ani.`;
