import React, { Component } from 'react';
import './App.css';
import Row from './components/Rows/Rows';




class App extends Component {



  
  render() {
    return (
      <div>
        <h1>SuperBowl 53 Random Number Generator</h1>
        <img src="https://i.imgur.com/fMiLUfM.png" alt="" /><br/>
        <img className="rams" src="https://i.imgur.com/IJg8m1V.png" alt="" height="90" width="100"/> 

        <img src="https://i.imgur.com/jNepqMZ.png" alt="" height="80" width="120"/>

        
        <Row />
        <hr />
        <img className="patriots" src="https://i.imgur.com/6X3Eloe.png" alt="" height="90" width="100"/> 
        <img src="https://i.imgur.com/6TXXdZB.png" alt="" height="60" width="120"/>
        <Row />
        <br/>
      </div>
    );
  }
}

export default App;
