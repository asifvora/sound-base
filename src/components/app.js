import React, { Component } from 'react';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={require('../assets/img/react.png')} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Hello World
        </p>
      </div>
    );
  }
}

export default App;
