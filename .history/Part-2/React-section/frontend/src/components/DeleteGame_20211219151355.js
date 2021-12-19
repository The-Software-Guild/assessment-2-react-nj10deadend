import axios from 'axios';
import {useState} from 'react';

function DeleteGame () {

    const [searchId, setSearchId] = useState("");
    const [clicked, setClicked] = useState(false);

    const deleteText = clicked ? "Hide Delete Form" : "Delete Game"

    async function deleteGame () {
        await axios.delete(`http://localhost:8080/allGames/update/${searchId}`)
    }

    async function onSubmit (event) {
        event.preventDefault();
        await deleteGame();
        
    }

    return (
        <div>
            <button>{deleteText}</button>
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


        </div>
    )
}

export default DeleteGame;