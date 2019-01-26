import React, { Component } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Row from './components/Rows/Rows';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  }


  randomizeNumbers = () => {
    console.log(this.state.arr)
    this.state.arr.sort(() => Math.random() - 0.5);
    console.log(this.state.arr);
    return this.state.arr;
  }

  updateState = () => {
    this.setState({
      arr: this.randomizeNumbers()
    })
  }

  render() {
    return (
      <div>
        <h1>SuperBowl 53</h1>
        <h2>Rams</h2>
        <Row />
        <Button updateState={this.updateState}/>
        <br />
        <h2>Patriots</h2>
        <Row />
        <Button />
      </div>
    );
  }
}

export default App;
