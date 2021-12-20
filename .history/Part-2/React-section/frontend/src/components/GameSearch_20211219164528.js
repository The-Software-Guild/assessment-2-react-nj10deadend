import {useState} from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';


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
                    <input type="text" placeholder="Search for game by id..." 
                    onChange={(event) => {setSearchId(event.target.value)}} 
                    value = {searchId}
                    />
                    <Button type="submit">Search</Button>
                </form>
            )}
        </div>
    )
}

export default GameSearch;