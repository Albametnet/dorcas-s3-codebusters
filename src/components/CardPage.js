import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class CardPage extends React.Component {
  render() {
    return (
    <div className="CardPage">
      <Header />
      <Main />
      <Footer />
    </div>
    );
  }
}

export default CardPage;