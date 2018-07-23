'use strict';

//localStorage
const includeLocalStorage = () => {
  const disponible = isAvailableForm();
  if (disponible) {
    const result = localStorage.getItem('userForm');
    userForm = JSON.parse(result);
    const resultArray = Object.keys(userForm);
    resultArray.map(clave => {
      const elem = findElementToModify(clave);
      modifyElement(clave, elem);
    });
  } else {
    userForm = {};
  }
}

const findElementToModify = clave => {
  let elem = document.querySelector('.input__' + clave);
  if (clave === 'palette' || clave === 'typography') {
    elem = document.querySelector('.input__' + clave + '_' + userForm[clave]);
  }
  return elem;
}
const modifyElement = (clave, elem) => {
  if (clave === 'photo') {
    writeImage(userForm[clave]);
  } else if (clave === 'palette' || clave === 'typography') {
    elem.setAttribute('checked', 'checked');
  } else if (clave === 'skills') {
    printSkills();
  } else {
    elem.value = userForm[clave];
  }
}

const printSkills = () => {
  for (var i = 0; i < userForm.skills.length; i++) {
    const selectElement = document.querySelector('#skills' + i);
    if (selectElement === null) {
      addSkills();
      selectElement = document.querySelector('#skills' + i);
    }
    checkSelectedOption(selectElement, i);
  }
}
const checkSelectedOption = (selectElement, i) => {
  for(const option of selectElement.options) {
    if (option.value === userForm.skills[i]) {
      option.setAttribute('selected', 'selected');
    }
  }
}
const saveForm = (clave,valor) => {
  userForm[clave] = valor;
  localStorage.setItem('userForm', JSON.stringify(userForm));
}
const isAvailableForm = () => {
  return localStorage.getItem('userForm') !== null;
}
