var userInput = prompt('Introdu un numar');
var number = Number(userInput);
var errorMessage = 'Nu s-a introdus un numar';
var paragraphElement = document.getElementById('message');

if (userInput.trim() === '') {
  console.log('Nu s-a introdus un numar');
} else if (isNaN(number)) {
  console.log('Nu s-a introdus un numar');
  if (userInput === null || userInput.trim() === '' || isNaN(number)) {
    console.log(errorMessage);
  } else if (number % 2 === 0) {
    var message = `Numarul ${number} este par`;
    // par | even
    console.log('Numarul este par');
    console.log(message);
    paragraphElement.innerText = message;
  } else {
    var message = `Numarul ${number} este impar`;
    // impar | odd
    console.log('Numarul este impar');
    console.log(message);
    paragraphElement.innerText = message;
  }
}
