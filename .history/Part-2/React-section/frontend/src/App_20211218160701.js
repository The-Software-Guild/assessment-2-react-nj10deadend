import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import axios from 'axios';

function App() {

  function getFetchGameServer () {

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
