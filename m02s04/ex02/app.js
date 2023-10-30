const controls = document.querySelector('.controls');
const box = document.querySelector('.box');
const colorInput = controls.querySelector('.color-input');
const resetButton = controls.querySelector('.reset-button');
const radioButtons = document.querySelectorAll('.box-radio');
const boxes = document.querySelectorAll('.box');
//event delegation

controls.addEventListener('click', function (event) {
  // event.target =  elementul de pe care a plecat clickul
  const target = event.target;

  if (
    target.nodeName !== 'BUTTON' ||
    !target.dataset.color ||
    target.dataset.color.trim().length <= 0
  ) {
    applyColor(color);
    return;
  }

  const button = target;
  const color = button.dataset.color;
  box.style.backgroundColor = color;
});

colorInput.addEventListener('change', function (event) {
  //dom traversal
  const input = event.currentTarget;
  const button = input.previousElementSibling;
  const value = input.value;

  button.dataset.color = value;
  button.style.backgroundColor = value;
});

colorInput.addEventListener('input', function (event) {
  const color = event.target.value;
  applyColor(color);

  if (/^#[0-9A-F]{6}$/i.test(color)) {
    applyColor(color);
  }
});

function applyColor(color) {
  const checkedRadio = document.querySelector('.box-radio:checked');

  if (checkedRadio) {
    checkedRadio.nextElementSibling.style.backgroundColor = color;
  }

  boxes.forEach((box, index) => {
    if (radioButtons[index].checked) {
      box.style.backgroundColor = color;
    }
  });
}

resetButton.addEventListener('click', function () {
  radioButtons.forEach((radioButton) => {
    radioButton.checked = false;
    radioButton.nextElementSibling.style.backgroundColor = '';
  });

  boxes.forEach((box) => {
    box.style.backgroundColor = '';
  });

  colorInput.value = '';
});
