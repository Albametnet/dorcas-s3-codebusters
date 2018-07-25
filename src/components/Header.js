import React from 'react';
import logo from '../images/logo.svg';

class Header extends React.Component {
  render() {
    return (
      <header>
        <a href="">
          <img className="header__logo" src={logo} alt="awesome cards logo" />
        </a>
      </header>
    );
  }
}

export default Header;