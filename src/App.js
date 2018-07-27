import React, { Component } from 'react';
import './stylesheets/App.css';
import CardPage from './components/CardPage';

class App extends Component {
  constructor (props){
    super(props);
    this.copyRight = 'Awesome profile-cards @2018';
    this.design = 'diseña';
    this.titleDesign = {colors: "colores", fonts:"fuentes"};
  }
  render() {
    return (
      <div className="App">
        <CardPage footerText= {this.copyRight} title={this.design} titleDesign={this.titleDesign}/>
      </div>
    );
  }
}

export default App;
