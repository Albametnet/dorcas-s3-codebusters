
//Habilidades
function createSelect(entryskills) {
  var inputSelect = document.createElement('select');
  inputSelect.name = 'skills';
  inputSelect.id = 'skills' + counterSkills;
  inputSelect.classList.add('select_skills');
  inputSelect.setAttribute('data-index', counterSkills);
  for (var i = 0; i < entryskills.length; i++) {
    var createOption = document.createElement('option');
    createOption.value = entryskills[i];
    inputSelect.appendChild(createOption);
    createOption.innerHTML = entryskills[i];
  }
  inputSelect.addEventListener('change', skillAgregator);
  formRellenaSkills.appendChild(inputSelect);
}
function skillAgregator(e){
  var activeSelect = e.currentTarget;
  var activeSkills = document.querySelector('#selected' +  activeSelect.id);
  activeSkills.innerHTML= activeSelect.value;
  visorSkills.classList.remove('form__oculto');
  skillsToSave[activeSelect.getAttribute('data-index')] = activeSelect.value;
  saveForm('skills', skillsToSave);
}
function serverConector() {
  fetch(
    'https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json'
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      skills = json.skills;
      addSkills();
      includeLocalStorage();
    });
}
function addSkills() {
  if (counterSkills < 3) {
    createSelect(skills);
    createPlusButton();
    counterSkills = counterSkills + 1;
  }
}
serverConector();
function createPlusButton() {
  var plusButton = document.createElement('a');
  var divButton = document.createElement('div');
  var iButton = document.createElement('i');
  divButton.classList.add('form__rellena--plus');
  divButton.classList.add('color--orange');
  divButton.classList.add('addSkill');
  iButton.classList.add('fas');
  iButton.classList.add('fa-plus');
  iButton.classList.add('color--orange');
  divButton.appendChild(iButton);
  plusButton.appendChild(divButton);
  formRellenaSkills.appendChild(plusButton);
  plusButton.addEventListener('click', serverConector);
}
