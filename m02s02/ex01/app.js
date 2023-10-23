const form = document.getElementById('personForm');
const personDisplayClass = 'personDisplay';
const existingFieldset = form.querySelector('fieldset:nth-child(2)');
const skillsContainer = document.getElementById('div');

existingFieldset.append(renderSkillInput());

// hoisted
// returns (input and button)
function renderSkillInput() {
  const container = new DocumentFragment();

  const skillInput = document.createElement('input');
  skillInput.type = 'text';
  skillInput.placeholder = 'Adauga Skill';
  skillInput.classList.add('addSkill');

  skillInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      addSkill(skillInput.value);
      skillInput.value = '';
    }
  });

  const skillInputButton = document.createElement('button');
  skillInputButton.title = 'Adauga Skill';
  skillInputButton.innerText = '+';
  skillInputButton.type = 'button';

  const newContainer = document.createElement('div');
  newContainer.classList.add('skill-input-container');

  const addSkillButton = document.createElement('button');
  addSkillButton.title = 'Adauga Button';
  addSkillButton.innerText = '+';
  addSkillButton.type = 'button';
  addSkillButton.classList.add('addSkillButton');

  // refactor
  skillInputButton.addEventListener('click', function (event) {
    const button = event.currentTarget;
    // DOM traversal
    const skillInput = button.previousElementSibling;
    const skillValue = skillInput.value;
    if (skillValue.trim().length < 1) {
      return;
    }

    button.after(renderSkillsUl(skillValue));
  });

  // add keydown addeventlistener pentru skillInput

  //function ptr tema

  container.append(skillInput);
  container.append(skillInputButton);

  return container;
}

function addSkill(skillName) {
  if (skillName.trim().length < 1) {
    return;
  }

  skillsContainer.appendChild(renderSkillsUl(skillName));
}

function renderSkillsUl(skillName) {
  const className = 'skillsUl';
  let skillsUl = document.querySelector('.' + className);

  if (skillsUl === null) {
    skillsUl = document.createElement('ul');
    skillsUl.classList.add(className);
  }

  const skillLi = document.createElement('li');

  const skillText = document.createElement('span');
  skillText.classList.add('skillText');
  skillText.innerText = skillName;

  const skillInput = document.createElement('input');
  skillInput.type = 'hidden';
  skillInput.name = `skill-${skillName}`;
  skillInput.value = skillName;

  const deleteSkillButton = document.createElement('button');
  deleteSkillButton.type = 'button';
  deleteSkillButton.innerText = 'Sterge';
  deleteSkillButton.title = 'Sterge Skill';
  deleteSkillButton.classList.add('deleteSkillButton');

  const editSkillButton = document.createElement('button');
  editSkillButton.type = 'button';
  editSkillButton.innerText = 'Editeaza';
  editSkillButton.title = 'Editeaza Skill';
  editSkillButton.classList.add('editSkillButton');

  const cancelEditSkillButton = document.createElement('button');
  cancelEditSkillButton.type = 'button';
  cancelEditSkillButton.innerText = 'Cancel';
  cancelEditSkillButton.title = 'Cancel Edit';
  cancelEditSkillButton.classList.add('cancelEditSkillButton');
  cancelEditSkillButton.hidden = true;

  const saveSkillButton = document.createElement('button');
  saveSkillButton.type = 'button';
  saveSkillButton.innerText = 'Save';
  saveSkillButton.title = 'Save Edit';
  saveSkillButton.classList.add('saveSkillButton');
  saveSkillButton.hidden = true;

  skillLi.append(skillText);
  skillLi.append(skillInput);
  skillLi.append(deleteSkillButton);
  skillLi.append(editSkillButton);
  skillLi.append(cancelEditSkillButton);
  skillLi.append(saveSkillButton);

  skillsUl.append(skillLi);

  return skillsUl;
}

// event delegation
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const person = {};
  // currentTarget => obiectul de DOM pe care s-a rulat
  // addEventlistener
  const form = event.currentTarget;

  person.name = form.name.value;
  person.surname = form.surname.value;
  person.age = form.age.value;
  person.skills = [];

  // extragem campurile prefixate cu skill- din form
  const skillNames = form.querySelectorAll('input[name^="skill-"]');
  skillNames.forEach(function (skillInput) {
    person.skills.push(skillInput.value);
  });

  const skillsUl = document.querySelector('ul.skillsUl');
  if (skillsUl) {
    skillsUl.remove();
  }

  clearDisplay();
  const personDisplay = render(person);
  form.after(personDisplay);

  form.reset();
});

form.addEventListener('click', function (event) {
  // obtain button from DOM
  // target este obiectul DE PE CARE A PLECAT
  // evenimentul
  const target = event.target;
  // check if actual button
  if (
    target.nodeName !== 'BUTTON' ||
    !target.classList.contains('deleteSkillButton')
  ) {
    // return early
    return;
  }
  // readability hack
  const deleteSkillButton = target;
  // DOM traversal
  // button.parentElement.remove()
  deleteSkillButton.parentElement.remove();
});

form.addEventListener('click', function (event) {
  // target este obiectul de pe care a plecat
  const target = event.target;

  if (
    target.nodeName !== 'BUTTON' ||
    !target.classList.contains('editSkillButton')
  ) {
    return;
  }

  // readability hack
  const editSkillButton = target;
  // hide delete button
  editSkillButton.parentElement.querySelector(
    '.deleteSkillButton',
  ).hidden = true;
  // hide skillText
  editSkillButton.parentElement.querySelector('.skillText').hidden = true;
  // hide actual edit button
  editSkillButton.hidden = true;
  // change type hidden in text
  editSkillButton.parentElement.querySelector('input[name^="skill-"]').type =
    'text';
  // show cancel
  editSkillButton.parentElement.querySelector(
    '.cancelEditSkillButton',
  ).hidden = false;
  // show save
  editSkillButton.parentElement.querySelector(
    '.saveSkillButton',
  ).hidden = false;
});

// event delegation for cancelEditSkillButton
form.addEventListener('click', function (event) {
  const target = event.target;

  if (
    target.nodeName !== 'BUTTON' ||
    !target.classList.contains('cancelEditSkillButton')
  ) {
    return;
  }

  const cancelButton = target;
  const parentElement = cancelButton.parentElement;
  // show span.SkillLi
  parentElement.querySelector('.skillText').hidden = false;
  // show button.editSkillButton
  parentElement.querySelector('.editSkillButton').hidden = false;
  // show button.deleteSkillButton
  parentElement.querySelector('.deleteSkillButton').hidden = false;
  // hide this buttton
  cancelButton.hidden = true;
  // hide saveSkillButton
  parentElement.querySelector('.saveSkillButton').hidden = true;
  // change type from text to hidden on input
  parentElement.querySelector('[name^="skill-"]').type = 'hidden';
});

// event delegation for saveSkillButton
form.addEventListener('click', function (event) {
  const target = event.target;

  if (
    target.nodeName !== 'BUTTON' ||
    !target.classList.contains('saveSkillButton')
  ) {
    return;
  }

  saveSkill(target);
});

form.children[1].addEventListener('keypress', function (event) {
  const target = event.target;

  if (
    target.nodeName !== 'INPUT' ||
    !target.name.startsWith('skill-') ||
    event.key !== 'Enter'
  ) {
    return;
  }

  event.stopPropagation();
  event.preventDefault();

  saveSkill(target);
});

function saveSkill(target) {
  const parentElement = target.parentElement;

  // copy value from input to skillText
  // (tema, early return)
  const skillInput = parentElement.querySelector('input[name^="skill-"]');
  const value = skillInput.value;

  // insert code here

  const skillText = parentElement.querySelector('.skillText');
  skillText.innerText = value;
  skillText.hidden = false;
  // hide this element
  target.hidden = true;

  // hide cancel
  parentElement.querySelector('.cancelEditSkillButton').hidden = true;
  //hide save
  parentElement.querySelector('.saveSkillButton').hidden = true;
  // change type to
  skillInput.type = 'hidden';
  // show edit
  parentElement.querySelector('.editSkillButton').hidden = false;
  // show delete
  parentElement.querySelector('.deleteSkillButton').hidden = false;
}

// hoisted
function clearDisplay() {
  const display = document.querySelector('.' + personDisplayClass);

  if (display !== null) {
    display.remove();
  }
}

function render(person) {
  // in memory
  const personDisplay = document.createElement('div');
  personDisplay.classList.add(personDisplayClass);

  personDisplay.append(renderPerson(person));
  const skillsUl = renderSkills(person.skills);
  if (skillsUl !== null) {
    personDisplay.append(skillsUl);
  }

  return personDisplay;
}

// hoisting - a ridica
function renderPerson(person) {
  const paragraph = document.createElement('p');

  paragraph.innerText = `${person.name} ${person.surname}: ${person.age}`;

  return paragraph;
}

function renderSkills(skills = []) {
  if (skills.length <= 0) {
    return null;
  }

  const container = new DocumentFragment();
  const heading = document.createElement('h3');
  heading.innerText = 'Skills';
  container.append(heading);

  const ul = document.createElement('ul');
  skills.forEach(function (skillName) {
    const li = document.createElement('li');
    li.innerText = skillName;
    ul.append(li);
  });

  container.append(ul);

  return container;
}

const existingFriendFieldset = form.querySelector('fieldset:nth-child(3)');
const friendContainer = document.getElementById('friend-container');

existingFriendFieldset.append(renderFriendInput());

function renderFriendInput() {
  const container = new DocumentFragment();

  const friendInput = document.createElement('input');
  friendInput.type = 'text';
  friendInput.placeholder = 'Adauga Prieten';
  friendInput.classList.add('addFriend');

  const friendInputButton = document.createElement('button');
  friendInputButton.title = 'Adauga Prieten';
  friendInputButton.innerText = '+';
  friendInputButton.type = 'button';

  friendInputButton.addEventListener('click', function (event) {
    const button = event.currentTarget;
    const friendInput = button.previousElementSibling;
    const friendName = friendInput.value;
    if (friendName.trim().length < 1) {
      return;
    }

    friendContainer.appendChild(renderFriendsUl(friendName));
    friendInput.value = '';
  });

  container.append(friendInput);
  container.append(friendInputButton);

  return container;
}

function renderFriendsUl(friendName) {
  const ul = document.createElement('ul');
  ul.classList.add('friendsUl');

  const li = document.createElement('li');
  li.innerText = friendName;

  const deleteFriendButton = document.createElement('button');
  deleteFriendButton.type = 'button';
  deleteFriendButton.innerText = 'Sterge';
  deleteFriendButton.title = 'Sterge Prieten';
  deleteFriendButton.classList.add('deleteFriendButton');

  deleteFriendButton.addEventListener('click', function (event) {
    ul.remove();
  });

  li.appendChild(deleteFriendButton);
  ul.appendChild(li);

  return ul;
}
