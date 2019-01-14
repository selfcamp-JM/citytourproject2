import React, { Component } from 'react';
import './App.scss';
import Navbar from "./components/Navbar/Navbar";
import Tourlist from "./components/Tourlist/index";

class App extends Component {
  render() {
    return (
    <div>
      <Navbar/>
      <h1>Hello</h1>
      <Tourlist/>
      
    </div>
    );
  }
}

export default App;
