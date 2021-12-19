import './App.css';
import Home from './components/Home';
import AddGameForm from './components/AddGameForm';
import GameSearch from './components/GameSearch';
import UpdateGame from './components/UpdateGame';
import DeleteGame from './components/DeleteGame';
import axios from 'axios';
import {useState, useEffect} from 'react';

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
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
    // <div className="App">
    <Container >
      <button onClick={getFetchGameServer}>Back to Original List</button>
      <UpdateGame getFetchGameServer={getFetchGameServer}/>
      <br></br>
      <DeleteGame getFetchGameServer={getFetchGameServer} />
      <br></br>
      <GameSearch setGameData={setGameData}/>
      <br></br>
      <hr></hr>
      <AddGameForm setGameData={setGameData}/>

      <Home gameData={gameData}/>
    </Container>

  );
}

export default App;
