import React, {Component} from 'react';

class Results extends Component {
  render() {
    return(
      this.props.pick === true ? <h2>It's totally fine to bike right now</h2> : <h2>You should take the metro</h2>
    );
  }
}

export default Results;