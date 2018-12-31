import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    username: "njbbaer"
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <UserInput />
          <UserOutput username={this.state.username}/>
          <UserOutput username={this.state.username}/>
          <UserOutput username={this.state.username}/>
        </header>
      </div>
    );
  }
}

export default App;
