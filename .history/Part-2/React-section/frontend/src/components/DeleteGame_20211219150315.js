import axios from 'axios';
import {useState} from 'react';

function DeleteGame () {

    const [searchId, setSearchId] = useState("");

    async function deleteGame () {
        await axios.delete(`http://localhost:8080/allGames/update/${searchId}`)

    }

    function onSubmit () {

    }

    return (
        <div>
            <form>
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