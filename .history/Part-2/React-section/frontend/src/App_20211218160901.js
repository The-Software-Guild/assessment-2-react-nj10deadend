import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import axios from 'axios';
import {useState, useEffect} from 'react';

function App() {

  function getFetchGameServer () {
    axios.get(`http://http://localhost:8080`)

  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <Home />
    </div>
  );
}

export default App;
