import React, { Component } from 'react';
import './stylesheets/App.css';
import CardPage from './components/CardPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copyRight: 'Awesome profile-cards @2018',
      skills: []

    };
    this.getskills = this.getskills.bind(this)
    this.getskills();
    this.shareTitle = { comparte: 'comparte', rellena: 'rellena', diseña: 'diseña' }
    this.titleDesign = { colors: "colores", fonts: "fuentes" };
    this.icono = { movil: 'rrss fas fa-mobile-alt', email: 'rrss far fa-envelope', linkedin: 'rrss fab fa-linkedin-in', github: 'rrss fab fa-github-alt' }
  }
  getskills() {
    fetch(
      'https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json'
    )
      .then(function (response) {
        return response.json();
      })
      .then( (json) => {
        const habilidades = json.skills;
        this.setState({
          skills: habilidades
        })
      }
      )
  }
  render() {
    return (
      <div className="App">
        <CardPage footerText={this.state.copyRight} shareTitle2={this.shareTitle} titleDesign={this.titleDesign} iconApp={this.icono} skills={this.state.skills} />
      </div>
    );
  }
}

export default App;
