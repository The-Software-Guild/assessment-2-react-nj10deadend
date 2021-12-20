import './App.css';
import Home from './components/Home';
import AddGameForm from './components/AddGameForm';
import GameSearch from './components/GameSearch';
import UpdateGame from './components/UpdateGame';
import DeleteGame from './components/DeleteGame';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// import {Container} from '@mui/material';
import Button from '@mui/material/Button';

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
    <Container fluid className="App">
      

      <Button variant="outlined"onClick={getFetchGameServer}>Back to Original List</Button>
      <GameSearch setGameData={setGameData}/>
      <br></br>
      <UpdateGame getFetchGameServer={getFetchGameServer}/>
      <br></br>
      <DeleteGame getFetchGameServer={getFetchGameServer} />
      <br></br>
      <AddGameForm setGameData={setGameData}/>
      <br></br>


      <Home gameData={gameData}/>

    </Container>

  );
}

export default App;
