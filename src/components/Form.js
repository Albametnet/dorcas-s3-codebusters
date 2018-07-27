import React from 'react';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';

class Form extends React.Component {
  render() {
    return (
      <form action="" method="POST">
        <Design titleDesign={this.props.titleMain} titleDesignForm={this.props.titleDesignMain}/>
        <Fill />
        <Share />
      </form>
    );
  }
}

export default Form;