import {useState, useEffect} from 'react';
import axios from 'axios';

function GameSearch ({setGameData}) {

    const [searchId, setSearchId] = useState("");

    function getFetchOneGame () {
        axios.get(`http://localhost:8080/allGames/${searchId}`)
          .then(res => {
            setGameData(res.data)
        })
    
    }
    
    useEffect(getFetchOneGame, [])

    function onSearch(event) {
        event.preventDefault()
        getFetchOneGame();
    }

    return (
        <div>
            <form onSubmit={onSearch}>
                <input type="text" placeholder="Search for game by id..." 
                onChange={(event) => {setSearchId(event.target.value)}} 
                value = {searchId}
                />
                <input type="submit" value="Submit" />
            </form>

        </div>
    )
}

export default GameSearch;