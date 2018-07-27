import React from 'react';
import Form from './Form';
import Visor from './Visor';

class Main extends React.Component {
  render() {
    return (
      <main class="container">
        <Form titleMain={this.props.titleCardPage} titleDesignMain={this.props.titleDesignCardPage}/>
        <Visor />
      </main>
    );
  }
}

export default Main;