import {useState} from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



function GameSearch ({setGameData}) {

    const [searchId, setSearchId] = useState("");
    const [clicked, setClicked] = useState(false);

    const searchGameText = clicked ? "Hide Search Form" : "Search for a Game"

    function getFetchOneGame () {
        axios.get(`http://localhost:8080/allGames/${searchId}`)
          .then(res => {
            setGameData([res.data])
        })
    
    }
    
    function onSearch(event) {
        event.preventDefault()
        setSearchId("");
        getFetchOneGame();
    }

    return (
        <div>
            <Button variant="contained" onClick={() => {setClicked(!clicked)}}>{searchGameText}</Button>
            {clicked && (
                <form onSubmit={onSearch}>
                    <br></br>
                    <TextField id="outlined-basic" label="Search for game by id" 
                    variant="outlined" 
                    onChange={(event) => {setSearchId(event.target.value)}} 
                    value = {searchId}
                    />
                    <br></br>
                    <Button variant="outlined" type="submit">Search</Button>
                </form>
            )}
        </div>
    )
}

export default GameSearch;