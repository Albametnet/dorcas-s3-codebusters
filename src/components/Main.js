import React from 'react';
import Form from './Form';
import Visor from './Visor';

class Main extends React.Component {
  render() {
    return (
      <main class="container">
        <Form shareTitle4= {this.props.shareTitle3} titleDesignMain={this.props.titleDesignCardPage} tituloMain = {this.props.tituloCardPage} skills ={this.props.skills} changeForm={this.props.changeForm} form={this.props.form}/>
        <Visor iconMain= {this.props.iconCardPage} form={this.props.form} reset={this.props.reset}/>
      </main>
    );
  }
}

export default Main;