import React from 'react';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';

class Form extends React.Component {
  render() {
    return (
      <form action="" method="POST">
        <Design shareTitle5={this.props.shareTitle4} titleDesignForm={this.props.titleDesignMain}/>
        <Fill shareTitle5={this.props.shareTitle4} skills ={this.props.skills} changeForm={this.props.changeForm} selectedSkills={this.props.selectedSkills} changeSkills={this.props.changeSkills}               addNewSelectedSkill={this.props.addNewSelectedSkill}
                      removeSelectedSkill={this.props.removeSelectedSkill}
                      />
        <Share shareTitle5= {this.props.shareTitle4}/>
      </form>
    );
  }
}

export default Form;