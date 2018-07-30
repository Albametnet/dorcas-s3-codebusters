import React from 'react';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';

class Form extends React.Component {
  render() {
    return (
      <form action="" method="POST">
        <Fill shareTitle5={this.props.shareTitle4}/>
        <Share shareTitle5= {this.props.shareTitle4}/>
        <Design shareTitle5={this.props.shareTitle4} titleDesignForm={this.props.titleDesignMain}/>
      </form>
    );
  }
}

export default Form;