import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class CardPage extends React.Component {
  render() {
    return (
    <div className="cardPage">
      <Header />
      <Main tituloCardPage= {this.props.tituloApp} iconCardPage={this.props.iconApp}/>
      <Footer footertext2= {this.props.footerText}/>
    </div>
    );
  }
}

export default CardPage;