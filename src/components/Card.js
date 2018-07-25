import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class Card extends React.Component {
  render() {
    return (
    <div className="Card">
      <Header />
      <Main />
      <Footer />
    </div>
    );
  }
}

export default Card;