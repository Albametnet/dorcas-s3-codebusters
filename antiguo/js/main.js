'use strict';

//desplegable
const selectorDisena = document.querySelector('.title__disena');
const formularioDisena = document.querySelector('.form__disena--fontsColors');
const selectorRellena = document.querySelector('.titulo__rellena');
const formularioRellena = document.querySelector('.form__rellena');
const selectorComparte = document.querySelector('.container__comparte--icon');
const formularioComparte = document.querySelector('.form__comparte');
const tarjetaCreada = document.querySelector('.container__comparte-created');
const botonCrearTarjeta = document.querySelector('.container__comparte--buttonstyle');
const botonrotado1 = document.querySelector('.move1');
const botonrotado2 = document.querySelector('.move2');
const botonrotado3 = document.querySelector('.move3');
//escritura automatica visor
const nameField = document.querySelector('.input__name');
const roleField = document.querySelector('.input__job');
const visorName = document.querySelector('.visor__view-name');
const visorJob = document.querySelector('.visor__view-profession');
//foto editor
let fr = new FileReader();
const uploadBtn = document.querySelector('.form__rellena--button');
const fileField = document.querySelector('#imagen');
const profileImage = document.querySelector('.visor__image-foto');
const formImage = document.querySelector('.form__rellena--reload ');
//boton resetreset
const resetButton = document.querySelector('.visor__button-reset');
const visorContainer = document.querySelector('.visor__container1');
const visorSkills = document.querySelector('.visor__skills');
const formRellenaSkills = document.querySelector('.form__rellena--skills');
//diseña cambio color
const cardContainer = document.querySelector('.visor__container1');
const radios = document.querySelectorAll('.point');
const radiosFont = document.querySelectorAll('.point1');
//Habilidades
let counterSkills = 0;
let skillsToSave =[];
let skills = [];
//iconos
const searchPhone = document.querySelector('.rellena__phone');
const searchLinkedin = document.querySelector('.rellena__linkedin');
const searchMail = document.querySelector('.rellena__email');
const searchGithub = document.querySelector('.rellena__github');
//link
const responseURL = document.querySelector('.container__comparte-link');
//localStorage
let userForm = {};
