import React from 'react';
import Form from './Form';
import Visor from './Visor';

class Main extends React.Component {
  render() {
    return (
      <main class="container">
        <Form tituloMain = {this.props.tituloCardPage}/>
        <Visor iconMain= {this.props.iconCardPage} />
      </main>
    );
  }
}

export default Main;