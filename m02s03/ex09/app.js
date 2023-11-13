const header = document.querySelector('h1');
const list = document.querySelector('ul');

window.addEventListener('resize', function () {
  const currentWidth = window.innerWidth;

  function checkResolution() {
    console.log('checking resolution');
    if (currentWidth < 1024) {
      list.hidden = true;
      header.addEventListener('click', toogleVisibility);
    } else {
      list.hidden = false;
      header.removeEventListener('click', toogleVisibility);
    }
  }
  function toogleVisibility() {
    list.hidden = !list.hidden;
  }
  checkResolution();
});
