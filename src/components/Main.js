import React from 'react';
import flamingo from '../images/flamingocardsok.jpg';

class Main extends React.Component {
  render() {
    return (
      <main class="container">
        <section className="container__visor">
          <div className="visor__container1">
            <button type="button" className="visor__button-reset" name="button-reset">
              <span>
                <i className="far fa-trash-alt"></i> reset</span>
            </button>
            <div className="visor__view">
              <div className="visor__box"></div>
              <div className="visor__name-subname">
                <h4 className="visor__view-name" id="userName">Nombre y apellidos</h4>
                <h5 className="visor__view-profession" id="job">Empleo</h5>
              </div>
              <div className="visor__image">
                <img className="visor__image-foto" src={flamingo} alt="image-tarjet" />
              </div>
              <div className="list">
                <div className="visor__view-a">
                  <ul className="visor__view-a-list">
                    <li>
                      <a className="link" href="" target="_blank" title="mobile" id="rellena__phone">
                        <i className="rrss fas fa-mobile-alt"></i>
                      </a>
                    </li>
                    <li>
                      <a href="" className="link" target="_blank" title="Gmail general" id="rellena__email">
                        <i className="rrss far fa-envelope"></i>
                      </a>
                    </li>
                    <li>
                      <a className="link" href="" target="_blank" title="linkedin general" id="rellena__linkedin">
                        <i className="rrss fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a className="link" href="" target="_blank" title="general" id="rellena__github">
                        <i className="rrss fab fa-github-alt"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="visor__view-list-txt">
                <ul className="visor__skills">
                  <li className="visor__list-text-icon">
                    <span className="skill" id="selectedskills0"></span>
                  </li>
                  <li className="visor__list-text-icon">
                    <span className="skill" id="selectedskills1"></span>
                  </li>
                  <li className="visor__list-text-icon">
                    <span className="skill" id="selectedskills2"></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="container__form" id="diseña">
          <form action="" method="POST">
            <div className="container__form--disena">
              <div className="title__disena wraptitle">
                <i className="far fa-object-ungroup color--orange"></i>
                <h2 className="generaltitle">diseña</h2>
                <i className="fas fa-angle-down color--grey move1"></i>
              </div>
              <div className="form__disena--fontsColors wrapform">
                <h3 className="title__colors">colores</h3>
                <div className="form__colors">
                  <div className="colors__container">
                    <input id="option1" type="radio" value="1" data-color="" name="color" className="point input__palette_1" checked />
                    <label for="option1">
                      <div className="div_colors">
                        <div className="colors__palets darkBlue"> </div>
                        <div className="colors__palets mediumBlue"> </div>
                        <div className="colors__palets lightBlue"> </div>
                      </div>
                    </label>
                  </div>
                  <div className="colors__container">
                    <input id="option2" type="radio" value="2" data-color="red" name="color" className="point input__palette_2" />
                    <label for="option2">
                      <div className="div_colors">
                        <div className="colors__palets darkRed"> </div>
                        <div className="colors__palets mediumRed"> </div>
                        <div className="colors__palets lightRed"> </div>
                      </div>
                    </label>
                  </div>
                  <div className="colors__container">
                    <input id="option3" type="radio" value="3" data-color="grey" name="color" className="point input__palette_3" />
                    <label for="option3">
                      <div className="div_colors">
                        <div className="colors__palets darkGrey"> </div>
                        <div className="colors__palets mediumGrey"> </div>
                        <div className="colors__palets lightGrey"> </div>
                      </div>
                    </label>
                  </div>
                </div>
                <h3 className="title__fonts">fuentes</h3>
                <div className="form__fonts">
                  <div className="fonts__container">
                    <input id="font1" type="radio" value="1" name="font" className="point1 input__typography_1" data-font="" checked />
                    <label for="font1" className="ubuntu">ubuntu</label>
                  </div>
                  <div className="fonts__container">
                    <input id="font2" type="radio" value="2" name="font" className="point1 input__typography_2" data-font="comic" />
                    <label for="font2" className="comic1">comic sans</label>
                  </div>
                  <div className="fonts__container">
                    <input id="font3" type="radio" value="3" name="font" className="point1 input__typography_3" data-font="montserrat" />
                    <label for="font3" className="montserrat1">montserrat</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="container__form--rellena" id="rellena">
              <div className="titulo__rellena">
                <i className="fas fa-keyboard color--orange"></i>
                <h2 className="generaltitle">rellena</h2>
                <i className="fas fa-angle-down color--grey move2"></i>
              </div>
              <div className="form__rellena form__oculto">
                <fieldset>
                  <div className="form__rellena--step">
                    <label for="name">Nombre completo</label>
                    <input placeholder="Ej: Sally Hill" className="input__name" type="text" id="name" data-donde="userName" data-property="name"
                      required />
                  </div>
                  <div className="form__rellena--step">
                    <label for="position">Puesto</label>
                    <input placeholder="Front end Unicorn" className="input__job" type="text" id="position" data-donde="job" data-property="job"
                      required />
                  </div>
                  <div className="form__rellena--file">
                    <label for="imagen">Imagen de Perfil</label>
                    <div className="form__box--image">
                      <input className="action__hiddenbutton input__photo" type="file" id="imagen" required />
                      <button type="button" name="button" className="form__rellena--button">Añadir imagen</button>
                      <a href="#" id="reloadimage">
                        <div className="form__rellena--reload"></div>
                      </a>
                    </div>
                  </div>
                  <div className="form__rellena--step">
                    <label for="email">Email</label>
                    <input className="rellena__email input__email" placeholder="sallyhill@gmail.com" type="email" data-rrss="rellena__email"
                      data-property="email" required />
                  </div>
                  <div className="form__rellena--step">
                    <label for="phone">Telefono</label>
                    <input className="rellena__phone input__phone" placeholder="555-55-55-55" type="tel" data-rrss="rellena__phone" data-property="phone"
                      required />
                  </div>
                  <div className=" form__rellena--step ">
                    <label for="linkedin ">Linkedin</label>
                    <input className="rellena__linkedin input__linkedin" placeholder="ej:linkedin.com/in/sally-hill " type="linkedin " data-rrss="rellena__linkedin"
                      data-property="linkedin" required />
                  </div>
                  <div className="form__rellena--step ">
                    <label for="github ">Github</label>
                    <input className="rellena__github input__github" placeholder="@sally-hill " type="text " data-rrss="rellena__github" data-property="github"
                      required />
                  </div>
                </fieldset>
                <fieldset>
                  <div className="form__rellena--skills ">
                    <label for="skills ">Habilidades (máximo 3)</label>
                  </div>
                </fieldset>
              </div>
            </div>
            <div className="container__comparte" id="comparte">
              <div className="container__comparte--icon wraptitle">
                <i className="fas fa-share-alt"></i>
                <h2 className="generaltitle">Comparte</h2>
                <i className="fas fa-angle-down color--grey move3"></i>
              </div>
              <div className="form__comparte wrapform form__oculto">
                <div className="container__comparte--button">
                  <div>
                    <button type="button" name="button" className="container__comparte--buttonstyle">
                      <i className="far fa-address-card"></i> Crear tarjeta
                        </button>
                  </div>
                </div>
                <div className="container__comparte-created form__oculto">
                  <p>La tarjeta ha sido creada:</p>
                  <p className="container__comparte-link"></p>
                  <button type="button" name="button" className="container__comparte--button-twitter">
                    <i className="fab fa-twitter"></i> Compartir en Twitter
                    </button>
                </div>
              </div>
            </div>
          </form>
        </section>
      </main>

    );
  }
}

export default Main;