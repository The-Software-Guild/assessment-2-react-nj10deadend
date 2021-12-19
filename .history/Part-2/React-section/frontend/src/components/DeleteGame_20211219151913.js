import axios from 'axios';
import {useState} from 'react';

function DeleteGame ({getFetchGameServer}) {

    const [searchId, setSearchId] = useState("");
    const [clicked, setClicked] = useState(false);

    const deleteText = clicked ? "Hide Delete Form" : "Delete A Game"

    async function deleteGame () {
        await axios.delete(`http://localhost:8080/allGames/update/${searchId}`)
    }

    async function onSubmit (event) {
        event.preventDefault();
        await deleteGame();
        getFetchGameServer();
        
    }

    return (
        <div>
            <button onClick={() => {setClicked(!clicked)}}>{deleteText}</button>
            {clicked && (
                <form onSubmit={onSubmit}>
                    <div>
                        <h1>Enter Game ID</h1>
                        <label for="game-id">Game ID</label>
                        <br></br>
                        <input name="game-id" type="text" placeholder="Enter Game ID" 
                        onChange={(event) => {setSearchId(event.target.value)}} 
                        value = {searchId}
                        />
                    </div>
                    <div>
                        <input type="submit" value="Delete Game"/>
                    </div>
                </form>
            )}


        </div>
    )
}

export default DeleteGame;