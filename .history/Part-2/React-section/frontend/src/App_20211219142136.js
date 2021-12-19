import './App.css';
import Home from './components/Home';
import AddGameForm from './components/AddGameForm';
import GameSearch from './components/GameSearch';
import UpdateGame from './components/UpdateGame';
import axios from 'axios';
import {useState, useEffect} from 'react';

// import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';
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
      <button onClick={getFetchGameServer}>Back to Original List</button>
      <UpdateGame />
      <br></br>
      <GameSearch setGameData={setGameData}/>
      <br></br>
      <hr></hr>
      <AddGameForm setGameData={setGameData}/>

      <Home gameData={gameData}/>

    </div>
  );
}

export default App;
