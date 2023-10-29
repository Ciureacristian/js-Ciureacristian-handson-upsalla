const header = document.querySelector('h1');
const list = document.querySelector('ul');

window.addEventListener('resize', function () {
  const currentWidth = window.innerWidth;

  if (currentWidth < 500) {
    list.hidden = true;
    header.addEventListener('click', toogleVisibility);
  } else {
    list.hidden = false;
    header.removeEventListener('click', toogleVisibility);
  }
});
