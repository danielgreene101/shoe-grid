import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Shoe from './Components/shoes';

class App extends Component {
  render() {
    return (
      <div style={{ alignItems: 'center' }}>
        <p className="App-intro">
          Shoe Grid
        </p>
        <div style={{ display: 'flex' }}>
          <Shoe/>
          <Shoe/>
          <Shoe/>
          <Shoe/>
          <Shoe/>
        </div>
        <div style={{ display: 'flex' }}>
          <Shoe/>
          <Shoe/>
          <Shoe/>
          <Shoe/>
          <Shoe/>
        </div>
        <div style={{ display: 'flex' }}>
          <Shoe/>
          <Shoe/>
          <Shoe/>
          <Shoe/>
          <Shoe/>
        </div>
        <div style={{ display: 'flex' }}>
          <Shoe/>
          <Shoe/>
          <Shoe/>
          <Shoe/>
          <Shoe/>
        </div>
        <div style={{ display: 'flex' }}>
          <Shoe/>
          <Shoe/>
          <Shoe/>
          <Shoe/>
          <Shoe/>
        </div>
      </div>
    );
  }
}

export default App;

// Componants for loading in grid with borders.
// Inside each componant function to fill in grid with desired information. 