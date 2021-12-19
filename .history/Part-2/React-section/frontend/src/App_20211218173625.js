import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Typography from '@mui/material/Typography';

function App() {

  const [gameData, setGameData] = useState([]);

  function getFetchGameServer () {
    axios.get(`http://localhost:8080/allGames`)
      .then(res => {
        setGameData(res.data)
      })

  }

  useEffect(getFetchGameServer, []);

  return (
    <div className="App">
      <Typography variant="h1" component="h1">
        My favorite Games
      </Typography>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}

      <Home gameData={gameData}/>
    </div>
  );
}

export default App;
