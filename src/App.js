import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import About_Me from "./components/About_Me";



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
      
          <Header />
          <About_Me />
        </header>
      </div>
    );
  }
}

export default App;
