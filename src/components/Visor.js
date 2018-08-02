import React from 'react';
import Card from './Card';

class Visor extends React.Component {
  render() {
    return (
      <section className="container__visor">
        <Card iconVisor = {this.props.iconMain} name={this.props.name}/>
      </section>
    );
  }
}

export default Visor;