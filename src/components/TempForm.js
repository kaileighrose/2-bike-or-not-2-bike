import React, {Component} from 'react';

class TempForm extends Component {
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
//handler for form submission event that passes form values to Parent
  _handleSubmit(event) {
    event.preventDefault();
    this.props.choices(this._min.value, this._max.value, this._risk.value);
  }


}

export default TempForm;