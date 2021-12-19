import {useState, useEffect} from 'react';

function GameSearch ({setGameData}) {

    const [searc, setSearch] = useState("");

    function getFetchGameServer () {
        axios.get(`http://localhost:8080/allGames/${id}`)
          .then(res => {
            setGameData(res.data)
          })
    
    }

    return (
        <div>
            <input type="text" placeholder="Search for game by id..." onChange={(event) => {}}} />

        </div>
    )
}

export default GameSearch;