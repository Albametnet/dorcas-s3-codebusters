// BOTON RESET
function visorDesignAuto() {
  visorContainer.classList.remove('red');
  visorContainer.classList.remove('grey');
}
function visorImageAuto() {
  profileImage.src = './images/flamingocardsok.jpg';
  formImage.style.backgroundImage = 'url("./images/flamingocardsok.jpg")';
}
function formAuto() {
  nameField.value = '';
  roleField.value = '';
  searchPhone.value = '';
  searchLinkedin.value = '';
  searchMail.value = '';
  searchGithub.value = '';

}
function visorAuto() {
  visorName.innerHTML = 'Nombre y apellidos';
  visorJob.innerHTML = 'Empleo';

  visorImageAuto();
  visorDesignAuto();
  formAuto();
  resetFont();

  visorSkills.classList.add('form__oculto');
}
resetButton.addEventListener('click', visorAuto);
