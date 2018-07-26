import React, { Component } from 'react';
import './stylesheets/App.css';
import CardPage from './components/CardPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CardPage />
      </div>
    );
  }
}

export default App;
