
//iconos
searchPhone.addEventListener('keyup', linkSocials);
searchLinkedin.addEventListener('keyup', linkSocials);
searchMail.addEventListener('keyup', linkSocials);
searchGithub.addEventListener('keyup', linkSocials);

function linkSocials(event) {
  var guiltyForm = event.currentTarget;
  var rrssId = guiltyForm.getAttribute('data-rrss');
  if (guiltyForm.classList.contains('rellena__phone')) {
    document.querySelector('#' + rrssId).href = 'tel:' + guiltyForm.value;
  } else if (guiltyForm.classList.contains('rellena__email')) {
    document.querySelector('#' + rrssId).href = 'mailto:' + guiltyForm.value;
  } else {
    document.querySelector('#' + rrssId).href = 'https://' + guiltyForm.value;
  }
  var formProperty = guiltyForm.getAttribute('data-property');
  saveForm(formProperty,guiltyForm.value);
}
