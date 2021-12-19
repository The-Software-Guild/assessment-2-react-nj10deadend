import {useState, useEffect} from 'react';

function GameSearch ({setGameData}) {

    const [searchId, setSearchId] = useState("");

    function getFetchOneGame () {
        axios.get(`http://localhost:8080/allGames/${searchId}`)
          .then(res => {
            setGameData(res.data)
        })
    
        useEffect(getFetchOneGame, [])
    }


    function onSearch(event) {
        event.preventDefault()
        getFetchOneGame();
    }

    return (
        <div>
            <input type="text" placeholder="Search for game by id..." 
            onChange={(event) => {setSearchId(event.target.value)}} 
            value = {searchId}
            />

        </div>
    )
}

export default GameSearch;