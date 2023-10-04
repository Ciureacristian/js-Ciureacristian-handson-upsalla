var userInput = prompt('Introdu un numar');
var number = Number(userInput);
var errorMessage = 'Nu s-a introdus numarul';
var paragraphElement = document.getElementById('message');

if (userInput.trim() === '') {
  console.log('Nu s-a introdus niciun numar');
} else if (isNaN(number)) {
  console.log('Nu s-a introdus un numar');
  console.log(errorMessage);
} else {
  if (number < 20) {
    var message = `Numarul ${number} este mai mic decat 20`;
    console.log('Numarul este mai mic de 20');
    console.log(message);
    paragraphElement.innerText = message;
  } else if (number > 20) {
    var message = `Numarul ${number} este mai mare decat 20`;
    console.log('Numarul este mai mare de 20');
    console.log(message);
    paragraphElement.innerText = message;
  } else {
    var message = `Numarul ${number} este 20`;
    console.log('Numarul este 20');
    console.log(message);
    paragraphElement.innerText = message;
  }
}
