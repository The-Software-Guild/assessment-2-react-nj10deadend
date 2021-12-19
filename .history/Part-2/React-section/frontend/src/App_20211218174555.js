import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

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
        My favorite Games


      <Home gameData={gameData}/>

      <Button />
    </div>
  );
}

export default App;
