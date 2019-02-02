import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import About_Me from "./components/About_Me";
import Projects from "./components/Projects";



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
      
          <Header />
          <About_Me />
          <Projects />
        </header>
      </div>
    );
  }
}

export default App;
