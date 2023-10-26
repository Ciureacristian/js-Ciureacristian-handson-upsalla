const image = document.querySelector('.image');

function showMessage(message) {
  const messageContainer = document.createElement('p');
  messageContainer.innerText = message;

  //side effect
  document.body.appendChild(messageContainer);
}

image.addEventListener('load', function () {
  showMessage('Imaginea s-a incarcat');
});
