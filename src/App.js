import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>To Bike or Not to Bike?</h2>
        </div>
        <h3 className="App-intro">
          That is the question. To get started, input your weather preferences below:
        </h3>
        <div className="App-Form"> 
          <TempForm />
        </div>
      </div>
    );
  }
}

class TempForm extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (

    );
  }

  _handleSubmit(event) {
    event.preventDefault();

  }

  _fetchWeather() {
    $.ajax({
      method: 'GET',
      url: 'https://1miudhz7a9.execute-api.us-east-1.amazonaws.com/dev/forecast/38.8899,77.0090',
      success: (weather) => {
        this.setState({ weather });
      }
    })
  }
}

export default App;
