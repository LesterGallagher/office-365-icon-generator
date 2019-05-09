import React, { Component } from 'react';
import { Button } from 'react-onsenui';
import logo from './logo.svg';
import './App.css';
import Routes from '../Routes/Routes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      userHasAuthenticated: true,
      user: null
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Button>Test</Button>
        </header>
        <Routes />
      </div>
    );
  }
}

export default App;

