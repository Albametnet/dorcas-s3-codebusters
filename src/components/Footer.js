import React from 'react';
import logoPina from '../images/logo-pina40.jpg';
import logoAdalab from '../images/logo-adalab-80px.png';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div class="container__footer">
          <p>Awesome profile-cards @2018</p>
          <p>The Summer Ladies<img src={logoPina} /></p>
          <a href="http://www.adalab.es/ ">
            <img class="footer__logo " src={logoAdalab} />
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;