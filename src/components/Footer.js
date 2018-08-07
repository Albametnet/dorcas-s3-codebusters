import React from 'react';
import logoPina from '../images/logo-pina40.jpg';
import logoAdalab from '../images/logo-adalab-80px.png';
import '../stylesheets/App.css';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div class="container__footer">
          <p>Awesome profile-cards @2018</p>
          <p>The Summer Ladies<img src={logoPina} alt = "mi piña"/></p>
          <a href="http://www.adalab.es/ ">
            <img class="footer__logo " src={logoAdalab} alt="logo adalab" />
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;