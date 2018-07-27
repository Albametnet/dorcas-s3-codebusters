import React from 'react';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';

class Form extends React.Component {
  render() {
    return (
      <form action="" method="POST">
        <Design />
        <Fill />
        <Share shareTitle5= {this.props.shareTitle4}/>
      </form>
    );
  }
}

export default Form;