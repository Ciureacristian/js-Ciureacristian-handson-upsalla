// block box function with no side effects
function createLog(message) {
  const messageContainer = document.createElement('p');
  messageContainer.innerText = message;

  return messageContainer;
}

const stage = document.querySelector('.pane .stage');
const logsContainer = document.querySelector('.logs');
let counter = 0;

stage.addEventListener('mouseover', function () {
  const log = createLog('Mousul este pe scena');
  counter = counter + 1;

  const counterLog = createLog(`Mouseul a fost pe scena de ${counter} ori`);

  logsContainer.append(log);
  logsContainer.append(counterLog);
});

stage.addEventListener('mouseout', function () {
  const log = createLog('Mousul nu este pe scena');
  counter = counter + 1;

  const counterLog = createLog(`Mousul nu mai este pe scena de ${counter} ori`);

  logsContainer.append(log);
  logsContainer.append(counterLog);
});
