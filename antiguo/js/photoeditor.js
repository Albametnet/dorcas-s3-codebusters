'use strict';

//foto editor
const getImage = e => {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener('load', function(){
    writeImage(fr.result);
  });
  fr.readAsDataURL(myFile);
}
const writeImage = photo => {
  profileImage.src = photo;
  formImage.style.backgroundImage = 'url(' + photo + ')';
  saveForm('photo', photo);
}
const fakeFileClick = () => {
  fileField.click();

}
fileField.addEventListener('change', getImage);
uploadBtn.addEventListener('click', fakeFileClick);
console.log('soy photoeditor');
