import React from 'react';

class Fill extends React.Component {
  

  render() {
    return (
      <div className="container__form--rellena" id="rellena">
        <div className="titulo__rellena">
          <i className="fas fa-keyboard color--orange"></i>
          <h2 className="generaltitle">{this.props.shareTitle5.rellena}</h2>
          <i className="fas fa-angle-down color--grey move2"></i>
        </div>
        <div className="form__rellena form__oculto">
          <fieldset>
            <div className="form__rellena--step">
              <label for="name">Nombre completo</label>
              <input placeholder="Ej: Sally Hill" className="input__name" type="text" id="name" data-donde="userName" data-property="name"
                required onChange={this.props.changeForm}/>
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
                <a href="" id="reloadimage">
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
              <label htmlFor="skills ">Habilidades (máximo 3)</label>
              <select id="skills">
                {this.props.skills.map(function (item){
                  return(
                    <option value={item}>{item}</option>
                  )
                })}
              </select>
            </div>
          </fieldset>
        </div>
      </div>
    );
  }
}

export default Fill;