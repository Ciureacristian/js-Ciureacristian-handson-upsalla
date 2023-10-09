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
      alert('Te rog introdu un numar valid intre 1 si 100.');
    } else if (userGuess < myGuess) {
      guessResultsList.innerHTML += `<li>Incercare ${attempts}: ${userGuess} - Numarul este prea mic.</li>`;
    } else if (userGuess > myGuess) {
      guessResultsList.innerHTML += `<li>Incercare ${attempts}: ${userGuess} - Numarul este prea mare.</li>`;
    } else {
      guessResultsList.innerHTML += `<li>Incercare ${attempts}: ${userGuess} - Felicitari! Ai ghicit numarul corect.</li>`;
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

