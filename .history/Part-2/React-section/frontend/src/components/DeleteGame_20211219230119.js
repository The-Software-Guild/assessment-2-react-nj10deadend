import axios from 'axios';
import {useState} from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';


function DeleteGame ({getFetchGameServer}) {

    const [searchId, setSearchId] = useState("");
    const [clicked, setClicked] = useState(false);

    const deleteText = clicked ? "Hide Delete Form" : "Click to Delete A Game"

    async function deleteGame () {
        await axios.delete(`http://localhost:8080/allGames/delete/${searchId}`)
    }

    async function onSubmit (event) {
        event.preventDefault();
        await deleteGame();
        getFetchGameServer();
        setSearchId("");
        
    }
    return (
        <div>
            <Button className="bttns" variant="outlined" color="error" onClick={() => {setClicked(!clicked)}}>{deleteText}</Button>
            {clicked && (
                <form onSubmit={onSubmit}>
                    <br></br>
                    <div>
                    <TextField id="outlined-basic" label="Enter ID of game you want deleted" 
                    variant="outlined" 
                    onChange={(event) => {setSearchId(event.target.value)}} 
                    value = {searchId}
                    />
                    </div>
                    <br></br>
                    <div>
                        <Button type="submit" variant="outlined" color="error" startIcon={<DeleteIcon />}>Delete Game</Button>
                    </div>
                </form>
            )}

        </div>
    )
}
export default DeleteGame;