import React from 'react';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';

class Form extends React.Component {
  render() {
    return (
      <form action="" method="POST">
        <Design shareTitle5={this.props.shareTitle4} titleDesignForm={this.props.titleDesignMain}/>
        <Fill shareTitle5={this.props.shareTitle4} skills ={this.props.skills} changeForm={this.props.changeForm} handleImage={this.props.handleImage} writeImages={this.props.writeImages}/>
        <Share shareTitle5= {this.props.shareTitle4}/>
      </form>
    );
  }
}

export default Form;