let myGuess = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const guessResultsList = document.getElementById('guessResults');

document
  .getElementById('guessForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    const userGuess = parseInt(document.getElementById('userGuess').value);
    attempts++;

    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
      alert('Te rog introdu un număr valid între 1 și 100.');
    } else if (userGuess < myGuess) {
      guessResultsList.innerHTML += `<li>Încercare ${attempts}: ${userGuess} - Numărul este prea mic.</li>`;
    } else if (userGuess > myGuess) {
      guessResultsList.innerHTML += `<li>Încercare ${attempts}: ${userGuess} - Numărul este prea mare.</li>`;
    } else {
      guessResultsList.innerHTML += `<li>Încercare ${attempts}: ${userGuess} - Felicitări! Ai ghicit numărul corect.</li>`;
      document.getElementById('userGuess').disabled = true;
    }
  });

document.getElementById('resetButton').addEventListener('click', function () {
  myGuess = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  guessResultsList.innerHTML = '';
  userGuessInput.disabled = false;
  userGuessInput.value = '';
});

/*let myGuess = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  const userGuess = document.getElementById('userGuess').value;
  const message = document.getElementById('message');

  if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
    message.textContent = 'Te rog introdu un număr valid între 1 și 100.';
  } else {
    if (userGuess < myGuess) {
      message.textContent = 'Numarul este prea mic';
    } else if (userGuess > myGuess) {
      message.textContent = 'Numarul este prea mare';
    } else {
      message.textContent = `Felicitari!! Ai ghicit ${myGuess}.`;
    }
  }
}*/
