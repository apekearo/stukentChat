import React, { Component } from 'react';
import logo from './lion.png';
import './App.css';
import ChatWindow from './ChatWindow';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="App-intro">
          Please enter in a few words to watch a word cloud form
        </p>
          <ChatWindow />
      </div>
    );
  }
}

export default App;
