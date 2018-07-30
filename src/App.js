import React, { Component } from 'react';
import './stylesheets/App.css';
import CardPage from './components/CardPage';

class App extends Component {
  constructor (props){
    super(props);
    this.copyRight = 'Awesome profile-cards @2018';
    this.titulo = 'Rellena';
    this.icono = {movil:'rrss fas fa-mobile-alt', email: 'rrss far fa-envelope', linkedin: 'rrss fab fa-linkedin-in', github: 'rrss fab fa-github-alt'}
  }
  render() {
    return (
      <div className="App">
        <CardPage footerText= {this.copyRight} tituloApp = {this.titulo} iconApp ={this.icono}/>
      
      </div>
    );
  }
}

export default App;
