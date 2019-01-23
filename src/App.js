import React, { Component } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Row from './components/Rows/Rows';




class App extends Component {

  randomizeNumbers = () => {
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  }

  render() {
    return (
      <div>
        <h1>SuperBowl 53</h1>
        <h2>Rams</h2>
        <Row />
        <Button />
        <br />
        <h2>Patriots</h2>
        <Row />
        <Button />
      </div>
    );
  }
}

export default App;
