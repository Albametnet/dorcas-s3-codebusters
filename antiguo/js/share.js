'use strict';

// Crear enlace
function sendRequest(userForm){
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify(userForm),
    headers: {
      'content-type': 'application/json'
    },
  })
    .then(function(resp) { return resp.json(); })
    .then(function(result) { showURL(result); })
    .catch(function(error) { console.log(error); });
}
function showURL(result){
  if(result.success){
    responseURL.innerHTML = '<a href=' + result.cardURL + '>' + result.cardURL + '</a>';
  }else{
    responseURL.innerHTML = 'ERROR:' + result.error;
  }
}
//BOTON TWITTER
var twitterShare = document.querySelector('.container__comparte--button-twitter');

twitterShare.onclick = function(e) {
  var linkTwitter = document.querySelector('.container__comparte-link  a').href;
  e.preventDefault();
  var twitterWindow = window.open('https://twitter.com/share?url=' + linkTwitter, 'twitter-popup', 'height=350,width=600','590','253');
  if(twitterWindow.focus) { twitterWindow.focus(); }
  return false;
};
