import React, { Component } from 'react';
import Header from './components/Header/Header';
import Run from './components/RunLog/RunLog';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Run />
      </div>
    );
  }
}

export default App;
