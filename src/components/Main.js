import React from 'react';
import Form from './Form';
import Visor from './Visor';

class Main extends React.Component {
  render() {
    return (
      <main class="container">
<<<<<<< HEAD
        <Form shareTitle4= {this.props.shareTitle3}/>
        <Visor />
=======
        <Form titleMain={this.props.titleCardPage} titleDesignMain={this.props.titleDesignCardPage} tituloMain = {this.props.tituloCardPage}/>
        <Visor iconMain= {this.props.iconCardPage} />
>>>>>>> react
      </main>
    );
  }
}

export default Main;