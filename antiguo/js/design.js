
//diseña cambio color
function init() {
  for (var i = 0; i < radios.length; i++) {
    radios[i].addEventListener('click', setStyles);
  }
}
function setStyles(event) {
  var newColor = event.currentTarget.getAttribute('data-color');
  var value = event.currentTarget.value;
  resetColor();
  if (newColor !== '') {
    cardContainer.classList.add(newColor);
  }
  saveForm('palette', parseInt(value));
}
function resetColor() {
  cardContainer.classList.remove('red', 'grey');
}
init();
//diseña cambio de fuentes
function initFont() {
  for (var i = 0; i < radiosFont.length; i++) {
    radiosFont[i].addEventListener('click', setStylesFont);
  }
}
function setStylesFont(event) {
  var newFont = event.currentTarget.getAttribute('data-font');
  var value = event.currentTarget.value;
  resetFont();
  if (newFont !== '') {
    cardContainer.classList.add(newFont);
  }
  saveForm('typography', parseInt(value));
}
function resetFont() {
  cardContainer.classList.remove('comic', 'montserrat');
}
initFont();
