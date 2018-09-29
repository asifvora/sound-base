import React, { Component } from 'react';
import logo from './assets/img/react.png';
class App extends Component {
  render() {
    let date = new Date();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Hello World {date.getTime()}
        </p>
      </div>
    );
  }
}

export default App;
