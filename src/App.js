import React, { Component } from 'react';
import './stylesheets/App.css';
import CardPage from './components/CardPage';

class App extends Component {
  constructor (props){
    super(props);
    this.copyRight = 'Awesome profile-cards @2018';
  }
  render() {
    return (
      <div className="App">
        <CardPage footerText= {this.copyRight}/>
      </div>
    );
  }
}

export default App;
