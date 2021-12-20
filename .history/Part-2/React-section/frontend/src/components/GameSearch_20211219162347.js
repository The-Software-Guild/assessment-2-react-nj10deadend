import {useState} from 'react';
import axios from 'axios';

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
                    <input type="submit" value="Submit" />
                </form>
            )}
        </div>
    )
}

export default GameSearch;