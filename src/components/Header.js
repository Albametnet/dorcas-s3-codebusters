import React from 'react';
import logo from '../images/logo.svg';
import {Link} from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header>   
        <Link to = '/' >
        <img className="header__logo" src={logo} alt="awesome cards logo" />
        </Link>
      </header>
    );
  }
}

export default Header;