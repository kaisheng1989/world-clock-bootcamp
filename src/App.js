import React from "react";
import logo from "./logo.png";
import "./App.css";
import Clock from "./Clock.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Clock timeZone="America/Los_Angeles" />
          <Clock timeZone="Europe/London" />
          <Clock timeZone="Asia/Singapore" />
          <Clock timeZone="Africa/Cairo" />
        </header>
      </div>
    );
  }
}

export default App;
