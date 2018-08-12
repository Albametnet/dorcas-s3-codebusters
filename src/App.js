import React, { Component } from 'react';
import './stylesheets/App.css';
import CardPage from './components/CardPage';
import Home from './components/Home';
import { Switch, Route } from 'react-router-dom';


const fr = new FileReader();
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [],
      json: {
        palette: 1,
        typography: 2,
        name: "María García",
        job: "Front-end developer",
        phone: "+34 666666666",
        email: "mariagar@example.com",
        linkedin: "mariagar",
        github: "mariagar",
        photo: "data:image/png;base64,2342ba...",
        skills: ["HTML", "Sass", "JavaScript"]
      }
    };
    this.getskills();
    this.shareTitle = { comparte: 'comparte', rellena: 'rellena', diseña: 'diseña' }
    this.titleDesign = { colors: "colores", fonts: "fuentes" };
    this.icono = { movil: 'rrss fas fa-mobile-alt', email: 'rrss far fa-envelope', linkedin: 'rrss fab fa-linkedin-in', github: 'rrss fab fa-github-alt' }
    this.changeForm = this.changeForm.bind(this);
    this.writeImages = this.writeImages.bind(this);
    this.handleImage = this.handleImage.bind(this);
  }
  getskills() {
    fetch(
      'https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json'
    )
      .then(function (response) {
        return response.json();
      })
      .then((json) => {
        const habilidades = json.skills;
        this.setState({
          skills: habilidades
        })
      })
  }

  changeForm(event) {
    const guilty = event.currentTarget;
    if (guilty.getAttribute('id') === 'name') {
      this.setState((state) => {
        const j = {
          ...this.state.json,
          name: guilty.value
        }
        return (
          { json: j }
        )
      })
    }
    else if (guilty.getAttribute('id') === 'position') {
      this.setState((state) => {
        const j = {
          ...this.state.json,
          job: guilty.value
        }
        return (
          { json: j }
        )
      })
    }
    else if (guilty.getAttribute('type') === 'email'){
      this.setState((state) => {
        const j = {
          ...this.state.json,
          email: 'mailto:' + guilty.value
        }
        return (
          { json: j }
        )
        
      })
    }
    else if (guilty.getAttribute('type') === 'tel'){
      this.setState((state) => {
        const j = {
          ...this.state.json,
          phone: 'tel:' + guilty.value
        }
        return (
          { json: j }
        )
        
      })
    }
    else if (guilty.getAttribute('type') === 'linkedin'){
      this.setState((state) => {
        const j = {
          ...this.state.json,
          linkedin: 'www.linkedin.com/in/' + guilty.value
        }
        return (
          { json: j }
        )
        
      })
    }
    else if (guilty.getAttribute('type') === 'github'){
      this.setState((state) => {
        const j = {
          ...this.state.json,
          github: 'github.com/' + guilty.value
        }
        return (
          { json: j }
        )
        
      })
    }
  }
  handleImage(event) {
    const newImage = this.fileInput.current.files[0];
    fr.addEventListener('load', this.writeImages);
    fr.readAsDataURL(newImage);
  }

  writeImages(){
    this.setState({
      imageUrl: `url("${fr.result}")`,
      image: fr.result
    });
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/CardPage' render={() => <CardPage footerText={this.state.copyRight} shareTitle2={this.shareTitle} titleDesign={this.titleDesign} iconApp={this.icono} skills={this.state.skills} form={this.state.json} changeForm={this.changeForm} handleImage={this.handleImage} writeImages={this.writeImages}/>} />
        </Switch>
      </div>
    );
  }
}

export default App;
