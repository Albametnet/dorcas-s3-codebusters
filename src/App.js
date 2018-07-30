import React, { Component } from 'react';
import './stylesheets/App.css';
import CardPage from './components/CardPage';

class App extends Component {
  constructor (props){
    super(props);
    this.copyRight = 'Awesome profile-cards @2018';
    this.shareTitle = {comparte:'comparte', rellena:'rellena', diseña:'diseña'}
  }
  render() {
    return (
      <div className="App">
        <CardPage footerText= {this.copyRight} shareTitle2= {this.shareTitle}/>
      </div>
    );
  }
}

export default App;
