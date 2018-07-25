import React from 'react';

class Share extends React.Component {
  render() {
    return (
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
    );
  }
}

export default Share;