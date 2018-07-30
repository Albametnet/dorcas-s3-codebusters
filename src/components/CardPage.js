import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class CardPage extends React.Component {
  render() {
    return (
    <div className="cardPage">
      <Header />
<<<<<<< HEAD
      <Main shareTitle3= {this.props.shareTitle2}/>
=======
      <Main titleCardPage={this.props.title} titleDesignCardPage={this.props.titleDesign} iconCardPage={this.props.iconApp}/>
>>>>>>> react
      <Footer footertext2= {this.props.footerText}/>
    </div>
    );
  }
}

export default CardPage;