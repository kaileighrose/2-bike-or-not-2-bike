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
    return ();
  }
}

export default App;
