import React from 'react';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';

class Form extends React.Component {
  render() {
    return (
      <form action="" method="POST">
<<<<<<< HEAD
        <Design shareTitle5={this.props.shareTitle4}/>
        <Fill shareTitle5={this.props.shareTitle4}/>
        <Share shareTitle5= {this.props.shareTitle4}/>
=======
        <Design titleDesign={this.props.titleMain} titleDesignForm={this.props.titleDesignMain}/>
        <Fill tituloForm= {this.props.tituloMain}/>
        <Share />
>>>>>>> react
      </form>
    );
  }
}

export default Form;