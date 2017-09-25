//Vendor
import React, { Component } from 'react';
import axios from 'axios';
//Components
import TempForm from './components/TempForm';
import Results from './components/Results';
//Styles
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      weather: [],
      hasSubmitted: false,
      shouldBike: false
    };
  }
  //fetches weather from API when page first loads
  componentDidMount() {
    this._fetchWeather();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>To Bike or Not to Bike?</h2>
        </div>
        <div className="App-body">
          <h3 className="App-intro">
            That is the question. To get started, input your weather preferences below:
          </h3>
          <div className="App-Form"> 
            <TempForm weather={this.state.weather} choices={this._update.bind(this)}/>
          </div>
          <div className="App-Results">
            {this.state.hasSubmitted ? <Results pick={this.state.shouldBike}/> : <br />}
          </div>
          <a href="https://darksky.net/poweredby/">Powered by Dark Sky</a>
        </div>
      </div>
    );
  }
//fetches weather from API and stores in state
  _fetchWeather() {
    axios.get('https://1miudhz7a9.execute-api.us-east-1.amazonaws.com/dev/forecast/38.8899,77.0090')
      .then(res => {
        this.setState({ weather: res.data.currently });
      });
  }
//receives form values from TempForm component onSubmit, runs the algorithm, then tells Results component to render
  _update(min, max, risk) {
    this._bikeOrMetro(min, max, risk);
    this.setState({
      hasSubmitted: true
    });
  }
//toggles default shouldBike state to true if weather conditions match preferences
  _bikeOrMetro(min, max, risk) {
    const weather = this.state.weather;
    if (weather.temperature <= max && weather.temperature >= min && weather.precipProbability <= risk/100) {
      this.setState({ shouldBike: !this.state.shouldBike});
    }
  }
}

export default App;
