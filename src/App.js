import React, { Component } from 'react';
import logo from './logo.svg';
import Form from './Form.js';
import Splash from './Jumbo.js';
import Loader from './Loader.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: false};
  }
  render() {
    return (
      <div className="App">
        <Loader isLoading={this.state.isLoading}/>
        <Splash/>
        <Form/>
      </div>
    );
  }
}

export default App;
