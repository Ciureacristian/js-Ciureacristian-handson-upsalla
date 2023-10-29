const image = document.querySelector('.image');
const paragraph = document.querySelector('.loading-text');

function showMessage(message) {
  const messageContainer = document.createElement('p');
  messageContainer.innerText = message;

  //side effect
  document.body.append(messageContainer);
}

image.addEventListener('load', function () {
  showMessage('Imaginea s-a incarcat');

  image.addEventListener('click', function () {
    const imgURL = this.src;
    alert(`Imaginea cu URL-ul ${imgURL} s-a incarcat.`);
  });
});
