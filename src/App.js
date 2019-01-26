import React, { Component } from 'react';
import './App.css';
import Row from './components/Rows/Rows';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "Hello"
    }
  }


  // randomizeNumbers = () => {
  //   // console.log(this.state.arr)
  //   this.state.arr.sort(() => Math.random() - 0.5);
  //   console.log(this.state.arr);
  //   return this.state.arr;
  // }

  updateState = () => {
    this.setState({
      msg: "Hello World"
    }, () => {
      console.log(this.state.msg);
    })

  }

  
  render() {
    return (
      <div>
        <h1>SuperBowl 53</h1>
        <h2>Rams</h2>
        <img src="https://i.imgur.com/jNepqMZ.png" alt="" height="80" width="120"/>

        
        <Row />
        <hr />
        <h2>Patriots</h2>
        <img src="https://i.imgur.com/6TXXdZB.png" alt="" height="60" width="120"/>
        <Row />
        <br/>
        <h2>{this.state.msg}</h2>
      </div>
    );
  }
}

export default App;
