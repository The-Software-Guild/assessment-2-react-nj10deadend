import './App.css';
import Home from './components/Home';
import AddGameForm from './components/AddGameForm';
import GameSearch from './components/GameSearch';
import UpdateGame from './components/UpdateGame';
import DeleteGame from './components/DeleteGame';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Container from '@mui/material/Container';

// import {Container} from '@mui/material';
import Button from '@mui/material/Button';
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
    // <div className="App">
    <Container maxWidth="large">

      <button onClick={getFetchGameServer}>Back to Original List</button>
      <UpdateGame getFetchGameServer={getFetchGameServer}/>
      <br></br>
      <DeleteGame getFetchGameServer={getFetchGameServer} />
      <br></br>
      <GameSearch setGameData={setGameData}/>
      <br></br>
      <AddGameForm setGameData={setGameData}/>

      {/* <Container maxWidth="sm"> */}
      <Home gameData={gameData}/>

      {/* </Container> */}
      <Button>Button</Button>
      {/* <Typography variant="h3" component="div" gutterBottom>
        Here are some projects that I've made
      </Typography> */}

    </Container>

  );
}

export default App;
