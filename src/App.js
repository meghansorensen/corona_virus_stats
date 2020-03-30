import React, { Component } from "react";
import corona from "./corona.svg";
import "./App.css";
import PersonList from "./Components/PersonList";
import Covid from "./Components/Covid";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={corona} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Corona Virus</h1>
        </header>
        <Covid />
      </div>
    );
  }
}

export default App;
