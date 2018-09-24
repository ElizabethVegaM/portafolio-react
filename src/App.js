import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Aside from './components/Aside/Aside';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Aside />
        <Skills />
        <Portfolio />
      </div>
    )
  }
}

export default App;
