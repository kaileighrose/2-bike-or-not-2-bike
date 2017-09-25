import React, {Component} from 'react';

class TempForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _min: '',
      _max: '',
      _risk: ''
    };
  }

  render() {
    return (
      <form className="App-form" onSubmit={this._handleSubmit.bind(this)}>
        <div className="app-form-fields">
          <label>Minimum Temperature: </label>
          <input type="number" placeholder="Min" ref={c => this._min = c} />
          <label>  Maximum Temperature: </label>
          <input type="number" placeholder="Max" ref={c => this._max = c} />
          <label>  Maximum Chance of Rain: </label>
          <input type="number" placeholder="Chance of Rain" ref={c => this._risk = c} />
        </div>
        <br />
        <div className="app-form-actions">
          <button type="submit">Check Weather</button>
        </div>
      </form>
    );
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.setState({ _min: this._min.value, _max: this._max.value, _risk: this._risk.value});
    this.props.show();
  }

}

export default TempForm;