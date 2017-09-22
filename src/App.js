//Vendor
import React, { Component } from 'react';
//Components
import TempForm from 'components/TempForm';
import Results from 'components/Results';
//Styles
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      weather: []
    };
  }

  componentWillMount() {
    this._fetchWeather();
  }

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
        <div className="App-Results">
          <Results />
        </div>
        <a href="https://darksky.net/poweredby/">Powered by Dark Sky</a>
        </div>
    );
  }
//
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
